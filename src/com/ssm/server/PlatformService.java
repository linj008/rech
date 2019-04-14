package com.ssm.server;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.servlet.ModelAndView;

import com.ssm.mapping.TAccountMapper;
import com.ssm.mapping.TPlatformMapper;
import com.ssm.mapping.TUserMapper;
import com.ssm.pojo.TPlatform;
import com.ssm.pojo.TPlatformExample;
import com.ssm.pojo.TUser;

@Service("platformService")
public class PlatformService {
	@Resource
	private TPlatformMapper platformMapper;
	
	@Resource
	private TUserMapper userMapper;
	
	@Resource
	private TAccountMapper accountMapper;
	
	@Transactional
	public ModelAndView platforms(HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
		List<TPlatform> list = new ArrayList<TPlatform>();
		TPlatformExample example = new TPlatformExample();
		list = platformMapper.selectByExample(example);
		mv.addObject("platforms", list);
		mv.setViewName("platform");
		return mv;
	}
	
	@Transactional
	public TPlatform getplatform(int id) {
		return platformMapper.selectByPrimaryKey(id);
	}

	public int addPlatform(TPlatform platform) {
		TPlatformExample example = new TPlatformExample();
		example.createCriteria().andPlatformCodeEqualTo(platform.getPlatformCode());
		List<TPlatform> platforms = platformMapper.selectByExample(example);
		if(!platforms.isEmpty()) {
			return 2; // code 已存在
		}
		return platformMapper.insert(platform);
	}
	
	public int modifyPlatform(TPlatform platform) {
		TPlatformExample example = new TPlatformExample();
		example.createCriteria().andPlatformCodeEqualTo(platform.getPlatformCode());
		List<TPlatform> platforms = platformMapper.selectByExample(example);
		if(!platforms.isEmpty()) {
			return 2; // code 已存在
		}
		return platformMapper.updateByPrimaryKey(platform);
	}
	
	/**
	 * 修改用户
	 * @param user 
	 * @return
	 * @throws Exception
	 */
	@Transactional
	public int startOrStopMember(TPlatform platform)throws Exception{
		return platformMapper.updateByPrimaryKeySelective(platform);
	}
}
