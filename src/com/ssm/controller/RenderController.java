package com.ssm.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ssm.server.OrderService;

@Controller
@RequestMapping("/render") 
public class RenderController {
	@Resource(name="orderService")
	private OrderService orderService;
	
	/**
	 * 根据id查询
	 */
	@RequestMapping(value = "/gg")
	public ModelAndView login(HttpServletRequest request){
		return orderService.render(request);
	}
}
