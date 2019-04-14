package com.ssm.service.socket;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.ssm.bean.SysSession;
import com.ssm.pojo.TAccount;
import com.ssm.pojo.TOrders;
import com.ssm.pojo.TRole;
import com.ssm.pojo.TUser;
import com.ssm.server.AccountService;
import com.ssm.server.OrderService;
import com.ssm.server.RoleService;
import com.ssm.server.UserService;

@Service("myHandler")
public class MyHandler extends TextWebSocketHandler {

	@Resource(name = "orderService")
	private OrderService orderService;
	@Resource(name = "accountService")
	private AccountService accountService;
	@Resource(name = "roleService")
	private RoleService roleService;
	@Resource(name = "userService")
	private UserService userService;
	private Gson gson = new Gson();

	private List<TAccount> accounts;
	private String userPayWay;
	private List<TOrders> orders;
	private TRole role;
	private TUser user;

	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		SocketResult socketResult = new SocketResult();
		socketResult.command = "on_connected";
		try {
			session.sendMessage(new TextMessage(gson.toJson(socketResult)));
		} catch (IOException e1) {
			e1.printStackTrace();
		}
	}

	//int orderId;

	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message) {
		String msg = message.getPayload();
		SocketRequest request = gson.fromJson(msg, new TypeToken<SocketRequest>() {
		}.getType());
		String cmd = request.command;
		SocketResult socketResult = new SocketResult();
		switch (cmd) {
		case "begin_order":
			String uid = (String) session.getAttributes().get("user_id");

			accounts = (List<TAccount>) accountService.getAccount(uid).data;
			user = userService.getMember(Integer.valueOf(uid));
			role = roleService.getRole(Integer.valueOf(uid));

			boolean hasActiveAccount = false;
			String accountType = null;
			for (TAccount account : accounts) {
				if (1 == account.getStatus()) {
					hasActiveAccount = true;
					userPayWay = account.getAccounttype();
					accountType = account.getAccounttype();
					break;
				}
			}

			if (!hasActiveAccount) {
				SocketResult openSocketResult = new SocketResult();
				openSocketResult.command = "open_order";
				openSocketResult.errno = 200001;
				openSocketResult.msg = "您目前没有激活的账号，无法开始接单，请激活接单账号";
				try {
					session.sendMessage(new TextMessage(gson.toJson(openSocketResult)));
				} catch (IOException e) {
					e.printStackTrace();
				}
			} else {
				if ("0".equals(userPayWay)) { // wx pay
					SysSession.tWxSessionMap.put(uid, session);
				} else { // ali pay
					SysSession.tAliSessionMap.put(uid, session);
				}
				
				SocketResult bgSocketResult = new SocketResult();
				bgSocketResult.msg = "1";
				bgSocketResult.command = "get_order";
				
				orders = (List<TOrders>) orderService.getOrders(uid).data;
				TOrders order = orders.get(0);
				System.out.println("orders.isEmpty()===========" + orders.isEmpty());
				
					try {
						
						boolean hasOrder = false;
						if ("4".equals(order.getStatus()) || "3".equals(order.getStatus())) {
							hasOrder = false;
							bgSocketResult.order = null;
						} else {
							hasOrder = true;
							bgSocketResult.order = order;
						}
						if (!hasOrder) {
							if ("0".equals(accountType)) { // wx pay
								SysSession.wxSessionList.add(session);
							} else { // ali pay
								SysSession.aliSessionList.add(session);
							}
						} 
						session.sendMessage(new TextMessage(gson.toJson(bgSocketResult)));
					} catch (IOException e) {
						e.printStackTrace();
					}
				
			}
			break;
		case "end_order":
			if ("0".equals(userPayWay)) {
				SysSession.wxSessionList.remove(session);
			} else {
				SysSession.aliSessionList.remove(session);
			}
			SocketResult endSocketResult = new SocketResult();
			endSocketResult.command = "end_order";
			try {
				session.sendMessage(new TextMessage(gson.toJson(endSocketResult)));
			} catch (IOException e1) {
				e1.printStackTrace();
			}
			break;
		case "get_order_status":
			SocketRequest<TOrders> statusRequest = gson.fromJson(msg, new TypeToken<SocketRequest<TOrders>>() {}.getType());
			TOrders statusOrder = statusRequest.data;
			SocketResult orderSocketResult = new SocketResult();
			if(null != statusOrder) {
				if("0".equals(statusOrder.getStatus())) {
					if("支付过期".equals(statusOrder.getOrderStatus(statusOrder.getCreateDate()))) {
						//if(orderService.findOrderByNo(statusOrder.getOrderNo()).isEmpty()) {
							orderService.overDue(statusOrder.getOrderNo()); // order overDue
							if ("0".equals(userPayWay)) { // wx pay
								SysSession.wxSessionList.add(session);
							} else { // ali pay
								SysSession.aliSessionList.add(session);
							}
							
							orderSocketResult.command = "get_order";
							orderSocketResult.order = null;
							if (session.isOpen()) {
								try {
									session.sendMessage(new TextMessage(gson.toJson(orderSocketResult)));
								} catch (IOException e) {
									e.printStackTrace();
								}
							}
//						}else {
//							
//						}
					}
				}else { // 已收款和已支付状态
					
				}
			}
			break;
		case "order_confirm":
			SocketRequest<TOrders> orderRequest = gson.fromJson(msg, new TypeToken<SocketRequest<TOrders>>() {
			}.getType());
			TOrders order = orderRequest.data;
			order.setId(null);
			int result = orderService.orderConfirm(order, session.getAttributes().get("user_id").toString());

			socketResult.command = cmd;
			if (0 != result) {
				socketResult.errno = 0;
			} else {
				socketResult.errno = 1;
			}
			try {
				session.sendMessage(new TextMessage(gson.toJson(socketResult)));
			} catch (IOException e) {
				e.printStackTrace();
			}
			break;
		case "get_list":

			String userId = (String) session.getAttributes().get("user_id");

			int index = -1;
			if ("0".equals(userPayWay)) {
				index = SysSession.wxSessionList.indexOf(session);
			} else {
				index = SysSession.aliSessionList.indexOf(session);
			}
			socketResult.command = cmd;
			socketResult.listNum = String.valueOf(index);
			try {
				session.sendMessage(new TextMessage(gson.toJson(socketResult)));
			} catch (IOException e) {
				e.printStackTrace();
			}
			break;
		case "order_Pay":
			SocketRequest<TOrders> orderPayRequest = gson.fromJson(msg, new TypeToken<SocketRequest<TOrders>>() {
			}.getType());
			TOrders payOrder = orderPayRequest.data;
			payOrder.setId(null);
			int payResult = orderService.orderPay(payOrder, session.getAttributes().get("user_id").toString());

			socketResult.command = cmd;
			if (0 != payResult) {
				socketResult.errno = 1;
			} else {
				socketResult.errno = 0;
			}
			try {
				session.sendMessage(new TextMessage(gson.toJson(socketResult)));
			} catch (IOException e) {
				e.printStackTrace();
			}
			break;
		}
	}

	@Override
	public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
		if (session.isOpen()) {
			session.close();
		}
		System.out.println("连接出错");
	}

	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		if ("0".equals(userPayWay)) {
			SysSession.wxSessionList.remove(session);
			SysSession.wxSessionMap.remove(session.getAttributes().get("user_id").toString());
			SysSession.tWxSessionMap.remove(session.getAttributes().get("user_id").toString());
		} else {
			SysSession.aliSessionList.remove(session);
			SysSession.aliSessionMap.remove(session.getAttributes().get("user_id").toString());
			SysSession.tAliSessionMap.remove(session.getAttributes().get("user_id").toString());
		}
		System.out.println("连接已关闭：" + status);
	}

	@Override
	public boolean supportsPartialMessages() {
		return false;
	}

	public String getPayWay() {
		return userPayWay;
	}
}
