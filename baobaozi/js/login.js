$(document).ready(function(e){
	checkSubmitAll();
	$("body").on('keydown',function(event){
		if(event.keyCode==27){
			$("#login-main").css("display","none");
		}
	});
	
	$("#list-right").css("display","block");
	if ($.cookie("rmbUser") == "true") {
		
	if($.cookie("isimg") == "true"){
		$("#list-right").css("display","none");
		$("#submit-success").css("display","block");
		$("#submit-success-box").css("display","block");
	}
	if($.cookie("isimg") == "false"){	
		$("#submit-success").css("display","none");
	}
    $("#login-check").attr("checked", true);
    $("#login-username").val($.cookie("username"));
    $("#login-password").val($.base64.decode($.cookie("password")));
    
    //登录头像模块
    $.ajax({
		type:"post",
    	url:"GetLoginUsername",
    	dateType:"json",
    	data:{username:$.cookie("username")},
    	success: function(data){
    		var resultJSONData = JSON.parse(data);
    		if(resultJSONData.key==1){
    			$("#submit-success-box-loginusername").html(resultJSONData.loginusername);
    		}
    	},
    	error: function(){
    		alert("你的浏览器不支持此网页,请更换浏览器!");
    	}
	});
	$("#submit-success-control").on('mouseover',function(){
		$("#submit-success-box").css("height","210px");
		$("#submit-success").css({"height":"45px","width":"45px","top":"15px","border":"1px solid white"});
		$("#submit-success-img").css({"height":"45px","width":"45px"});
	});
	$("#submit-success-control").on('mouseout',function(){
		$("#submit-success-box").css("height","0px");
		$("#submit-success").css({"height":"35px","width":"35px","top":"1px","border":"1px solid #3C3C3C"});
		$("#submit-success-img").css({"height":"35px","width":"35px"});
	});
	$("#submit-success-foot-href").click(function(){
		$.cookie("isimg", "false", { expires: 7 });
		$("#list-right").css("display","block");
		$("#submit-success").css("display","none");
		$("#submit-success-box").css("display","none");
		$("#verification-code-head").val("");
		$("#verification-code-body-img").attr("src","Verification.action");
	});
	//结束
	
    $("#button-href").on('click',function(){
    				$("#login-in-foot-warning").html(" ");
					$("#login-in-body-warning").html(" ");
					$("#login-in-head-warning").html(" ");
					$.ajax({
					type:"post",
					url:"CheckUser_MethodAction",
					dataType:"json",
					data:{
						username:$("#login-username").val(),
						password:$("#login-password").val()
					},	
					success: function(data){
						var resultJSONData = JSON.parse(data);
						if(resultJSONData.key==1){
							$.cookie("isimg", "true", { expires: 7 });
							$("#login-main").css("display","none");
							$("#login-in-foot-warning").html(" ");
							$("#login-in-head-warning").html(" ");
							$("#list-right").css("display","none");
							$("#submit-success").css("display","block");
							$("#submit-success-box").css("display","block");
						}
						if(resultJSONData.key==2){
							$("#button-href").off("click");
							$("#login-in-foot-warning").html(resultJSONData.consequence);
							$("#login-in-head-warning").html(" ");
						}
						if(resultJSONData.key==3){
							$("#button-href").off("click");
							$("#login-in-head-warning").html(resultJSONData.consequence);	
							$("#login-in-foot-warning").html(" ");
						}
					},
					error: function(){
						alert("系统异常，请稍后再试");
					}
					});
				});
    }
   	
});	
	function checkSubmitAll() {
		$("#login-username,#login-password").on('blur',function(){
			$("#button-href").off('click');
			$("#login-main").off('keydown');
			var phone=/^1[34578][0-9]{9}/;
	   	 	var isphone=phone.test($("#login-username").val());
	    	var mail=/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
	    	var ismail=mail.test($("#login-username").val());
	    	
	    	if(($("#login-username").val()=="")&&($("#login-password").val()=="")){
	    		$("#login-in-body-warning").html("手机号或者邮箱不能为空！");
	    		$("#login-in-foot-warning").html("密码不能为空！");
	    		$("#login-in-head-warning").html(" ");
	    	}
		    else if (!ismail&&!isphone&&(!checkSubmitPassword())&&($("#login-username").val()!="")&&($("#login-password").val()!="")){
				$("#login-in-body-warning").html("请输入正确的邮箱或手机号！");
				$("#login-in-foot-warning").html("请输入6-16位的密码！");
				$("#login-in-head-warning").html(" ");
			}
			else if(!ismail&&!isphone&&!checkSubmitPassword()&&($("#login-username").val()!="")&&($("#login-password").val()=="")){
				$("#login-in-body-warning").html("请输入正确的邮箱或手机号！");
				$("#login-in-foot-warning").html("密码不能为空！");
				$("#login-in-head-warning").html(" ");
			}
			else if(!ismail&&!isphone&&!checkSubmitPassword()&&($("#login-username").val()=="")&&($("#login-password").val()!="")){
				$("#login-in-body-warning").html("手机号或者邮箱不能为空！");
				$("#login-in-foot-warning").html("请输入6-16位的密码！");
				$("#login-in-head-warning").html(" ");
			}
			else if((ismail||isphone)&&!checkSubmitPassword()&&($("#login-username").val()!="")&&($("#login-password").val()=="")){
				$("#login-in-body-warning").html(" ");
				$("#login-in-foot-warning").html("密码不能为空！");
				$("#login-in-head-warning").html(" ");
			}
			else if(!ismail&&!isphone&&checkSubmitPassword()&&($("#login-username").val()=="")&&($("#login-password").val()!="")){			
				$("#login-in-body-warning").html("手机号或者邮箱不能为空！");
				$("#login-in-foot-warning").html(" ");
				$("#login-in-head-warning").html(" ");
			}
			else if((ismail||isphone)&&!checkSubmitPassword()&&($("#login-username").val()!="")&&($("#login-password").val()!="")){		
				$("#login-in-body-warning").html(" ");
				$("#login-in-foot-warning").html("请输入6-16位的密码！");
				$("#login-in-head-warning").html(" ");
			}
			else if(!ismail&&!isphone&&checkSubmitPassword()&&($("#login-username").val()!="")&&($("#login-password").val()!="")){
				
				$("#login-in-body-warning").html("请输入正确的邮箱或手机号！");
				$("#login-in-foot-warning").html(" ");
				$("#login-in-head-warning").html(" ");
			}
			else{	
				$("#login-in-foot-warning").html(" ");
				$("#login-in-body-warning").html(" ");
				$("#login-in-head-warning").html(" ");
				$("#button-href").on('click',function(){
						//验证码显示部分
						$("#verification-code").css("display","block");
						$("#login-checkbox-box").css("top","61%");
						$("#verification-code-body-img,#button-rotation").on('click',function(){
							$("#verification-code-body-img").attr("src","Verification.action?timestamp=" + new Date().getTime()); 
						});
						//缓存是否选择部分
						if (document.getElementById("login-check").checked) {
      					var str_username = $("#login-username").val();
      					var str_password = $("#login-password").val();
      					$.cookie("rmbUser", "true", { expires: 7 }); //存储一个带7天期限的cookie
      					$.cookie("username", str_username, { expires: 7 });
      					$.cookie("password", $.base64.encode(str_password), { expires: 7 });
      					$.cookie("isimg", "true", { expires: 7 });
    			    }
    				else {
      					$.cookie("rmbUser", "false", { expire: -1 });
      					$.cookie("username", "", { expires: -1 });
      					$.cookie("password", "", { expires: -1 });
      					$.cookie("isimg", "false", { expires: 7 });
    				}
    				//验证码判断正确部分
    				$("#verification-code-head").on('blur',function(){
    				$.ajax({
    					type:"post",
    					url:"CheckVerificode",
    					dateType:"json",
    					data:{verificode:$("#verification-code-head").val()},
    					success: function(data){
    						var resultJSONData = JSON.parse(data);
    						if(resultJSONData.key==1){
    							$("#verification-code-warning").html(resultJSONData.consequence);
    						}
    						else if(resultJSONData.key==2){
    						$("#verification-code-warning").html(" ");
    						//用户登录验证部分
    						$.ajax({
							type:"post",
							url:"CheckUser_MethodAction",
							dataType:"json",
							data:{
								username:$("#login-username").val(),
								password:$("#login-password").val()
							},	
							success: function(data){
							var resultJSONData = JSON.parse(data);
							if(resultJSONData.key==1){
							//验证码消失部分
								$("#verification-code").css("display","none");
								$("#login-checkbox-box").css("top","51%");
								$("#login-main").css("display","none");
								$("#list-right").css("display","none");
								$("#submit-success").css("display","block");
								$("#submit-success-box").css("display","block");
								$("#login-in-foot-warning").html(" ");
								$("#login-in-head-warning").html(" ");
								$.ajax({
									type:"post",
							    	url:"GetLoginUsername",
							    	dateType:"json",
							    	data:{username:$.cookie("username")},
							    	success: function(data){
							    		var resultJSONData = JSON.parse(data);
							    		if(resultJSONData.key==1){
							    			$("#submit-success-box-loginusername").html(resultJSONData.loginusername);
							    		}
							    	},
							    	error: function(){
							    		alert("你的浏览器不支持此网页,请更换浏览器!");
							    	}
								});
								$("#submit-success-img").attr("src","GetImgAction?+date"+new Date());
							}
							if(resultJSONData.key==2){
								$("#verification-code-body-img").attr("src","Verification.action?timestamp=" + new Date().getTime());
								$("#login-in-foot-warning").html(resultJSONData.consequence);
								$("#login-in-head-warning").html(" ");
							}
							if(resultJSONData.key==3){
								$("#verification-code-body-img").attr("src","Verification.action?timestamp=" + new Date().getTime());
								$("#login-in-head-warning").html(resultJSONData.consequence);	
								$("#login-in-foot-warning").html(" ");
							}
						},
						error: function(){
							alert("你的浏览器不支持此网页,请更换浏览器!");
						}
						});
    				}
    				else if(resultJSONData.key==3){
    					$("#verification-code-warning").html(resultJSONData.consequence);
    					}
    				},
    					error: function(){
    						alert("你的浏览器不支持此网页,请更换浏览器!");
    					}
    				});
    			})	
				
				});
			} 
		})
	}
	
	function checkSubmitPassword(){
		var loginpassword=$("#login-password").val();
		if(loginpassword.length>=6&&loginpassword.length<=16){
			return true;
		}else{
			return false;
		}
	}
	
