# weixin-customer-service-status
浏览器插件（谷歌内核），获取公众号客服在线状态和接入人数。

# Description
 目前微信客服转接时不显示客服已接入人数，此插件需要服务端提供客服在线信息，返回json数组。
 <pre>
 [
       {
           "kf_account": "test1@test",
           "status": 1,
           "kf_id": "1001",
           "accepted_case": 1,
           "kf_nick" : "ntest1",
           "kf_headimgurl" : "http://mmbiz.qpic.cn/mmbiz/4w90V1VZl2iccsvYbHvnphkyGtnvjfUS8Ym3vEOmw/0"
       },
       {
           "kf_account": "test2@test",
           "status": 1,
           "kf_id": "1002",
           "accepted_case": 2,
           "kf_nick" : "ntest2",
           "kf_headimgurl" : "http://mmbiz.qpic.cn/mmbiz/rfhpV1VZl2iccsvYbHvnphkyGtnvjfUSc0FPfEOmw/0"
       }
  ]
 </pre>
 
 # Install
 1.打开谷歌浏览器，地址栏输入 <code>chrome://extensions</code>。
 2.点击<code>加载已解压的扩展程序...</code>,选择本项目目录。
 3.进入微信客服页面 <code>https://mpkf.weixin.qq.com/cgi-bin/kfindex?token=1859023312</code>,登陆后即可看到左上角固定漂浮窗口显示在线客服列表。
 
