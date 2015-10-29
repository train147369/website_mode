// 类型判断代码块
var toString = Object.prototype.toString;
function getType(o){
	return toString.call(o).slice(8, -1);
}

// requestAnimFrame兼容
window.requestAnimFrame = (function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
			return window.setTimeout(callback, 1000 / 60);
		};
})();

// 原型链继承
if(!Object.create){
	Object.create = function (proto){
		function F(){}
		F.prototype = proto;
		return new F;
	}
}
function inHerit(subClass,superClass){
	subClass.prototype = Object.create(superClass.prototype);
	subClass.prototype.constructor =subClass;
}
