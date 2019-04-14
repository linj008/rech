/*!
 * greenpay-api v1.0.0
 */
!function(){"use strict";var a=function(){var a=window.location.origin,b=1500,c=1e3,d=20,e={payQrcode:a+"/api/index/qrcode",payResult:a+"/api/index/query"},f=null,g=null;return{dataApi:e,resultCheckerInterval:b,qrcodeCheckerCount:d,qrcodeCheckerInterval:c,resultChecker:f,coundowner:g}}(),b=function(){var a=function(){var a=window.navigator.userAgent.toLowerCase();return"micromessenger"==a.match(/MicroMessenger/i)?1:0},b=function(){var a=navigator.userAgent.toLowerCase(),b="googlebot-mobile|android|avantgo|blackberry|blazer|elaine|hiptop|ip(hone|od)|kindle|midp|mmp|mobile|o2|opera mini|palm( os)?|pda|plucker|pocket|psp|smartphone|symbian|treo|up.(browser|link)|vodafone|wap|windows ce; (iemobile|ppc)|xiino|maemo|fennec";b=new RegExp(b);var c="1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|/(k|l|u)|50|54|e-|e/|-[a-w])|libw|lynx|m1-w|m3ga|m50/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(-|2|g)|yas-|your|zeto|zte-";if(c=new RegExp(c),b.test(a))return 1;var d=a.substring(0,4);return c.test(d)?1:0};return{isWeixin:a,isMobile:b}}(),c=function(){var c=function(){if(token&&timeout){var c=(b.isMobile(),b.isWeixin(),function(){timeout?$.ajax({type:"post",url:a.dataApi.payResult,data:{token:token},success:function(b){200==b.code&&(clearInterval(a.resultChecker),a.coundowner&&a.coundowner.reset(),b.content?window.location.replace(b.content):($(".btn-pay").attr("href","javascript:;").text("已支付成功，请返回").addClass("btn-success btn-disabled"),$(".pay-success").removeClass("hide"))),206==b.code&&($(".btn-pay").attr("href","javascript:;").text("已扫码，等待支付...").addClass("btn-success btn-disabled"),$(".pay-scaned").removeClass("hide"))}}):clearInterval(a.resultChecker)});a.resultChecker=setInterval(function(){c()},a.resultCheckerInterval)}},d=function(){timeout&&(a.coundowner=$(".countdown").downCount({date:timeout,offset:10},function(){timeout=0,$(".pay-timeout").removeClass("hide"),$(".btn-pay").attr("href","javascript:;").text("订单已过期，请返回").addClass("btn-disabled")}))},e=function(){window.onload=function(){var a=0;document.addEventListener("touchstart",function(a){a.touches.length>1&&a.preventDefault()}),document.addEventListener("touchend",function(b){var c=(new Date).getTime();c-a<=300&&b.preventDefault(),a=c},!1),document.addEventListener("gesturestart",function(a){a.preventDefault()})}};return{init:function(){e(),c(),d()}}}();$(function(){c.init()})}(jQuery);