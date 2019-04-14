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

<title>会员列表 - 会员管理</title>
<meta name="keywords" content="会员管理">
<meta name="description" content="会员管理">
</head>
<body>

	<%@ include file="header.jsp"%>
	<%@ include file="menu.jsp"%>

	<%
		List<TAccount> accounts = (List<TAccount>) request.getAttribute("accounts");
	%>

	<section class="Hui-article-box">
		<nav class="breadcrumb">
			<i class="Hui-iconfont">&#xe67f;</i> 首页 <span class="c-gray en">&gt;</span>
			账户管理 <span class="c-gray en">&gt;</span> 账号列表<a
				class="btn btn-success radius r"
				style="line-height: 1.6em; margin-top: 3px"
				href="javascript:location.replace(location.href);" title="刷新"><i
				class="Hui-iconfont">&#xe68f;</i></a>
		</nav>
		<div class="Hui-article">
			<article class="cl pd-20">
				
				<div class="cl pd-5 bg-1 bk-gray mt-20">
					<span class="l">共有数据：<strong><%=accounts.size()%></strong> 条
					</span>
				</div>
				<div class="mt-20">
					
					<table
						class="table table-border table-bordered table-hover table-bg table-sort">
						<thead>
							<tr class="text-c">
								
								<th width="100">账户名</th>
								<th width="40">账户类型</th>
								<th width="90">二维码列表</th>
								<th width="90">状态</th>
								<th width="100">操作</th>
							</tr>
						</thead>
						<tbody>
							<%
								for (TAccount account : accounts) {
									String info = account.getStatus() == 1 ? "停用" : "激活";
									String statusLable = account.getStatus() == 1 ? "已激活" : "已停用";
									String style = account.getStatus() == 1 ? "label label-success radius" : "label label-defaunt radius";
									String accountType = "1".equals(account.getAccounttype())  ? "支付宝" : "微信";
							%>
							<tr class="text-c">
								
								<td><%=account.getAccountname()%></td>
								<td><%=accountType%></td>
								<td><a href="qr?id=<%=account.getId()%>"/>二维码详情</td>
								<td class="td-status"><span class="<%=style%>"><%=statusLable%></span></td>
								<td class="td-manage"><a style="text-decoration: none"
									onClick="member_stop(this,'<%=account.getId()%>', '<%=account.getStatus() == 0 ? 1 : 0%>', '<%=account.getUserId()%>')"
									title="<%=info%>"><i class="Hui-iconfont">&#xe631;</i></a> </td>
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
		function member_stop(obj, id, operateId, userId) {
			var info = '确认要启用吗？';
			var url = "activeAccount?accountId=" + id +"&operateId=" + operateId +　"&userId=" + userId;
			if (operateId == '0') {
				info = '确认要停用吗？';
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
	</script>
	<!--/请在上方写此页面业务相关的脚本-->
</body>
</html>