package com.ssm.server;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;

import com.google.gson.Gson;
import com.ssm.bean.Base;
import com.ssm.bean.SysSession;
import com.ssm.common.Constance;
import com.ssm.mapping.TAccountMapper;
import com.ssm.mapping.TOrdersMapper;
import com.ssm.mapping.TRoleMapper;
import com.ssm.mapping.TUserMapper;
import com.ssm.pojo.SortOrderByNo;
import com.ssm.pojo.TAccount;
import com.ssm.pojo.TAccountExample;
import com.ssm.pojo.TOrders;
import com.ssm.pojo.TOrdersExample;
import com.ssm.pojo.TOrdersExample.Criteria;
import com.ssm.pojo.TRole;
import com.ssm.pojo.TUser;
import com.ssm.pojo.TUserExample;
import com.ssm.pojo.TUserPhoto;
import com.ssm.service.socket.SocketResult;
import com.ssm.util.DateUtil;

@Service("orderService")
public class OrderService {
	@Resource
	private TOrdersMapper ordersMapper;

	@Resource
	private TUserMapper userMapper;
	
	@Resource
	private TRoleMapper roleMapper;

	@Resource
	private TAccountMapper accountMapper;

	@Resource(name = "userPhotoService")
	private UserPhotoService userPhotoService;

	@Resource(name = "accountService")
	private AccountService accountService;

	Gson gson = new Gson();

	@Transactional
	public Base recharge(HttpServletRequest request) {

		Base<String> base = new Base<String>();
		base.errno = 0;

		String prize = request.getParameter("prize");
		String terminalId = request.getParameter("terminalId");
		String platformId = request.getParameter("platformId");
		String merchantNo = request.getParameter("merchantNo");
		String payWay = request.getParameter("payWay");

		if (null == platformId || "".equals(platformId)) {
			base.errno = 102000;
			base.message = "参数错误，缺少flatformId参数";
			return base;
		}
		if (null == prize || "".equals(prize)) {
			base.errno = 102000;
			base.message = "参数错误，缺少prize参数";
			return base;
		}
		if (null == terminalId || "".equals(terminalId)) {
			base.errno = 102000;
			base.message = "参数错误，缺少terminalId参数";
			return base;
		}
		if (null == merchantNo || "".equals(merchantNo)) {
			base.errno = 102000;
			base.message = "参数错误，缺少merchantNo参数";
			return base;
		}

		if (null == payWay || "".equals(payWay)) {
			base.errno = 102000;
			base.message = "参数错误，缺少payWay参数";
			return base;
		}
		System.out.println("payWay==========" + payWay);
		WebSocketSession session = null;
		boolean hasSession = false;
		if("0".equals(payWay)) {
			System.out.println("SysSession.wxSessionList.isEmpty()==========" + SysSession.wxSessionList.isEmpty());
			hasSession = !SysSession.wxSessionList.isEmpty();
		}else {
			System.out.println("SysSession.aliSessionList.isEmpty()==========" + SysSession.aliSessionList.isEmpty());
			hasSession = !SysSession.aliSessionList.isEmpty();
		}
		if (hasSession) {
			String userid = "";
			if("0".equals(payWay)) {
				session = SysSession.wxSessionList.remove(0);
				userid = (String) session.getAttributes().get("user_id");
				SysSession.wxSessionMap.put(userid, session);
			}else {
				session = SysSession.aliSessionList.remove(0);
				userid = (String) session.getAttributes().get("user_id");
				SysSession.aliSessionMap.put(userid, session);
			}
			

			List<TAccount> accounts = (List<TAccount>) accountService.getAccount(userid).data;
			TUser user = userMapper.selectByPrimaryKey(Integer.valueOf(userid));
			TRole role = roleMapper.selectByPrimaryKey(user.getRoleId());

			int accountId = 0;
			String accountName = null;
			
			for (TAccount account : accounts) {
				if (payWay.equals(account.getAccounttype())) {
					accountId = account.getId();
					accountName = account.getAccountname();
				}
			}

			TOrders order = new TOrders();
			order.setPlatformId(platformId);
			order.setAmount(Integer.valueOf(prize));
			order.setStatus("0");
			order.setUserId(Integer.valueOf(userid));
			order.setCreateDate(DateUtil.getCurrentData());
			order.setMerchantNo(merchantNo);
			order.setAccountId(String.valueOf(accountId));
			order.setReciveAccountName(accountName);
			order.setPayWay(payWay);
			order.setOrderNo(platformId + DateUtil.getCurrentDate("yyyyMMddHHmmss"));
			order.setReturnAmount("0".equals(payWay) ?  "" + (order.getAmount() * Double.valueOf(role.getWxRate())) :  "" + (order.getAmount() * Double.valueOf(role.getAliRate())));
			ordersMapper.insert(order);

			SocketResult result = new SocketResult();
			result.command = "get_order";
			result.order = order;

			WebSocketMessage message = new TextMessage(gson.toJson(result));
			try {
				session.sendMessage(message);
			} catch (IOException e) {
				e.printStackTrace();
			}
			
			base.data = Constance.DOMAIN + "render/gg?cc=" + accountId + "&prize=" + prize + "&terminalId="
					+ terminalId;
			System.out.println("base.data==========" + base.data);
		}else {
			base.errno = 102001;
			base.message = "充值功能暂时不可用";
		}
		return base;

	}

	@Transactional
	public ModelAndView render(HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
		String accountId = request.getParameter("cc");
		String prize = request.getParameter("prize");
		String terminalId = request.getParameter("terminalId");
		List<TUserPhoto> userPhotos = (List<TUserPhoto>)userPhotoService.getPhoto(Integer.valueOf(accountId)).data;

		if (!userPhotos.isEmpty()) {
			TUserPhoto photo = userPhotos.get(0);
			if ("1".equals(terminalId)) {
				mv.setViewName("recharge");
				mv.addObject("var", photo);
			} else {
				mv.setViewName("recharge");
				mv.addObject("var", photo);
			}
		} else {

		}

		return mv;
	}

	@Transactional
	public int orderConfirm(TOrders order, String userId) {
		order.setStatus("1");
		order.setReceivablesDate(DateUtil.getCurrentData());
		order.setCreateDate(null);
		TOrdersExample example = new TOrdersExample();
		example.createCriteria().andMerchantNoEqualTo(order.getMerchantNo());

		TUser user = userMapper.selectByPrimaryKey(Integer.valueOf(userId));
		int availableQuota = user.getTotalQuota() - order.getAmount();
		user.setAvailableQuota(availableQuota);
		userMapper.updateByPrimaryKey(user);
		return ordersMapper.updateByExampleSelective(order, example);
	}

	@Transactional
	public int orderPay(TOrders order, String userId) {

		order.setStatus("2");
		order.setReceivablesDate(DateUtil.getCurrentData());
		order.setCreateDate(null);
		TOrdersExample example = new TOrdersExample();
		example.createCriteria().andOrderNoEqualTo(order.getOrderNo());

		TUser user = userMapper.selectByPrimaryKey(Integer.valueOf(userId));
		int availableQuota = user.getTotalQuota() - order.getAmount();
		user.setAvailableQuota(availableQuota);
		userMapper.updateByPrimaryKey(user);
		return ordersMapper.updateByExampleSelective(order, example);
	}

	@Transactional
	public Base getOrders(HttpServletRequest request) {
		String userId = request.getParameter("userid");
		String status = request.getParameter("status");
		
		Base<List<TOrders>> base = new Base<List<TOrders>>();
		base.errno = 0;

		TOrdersExample example = new TOrdersExample();
		if(status.equals("0,1,2,3")) {
			String[] statuses = status.split(",");
			List<String> statusList = new ArrayList<String>();
			for(int i = 0; i < statuses.length; i ++) {
				statusList.add(statuses[i]);
			}
			example.createCriteria().andUserIdEqualTo(Integer.valueOf(userId)).andStatusIn(statusList);
		}else {
			example.createCriteria().andUserIdEqualTo(Integer.valueOf(userId)).andStatusEqualTo(status);
		}
		example.setOrderByClause("id DESC");
		List<TOrders> orders = ordersMapper.selectByExample(example);
		base.data = orders;
		return base;
	}

	@Transactional
	public Base getOrders(String userId) {
		Base<List<TOrders>> base = new Base<List<TOrders>>();
		base.errno = 0;

		TOrdersExample example = new TOrdersExample();
		example.createCriteria().andUserIdEqualTo(Integer.valueOf(userId));
		example.setOrderByClause("id DESC");
		List<TOrders> orders = ordersMapper.selectByExample(example);
		base.data = orders;
		return base;
	}

	@Transactional
	public List<TOrders> getAllOrders(HttpServletRequest request) {
		List<TOrders> orders = new ArrayList<TOrders>();

		String datemin = request.getParameter("datemin");
		String datemax = request.getParameter("datemax");
		String username = request.getParameter("username");
		String status = request.getParameter("order_status");

		String userId = request.getParameter("userid");
		List<Integer> likeUserids = new ArrayList<Integer>();
		if (userId != null && !"".equals(userId)) {
			likeUserids.add(Integer.valueOf(userId));
		}

		List<TUser> likeUsers = new ArrayList<TUser>();
		if (username != null && !"".equals(username)) {
			TUserExample likeUserExample = new TUserExample();
			likeUserExample.createCriteria().andUsernameLike("%" + username + "%");
			likeUsers = userMapper.selectByExample(likeUserExample);
			if (!likeUsers.isEmpty()) {
				for (TUser user : likeUsers) {
					likeUserids.add(user.getId());
				}
			} else {
				return orders;
			}
		}

		TOrdersExample example = new TOrdersExample();
		Criteria orderCri = example.createCriteria();
		if (!likeUserids.isEmpty()) {
			orderCri.andUserIdIn(likeUserids);

		}
		if ((datemin != null && !"".equals(datemin)) && (datemax != null && !"".equals(datemax))) {
			datemax = DateUtil.initDate(datemax, 1);
			orderCri.andCreateDateGreaterThan(datemin).andCreateDateLessThan(datemax);
		}
		if (status != null && !"".equals(status)) {
			orderCri.andStatusEqualTo(status);
		}

		orders = ordersMapper.selectByExample(example);

		List<Integer> userIds = new ArrayList<Integer>();
		List<Integer> accountIds = new ArrayList<Integer>();

		if (!orders.isEmpty()) {
			for (TOrders order : orders) {
				userIds.add(order.getUserId());
				accountIds.add(Integer.valueOf(order.getAccountId()));
			}

			TUserExample userExample = new TUserExample();
			userExample.createCriteria().andIdIn(userIds);
			List<TUser> users = userMapper.selectByIdExample(userExample);

			TAccountExample accountExample = new TAccountExample();
			accountExample.createCriteria().andIdIn(accountIds);
			List<TAccount> accounts = accountMapper.selectByIdExample(accountExample);

			for (TOrders order : orders) {
				for (TUser user : users) {
					if (order.getUserId() == user.getId()) {
						order.setUserName(user.getUsername());
						break;
					}
				}
				for (TAccount account : accounts) {
					if (Integer.valueOf(order.getAccountId()) == account.getId()) {
						order.setAccountName(account.getAccountname());
						break;
					}
				}
			}
		}

		return orders;
	}
	
	public TOrders getOrderById(Integer id) {
		return ordersMapper.selectByPrimaryKey(id);
	}
	
	/**
	 * 设置订单过期状态
	 * @return
	 */
	public int overDue(String orderNo) {
		TOrders model = new TOrders();
		TOrdersExample example = new TOrdersExample();
		example.createCriteria().andOrderNoEqualTo(orderNo);
		model.setStatus("3");
		model.setReceivablesDate(DateUtil.getCurrentData());
		return ordersMapper.updateByExampleSelective(model, example);
	}
	
	/**
	 * 根据orderNo查询订单
	 * @return
	 */
	public List<TOrders> findOrderByNo(String orderNo) {
		TOrdersExample example = new TOrdersExample();
		example.createCriteria().andOrderNoEqualTo(orderNo);
		return ordersMapper.selectByExample(example);
	}
	
	/**
	 * 对账
	 * @param orders
	 * @return
	 */
	@Transactional
	public int duiz(Map<String, Object> orderMap) {
		int result = 1;
		try {
			List<TOrders> orders = (List<TOrders>)orderMap.get("list");
			Map<String, TOrders> ordersMap = (Map<String, TOrders>)orderMap.get("map");
			
			Collections.sort(orders, new SortOrderByNo());
			if(!orders.isEmpty()) {
				
				List<TOrders> updateOrders = new ArrayList<TOrders>();
				TOrdersExample example = new TOrdersExample();
				example.setOrderByClause("order_no ASC");
				example.createCriteria().andOrderNoBetween(orders.get(0).getOrderNo(), orders.get(orders.size() - 1).getOrderNo());
				List<TOrders> duizOrders = ordersMapper.selectByExample(example);
				
				for(TOrders duizOrder: duizOrders) {
					TOrders order = (TOrders)ordersMap.get(duizOrder.getOrderNo());
					order.setUserId(duizOrder.getUserId());
					if(duizOrder.getOrderNo().equals(order.getOrderNo())) {
						
						Double returnAmount = Double.valueOf(order.getReturnAmount());
						Double dzReturnAmount = Double.valueOf(duizOrder.getReturnAmount());
						BigDecimal returnData = new BigDecimal(returnAmount); 
						BigDecimal dzReturnData = new BigDecimal(dzReturnAmount); 
						
						if(returnData.compareTo(dzReturnData) == 0 && "1".equals(duizOrder.getStatus())) {
							TOrders updateOrder = new TOrders();
							updateOrder.setId(duizOrder.getId());
							updateOrder.setStatus("4");
							//updateOrder.setOrderNo(duizOrder.getOrderNo());
							updateOrder.setBankNo(order.getBankNo());
							updateOrder.setBankAccount(order.getBankAccount());
							updateOrder.setPayWay(order.getPayWay());
							updateOrder.setUserId(order.getUserId());
							updateOrders.add(updateOrder);
						}
					}
				}
				
				for(TOrders order: updateOrders) {
					int num = ordersMapper.updateByPrimaryKeySelective(order);
					if(num != 0) {
						WebSocketSession session = null;
						if("0".equals(order.getPayWay())) {
							String userid = order.getUserId().toString();
							session = SysSession.tWxSessionMap.get(userid);
							if(session != null && session.isOpen()) {
								SysSession.wxSessionList.add(session);
							}
						}else {
							String userid = order.getUserId().toString();
							session = SysSession.tAliSessionMap.get(userid);
							if(session != null && session.isOpen()) {
								SysSession.aliSessionList.add(session);
							}
						}
						SocketResult socketResult = new SocketResult();
						socketResult.command = "order_conplete";
						socketResult.errno = 0;
						session.sendMessage(new TextMessage(gson.toJson(socketResult)));
					}
				}
			}
		}
		catch(Exception e) {
			result = 0;
		}
		
		return result;
	}
}
