//微信后端服务地址
var URL="http://www.qmx.top/***"
chrome.runtime.onMessage.addListener(function(request, sender, callback){
	$.ajax({
			url: URL+request.type,
			cache: false,
			type: "POST",
			dataType: "json",
			async: false,//一定要同步调用，非同步调用定时回调不行
	}).done(function(msg) {
		callback(msg)
	})
});
