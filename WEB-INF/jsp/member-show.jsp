<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@page import="com.ssm.pojo.*"%>
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<meta name="renderer" content="webkit|ie-comp|ie-stand">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<meta http-equiv="Cache-Control" content="no-siteapp" />
<!--[if lt IE 9]>
<script type="text/javascript" src="lib/html5.js"></script>
<script type="text/javascript" src="lib/respond.min.js"></script>
<![endif]-->
<link href="../static/h-ui/css/H-ui.min.css" rel="stylesheet" type="text/css" />
<link href="../static/h-ui.admin/css/H-ui.admin.css" rel="stylesheet" type="text/css" />
<link href="../lib/Hui-iconfont/1.0.8/iconfont.css" rel="stylesheet" type="text/css" />
<!--[if IE 6]>
<script type="text/javascript" src="http://lib.h-ui.net/DD_belatedPNG_0.0.8a-min.js" ></script>
<script>DD_belatedPNG.fix('*');</script><![endif]-->
<title>用户查看</title>
</head>
<body>
<%
		TUser user = (TUser) request.getAttribute("member");
		user.setAccount();
		user.setOrderStatusLable();
		user.setStatusLable();
	%>
<div class="cl pd-20" style=" background-color:#5bacb6">
  <dl style="margin-left:80px; color:#fff">
    <dt><span class="f-18"><%=user.getUsername()%></span>
  </dl>
</div>
<div class="pd-20">
	
  <table class="table">
    <tbody>
      <tr>
        <th class="text-r">手机：</th>
        <td><%=user.getPhoneNum()%></td>
      </tr>
      <tr>
        <th class="text-r">总额度：</th>
        <td><%=user.getTotalQuota()%></td>
      </tr>
      <tr>
        <th class="text-r">可用额度：</th>
        <td><%=user.getAvailableQuota()%></td>
      </tr>
      <tr>
        <th class="text-r">性别：</th>
        <td><%=user.getSex() == 1 ? "男":"女"%></td>
      </tr>
      <tr>
        <th class="text-r">角色：</th>
        <td><%=user.getRole()%></td>
      </tr>
      <tr>
        <th class="text-r">卡号：</th>
        <td><%=user.getAccountNum()%></td>
      </tr>
      <tr>
        <th class="text-r">户名：</th>
        <td><%=user.getAccountName()%></td>
      </tr>
      <tr>
        <th class="text-r">开户行：</th>
        <td><%=user.getBankName()%></td>
      </tr>
      <tr>
      	<th class="text-r">接单状态：</th>
        <td><%=user.getOrderStatusLable()%></td>
      </tr>
      <tr>
        <th class="text-r">地址：</th>
        <td><%=user.getAddress()%></td>
      </tr>
      <tr>
        <th class="text-r">备注：</th>
        <td><%=user.getInfo()%></td>
      </tr>
      <tr>
        <th class="text-r">注册时间：</th>
        <td><%=user.getAddDate()%></td>
      </tr>
    </tbody>
  </table>
</div>
<!--_footer 作为公共模版分离出去-->
<script type="text/javascript" src="../lib/jquery/1.9.1/jquery.min.js"></script> 
<script type="text/javascript" src="../lib/layer/2.4/layer.js"></script>
<script type="text/javascript" src="../static/h-ui/js/H-ui.js"></script>
<script type="text/javascript" src="../static/h-ui.admin/js/H-ui.admin.page.js"></script>
<!--/_footer /作为公共模版分离出去-->

</body>
</html>