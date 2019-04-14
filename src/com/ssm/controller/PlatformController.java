package com.ssm.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.ssm.encrypt.SHA1;
import com.ssm.pojo.TPlatform;
import com.ssm.pojo.TUser;
import com.ssm.server.PlatformService;
import com.ssm.util.DateUtil;

@Controller
@RequestMapping("/platform") 
public class PlatformController {
	@Resource(name="platformService")
	private PlatformService platformService;
	
	/**
	 * 根据id查询
	 */
	@RequestMapping(value = "/platforms")
	public ModelAndView login(HttpServletRequest request){
		return platformService.platforms(request);
	}
	
	/**
	 * 进入增加用户页面
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/gaddplatform")
	public ModelAndView goAddmember(HttpServletRequest request){
		ModelAndView mv = new ModelAndView();
		String id = request.getParameter("id");
		try{
			if(null != id) {
				TPlatform platform = platformService.getplatform(Integer.valueOf(id));
				mv.setViewName("platform-modify");
				mv.addObject("platform", platform);
			}else {
				mv.setViewName("platform-add");
			}
		} catch(Exception e){
            e.printStackTrace();
		}
		return mv;
	}
	
	/**
	 * 增加或修改平台信息
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/addplatform", method = RequestMethod.POST)
	@ResponseBody
	public int addPlatform(HttpServletRequest request){
		String id = request.getParameter("pid"); // 有ID则修改
		TPlatform platform = new TPlatform();
		String code = request.getParameter("code");
		String name = request.getParameter("name");
		
		int result = 0;
		try {
			if(null != id) {
				platform.setId(Integer.valueOf(id));
			}
			
			platform.setPlatformCode(code);
			platform.setName(name);
			
			if(null == id) {
				platform.setStatus(0);
				platform.setCreateDate(DateUtil.getCurrentData());
			}
			if(null == id) {
				result = platformService.addPlatform(platform);
			}else {
				result = platformService.modifyPlatform(platform);
			}
		} catch(Exception e){
            e.printStackTrace();
		}
		return result;
	}
	
	/**
	 * 停用平台
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/stopplatform")
	public ModelAndView stopMember(HttpServletRequest request){
		String id = request.getParameter("id");
		TPlatform platform = new TPlatform();
		platform.setId(Integer.valueOf(id));
		platform.setStatus(0);
		try {
			platformService.startOrStopMember(platform);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return platformService.platforms(request);
	}
	
	/**
	 * 启用平台
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/startplatform")
	public ModelAndView startMember(HttpServletRequest request){
		String id = request.getParameter("id");
		TPlatform platform = new TPlatform();
		platform.setId(Integer.valueOf(id));
		platform.setStatus(1);
		try {
			platformService.startOrStopMember(platform);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return platformService.platforms(request);
	}
}
