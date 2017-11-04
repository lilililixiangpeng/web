<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <link rel="icon" href="picture/logo.png" type="image/x-icon"/>
    <title>欢迎</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<style type="text/css">
@font-face{font-family:myfont;src:url("font/Weston Free.otf")}
body{  
  background: url("picture/background.jpg") no-repeat;
  height:100%;
  width:100%;
  overflow: hidden;
  background-size:cover;
}
.stress{
    font-size:110px;
	color:#666;
	text-decoration:none;
	font-family:myfont;
}
.begin{
    text-align: center;
	width:750px;
    height:200px;
    padding-top:210px;
    margin:0 auto;
}
</style>
  </head>
  
  <body>
		<div class="begin">
			<a href="begin.html" class="stress">Welcome</a>
		</div>
  </body>
</html>
