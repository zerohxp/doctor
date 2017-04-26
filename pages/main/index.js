//index.js
var wxCharts = require('../common/js/wxcharts.js');
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  //事件处理函数
   goToExport:function(){
      wx.navigateTo({
        url: '../export/export'
     })
  },
  next:function(){
     wx.navigateTo({
        url: '../my/my'
     })
  },
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
    var option = {
       canvasId: 'radarCanvas',
       type: 'radar',
       legend:false
    };
    let windowWidth = 320;
    try {
        let res = wx.getSystemInfoSync();
        windowWidth = res.windowWidth;
    } catch (e) {
        
    }
    option.width = windowWidth * 0.9
    option.height = 250
    option.categories = ['技术水平','工作经验','科研能力','学历/职称','沟通能力']
    option.series = [{
      name:' ',
      data: [90, 110, 125, 95, 87]
    }]
    option.extra ={
      legendTextColor:'#fff',
       radar: {
                max: 150
            }
    }
    new wxCharts(option)
     
  }
})
