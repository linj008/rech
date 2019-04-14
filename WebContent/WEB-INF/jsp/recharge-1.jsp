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
<link href="static/h-ui/css/H-ui.min.css" rel="stylesheet" type="text/css" />
<link href="static/h-ui.admin/css/H-ui.admin.css" rel="stylesheet" type="text/css" />
<link href="lib/Hui-iconfont/1.0.8/iconfont.css" rel="stylesheet" type="text/css" />
<!--[if IE 6]>
<script type="text/javascript" src="http://lib.h-ui.net/DD_belatedPNG_0.0.8a-min.js" ></script>
<script>DD_belatedPNG.fix('*');</script><![endif]-->
<title>充值</title>
</head>
<body>
<%
		TUserPhoto photo = (TUserPhoto) request.getAttribute("var");
	%>
<div class="pd-20">
  <table class="table">
    <tbody>
    	<tr>
        <th >￥50.00</th>
      </tr>
      <tr class="c-red">
        <th class="c-red">1、截屏保存二维码</th>
      </tr>
      <tr>
        <th class="c-red" >2、打开微信扫一扫</th>
      </tr>
      <tr>
        <th class="c-red" >3、从相册选取二维码扫描支付</th>
      </tr>
    </tbody>
  </table>
  <p></p>
  <p />
  <p />
  <table class="table">
    <tbody>
      <tr>
      <th >
        <img src="../../examples/<%=photo.getImgpath()%>" height="350" width="250"/>
        </th>
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