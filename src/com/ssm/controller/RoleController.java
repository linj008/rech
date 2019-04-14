package com.ssm.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.ssm.bean.Base;
import com.ssm.pojo.TRole;
import com.ssm.server.RoleService;

@Controller
@RequestMapping("/role") 
public class RoleController {
	@Resource(name="roleService")
	private RoleService roleService;
	
	/**
	 * 根据id查询
	 */
	@RequestMapping(value = "/allrole")
	public ModelAndView allrole(HttpServletRequest request){
		ModelAndView view = new ModelAndView();
		List<TRole> roles = null;
		try {
			roles = roleService.roleList(request);
			view.addObject("roles", roles);
			view.setViewName("admin-role");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return view;
	}
	
	/**
	 * 进入增加用户页面
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/gaddrole")
	public ModelAndView gaddrole(HttpServletRequest request){
		ModelAndView mv = new ModelAndView();
		String id = request.getParameter("id");
		try{
			if(null != id) {
				TRole role = roleService.getRole(Integer.valueOf(id));
				mv.setViewName("admin-role-modify");
				mv.addObject("role", role);
			}else {
				mv.setViewName("admin-role-add");
			}
			
		} catch(Exception e){
            e.printStackTrace();
		}
		return mv;
	}
	
	@RequestMapping(value="/delrole")
	public ModelAndView delrole(HttpServletRequest request){
		ModelAndView mv = new ModelAndView();
		String id = request.getParameter("id");
		List<TRole> roles = null;
		try{
			roleService.delRole(Integer.valueOf(id));
			roles = roleService.roleList(request);
			mv.addObject("roles", roles);
			mv.setViewName("admin-role");
			
		} catch(Exception e){
            e.printStackTrace();
		}
		return mv;
	}
	
	/**
	 * 增加角色
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/addrole", method = RequestMethod.POST)
	@ResponseBody
	public String addRole(HttpServletRequest request){
		return String.valueOf(roleService.addRole(request));
	}
}
