package com.ssm.server;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssm.bean.Base;
import com.ssm.mapping.TAccountMapper;
import com.ssm.mapping.TRoleMapper;
import com.ssm.mapping.TUserMapper;
import com.ssm.mapping.TUserPhotoMapper;
import com.ssm.pojo.TAccount;
import com.ssm.pojo.TAccountExample;
import com.ssm.pojo.TUser;
import com.ssm.pojo.TUserExample;
import com.ssm.pojo.TUserExample.Criteria;
import com.ssm.pojo.TUserPhoto;
import com.ssm.pojo.TUserPhotoExample;
import com.ssm.token.TokenHS256;


@Service("userService")
public class UserService {
	@Resource
	private TUserMapper userMapper;
	@Resource
	private TAccountMapper accountMapper;
	@Resource
	private TUserPhotoMapper userPhotoMapper;
	@Resource
	private TRoleMapper roleMapper;
	/*
	* 通过id获取数据
	*/
	/*
	 * public Rcuser findById(int id)throws Exception{ Rcuser user =
	 * (Rcuser)dao.selectByPrimaryKey(id); user.setName("linjun3");
	 * dao.updateByPrimaryKey(user); try { user.setName("linjun22222222333");
	 * dao.updateByPrimaryKey(user); }catch(Exception e) {
	 * 
	 * } user = (Rcuser)dao.selectByPrimaryKey(id); return user; }
	 */
	
	/**
	 * 后台管理员登陆
	 * @param username
	 * @param password
	 * @param isAdmin
	 * @return
	 * @throws Exception
	 */
	@Transactional
	public TUser login(String username, String password, Integer isAdmin)throws Exception{
		TUserExample example = new TUserExample();
		Criteria criteria = example.createCriteria().andUsernameEqualTo(username).andPasswordEqualTo(password);
		if(null != isAdmin) {
			criteria.andIsAdminEqualTo(isAdmin);
		}
		List<TUser> users = (List<TUser>)userMapper.selectByExample(example);
		TUser user = null;
		if(!users.isEmpty()) {
			user = users.get(0);
			Map<String, Object> map = new HashMap();
			long start = new Date().getTime();
			long exp = start + 1000*60*180;
	        map.put("uid", user.getId());
	        map.put("sta", start);
	        map.put("exp", exp);
			user.setToken(TokenHS256.tokenGenerate(map));
		}
		return user;
	}
	
	public Base logout(HttpServletRequest request) {
		Base base = new Base();
		String userId = request.getParameter("user_id");
		TUser user = userMapper.selectByPrimaryKey(Integer.valueOf(userId));
		Map<String, Object> map = new HashMap<String, Object>();
		long start = new Date().getTime();
		long exp = start - 10;
        map.put("uid", userId);
        map.put("sta", start);
        map.put("exp", exp);
		user.setToken(TokenHS256.tokenGenerate(map));
		base.data = user;
		return base;
	}
	
	
	/**
	 * 检查用户是否存在
	 * @param username
	 * @param isAdmin
	 * @return
	 * @throws Exception
	 */
	@Transactional
	public List<TUser> checkUser(String username, int isAdmin)throws Exception{
		TUserExample example = new TUserExample();
		example.createCriteria().andUsernameEqualTo(username).andIsAdminEqualTo(isAdmin);
		List<TUser> users = (List<TUser>)userMapper.selectByExample(example);
		return users;
	}
	
	/**
	 * 查询用户
	 * @param username
	 * @return
	 * @throws Exception
	 */
	@Transactional
	public List<TUser> memberList(HttpServletRequest request, String username)throws Exception{
		
		TUser curUser = (TUser)request.getSession().getAttribute("curUser");
		curUser = userMapper.selectByPrimaryKey(curUser.getId());
		int level = roleMapper.selectByPrimaryKey(curUser.getRoleId()).getLevel(); 
		
		TUserExample example = new TUserExample();
		Criteria criteria = example.createCriteria();
		if(null != username && !"".contentEquals(username)) {
			criteria.andUsernameEqualTo(username);
		}
		if(level != 1) {
			criteria.andParentIdEqualTo(curUser.getId());
		}
		List<TUser> users = (List<TUser>)userMapper.selectByExample(example);
		return users;
		
	}
	
	/**
	 * 增加用户
	 * @param user 
	 * @return
	 * @throws Exception
	 */
	@Transactional
	public int addMember(TUser user)throws Exception{
        return userMapper.insert(user);
	}
	
	/**
	 * 修改用户
	 * @param user 
	 * @return
	 * @throws Exception
	 */
	@Transactional
	public int modifyMember(TUser user)throws Exception{
		return userMapper.updateByPrimaryKeySelective(user);
	}
	
	/**
	 * 根据ID查询用户信息
	 * @param username
	 * @param password
	 * @return
	 * @throws Exception
	 */
	@Transactional
	public TUser getMember(int id){
		TUser users = userMapper.selectByPrimaryKey(id);
		return users;
	}
	
	/**
	 * 删除用户信息
	 * @param id
	 * @return
	 * @throws Exception
	 */
	@Transactional
	public int delMember(int id)throws Exception{
		List<Integer> accountIds = new ArrayList<Integer>();
		TAccountExample accountExample = new TAccountExample();
		accountExample.createCriteria().andUserIdEqualTo(id);
		List<TAccount> accounts = accountMapper.selectByExample(accountExample);
		for(TAccount account : accounts) {
			accountIds.add(account.getId());
		}
		
		int delAccountResult = -1;
		List<Integer> userPhotoIds = new ArrayList<Integer>();
		List<TUserPhoto> userPhotos = null;
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
		
		int result = userMapper.deleteByPrimaryKey(id);
		
		if(delAccountResult != 0 && delUserPhotoResult != 0 && result != 0) {
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
	
	
	public TUser getUserByParent(String parentId) {
		TUserExample example = new TUserExample();
		Criteria criteria = example.createCriteria();
		criteria.andParentIdEqualTo(Integer.valueOf(parentId));
		List<TUser> parent = userMapper.selectByExample(example);
		if(null == parent || parent.isEmpty()) {
			return new TUser();
		}else {
			return parent.get(0);
		}
	}
	
	public Base modifyPassword(HttpServletRequest request) {
		Base base = new Base();
		String userId = request.getParameter("user_id");
		String oldPwd = request.getParameter("oldPwd");
		String newPwd = request.getParameter("newPwd");
		
		TUser user = userMapper.selectByPrimaryKey(Integer.valueOf(userId));
		if(user.getPassword().equals(oldPwd)) {
			user.setPassword(newPwd);
			userMapper.updateByPrimaryKey(user);
		}else {
			base.errno = 100005;
			base.message = "旧密码不正确";
		}
		
		return base;
	}
	
}
