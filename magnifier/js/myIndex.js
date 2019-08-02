var smallDiv = null; // 存放小图的div
var maskDiv = null; // 遮罩部分的div
var bigDiv = null; // 存放大图的div
var bigDivImg = null; // 大图img

var maskDivWidth = 0; // 遮罩div宽度
var maskDivHeight = 0;
var smallDivWidth = 0; // 小图div宽度
var smallDivHeight = 0;
var bigDivWidth = 0; // 大图div宽度
var bigDivHeight = 0;

window.onload = function() {
	smallDiv = document.getElementById('smallDiv');
	maskDiv = document.getElementById('maskDiv');

	smallDivWidth = smallDiv.style.width ? smallDiv.style.width :
					document.defaultView.getComputedStyle(smallDiv, null).width;
	smallDivHeight = smallDiv.style.height ? smallDiv.style.height :
					document.defaultView.getComputedStyle(smallDiv, null).height;
	maskDivWidth = maskDiv.style.width ? maskDiv.style.width :
					document.defaultView.getComputedStyle(maskDiv, null).width;
	maskDivHeight = maskDiv.style.height ? maskDiv.style.height :
					document.defaultView.getComputedStyle(maskDiv, null).height;
	smallDivWidth = parseInt(smallDivWidth);
	smallDivHeight = parseInt(smallDivHeight);
	maskDivWidth = parseInt(maskDivWidth);
	maskDivHeight = parseInt(maskDivHeight);
	// console.log(smallDivWidth + ":" + maskDivWidth);

	bigDiv = document.getElementById('bigDiv');
	bigDivImg = document.getElementById('bigDiv').getElementsByTagName('img')[0];
	
	bigDivWidth = bigDiv.style.width ? bigDiv.style.width :
					document.defaultView.getComputedStyle(bigDiv, null).width;
	bigDivHeight = bigDiv.style.width ? bigDiv.style.width :
					document.defaultView.getComputedStyle(bigDiv, null).width;
	bigDivWidth = parseInt(bigDivWidth);
	bigDivHeight = parseInt(bigDivHeight);
	// console.log(bigDivWidth);
	
	smallDiv.onmouseover = function(event) {
		showBigDivImg();
	}
	
	// 鼠标移出，小图上的遮罩消失，大图div也消失
	smallDiv.onmouseout = function(event) {
		maskDiv.style.display = 'none';
		bigDiv.style.display = 'none';
	}
	
	smallDiv.onmousemove = function(event) {
		showBigDivImg();
	}
	
}

// 显示大图对应的小图部分，产生被放大效果
function showBigDivImg(event) {
	// 获取鼠标位置
	var evt = event ? event : window.event;
	var pointX = evt.layerX;
	var pointY = evt.layerY;
	
	// 获取遮罩div的中心点X，Y
	pointX = pointX - (maskDivWidth / 2);
	pointY = pointY - (maskDivHeight / 2);
	// 控制左 上 右 下 的边界部分，遮罩不能移出小图div
	if(pointX <= 0) {  // 左
		pointX = 0;
	}
	if(pointY <= 0 ) {  // 上
		pointY = 0;
	}
	if(pointX >= (smallDivWidth - maskDivWidth)) {  // 右
		pointX = smallDivWidth - maskDivWidth;
	}
	if(pointY >= (smallDivHeight - maskDivHeight)) {  // 下
		pointY = smallDivHeight - maskDivHeight;
	}
	
	// 显示遮罩display='block'
	maskDiv.style.top = pointY + 'px';
	maskDiv.style.left = pointX + 'px';
	maskDiv.style.display = 'block';
	// 显示大图部分，定位absolute，
	bigDiv.style.display = 'block';
	bigDiv.style.position = 'absolute';
	// 设置bigDiv的top， left值
	var smallDivtop = smallDiv.offsetTop;
	var smallDivLeft = smallDiv.offsetLeft;
	bigDiv.style.top = smallDivtop + 'px';
	bigDiv.style.left = smallDivLeft + smallDivWidth + 50 + 'px';
	// 小图坐标与大图坐标大致对应显示，
	// bigImgTop = - Y * (大图像素高 / 小图像素高)
	var bigImgTop = - pointY * (bigDivImg.offsetHeight / bigDivHeight);
	var bigImgLeft = - pointX * (bigDivImg.offsetWidth / bigDivWidth);
	
	bigDivImg.style.top = bigImgTop + 'px';
	bigDivImg.style.left = bigImgLeft + 'px';
}
