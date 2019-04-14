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
		List<TUser> users = (List<TUser>) request.getAttribute("members");
	%>

	<section class="Hui-article-box">
		<nav class="breadcrumb">
			<i class="Hui-iconfont">&#xe67f;</i> 首页 <span class="c-gray en">&gt;</span>
			用户中心 <span class="c-gray en">&gt;</span> 会员列表<a
				class="btn btn-success radius r"
				style="line-height: 1.6em; margin-top: 3px"
				href="javascript:location.replace(location.href);" title="刷新"><i
				class="Hui-iconfont">&#xe68f;</i></a>
		</nav>
		<div class="Hui-article">
			<article class="cl pd-20">
				<div class="text-c">
					日期范围： <input type="text"
						onfocus="WdatePicker({maxDate:'#F{$dp.$D(\'datemax\')||\'%y-%M-%d\'}'})"
						id="datemin" class="input-text Wdate" style="width: 120px;">
					- <input type="text"
						onfocus="WdatePicker({minDate:'#F{$dp.$D(\'datemin\')}',maxDate:'%y-%M-%d'})"
						id="datemax" class="input-text Wdate" style="width: 120px;">
					<input type="text" class="input-text" style="width: 250px"
						placeholder="输入会员名称、电话、邮箱" id="" name="">
					<button type="submit" class="btn btn-success radius" id="" name="">
						<i class="Hui-iconfont">&#xe665;</i> 搜用户
					</button>
				</div>
				<div class="cl pd-5 bg-1 bk-gray mt-20">
					<span class="l"><a href="http://192.168.1.3:8080/ssm/api/go/?action=recharge&terminalId=2&packet=Order&merchantNo=50121&sign=06dfc49dd5b7c7cdab69de3a8b313896&prize=50&platformId=10000"
						class="btn btn-danger radius"><i class="Hui-iconfont">&#xe6e2;</i>
							批量删除</a> <a href="javascript:;"
						onclick="member_add('添加用户','gaddmember','','600')"
						class="btn btn-primary radius"><i class="Hui-iconfont">&#xe600;</i>
							添加用户</a></span> <span class="r">共有数据：<strong><%=users.size()%></strong> 条
					</span>
				</div>
				<div class="mt-20">
					
					<table
						class="table table-border table-bordered table-hover table-bg table-sort">
						<thead>
							<tr class="text-c">
								<th width="25"><input type="checkbox" name="" value=""></th>
								<th width="100">用户名</th>
								<th width="40">性别</th>
								<th width="90">手机</th>
								<th width="">地址</th>
								<th width="130">加入时间</th>
								<th width="70">状态</th>
								<th width="100">订单管理</th>
								<th width="100">账号管理</th>
								<th width="100">操作</th>
							</tr>
						</thead>
						<tbody>
							<%
								for (TUser user : users) {
									String info = user.getStatus() == 1 ? "停用" : "启用";
									String style = user.getStatus() == 1 ? "label label-success radius" : "label label-defaunt radius";
									user.setAccount();
									user.setOrderStatusLable();
									user.setStatusLable();
							%>
							<tr class="text-c">
								<td><input type="checkbox" value="<%=user.getId()%>" name="user_ids"></td>
								<td><u style="cursor: pointer" class="text-primary"
									onclick="member_show('<%=user.getUsername()%>','showmember.do?id=<%=user.getId()%>','10001','560','600')"><%=user.getUsername()%></u></td>
								<td><%=user.getSex() == 1 ? "男" : "女"%></td>
								<td><%=user.getPhoneNum()%></td>
								<td class="text-l"><%=user.getAddress()%></td>
								<td><%=user.getAddDate()%></td>
								<td class="td-status"><span class="<%=style%>"><%=user.getStatusLable()%></span></td>
								<td><a href="acounts?userid=<%=user.getId()%>"/>账号列表</td>
								<td><a href="../order/userorders?userid=<%=user.getId()%>"/>订单列表</td>
								<td class="td-manage"><a style="text-decoration: none"
									onClick="member_stop(this,'<%=user.getId()%>', '<%=user.getStatus()%>')"
									title="<%=info%>"><i class="Hui-iconfont">&#xe631;</i></a> <a
									title="编辑" href="javascript:;"
									onclick="member_add('修改用户','gaddmember.do?id=<%=user.getId()%>','','600')"
									class="ml-5" style="text-decoration: none"><i
										class="Hui-iconfont">&#xe6df;</i></a> </a> <a title="删除"
									href="javascript:;"
									onclick="member_del(this,'<%=user.getId()%>')" class="ml-5"
									style="text-decoration: none"><i class="Hui-iconfont">&#xe6e2;</i></a></td>
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