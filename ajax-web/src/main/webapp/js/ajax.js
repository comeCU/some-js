/* ajax异步调用封装 */
/**
 * @param {Object} json 是否需要处理的json
 * @param {Object} callback 自定义回调函数
 * @param {Object} method 请求方法类型 get/post
 * @param {Object} uri 请求地址
 * @param {Object} data 请求参数
 */
function doAjax(json, callback, method, uri, data) {
	var xmlHttpRequest = null;  // 用于区分IE 和非IE情况
	if(window.XMLHttpRequest) { // IE情况
		xmlHttpRequest = new XMLHttpRequest();
	} else {
		xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP")
	}
	// 注册回调函数
	xmlHttpRequest.onreadystatechange = function() {
		// 处理返回值
		if(xmlHttpRequest.readyState == 4) {
			if(xmlHttpRequest.status == 200) {
				// console.log(XMLHttpRequest);
				// 接收参数
				var result = xmlHttpRequest.responseText;
				if(json != undefined && json.toUpperCase() == "JSON") {
					var jsonObj = {};
					if(window.ActiveXObject) {
						jsonObj = eval('('+ result + ')'); 
					} else {
						jsonObj = JSON.parse(result); // 非IE情况
					}
					callback(jsonObj);
				} else {
					callback(JSObject);
				}
			} else {
				console.log("error");
			}
		}
	}
	// 发送请求
	if(method.toUpperCase() == "GET") {  // get
		xmlHttpRequest.open("GET", uri, true);
		xmlHttpRequest.send(null);
	} else {  // post
		xmlHttpRequest.open("POST", uri, true);
		xmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xmlHttpRequest.send(data);
	}
	
}