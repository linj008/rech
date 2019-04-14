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
import com.ssm.encrypt.SHA1;
import com.ssm.pojo.TAccount;
import com.ssm.pojo.TRole;
import com.ssm.pojo.TUser;
import com.ssm.server.AccountService;
import com.ssm.server.RoleService;
import com.ssm.server.UserPhotoService;
import com.ssm.server.UserService;
import com.ssm.util.DateUtil;

@Controller
@RequestMapping("/user") 
public class UserController {
	@Resource(name="userService")
	private UserService userService;
	@Resource(name="roleService")
	private RoleService roleService;
	@Resource(name="accountService")
	private AccountService accountService;
	@Resource(name="userPhotoService")
	private UserPhotoService userPhotoService;
	
	/**
	 * 根据id查询
	 */
//	@RequestMapping(value="/queryById")
//	public ModelAndView queryById(HttpServletRequest request){
//		ModelAndView mv = new ModelAndView();
//		int id = Integer.parseInt(request.getParameter("id"));
//		try{
//			Rcuser var = userService.findById(id);
//			mv.setViewName("index");
//			mv.addObject("var", var);
//		} catch(Exception e){
//            e.printStackTrace();
//		}
//		return mv;
//	}
	
	/**
	 * 根据id查询
	 */
	@RequestMapping(value = "/login")
	public ModelAndView login(HttpServletRequest request){
		ModelAndView mv = new ModelAndView();
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		try{
			TUser user = userService.login(username, password, 1);
			if(null != user) {
				TRole role = roleService.getRole(user.getRoleId());
				mv.setViewName("default");
				mv.addObject("var", user);
				request.getSession().setAttribute("curUser", user);
				request.getSession().setAttribute("role", role);
			
			}else {
				mv.setViewName("login");
				mv.addObject("var", "登陆失败，请检查用户名和密码是否正确");
			}
			
		} catch(Exception e){
            e.printStackTrace();
		}
		return mv;
	}
	
	/**
	 * 退出登陆
	 */
	@RequestMapping(value = "/logOut")
	public ModelAndView logout(HttpServletRequest request){
		ModelAndView mv = new ModelAndView();
		
		try{
			request.getSession().removeAttribute("curUser");
			request.getSession().removeAttribute("role");
			mv.setViewName("login");
			
		} catch(Exception e){
            e.printStackTrace();
		}
		return mv;
	}
	
	/**
	 * 用户列表
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/memberlists")
	public ModelAndView memberLists(HttpServletRequest request){
		ModelAndView mv = new ModelAndView();
		String username = request.getParameter("username");
		try{
			List<TUser> users = userService.memberList(request, username);
			mv.setViewName("members");
			mv.addObject("members", users);
			
		} catch(Exception e){
            e.printStackTrace();
		}
		return mv;
	}
	
	/**
	 * 进入增加用户页面
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/gaddmember")
	public ModelAndView goAddmember(HttpServletRequest request){
		ModelAndView mv = new ModelAndView();
		String id = request.getParameter("id");
		try{
			List<TRole> roles = roleService.roleList(request);
			TUser curUser = (TUser)request.getSession().getAttribute("curUser");
			TRole role = roleService.getRole(curUser.getRoleId());
			if(null != id) {
				TUser user = userService.getMember(Integer.valueOf(id));
				mv.setViewName("member-modify");
				mv.addObject("member", user);
			}else {
				mv.setViewName("member-add");
				mv.addObject("isAdmin", role.getIsAdmin().toString());
			}
			mv.addObject("roles", roles);
		} catch(Exception e){
            e.printStackTrace();
		}
		return mv;
	}
	
	/**
	 * 增加或修改用户信息
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/addmember", method = RequestMethod.POST)
	@ResponseBody
	public int addMember(HttpServletRequest request){
		String id = request.getParameter("id"); // 有ID则修改
		TUser user = new TUser();
		String username = request.getParameter("username");
		String sex = request.getParameter("sex");
		String mobile = request.getParameter("mobile");
		String total_quota = request.getParameter("total_quota");
		String address = request.getParameter("address");
		String beizhu = request.getParameter("beizhu");
		String bank_name = request.getParameter("bank_name");
		String account_name = request.getParameter("account_name");
		String account_num = request.getParameter("account_num");
		String roleId = request.getParameter("role_id");
		int curUserRoleId = ((TUser)request.getSession().getAttribute("curUser")).getRoleId();
		int curUserRoleLevel = 0;
		int result = 0;
		try {
			curUserRoleLevel = roleService.getRole(curUserRoleId).getLevel();
		
			if(Integer.valueOf(roleId.split(",")[2]) < curUserRoleLevel) { // 不能增加比自己级别高的用户
				return 2;
			}
			
			if(null != id) {
				user.setId(Integer.valueOf(id));
			}
			
			user.setUsername(username);
			user.setSex(Integer.valueOf(sex));
			user.setPhoneNum(mobile);
			user.setAddress(address);
			user.setInfo(beizhu);
			
			user.setBankName(bank_name);
			user.setAccountName(account_name);
			user.setAccountNum(account_num);
			user.setRoleId(Integer.valueOf(roleId.split(",")[0]));
			user.setParentId(((TUser)request.getSession().getAttribute("curUser")).getId());
			
			if(null == id) {
				user.setStatus(0);
				user.setOrderStatus(0);
				user.setIsAdmin(Integer.valueOf(roleId.split(",")[1]));
				user.setAddDate(DateUtil.getCurrentData());
				user.setTotalQuota(Integer.valueOf(total_quota));
				user.setAvailableQuota(Integer.valueOf(total_quota));
				user.setPassword(SHA1.encode("12345678"));
			}
			if(null == id) {
				result = userService.addMember(user);
			}else {
				result = userService.modifyMember(user);
			}
		} catch(Exception e){
            e.printStackTrace();
		}
		return result;
	}
	
	/**
	 * 进入增加用户页面
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/delmember")
	public ModelAndView delMember(HttpServletRequest request){
		ModelAndView mv = new ModelAndView();
		String id = request.getParameter("id");
		try{
			userService.delMember(Integer.valueOf(id));
			try{
				List<TUser> users = userService.memberList(request, null);
				mv.setViewName("members");
				mv.addObject("members", users);
				
			} catch(Exception e){
	            e.printStackTrace();
			}
			
		} catch(Exception e){
            e.printStackTrace();
		}
		return mv;
	}
	
	/**
	 * 停用用户
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/stopmember")
	public ModelAndView stopMember(HttpServletRequest request){
		ModelAndView mv = new ModelAndView();
		String id = request.getParameter("id");
		TUser user = new TUser();
		user.setId(Integer.valueOf(id));
		user.setStatus(0);
		try{
			userService.modifyMember(user);
			try{
				List<TUser> users = userService.memberList(request, null);
				mv.setViewName("members");
				mv.addObject("members", users);
				
			} catch(Exception e){
	            e.printStackTrace();
			}
			
		} catch(Exception e){
            e.printStackTrace();
		}
		return mv;
	}
	
	/**
	 * 启用用户
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/startmember")
	public ModelAndView startMember(HttpServletRequest request){
		ModelAndView mv = new ModelAndView();
		String id = request.getParameter("id");
		TUser user = new TUser();
		user.setId(Integer.valueOf(id));
		user.setStatus(1);
		try{
			userService.modifyMember(user);
			try{
				List<TUser> users = userService.memberList(request, null);
				mv.setViewName("members");
				mv.addObject("members", users);
				
			} catch(Exception e){
	            e.printStackTrace();
			}
			
		} catch(Exception e){
            e.printStackTrace();
		}
		return mv;
	}
	
	/**
	 * 进入增加用户页面
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/showmember")
	public ModelAndView showMember(HttpServletRequest request){
		ModelAndView mv = new ModelAndView();
		String id = request.getParameter("id");
		try{
			if(null != id) {
				TUser user = userService.getMember(Integer.valueOf(id));
				TRole role = roleService.getRole(user.getRoleId());
				user.setRole(role.getRoleName());
				mv.setViewName("member-show");
				mv.addObject("member", user);
			}
			
		} catch(Exception e){
            e.printStackTrace();
		}
		return mv;
	}
	
	/**
	  *查询账户
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/acounts")
	public ModelAndView getAccount(HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
		String userId = request.getParameter("userid");
		Base<List<TAccount>> base = accountService.getAccount(userId);
		mv.setViewName("account-list");
		mv.addObject("accounts", base.data);
		return mv;
	}
	
	/**
	  *激活账户
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/activeAccount", method = RequestMethod.GET)
	public ModelAndView activeAccount(HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
		String operateId = request.getParameter("operateId"); // 1-激活， 0-停用
		String accountId = request.getParameter("accountId"); // 账户ID
		String userId = request.getParameter("userId"); // 用户ID
		
		accountService.activeAccount(operateId, accountId, userId);
		
		Base<List<TAccount>> base = accountService.getAccount(userId);
		mv.setViewName("account-list");
		mv.addObject("accounts", base.data);
		return mv;
	}
	
	@RequestMapping(value="/qr", method = RequestMethod.GET)
	public ModelAndView getQc(HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
		String accountId = request.getParameter("id"); // 账户ID
		Base base = userPhotoService.getPhoto(Integer.valueOf(accountId));
		mv.setViewName("qr-list");
		mv.addObject("qrs", base.data);
		return mv;
	}
	
}
