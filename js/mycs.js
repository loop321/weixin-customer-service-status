var Extend = {
	Init: function(){
		_this = this
		//在Dom中增加客服工具栏
		$(document.body).prepend("<div class = 'exbody'><div class = 'title'>在线客服</div><ol class = 'ex'></ol><div class = 'exbtn'><button n = 1>刷新</button>&nbsp;　<button n = 2>刷新2</button></div><div class = 'extip'>ok...</div></div>");
		//绑定手动刷新事件
		$(".exbtn button").click(function(){
			_this.Getkflist($(this).attr("n"))
		})
		//定时刷在线客服信息
		this.Set()
	},
	Tpl: "<li><img src = '$kf_headimgurl$'><span class = 'nick'>$kf_nick$</span><span class = 'accept'>$accepted_case$</span></li>",
	SetTask: null,
	SortObjInArray: function(res,sortKey,order){
		//选择排序
		if(res){
			for(var i  =  0; i < res.length; i++){    
				var min  = eval("res[i]."+sortKey), min_index  =  i
					  for (var j  =  i; j < res.length; j++){
						  if ((!order||order =  = "asc")?eval("res[j]."+sortKey) < min:eval("res[j]."+sortKey) > min){
							  min  =  eval("res[j]."+sortKey)
							  min_index  =  j
						  }
					  }
					  if (min_index ! =  i){
						  var temp  =  res[i]
						  res[i]  =  res[min_index]
						  res[min_index]  =  temp
					  }
			 }
		}
		return res
	},
	Getkflist: function(i_getInfo,b_auto){
		_this = this
		_this.ClearSet()
		chrome.extension.sendMessage({
				type : i_getInfo
		},function(respData){
				var showInfo = ""
				if(respData){
					console.log(respData)	
					respData = this.SortObjInArray(respData,"accepted_case","asc")
					this.CreateHtml(respData);
					if (!b_auto){
						showInfo = "ok..."
					}
				}else if(!b_auto){
					showInfo = "error..."
				}
				if (showInfo){
					$(".extip").text(showInfo).show().animate({opacity:0.1},1000,function(){
						$(".extip").hide().css({opacity:0.6})
					})
				}
				_this.Set()
		});
	},
	CreateHtml:function(jsonData){
		var strHtml = ""
		for (var i = 0;i<jsonData.length;i++){
			strHtml += tpl.replace(/\$(.*?)\$/g,function(match,field,c){
				return jsonData[i][field]
			})
		}
		$("ol.ex").html(strHtml)
	},
	Set:function(){
		_this = this
		this.Getkflist("",true)
		SetTask = setTimeout(_this.Set,30000)
	},
	ClearSet:function(){
		if (SetTask){
			clearTimeout(SetTask)
		}	
	}
}

Extend.Init()

