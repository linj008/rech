package com.ssm.controller;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import com.ssm.bean.Base;
import com.ssm.pojo.TAccount;
import com.ssm.pojo.TUser;
import com.ssm.pojo.TUserPhoto;
import com.ssm.server.AccountService;
import com.ssm.server.OrderService;
import com.ssm.server.RoleService;
import com.ssm.server.UserPhotoService;
import com.ssm.server.UserService;
import com.ssm.util.DateUtil;

@Controller
@RequestMapping("/api")
public class BusinessController {
	@Resource(name = "userService")
	private UserService userService;
	@Resource(name = "userPhotoService")
	private UserPhotoService userPhotoService;
	@Resource(name = "accountService")
	private AccountService accountService;
	@Resource(name = "orderService")
	private OrderService orderService;
	@Resource(name = "roleService")
	private RoleService roleService;

	/**
	 * 根据id查询
	 */
	@RequestMapping(value = "go", method = RequestMethod.POST)
	@ResponseBody
	
	public Base app(HttpServletRequest request) {
		String action = request.getParameter("action");
		Base base = new Base();
		base.errno = 500;
		base.message = "参数错误，缺少action参数";
		
		switch(action) {
			case "upload":
				return upload(request);
			case "Login":
				return login(request);
			case "addAccount":
				return addAccount(request);
			case "getAccount":
				return getAccount(request);
			case "activeAccount":
				return activeAccount(request);
			case "deleteAccount":
				return deleteAccount(request);
			case "getQc":
				return getQc(request);
			case "deleteQc":
				return deleteQc(request);
			case "recharge":
				return recharge(request);
			case "getOrders":
				return getOrders(request);
			case "getParent":
				return getParent(request);
			case "getRole":
				return getRole(request);
			case "modifyPassword":
				return modifyPassword(request);
			case "logout":
				return logout(request);
			case "getUserInfo":
				return getUserInfo(request);
		}
		return base;
	}

	private Base getUserInfo(HttpServletRequest request) {
		Base base = new Base();
		base.data = userService.getMember(Integer.valueOf(request.getParameter("user_id")));
		return base;
	}

	private Base logout(HttpServletRequest request) {
		return userService.logout(request);
	}
	
	private Base modifyPassword(HttpServletRequest request) {
		return userService.modifyPassword(request);
	}

	public Base getParent(HttpServletRequest request) {
		Base base = new Base();
		String parentId = request.getParameter("parent_id");
		base.data = userService.getUserByParent(parentId);
		return base;
	}
	
	public Base getRole(HttpServletRequest request) {
		Base base = new Base();
		String roleId = request.getParameter("role_id");
		base.data = roleService.getRole(Integer.valueOf(roleId));
		return base;
	}

	public Base login(HttpServletRequest request) {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		Base<TUser> base = new Base<TUser>();
		
		try{
			TUser user = userService.login(username, password, null);
			if(null != user) {
				base.errno = 0;
				base.message = "登陆成功";
				base.data = user;
			}else {
				base.errno = 100000;
				base.message = "登陆失败，请检查用户名和密码是否正确";
			}
			
		} catch(Exception e){
            e.printStackTrace();
		}
		return base;
	}
	
	public Base upload(HttpServletRequest request) {
		
		String userId = request.getParameter("userid");
		String price = request.getParameter("price");
		TUserPhoto photo = new TUserPhoto();
		photo.setUserid(null != userId && !"".contentEquals(userId) ? Integer.valueOf(userId) : 0);
		photo.setPrice(null != price && !"".contentEquals(price) ? Integer.valueOf(price) : 0);
		Base base = new Base();
		
		// CommonsMutipartResolver （多部分解析器）
		CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(
				request.getSession().getServletContext());
		// form中是否有enctype="multipart/form-data"
		if (multipartResolver.isMultipart(request)) {
			// request变成多部分request
			MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
			// multiRequest 中所有的文件名
			Iterator iter = multiRequest.getFileNames();
			String sepa = java.io.File.separator;

			while (iter.hasNext()) {
				//
				MultipartFile file = multiRequest.getFile(iter.next().toString());
				if (file != null) {
					String basePath = request.getSession().getServletContext().getRealPath("/");
					basePath = basePath.substring(0, basePath.lastIndexOf(sepa));
					basePath = basePath.substring(0, basePath.lastIndexOf(sepa));
					String path = sepa + "examples" + sepa + "static" + sepa + "code" + sepa + userId + sepa + "code" + sepa;
					File filePath = new File(basePath + path);
					if(!filePath.exists()) {
						filePath.mkdir();
					}
					String fileName = userId + "_" + System.currentTimeMillis() + file.getOriginalFilename();
					photo.setImgpath("static/code/" + userId + "/code/" + fileName);
					photo.setUpdateDate(DateUtil.getCurrentData());
					userPhotoService.addPhoto(photo);
					try {
						file.transferTo(new File(/* request.getSession().getServletContext().getRealPath("/") */basePath + path + fileName));
					} catch (IllegalStateException | IOException e) {
						// TODO Auto-generated catch block
						base.errno = 100000;
						base.message = "上传二维码失败" + e.getMessage();
						e.printStackTrace();
					}
				}

			}

		}
		
		base.errno = 0;
		base.message = "上传二维码成功";
		return base;
	}
	
	/**
	  *查询账户
	 * @param request
	 * @return
	 */
	public Base getAccount(HttpServletRequest request) {
		String userId = request.getParameter("userid");
		return accountService.getAccount(userId);
	}
	
	/**
	  *增加账户
	 * @param request
	 * @return
	 */
	public Base addAccount(HttpServletRequest request) {
		String userId = request.getParameter("userid");
		String accountname = request.getParameter("accountname");
		String accountType = request.getParameter("accounttype");
		TAccount account = new TAccount();
		account.setUserId(Integer.valueOf(userId));
		account.setAccountname(accountname);
		account.setStatus(0);
		account.setAccounttype(accountType);
		return accountService.addAccount(account);
	}
	
	/**
	  *激活账户
	 * @param request
	 * @return
	 */
	public Base activeAccount(HttpServletRequest request) {
		Base base = new Base();
		base.errno = 0;
		String operateId = request.getParameter("operateId"); // 1-激活， 0-停用
		String accountId = request.getParameter("accountId"); // 账户ID
		String userId = request.getParameter("userId"); // 用户ID
		
		String operate = "1".equals(operateId) ? "激活" : "停用"; 
		
		int result = accountService.activeAccount(operateId, accountId, userId);
		if(result == 1) {
			base.message = operate + "账户成功";
		}else {
			base.errno = 100002;
			base.message = operate + "账户失败，请先上传二维码";
		}
		return base;
	}
	
	/**
	  *删除账户
	 * @param request
	 * @return
	 */
	public Base deleteAccount(HttpServletRequest request) {
		String accountId = request.getParameter("accountId"); // 账户ID
		Base base = accountService.deleteAccount(Integer.valueOf(accountId));
		return base;
	}
	
	public Base getQc(HttpServletRequest request) {
		String accountId = request.getParameter("accountId"); // 账户ID
		Base base = userPhotoService.getPhoto(Integer.valueOf(accountId));
		return base;
	}
	
	/**
	  *删除二维码
	 * @param request
	 * @return
	 */
	public Base deleteQc(HttpServletRequest request) {
		String id = request.getParameter("id"); // ID
		String accountId = request.getParameter("aid"); // ID
		String uid = request.getParameter("uid"); // ID
		Base base = userPhotoService.delPhoto(id, accountId, uid);
		return base;
	}
	
	public Base recharge(HttpServletRequest request) {
		return orderService.recharge(request);
	}
	
	public Base getOrders(HttpServletRequest request) {
		return orderService.getOrders(request);
	}
	
}
