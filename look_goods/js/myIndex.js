var img = null;
var time = null;
window.onload = function() {
	img = document.getElementById('ad').getElementsByTagName('img')[0];
	
	// 鼠标移入
	img.onmouseover = function(event) {
		// 创建一个节点存放大图并显示
		var div = document.createElement('div');
		div.id  = 'bigImg';
		div.className = 'bigImg';
		// 创建img
		var img = document.createElement('img');
		img.src = this.parentNode.href; // 在a标签存放的href
		// 将img放入div
		div.appendChild(img)
		
		// 创建一个p标签存放图片描述
		var p = document.createElement('p');
		p.innerHTML = this.parentNode.title; // 在a标签存放的title
		// 将p标签加入到div中
		div.appendChild(p);
		
		// 将div加入到body中
		document.body.appendChild(div);
		
		// 启动定时器动态改变宽度和高度，上限为大图宽高像素值
		var h = this.parentNode.getAttribute('h');
		var w = this.parentNode.getAttribute('w');
		// console.log(h + " : " + w)
		
		// 防止影响下一次操作，先清除定时器
		if(null != time) {
			window.clearInterval(time);
			time = null;
		}
		
		if(null == time) {
			time = window.setInterval(function() {
				var height = div.style.height ? div.style.height : 
								document.defaultView.getComputedStyle(div, null).height;
				var width = div.style.width ? div.style.width : 
								document.defaultView.getComputedStyle(div, null).width;
				
				height = parseInt(height);
				width = parseInt(width);
				
				height = height + 10;  // 定时器每跑一次添加5个像素宽高
				width = width + 10;
				if(height > h) {
					height = h;
				}
				if(width > w) {
					width = w;
				}
				
				div.style.height = height + 'px';
				div.style.width = width + 'px';
				
				// 当宽高都已经显示完全后，清除定时器
				if(height == h && width == w) {
					if(null != time) {
						window.clearInterval(time)
						time = null;	
					}
				}
			}, 10);
		}
		
	}
	
	// 鼠标移出
	img.onmouseout = function(event) {
		var div = document.getElementById('bigImg');
		div.remove();
	}
	
	// 鼠标在内部移动
	img.onmousemove = function(event) {
		var div = document.getElementById('bigImg');
		// 获取鼠标X和Y轴坐标
		var evt = event ? event : window.event;
		var x = evt.pageX + 5;
		var y = evt.pageY + 5;
		
		div.style.left = x + 'px';
		div.style.top = y + 'px';
	}
	
}