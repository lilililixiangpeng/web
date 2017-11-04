$(document).ready(function(){
	//切换验证码
	$("#registered-verification-code-body-img,#registered-button-rotation").on('click',ChangeVerficode);
	//验证注册信息
	Validation();
	$("#registered-body-checkbox").on('click',function(){
		//密码是否显示部分
	    if (document.getElementById("registered-body-checkbox").checked) {
	    	$("#registered-body-password-2").attr("type","text");
	    	$("#registered-body-password-1").attr("type","text");
	    }else{
	    	$("#registered-body-password-2").attr("type","password");
	    	$("#registered-body-password-1").attr("type","password");
	    }
	});
})

	function Validation(){
		$("#registered-head-num").on('blur',function(){
			//检测邮箱或者手机号的正则表达式
			var phone=/^1[34578][0-9]{9}/;
	   		var isphone=phone.test($("#registered-head-num").val());
	    	var mail=/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
	    	var ismail=mail.test($("#registered-head-num").val());
	    	//消除验证码的影响
	    	$("#registered-verification-code-head").off('blur');
	    	$("#registered-verification-code-warning").html(" ");
	    	$("#registered-verification-code-head").val();
	    	if($("#registered-head-num").val()==""){
	    		$("#registered-body-warining").html("邮箱或手机号不能为空！");
	    	}
	    	else{
	    	//检查数据库是否有此用户名
	    	$.ajax({
					type:"post",
					url:"RegisterUser",
					dataType:"json",
					data:{
						username:$("#registered-head-num").val()
					},
					success: function(data){
						var resultJSONData = JSON.parse(data);
						if(resultJSONData.key==1){
							$("#registered-body-warining").html("用户已经注册！");
						}
						if(resultJSONData.key==2){
							//以下完成邮箱和手机逻辑
							//邮箱注册
	    					if(!ismail&&!isphone){
	    						$("#registered-body-warining").html("请输入正确的邮箱或手机号！");
	    					}
	    					else if(ismail&&!isphone){
	    						$("#registered-body-warining").html(" ");
	    						$("#registered-body").css("display","block");
	    						$("#registered-foot").css("top","58%");
	    						$("#registered-body-password-1,#registered-body-password-2").on('blur',function(){
	    						$("#registered-verification-code-head").off('blur');
	    						$("#registered-verification-code-warning").html(" ");
	    						$("#registered-verification-code-head").val();
	    						if(!CheckVerificode1()&&($("#registered-body-password-1").val()=="")){
	    							$("#registered-body-password-1-box-warning").html("密码不能为空！");
	    						}
	    						else if(!CheckVerificode1()&&($("#registered-body-password-1").val()!="")){
	    							$("#registered-body-password-1-box-warning").html("请输入6-16位密码！");
	    						}
	    						else if(CheckVerificode1()){
	    							$("#registered-body-password-1-box-warning").html(" ");
	    						}
	    						if(CheckVerificode1()&&!EqualPassword()&&($("#registered-body-password-2").val()=="")){
	    							$("#registered-body-password-1-box-warning").html(" ");
	    							$("#registered-body-password-2-box-warning").html("确认密码不能为空！");
	    						}
	    			    		else if(CheckVerificode1()&&!EqualPassword()&&($("#registered-body-password-2").val()!="")){
	    							$("#registered-body-password-1-box-warning").html(" ");
	    							$("#registered-body-password-2-box-warning").html("密码不同,请重新输入！");
	    						}
	    						else if(CheckVerificode1()&&EqualPassword()&&($("#registered-body-password-2").val()!="")){
	    							$("#registered-body-password-1-box-warning").html(" ");
	    							$("#registered-body-password-2-box-warning").html(" ");
	    							//判断验证码对错
	    							$("#registered-verification-code-head").on('blur',function(){
	    							$.ajax({
    									type:"post",
    									url:"CheckVerificode",
    									dateType:"json",
    									data:{verificode:$("#registered-verification-code-head").val()},
    									success: function(data){
    									var resultJSONData = JSON.parse(data);
    									if(resultJSONData.key==1){
    										$("#registered-verification-code-warning").html(resultJSONData.consequence);
    									}
    									else if(resultJSONData.key==2){
    										$("#registered-verification-code-warning").html(" ");
    										//注册点击事件
    										$("#registered-button").on('click',function(){
    											$("#registered-body").css("display","none");
        										$("#registered-foot").css("display","none");
        										$("#registered-mail").css("display","block");
        										//鼠标移入移除判断用户名和验证码是否正确
        										$("#registered-mail-body,#registered-mail-foot").on('blur',function(){
        											if(!Checkloginusername()&&($("#registered-mail-body").val()!="")){
        												$("#registered-mail-body-head-warning").html("用户名大小在4-16位！");
        											}
        											else if(Checkloginusername()){
        											//查看用户名和验证码是否存在
        											if(($("#registered-mail-body").val()=="")&&($("#registered-mail-foot").val()=="")){
        												$("#registered-mail-body-head-warning").html("用户名不能为空！");
        												$("#registered-mail-foot-head-warning").html("验证码不能为空！");
        											}
        											else if((($("#registered-mail-body").val()!="")&&($("#registered-mail-foot").val()==""))){
        												$("#registered-mail-foot-head-warning").html("验证码不能为空！");
        												$.ajax({
        													type:"post",
    														url:"CheckLoginUsrname",
    														dateType:"json",
    														data:{loginusername:$("#registered-mail-body").val()},
        													success: function(data){
        														var resultJSONData = JSON.parse(data);
        														if(resultJSONData.key==1){
        															$("#registered-mail-body-head-warning").html("用户名已经存在！");
        														}
        														if(resultJSONData.key==2){
        															$("#registered-mail-body-head-warning").html(" ");
        														}
        													
        													},
        													error: function(){
        														alert("你的浏览器不支持此网页,请更换浏览器!");
        													}
        												});
        											}
        											else if((($("#registered-mail-body").val()=="")&&($("#registered-mail-foot").val()!=""))){
        												$("#registered-mail-body-head-warning").html("用户名不能为空！");
        												$.ajax({
        													type:"post",
    														url:"CheckMailAction",
    														dateType:"json",
    														data:{mailnum:$("#registered-mail-foot").val()},
        													success: function(data){
        														var resultJSONData = JSON.parse(data);
        														if(resultJSONData.key==1){
        															$("#registered-mail-foot-head-warning").html("请先获得验证码！");
        														}
        														if(resultJSONData.key==2){
        															$("#registered-mail-body-head-warning").html(" ");
        														}
        														if(resultJSONData.key==3){
        															$("#registered-mail-body-head-warning").html("验证码错误,请重新输入！");
        														}
        													
        													},
        													error: function(){
        														alert("你的浏览器不支持此网页,请更换浏览器!");
        													}
        												});
        											}
        											else if((($("#registered-mail-body").val()!="")&&($("#registered-mail-foot").val()!=""))){
        												$("#registered-mail-body-head-warning").html(" ");
        												$("#registered-mail-foot-head-warning").html(" ");
        												//如果不为空，先判断用户名是否符合格式
        												$.ajax({
        													type:"post",
    														url:"CheckLoginUsrname",
    														dateType:"json",
    														data:{loginusername:$("#registered-mail-body").val()},
        													success: function(data){
        														var resultJSONData = JSON.parse(data);
        														if(resultJSONData.key==1){
        															$("#registered-mail-body-head-warning").html("用户名已经存在！");
        														}
        														if(resultJSONData.key==2){
        															$("#registered-mail-body-head-warning").html(" ");
        															//系统判断完用户民名后，再判断验证码是否正确，如果正确则注册成功！
        															$.ajax({
        																type:"post",
    																	url:"CheckMailAction",
    																	dateType:"json",
    																	data:{mailnum:$("#registered-mail-foot").val()},
        																success: function(data){
        																var resultJSONData = JSON.parse(data);
        																if(resultJSONData.key==1){
        																	$("#registered-mail-foot-head-warning").html("请先获得验证码！");
        																}
        																if(resultJSONData.key==2){
        																	$("#registered-mail-body-head-warning").html(" ");
        																	//提交点击事件，即使注册成功后才能开始点击的事件
        																	$("#mail-submit-button-href").on('click',function(event){
        																		//将用户储存到数据库
        																		$.ajax({
        																			type:"post",
        																			url:"AddUser_MethodAction",
        																			dateType:"json",
        																			data:{username:$("#registered-head-num").val(),
        																				  password:$("#registered-body-password-1").val(),
        																				  loginusername:$("#registered-mail-body").val()
        																			},
        																			success: function(data){
        																				var resultJSONData = JSON.parse(data);
        																				if(resultJSONData.key==1){
        																					$.cookie("isimg", "true", { expires: 7 });
        																					$("#registered-mail").css("display","none");
        																					$("#login-main").css("display","none");
        																					$("#registered-foot").css("top","39%");
        																					$("#list-right").css("display","none");
        																					
        																					$("#submit-success").css("display","block");
        																					$("#submit-success-box").css("display","block");
        																					_success();
        																					
        																				}
        																			},
        																			error: function(){
        																				alert("你的浏览器不支持此网页,请更换浏览器!");
        																			}
        																		});
        																	
        																	
        																	});
        																}
        																if(resultJSONData.key==3){
        																	$("#registered-mail-body-head-warning").html("验证码错误,请重新输入！");
        																}
        													
        															},
        															error: function(){
        																alert("你的浏览器不支持此网页,请更换浏览器!");
        															}
        														});
        														//邮箱验证码判断结束
        														}
        													},
        													error: function(){
        														alert("你的浏览器不支持此网页,请更换浏览器!");
        													}
        												});
        												//用户名判断结束
        											}
        											}
        										});
        										//鼠标移入移除判断用户名和验证码是否正确结束
    										});
    										//注册点击事件结束
    									}
    									else if(resultJSONData.key==3){
    										$("#registered-verification-code-warning").html(resultJSONData.consequence);
    									}
    								},
    								error: function(){
    									alert("你的浏览器不支持此网页,请更换浏览器!");
    								}
    								});
	    						});
	    					}
	    				});	
	    			}
	    			//手机号注册
	    			else if(!ismail&&isphone){
	    			
	    			}
	    		//以上完成逻辑
	    		
				}
						
			   },
				error: function(){
					alert("你的浏览器不支持此网页,请更换浏览器!");
				}	
			});	
			}
		});
	}


	function ChangeVerficode(){
		$("#registered-verification-code-body-img").attr("src","Verification.action?timestamp=" + new Date().getTime());
	}
	
	function CheckVerificode1(){
		var loginpassword=$("#registered-body-password-1").val();
		if(loginpassword.length>=6&&loginpassword.length<=16){
			return true;
		}else{
			return false;
		}
	}
	
	function EqualPassword(){
		var loginpassword1=$("#registered-body-password-2").val();
		var loginpassword2=$("#registered-body-password-1").val();
		if(loginpassword1==loginpassword2){
			return true;
		}else{
			return false;
		}
	}
	
	var time=60;
	function mailclick(e){
		//请求验证码
		$.ajax({
        	type:"post",
    		url:"SendMailAction",
    		dateType:"json",
    		data:{loginmail:$("#registered-head-num").val()},
        	success: function(data){
        		var resultJSONData = JSON.parse(data);
        	},
        	error: function(){
        		alert("你的浏览器不支持此网页,请更换浏览器!");
        	}
        });
		//修改按钮样式部分
		$("#registered-mail-foot-button-herf").removeAttr("onclick");
		$("#registered-mail-foot-button").css("background-color","#ADADAD");
		time=60;
		setTime=setInterval(function(){
			if(time<=0){
				$("#registered-mail-foot-button-herf").attr("onclick","mailclick(event)");
				$("#registered-mail-foot-button-herf").html("获取邮箱验证码");
				$("#registered-mail-foot-button").css("background-color","#FF0000");
            	clearInterval(setTime);
             	return;
        	}else{
				time=time-1;		
			}
			$("#registered-mail-foot-button-herf").text("("+time+"S)"+"后可重新发送.");
		},1000);
		e.cancelBubble = true;
	}
	
	
	function Checkloginusername(){
		var loginpassword=$("#registered-mail-body").val();
		if(loginpassword.length>=4&&loginpassword.length<=16){
			return true;
		}else{
			return false;
		}
	}
	
	function _success() {
        zeroModal.success('注册成功!');
        
	}
	