//communication.js
//获取应用实例
var app = getApp()
Page({
  data: {
   
    loading: false,
    pageLoaded:false
  },
  //事件处理函数
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  save:function(){
       that.setData({
           disabled:true,
           loading:true
       });
  },
  onLoad: function (option) {
    var that = this
    //调用应用实例的方法获取全局数据
   
  }
})
