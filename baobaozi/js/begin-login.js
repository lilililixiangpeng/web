  $(document).ready(function(){
  
  	//登陆
  	$("#loginbutton").on('click',function(){
  		$("#login-list-2").css("border-bottom-color","#E0E0E0");
  		$("#login-list-2-registered").css("color","#5B5B5B");
  		$("#login-registered").css("display","block");
  		$("#registered-foot").css("display","none");
  		$("#login-list-1").css("border-bottom-color","#1ebcc5");
  		$("#login-list-1-login").css("color","#1ebcc5");
  		$("#login-main").css("display","block");
  		$("#login").css("display","block");
  		$("#login-checkbox-box").css("display","block");
  		$("#registered").css("display","none");
  		$("#login-list-1").unbind();
  		$("#login-list-1-login").unbind();
  		$("#login-list-2").on('mouseover',function (){  
            $("#login-list-2").css("border-bottom-color","#1ebcc5");
            $("#login-list-2-registered").css("color","#1ebcc5");
        })
        $("#login-list-2").on('mouseout',function (){  
            $("#login-list-2").css("border-bottom-color","#E0E0E0"); 
            $("#login-list-2-registered").css("color","#5B5B5B");
        });
        
        $("#login-list-1").on('click',function(){
        	ChangeVerficode();
        	$("#registered-mail-body").val("");
        	$("#registered-mail-body-head-warning").html(" ");
        	$("#registered-mail-foot").val("");
        	$("#registered-mail-foot-head-warning").html(" ");
        	$("#registered-mail").css("display","none");
        	$("#registered-verification-code-head").val("");
        	$("#registered-body-password-1").val("");
        	$("#registered-body-password-2").val("");
        	$("#registered-body-warining").html(" ");
        	$("#registered-body-password-1-box-warning").html(" ");
        	$("#registered-body-password-2-box-warning").html(" ");
        	$("#registered-verification-code-warning").html(" ");
        	$("#registered-head-num").val("");
        	$("#registered-body").css("display","none");
			$("#registered-foot").css("top","39%");
        	$("#registered-foot").css("display","none");
 			$("#login").css("display","block");
  			$("#registered").css("display","none");
  			$("#login-checkbox-box").css("display","block");
  			$("#login-list-2").css("border-bottom-color","#E0E0E0");
  			$("#login-list-2-registered").css("color","#5B5B5B");
  			$("#login-list-1").css("border-bottom-color","#1ebcc5");
  			$("#login-list-1-login").css("color","#1ebcc5");
  			$("#login-list-1").off('mouseover');
  			$("#login-list-1").off('mouseout');
  			$("#login-list-2").on('mouseover',function (){  
  	            $("#login-list-2").css("border-bottom-color","#1ebcc5");
  	            $("#login-list-2-registered").css("color","#1ebcc5");
  	        })
  	        $("#login-list-2").on('mouseout',function (){  
  	            $("#login-list-2").css("border-bottom-color","#E0E0E0"); 
  	            $("#login-list-2-registered").css("color","#5B5B5B");
  	        });
  		});
  
  		$("#login-list-2").on('click',function(){
  			$("#registered-foot").css("display","block");
  			$("#verification-code-body-img").attr("src","Verification.action?timestamp=" + new Date().getTime());
  			$("#login-in-head-warning").html(" ");
  			$("#login-in-body-warning").html(" ");
  			$("#login-in-foot-warning").html(" ");
  			$("#verification-code-warning").html(" ");
  			$("#login").css("display","none");
  			$("#registered").css("display","block");
  			$("#login-checkbox-box").css("display","none");
  			$("#login-list-1").css("border-bottom-color","#E0E0E0");
  			$("#login-list-1-login").css("color","#5B5B5B");
  			$("#verification-code").css("display","none");
  			$("#login-checkbox-box").css("top","51%");
  			$("#login-list-2").css("border-bottom-color","#1ebcc5");
  			$("#login-list-2-registered").css("color","#1ebcc5");
  			$("#login-list-2").off('mouseover');
  			$("#login-list-2").off('mouseout');
  			$("#login-list-1").on('mouseover',function (){  
  	            $("#login-list-1").css("border-bottom-color","#1ebcc5");
  	            $("#login-list-1-login").css("color","#1ebcc5");
  	        })
  	        $("#login-list-1").on('mouseout',function (){  
  	            $("#login-list-1").css("border-bottom-color","#E0E0E0"); 
  	            $("#login-list-1-login").css("color","#5B5B5B");
  	        });
  		});
  	
  	});
  	
  	//注册
  	$("#registeredbutton").on('click',function(){
  		$("#login-checkbox-box").css("display","none");
  		$("#login-list-1").css("border-bottom-color","#E0E0E0");
  		$("#login-list-1-login").css("color","#5B5B5B");
  		$("#login-registered").css("display","block");	
  		$("#login-list-2").css("border-bottom-color","#1ebcc5");
  		$("#login-list-2-registered").css("color","#1ebcc5");
  		$("#login-main").css("display","block");
  		$("#login").css("display","none");
  		$("#registered").css("display","block");
  		$("#registered-foot").css("display","block");
  		$("#login-list-2").unbind();
  		$("#login-list-2-registered").unbind();
  		$("#login-list-1").on('mouseover',function (){  
            $("#login-list-1").css("border-bottom-color","#1ebcc5");
            $("#login-list-1-login").css("color","#1ebcc5");
        })
        $("#login-list-1").on('mouseout',function (){  
            $("#login-list-1").css("border-bottom-color","#E0E0E0"); 
            $("#login-list-1-login").css("color","#5B5B5B");
        });
        
        $("#login-list-1").on('click',function(){
        	ChangeVerficode();
        	$("#registered-mail-body").val("");
        	$("#registered-mail-body-head-warning").html(" ");
        	$("#registered-mail-foot").val("");
        	$("#registered-mail-foot-head-warning").html(" ");
        	$("#registered-mail").css("display","none");
        	$("#registered-body-password-1").val("");
        	$("#registered-body-password-2").val("");
        	$("#registered-head-num").val("");
        	$("#registered-verification-code-head").val("");
        	$("#registered-body-warining").html(" ");
        	$("#registered-body-password-1-box-warning").html(" ");
        	$("#registered-body-password-2-box-warning").html(" ");
        	$("#registered-verification-code-warning").html(" ");
        	$("#registered-body").css("display","none");
			$("#registered-foot").css("top","39%");
        	$("#registered-foot").css("display","none");
 			$("#login").css("display","block");
  			$("#registered").css("display","none");
  			$("#login-checkbox-box").css("display","block");
  			$("#login-list-2").css("border-bottom-color","#E0E0E0");
  			$("#login-list-2-registered").css("color","#5B5B5B");
  			$("#login-list-1").css("border-bottom-color","#1ebcc5");
  			$("#login-list-1-login").css("color","#1ebcc5");
  			$("#login-list-1").unbind("mouseover");
  			$("#login-list-1").unbind("mouseout");
  			$("#login-list-2").on('mouseover',function (){  
  	            $("#login-list-2").css("border-bottom-color","#1ebcc5");
  	            $("#login-list-2-registered").css("color","#1ebcc5");
  	        })
  	        $("#login-list-2").on('mouseout',function (){  
  	            $("#login-list-2").css("border-bottom-color","#E0E0E0"); 
  	            $("#login-list-2-registered").css("color","#5B5B5B");
  	        });
  		});
  
  		$("#login-list-2").on('click',function(){
  			$("#registered-foot").css("display","block");
  			$("#verification-code-body-img").attr("src","Verification.action?timestamp=" + new Date().getTime());
  			$("#login-in-head-warning").html(" ");
  			$("#login-in-body-warning").html(" ");
  			$("#login-in-foot-warning").html(" ");
  			$("#verification-code-warning").html(" ");
  			$("#login").css("display","none");
  			$("#registered").css("display","block");
  			$("#login-checkbox-box").css("display","none");
  			$("#verification-code").css("display","none");
  			$("#login-checkbox-box").css("top","51%");
  			$("#login-list-1").css("border-bottom-color","#E0E0E0");
  			$("#login-list-1-login").css("color","#5B5B5B");
  			$("#login-list-2").css("border-bottom-color","#1ebcc5");
  			$("#login-list-2-registered").css("color","#1ebcc5");
  			$("#login-list-2").unbind("mouseover");
  			$("#login-list-2").unbind("mouseout");
  			$("#login-list-1").on('mouseover',function (){  
  	            $("#login-list-1").css("border-bottom-color","#1ebcc5");
  	            $("#login-list-1-login").css("color","#1ebcc5");
  	        })
  	        $("#login-list-1").on('mouseout',function (){  
  	            $("#login-list-1").css("border-bottom-color","#E0E0E0"); 
  	            $("#login-list-1-login").css("color","#5B5B5B");
  	        });
  		});
        
  	});
  	
  	//关闭
  	$("#close-login").click(function(){
  		$("#registered-mail-body").val("");
    	$("#registered-mail-body-head-warning").html(" ");
    	$("#registered-mail-foot").val("");
    	$("#registered-mail-foot-head-warning").html(" ");
  		$("#registered-mail").css("display","none");
  		$("#registered-body-password-1").val("");
    	$("#registered-body-password-2").val("");
    	$("#registered-head-num").val("");
    	$("#registered-verification-code-head").val("");
    	$("#registered-body-warining").html(" ");
    	$("#registered-body-password-1-box-warning").html(" ");
    	$("#registered-body-password-2-box-warning").html(" ");
    	$("#registered-verification-code-warning").html(" ");
  		$("#login-in-head-warning").html(" ");
		$("#login-in-body-warning").html(" ");
		$("#login-in-foot-warning").html(" ");
		$("#verification-code-warning").html(" ");
  		$("#login-main").css("display","none");
  		$("#login-checkbox-box").css("top","51%");
  		$("#login-checkbox-box").css("display","none");
  		$("#verification-code").css("display","none");
  		$("#registered-foot").css("top","39%");
  		$("#registered-body").css("display","none");
  		
  	});
  	
 	
  	
});