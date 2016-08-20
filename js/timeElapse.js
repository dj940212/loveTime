//设置在一起开始时间
var together = new Date();
together.setFullYear(2016, 3, 18);
together.setHours(23);
together.setMinutes(0);
together.setSeconds(0);
together.setMilliseconds(0);

//流逝的时间
timeElapse(together);

//延迟500毫秒更新一次
setInterval(function () {
	timeElapse(together);
}, 500);

//流逝的时间
function timeElapse(c) {
	var e = Date();
	var f = (Date.parse(e) - Date.parse(c)) / 1000;
	var g = Math.floor(f / (3600 * 24));
	f = f % (3600 * 24);
	var b = Math.floor(f / 3600);
	if (b < 10) {
		b = "0" + b
	}
	f = f % 3600;
	var d = Math.floor(f / 60);
	if (d < 10) {
		d = "0" + d
	}
	f = f % 60;
	if (f < 10) {
		f = "0" + f
	}
	var a = '<span class="digit">' + g 
	+ '</span> days <span class="digit">' + b 
	+ '</span>:<span class="digit">' + d 
	+ '</span>:<span class="digit">' + f 
	+ "</span>";
	$(".loveTime").html(a)
}