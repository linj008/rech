<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@page import="com.ssm.pojo.*"%>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<meta name="renderer" content="webkit">
<meta name="HandheldFriendly" content="True" />
<meta name="MobileOptimized" content="320" />
<meta name="format-detection" content="telephone=no" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />


<title>收银台</title>

<script src="../static/rech/jquery.js"></script>

<link href="../static/rech/web.css?v=4_xpehircec6eoz3" rel="stylesheet" />

</head>
<body>

	<%
		TUserPhoto photo = (TUserPhoto) request.getAttribute("var");
		String prize = request.getParameter("prize");
	%>

	<div class="container">
		<h1 class="title">微信支付</h1>
		<div class="content">
			<div class="pay-wave"></div>
			<div class="pay-descr">
				<p class="text-center">扫码后请输入以下金额支付，否则系统判定为支付不成功。</p>
			</div>
			<div class="pay-amount">
				￥<%=prize%></div>


			<div class="pay-main">
				
				<div class="pay-content">
					<img class="pay-content-img"
						src="../../examples/<%=photo.getImgpath()%>" alt="支付二维码">
				</div>
			</div>
			<div class="pay-time">
				<ul class="countdown">
					<li><span class="minutes" id="minutes">00</span>
						<p class="minutes_ref">分</p></li>
					<li class="seperator">:</li>
					<li><span class="seconds" id="seconds">00</span>
						<p class="seconds_ref">秒</p></li>
				</ul>
			</div>
			<div class="pay-hint">
				<p id="tips">
					<!-- 打开支付宝扫一扫 -->
				</p>
			</div>
		</div>
		<div class="footer">
			<p>提示：请勿重复付款，如未到账请联系商家。</p>
		</div>
	</div>


	<script type="text/javascript">
		var maxtime = 3 * 60; // 
		var timer = setInterval("CountDown()", 1000);
		function CountDown() {
			if (maxtime >= 0) {
				minutes = Math.floor(maxtime / 60);
				seconds = Math.floor(maxtime % 60);
				document.getElementById("minutes").innerHTML = minutes;
				document.getElementById("seconds").innerHTML = seconds;
				--maxtime;
			} else {
				clearInterval(timer);
				document.getElementById("tips").innerHTML = "二维码已过期，请不要扫描支付！!"
			}
		}
	</script>

</body>
</html>