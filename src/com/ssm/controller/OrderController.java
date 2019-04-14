package com.ssm.controller;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.ssm.bean.Base;
import com.ssm.common.Testpoi;
import com.ssm.pojo.TOrders;
import com.ssm.pojo.TUser;
import com.ssm.server.OrderService;

@Controller
@RequestMapping("/order")
public class OrderController {
	@Resource(name = "orderService")
	OrderService orderService;

	@RequestMapping(value = "/orders")
	private ModelAndView getOrderInfo(HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
		List<TOrders> orders = orderService.getAllOrders(request);
		mv.setViewName("order-list");
		mv.addObject("order_status", request.getParameter("order_status"));
		mv.addObject("datemin", request.getParameter("datemin"));
		mv.addObject("datemax", request.getParameter("datemax"));
		mv.addObject("username", request.getParameter("username"));
		mv.addObject("orders", orders);
		return mv;
	}

	@RequestMapping(value = "/userorders")
	private ModelAndView getUserOrderInfo(HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
		List<TOrders> orders = orderService.getAllOrders(request);
		mv.setViewName("member-order-list");

		mv.addObject("order_status", request.getParameter("order_status"));
		mv.addObject("datemin", request.getParameter("datemin"));
		mv.addObject("datemax", request.getParameter("datemax"));
		mv.addObject("orders", orders);
		return mv;
	}

	/**
	 * 上传银行流水对账
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/uploadFile", method = RequestMethod.POST)
	@ResponseBody
	public int uploadFile(HttpServletRequest request) {
		TUser curUser = (TUser)request.getSession().getAttribute("curUser");
		String userId = curUser.getId().toString();
		// CommonsMutipartResolver （多部分解析器）
		CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(
				request.getSession().getServletContext());
		int result = 0;
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
					String path = sepa + "examples" + sepa + "static" + sepa + "xls" + sepa + userId + sepa + "xls" + sepa;
					File filePath = new File(basePath + path);
					if (!filePath.exists()) {
						filePath.mkdirs();
					}
					try {
						file.transferTo(new File(basePath
								+ path + file.getOriginalFilename()));
					} catch (IllegalStateException | IOException e) {
						e.printStackTrace();
					}
					Map<String, Object> orders = Testpoi.readFile(basePath + path + file.getOriginalFilename());
					result = orderService.duiz(orders);
				}

			}

		}
		return result;
	}
	
	
	@RequestMapping(value="/gbankname")
	public ModelAndView goAddmember(HttpServletRequest request){
		ModelAndView mv = new ModelAndView();
		
		mv.setViewName("bank_data");
			
		return mv;
	}
	
	@RequestMapping(value="/gRevenueStatistics")
	public ModelAndView gRevenueStatistics(HttpServletRequest request){
		ModelAndView mv = new ModelAndView();
		
		mv.setViewName("revenue-tatistics");
			
		return mv;
	}
	
	/**
	 *
	 */
	@RequestMapping(value = "rechargetest", method = RequestMethod.POST)
	@ResponseBody
	public Base recharge(HttpServletRequest request) {
		Base base = orderService.recharge(request);
//		if(base.errno == 0) {
//			return base.data.toString();
//		}else {
//			return String.valueOf(base.errno);
//		}
		return base;
	}
}
