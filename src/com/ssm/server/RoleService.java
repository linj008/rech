package com.ssm.server;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssm.mapping.TAccountMapper;
import com.ssm.mapping.TRoleMapper;
import com.ssm.mapping.TUserMapper;
import com.ssm.mapping.TUserPhotoMapper;
import com.ssm.pojo.TAccount;
import com.ssm.pojo.TAccountExample;
import com.ssm.pojo.TRole;
import com.ssm.pojo.TRoleExample;
import com.ssm.pojo.TUser;
import com.ssm.pojo.TUserExample;
import com.ssm.pojo.TUserPhoto;
import com.ssm.pojo.TUserPhotoExample;


@Service("roleService")
public class RoleService {
	@Resource
	private TRoleMapper mapper;
	@Resource
	private TUserMapper userMapper;
	@Resource
	private TAccountMapper accountMapper;
	@Resource
	private TUserPhotoMapper userPhotoMapper;
	
	/**
	 * 查询所有权限
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@Transactional
	public List<TRole> roleList(HttpServletRequest request)throws Exception{
		TRoleExample example = new TRoleExample();
		return mapper.selectByExample(example);
	}
	
	/**
	 * 是否最低级别角色
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@Transactional
	public TRole roleList(int roleId)throws Exception{
		return mapper.selectByPrimaryKey(roleId);
	}
	
	/**
	 * 增加用户
	 * @param user 
	 * @return
	 * @throws Exception
	 */
	@Transactional
	public int addRole(HttpServletRequest request){
		String id = request.getParameter("role_id");
		String roleName = request.getParameter("roleName");
		String wxbl = request.getParameter("wxbl");
		String alibl = request.getParameter("alibl");
		String isAdmin = request.getParameter("isAdmin");
		String isMember = request.getParameter("isMember");
		String level = request.getParameter("level");
		TRole role = new TRole();
		if(null != id) {
			role.setId(Integer.valueOf(id));
		}
		role.setRoleName(roleName);
		role.setWxRate(wxbl);
		role.setAliRate(alibl);
		role.setIsAdmin(Integer.valueOf(isAdmin));
		role.setIsMember(Integer.valueOf(isMember));
		role.setLevel(Integer.valueOf(level));
		if(null == id) {
			return mapper.insert(role);
		}else {
			return mapper.updateByPrimaryKeySelective(role);
		}
		
	}
	
	/**
	 * 根据ID查询角色信息
	 * @param username
	 * @param password
	 * @return
	 * @throws Exception
	 */
	@Transactional
	public TRole getRole(int id){
		return mapper.selectByPrimaryKey(id);
	}
	
	/**
	 * 删除角色信息
	 * @param id
	 * @return
	 * @throws Exception
	 */
	@Transactional
	public int delRole(int id)throws Exception{
		List<Integer> userIds = new ArrayList<Integer>();
		TUserExample userExample = new TUserExample();
		userExample.createCriteria().andRoleIdEqualTo(id);
		List<TUser> users = userMapper.selectByExample(userExample);
		for(TUser user : users) {
			userIds.add(user.getId());
		}
		
		int delUserResult = -1;
		TUserExample userexample = null;
		List<Integer> accountIds = new ArrayList<Integer>();
		if(!userIds.isEmpty()) {
			TAccountExample accountExample = new TAccountExample();
			accountExample.createCriteria().andUserIdIn(userIds);
			List<TAccount> accounts = accountMapper.selectByExample(accountExample);
			for(TAccount account : accounts) {
				accountIds.add(account.getId());
			}
			userexample = new TUserExample();
			userexample.createCriteria().andIdIn(userIds);
		}
		
		int delAccountResult = -1;
		List<TUserPhoto> userPhotos = null;
		List<Integer> userPhotoIds = new ArrayList<Integer>();
		TAccountExample accountexample = null;
		if(!accountIds.isEmpty()) {
			TUserPhotoExample userPhotoExample = new TUserPhotoExample();
			userPhotoExample.createCriteria().andUseridIn(accountIds);
			userPhotos = userPhotoMapper.selectByExample(userPhotoExample);
			for(TUserPhoto userPhoto : userPhotos) {
				userPhotoIds.add(userPhoto.getId());
			}
			accountexample = new TAccountExample();
			accountexample.createCriteria().andIdIn(accountIds);
		}
		
		int delUserPhotoResult = -1;
		if(!userPhotoIds.isEmpty()) {
			TUserPhotoExample userPhotoexample = new TUserPhotoExample();
			userPhotoexample.createCriteria().andIdIn(userPhotoIds);
			delUserPhotoResult = userPhotoMapper.deleteByExample(userPhotoexample);
		}
		
		if(!accountIds.isEmpty()) {
			delAccountResult = accountMapper.deleteByExample(accountexample);
		}
		
		if(!userIds.isEmpty()) {
			delUserResult = userMapper.deleteByExample(userexample);
		}
		
		int result = mapper.deleteByPrimaryKey(id);
		
		if(delUserResult != -1 && delAccountResult != 0 && delUserPhotoResult != 0 && result != 0) {
			if(null != userPhotos) {
				for(TUserPhoto userPhoto : userPhotos) {
					File file = new File(userPhoto.getImgpath());
					file.delete();
				}
			}
			return 1;
		}else {
			return 0;
		}
	}
	
}
