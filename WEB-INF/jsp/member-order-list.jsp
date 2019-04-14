<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@page import="com.ssm.pojo.*"%>
<%@page import="java.util.*"%>
<!--_meta 作为公共模版分离出去-->
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<meta name="renderer" content="webkit|ie-comp|ie-stand">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport"
	content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<meta http-equiv="Cache-Control" content="no-siteapp" />
<link rel="Bookmark" href="../favicon.ico">
<link rel="Shortcut Icon" href="favicon.ico" />
<!--[if lt IE 9]>
<script type="text/javascript" src="lib/html5.js"></script>
<script type="text/javascript" src="lib/respond.min.js"></script>
<![endif]-->
<link rel="stylesheet" type="text/css"
	href="../static/h-ui/css/H-ui.min.css" />
<link rel="stylesheet" type="text/css"
	href="../static/h-ui.admin/css/H-ui.admin.css" />
<link rel="stylesheet" type="text/css"
	href="../lib/Hui-iconfont/1.0.8/iconfont.css" />
<link rel="stylesheet" type="text/css"
	href="../static/h-ui.admin/skin/default/skin.css" id="skin" />
<link rel="stylesheet" type="text/css"
	href="../static/h-ui.admin/css/style.css" />
<!--[if IE 6]>
<script type="text/javascript" src="http://lib.h-ui.net/DD_belatedPNG_0.0.8a-min.js" ></script>
<script>DD_belatedPNG.fix('*');</script><![endif]-->
<!--/meta 作为公共模版分离出去-->

<title>订单管理</title>
<meta name="keywords" content="订单管理">
<meta name="description" content="订单管理">
</head>
<body>

	<%@ include file="header.jsp"%>
	<%@ include file="menu.jsp"%>

	<%
		List<TOrders> orders = (List<TOrders>) request.getAttribute("orders");
		String userId = request.getParameter("userid");
		String status = request.getParameter("order_status");
		String datemin = request.getParameter("datemin");
		String datemax = request.getParameter("datemax");
	%>

	<section class="Hui-article-box">
		<nav class="breadcrumb">
			<i class="Hui-iconfont">&#xe67f;</i> 首页 <span class="c-gray en">&gt;</span>
			订单管理 <span class="c-gray en">&gt;</span> 订单列表<a
				class="btn btn-success radius r"
				style="line-height: 1.6em; margin-top: 3px"
				href="javascript:location.replace(location.href);" title="刷新"><i
				class="Hui-iconfont">&#xe68f;</i></a>
		</nav>
		<div class="Hui-article">
			<article class="cl pd-20">
				<form action="userorders?userid=<%=userId %>" method="post" id="searchForm">
					<div class="text-c">
						日期范围： <input type="text"
							onfocus="WdatePicker({maxDate:'#F{$dp.$D(\'datemax\')||\'%y-%M-%d\'}'})"
							id="datemin" name="datemin" class="input-text Wdate" style="width: 120px;" value="<%=null != datemin ? datemin : "" %>">
						- <input type="text"
							onfocus="WdatePicker({minDate:'#F{$dp.$D(\'datemin\')}',maxDate:'%y-%M-%d'})"
							id="datemax" name="datemax" class="input-text Wdate" style="width: 120px;" value="<%=null != datemax ? datemax : "" %>">
						  状态： <select class="text" id="order_status" name="order_status">
							<option value="" <%="".equals(status) ? "selected='selected'" : "" %>>请选择</option>
							<option value="0" <%="0".equals(status) ? "selected='selected'" : "" %>>未支付</option>
							<option value="2" <%="2".equals(status) ? "selected='selected'" : "" %>>已支付未返款</option>
							<option value="1" <%="1".equals(status) ? "selected='selected'" : "" %>>已返款</option>
						</select>
						<button type="submit" class="btn btn-success radius" id="" name="">
							<i class="Hui-iconfont">&#xe665;</i> 搜索
						</button>
					</div>
				</form>
				<div class="cl pd-5 bg-1 bk-gray mt-20"> <span class="r">共有数据：<strong><%=orders.size()%></strong> 条
					</span>
				</div>
				<div class="mt-20">
					
					<table
						class="table table-border table-bordered table-hover table-bg table-sort">
						<thead>
							<tr class="text-c">
								<th width="8%">订单号</th>
								<th width="8%">商户编号</th>
								<th width="8%">金额</th>
								<th width="8%">回款金额</th>
								<th width="8%">接单员</th>
								<th width="8%">接单账号</th>
								<th width="8%">银行账号</th>
								<th width="8%">户名</th>
								<th width="8%">状态</th>
								<th width="8%">支付方式</th>
								<th width="8%">创建时间</th>
								<th width="8%">更改时间</th>
							</tr>
						</thead>
						<tbody>
							<%
								for (TOrders order : orders) {
									
							%>
							<tr class="text-c">
								<td><%=order.getOrderNo()%></td>
								<td><%=order.getMerchantNo()%></td>
								<td><%=order.getAmount()%></td>
								<td><%=order.getReturnAmount()%></td>
								<td><a href="javascript:;" onClick="member_show('<%=order.getUserName()%>','../user/showmember.do?id=<%=order.getUserId()%>','560','600')"><%=order.getUserName()%></a></td>
								<td><%=order.getAccountName()%></td>
								<td><%=order.getBankNo()%></td>
								<td><%=order.getBankAccount()%></td>
								<td><%=order.getOrderStatus()%></td>
								<td><%="1".equals(order.getPayWay())?"支付宝":"微信"%></td>
								<td><%=order.getCreateDate()%></td>
								<td><%=order.getReceivablesDate()%></td>
							</tr>
							<%
								}
							%>
						</tbody>
					</table>
				</div>
			</article>
		</div>
	</section>

	<!--_footer 作为公共模版分离出去-->
	<script type="text/javascript" src="../lib/jquery/1.9.1/jquery.min.js"></script>
	<script type="text/javascript" src="../lib/layer/2.4/layer.js"></script>
	<script type="text/javascript" src="../static/h-ui/js/H-ui.js"></script>
	<script type="text/javascript"
		src="../static/h-ui.admin/js/H-ui.admin.page.js"></script>
	<!--/_footer /作为公共模版分离出去-->

	<!--请在下方写此页面业务相关的脚本-->
	<script type="text/javascript"
		src="../lib/My97DatePicker/4.8/WdatePicker.js"></script>
	<script type="text/javascript"
		src="../lib/datatables/1.10.0/jquery.dataTables.min.js"></script>
	<script type="text/javascript" src="../lib/laypage/1.2/laypage.js"></script>
	<script type="text/javascript">
		$(function() {
			$('.table-sort').dataTable({
				"aaSorting" : [ [ 1, "desc" ] ],//默认第几个排序
				"bStateSave" : true,//状态保存
				"aoColumnDefs" : [
				//{"bVisible": false, "aTargets": [ 3 ]} //控制列的隐藏显示
				{
					"orderable" : false,
					"aTargets" : [ 0, 4 ]
				} // 制定列不参与排序
				]
			});
			$('.table-sort tbody').on('click', 'tr', function() {
				if ($(this).hasClass('selected')) {
					$(this).removeClass('selected');
				} else {
					table.$('tr.selected').removeClass('selected');
					$(this).addClass('selected');
				}
			});
		});
		/*用户-添加*/
		function member_add(title, url, w, h) {
			layer_show(title, url, w, h);
		}
		/*用户-查看*/
		function member_show(title, url, id, w, h) {
			layer_show(title, url, w, h);
		}
		/*用户-停用*/
		function member_stop(obj, id, status) {
			var info = '确认要停用吗？';
			var url = "stopmember.do?id=" + id;
			if (status == '0') {
				info = '确认要启用吗？';
				url = "startmember.do?id=" + id;
			}
			layer.confirm(info, function(index) {
				window.location.href = url;
			});
		}

		/*用户-启用*/
		function member_start(obj, id) {
			layer.confirm('确认要启用吗？', function(index) {
				window.location.href = "startmember.do?id=" + id;
			});
		}
		/*用户-编辑*/
		function member_edit(title, url, id, w, h) {
			layer_show(title, url, w, h);
		}
		/*密码-修改*/
		function change_password(title, url, id, w, h) {
			layer_show(title, url, w, h);
		}
		/*用户-删除*/
		function member_del(obj, id) {
			layer.confirm('确认要删除吗？', function(index) {
				window.location.href = "delmember.do?id=" + id;
			});
		}
		/*用户-删除*/
		function menuOpen() {

		}
		function member_show(title, url, w, h) {
			layer_show_noflesh(title, url, w, h);
		}
	</script>
	<!--/请在上方写此页面业务相关的脚本-->
</body>
</html>