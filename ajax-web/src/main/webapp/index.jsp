<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ajax</title>
<script type="text/javascript" src="js/ajax.js" charset="UTF-8"></script>
<script type="text/javascript" charset="UTF-8">
	function getJson2() {
		doAjax('json', function(data) {
			//封装的js中已经包含json的转换
			console.log(data[0].username);
			//将json对象数组显示在ul中
			for (var i = 0; i < data.length; i++) {
				var ul = document.createElement('ul');
				ul.innerHTML = '<li>' + data[i].name + '</li>' + '<li>'
						+ data[i].pwd + '</li>' + '<li>' + data[i].birthday
						+ '</li>'
				document.body.appendChild(ul);
			}
		}, 'get', "AjaxDataServlet?type=json", '')
	}
</script>
</head>

<body>
<%
	request.setAttribute("type", "json");
%>
	<a href="AjaxDataServlet?type=${type}">json数据</a>
	
	<p>
		<a href="javascript:getJson2()">异步方式获取json对象</a>
	</p>
</body>
</html>
