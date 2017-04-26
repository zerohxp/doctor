//my.js
//获取应用实例
var app = getApp()
Page({
  data: {
    myPlus:true,
    userInfo:{}
  },
  //事件处理函数
 onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
     app.getUserInfo(function(userinfo){
        if(userinfo){
            that.setData({
               userInfo:userinfo
            })
        }
    })
  }
})
