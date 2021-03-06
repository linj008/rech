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
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<meta http-equiv="Cache-Control" content="no-siteapp" />
<link rel="Bookmark" href="favicon.ico" >
<link rel="Shortcut Icon" href="favicon.ico" />
<!--[if lt IE 9]>
<script type="text/javascript" src="lib/html5.js"></script>
<script type="text/javascript" src="lib/respond.min.js"></script>
<![endif]-->
<link rel="stylesheet" type="text/css" href="../static/h-ui/css/H-ui.min.css" />
<link rel="stylesheet" type="text/css" href="../static/h-ui.admin/css/H-ui.admin.css" />
<link rel="stylesheet" type="text/css" href="../lib/Hui-iconfont/1.0.8/iconfont.css" />
<link rel="stylesheet" type="text/css" href="../static/h-ui.admin/skin/default/skin.css" id="skin" />
<link rel="stylesheet" type="text/css" href="../static/h-ui.admin/css/style.css" />
<!--[if IE 6]>
<script type="text/javascript" src="http://lib.h-ui.net/DD_belatedPNG_0.0.8a-min.js" ></script>
<script>DD_belatedPNG.fix('*');</script><![endif]-->
<!--/meta 作为公共模版分离出去-->

<title>充值测试 </title>
<meta name="keywords" content="添加用户 ">
<meta name="description" content="添加用户 ">
</head>
<body>
<article class="cl pd-20">
	<form action="addmember" method="post" class="form form-horizontal" id="form-member-add">
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>金额：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" class="input-text" value="" placeholder="" id="prize" name="prize">
			</div>
		</div>
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>支付方式：</label>
			<div class="formControls col-xs-8 col-sm-9 skin-minimal">
				<div class="radio-box">
					<input name="payWay" type="radio" id="sex-1" value="1" checked>
					<label for="sex-1">支付宝</label>
				</div>
				<div class="radio-box">
					<input type="radio" id="sex-2" value="0" name="payWay">
					<label for="sex-2">微信</label>
				</div>
			</div>
		</div>
		<input type="hidden" id="terminalId" name="terminalId" value="1"/>
		<input type="hidden" id="platformId" name="platformId" value="xxxxxx"/>
		<input type="hidden" id="merchantNo" name="merchantNo" value="1"/>
	</form>
</article>

<!--_footer 作为公共模版分离出去-->
<script type="text/javascript" src="../lib/jquery/1.9.1/jquery.min.js"></script> 
<script type="text/javascript" src="../lib/layer/2.4/layer.js"></script>
<script type="text/javascript" src="../static/h-ui/js/H-ui.js"></script>
<script type="text/javascript" src="static/h-ui.admin/js/H-ui.admin.page.js"></script>
<!--/_footer /作为公共模版分离出去-->

<!--请在下方写此页面业务相关的脚本-->
<script type="text/javascript" src="../lib/My97DatePicker/4.8/WdatePicker.js"></script>
<script type="text/javascript" src="../lib/jquery.validation/1.14.0/jquery.validate.js"></script> 
<script type="text/javascript" src="../lib/jquery.validation/1.14.0/validate-methods.js"></script> 
<script type="text/javascript" src="../lib/jquery.validation/1.14.0/messages_zh.js"></script> 
<script type="text/javascript">
$(function(){
	$('.skin-minimal input').iCheck({
		checkboxClass: 'icheckbox-blue',
		radioClass: 'iradio-blue',
		increaseArea: '20%'
	});
	
	$("#form-member-add").validate({
		rules:{
			username:{
				required:true,
				minlength:2,
				maxlength:16
			},
			mobile:{
				required:true,
				isMobile:true,
			},
			total_quota:{
				required:true
			},
			role_id:{
				required:true
			}
		},
		onkeyup:false,
		focusCleanup:true,
		success:"valid",
		submitHandler:function(form){
			$(form).ajaxSubmit({success: function(data) { // data 保存提交后返回的数据，一般为 json 数据
				if(data == 1){
	                alert("增加成功");
				}
				else if(data == 2){
					alert("只能增加比自己级别低的会员");
				}else{
					alert("增加失败");
				}
                var index = parent.layer.getFrameIndex(window.name);
    			parent.layer.close(index);
    			
            }});
		}
	});
});

function back(){
	window.location.href="memberlists";
}

function load(){
	$("#merchantNo").value = new Date().getTime();
	alert($("#merchantNo").value);
}
</script> 
<!--/请在上方写此页面业务相关的脚本-->
</body>
</html>