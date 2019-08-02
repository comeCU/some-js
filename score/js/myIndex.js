window.onload = function() {
	var ul = document.getElementById('star');
	var lis = ul.getElementsByTagName('li');
	for (var i = 0; i < lis.length; i++) {
		lis[i].onclick = function() {
			var liClassName = this.className;
			ul.className = "nostar " + liClassName; // 选定ul下面的某个li显示
			// 弹出评分
			var score = this.getElementsByTagName('a')[0].title;
			alert("评分：" + score);
		}
	}
}