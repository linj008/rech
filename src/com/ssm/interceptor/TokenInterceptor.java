package com.ssm.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;

import com.google.gson.Gson;
import com.ssm.bean.Base;
import com.ssm.bean.SysSession;
import com.ssm.token.TokenHS256;

import net.minidev.json.JSONObject;

public class TokenInterceptor implements HandlerInterceptor{
	String[] notFilter = new String[] { "login.jsp", "login", ".js", ".css", "myHandler", "static/code", "render", "logout", "rechargetest"};
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object arg2) throws Exception {
		String requestUri = request.getRequestURI();
		boolean doFilter = true;
		boolean isApp = false;
		if(requestUri.indexOf("go") != -1) {
			isApp = true;
			if(request.getParameter("action").indexOf("Login") != -1){
				doFilter = false;
			}
		}
		String token = null;
		token = request.getHeader("X-Sec-Token");
		if(requestUri.indexOf("myHandler") != -1) {
			token = request.getParameter("X-Sec-Token");
		}
		for (String s : notFilter) {
			if (requestUri.indexOf(s) != -1) {
				// uri中包含不过滤的uri，则不进行过滤
				doFilter = false;
				break;
			}
		}
		if(doFilter) {
			
			if(null == token) {
				if(request.getSession().getAttribute("curUser") != null){
					return true;
				}else {
					response.sendRedirect(request.getContextPath() + "/login.jsp");
					return false;
				}
			}
			JSONObject jsonObject = TokenHS256.ValidToken(token);
			int result = Integer.valueOf(jsonObject.get("result").toString());
            if (0 == result) {
                System.out.println("token解析成功");
                System.out.println("uid是" + jsonObject.get("uid"));
                System.out.println("sta是"+jsonObject.get("sta"));
                System.out.println("exp是"+jsonObject.get("exp"));
                
                return true;
            } else{
                System.out.println("token已经过期");
                Base base = new Base();
                base.errno = 100006;
                base.message = "登陆超时";
                response.setCharacterEncoding("UTF-8");
                String userId = jsonObject.get("uid").toString();
                
                if(SysSession.tWxSessionMap.get(userId) != null) {
                	SysSession.tWxSessionMap.get(userId).close();
//                	SysSession.wxSessionList.remove(SysSession.wxSessionMap.get(userId));
//                	SysSession.wxSessionMap.remove(userId);
                }
                if(SysSession.tAliSessionMap.get(userId) != null) {
                	SysSession.tAliSessionMap.get(userId).close();
//                	SysSession.aliSessionList.remove(SysSession.aliSessionMap.get(userId));
//                	SysSession.aliSessionMap.remove(userId);
                }
                response.getWriter().print(new Gson().toJson(base));
                return false;
            }
		}else {
			return true;
		}
	}
}
