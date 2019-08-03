var lis = document.getElementById('nav').getElementsByTagName('li');
// 绑定事件
for (var i = 0; i < lis.length; i++) {
	// 鼠标移上
	lis[i].onmouseover = function() {
		if(this.getElementsByTagName('ul').length > 0) {
			var ul = this.getElementsByTagName('ul')[0];
			ul.style.display = 'block';
		}
	}
	// 鼠标移出
	lis[i].onmouseout = function() {
		if(this.getElementsByTagName('ul').length > 0) {
			var ul = this.getElementsByTagName('ul')[0];
			ul.style.display = 'none';
		}
	}
}