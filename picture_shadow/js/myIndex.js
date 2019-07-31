var ul = null;
var liBack = null; // 阴影
var liText = null; // 文字
var time1 = null; // 定时器阴影向上移动
var time2 = null; // 定时器阴影向下移动
var bottom = 0;  // 移动元素样式值
var currBottom = 0;  // 当前bottom值
window.onload = function() {
	ul = document.getElementById('ad');
	liBack = document.getElementsByTagName('li')[1];
	liText = document.getElementsByTagName('li')[2];
	bottom = liText.style.bottom ? liText.style.bottom : 
				document.defaultView.getComputedStyle(liText, null).bottom;
	bottom = parseInt(bottom);
	initBottom = bottom;
	// 给ul绑定鼠标移动到元素上事件
	ul.onmouseover = function() {
		if(null != time2) {
			window.clearInterval(time2);
			time2 = null;
		}
		
		if(null == time1) {
			time1 = window.setInterval(function() {
				bottom = bottom + 1;
				if(bottom > 0) {
					// 向上移动到了最大值，清除定时器
					if(null != time1) {
						window.clearInterval(time1);
						time1 = null;
					}
					return;
				}
				// 更新bottom样式值
				liBack.style.bottom = bottom + 'px';
				liText.style.bottom = bottom + 'px';
			}, 20);
		}
	}
	
	// 给ul绑定鼠标移出元素事件
	ul.onmouseout = function() {
		if(null != time1) {
			window.clearInterval(time1);
			time1 = null;
		}
		
		if(null == time2) {
			time2 = window.setInterval(function() {
				bottom = bottom - 1;
				if(bottom < initBottom) {
					// 向下移动到最大值，清除定时器
					if(null != time2) {
						window.clearInterval(time2);
						time2 = null;
					}
					return;
				}
				// 更新
				liBack.style.bottom = bottom + 'px';
				liText.style.bottom = bottom + 'px';
			}, 20);
		}
	}
	
}
