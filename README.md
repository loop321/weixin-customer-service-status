# weixin-customer-service-status
浏览器插件（谷歌内核），获取公众号客服在线状态和接入人数。

# description
 目前微信客服转接时不显示客服已接入人数，此插件需要服务端提供客服在线信息，返回json数组。
 <pre>
 [
       {
           "kf_account": "test1@test",
           "status": 1,
           "kf_id": "1001",
           "accepted_case": 1,
           "kf_nick" : "ntest1",
           "kf_headimgurl" : "http://mmbiz.qpic.cn/mmbiz/4w90V1VZl2iccsvYbHvnphkyGtnvjfUS8Ym0GSaLic0FD3vN0V8PILcibEGb2fPfEOmw/0"
       },
       {
           "kf_account": "test2@test",
           "status": 1,
           "kf_id": "1002",
           "accepted_case": 2,
           "kf_nick" : "ntest2",
           "kf_headimgurl" : "http://mmbiz.qpic.cn/mmbiz/rfhpV1VZl2iccsvYbHvnphkyGtnvjfUS8Ym0GSaLic0FD3vN0V8PILcibEGb2fPfEOmw/0"
       }
  ]
 </pre>
