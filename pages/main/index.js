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
    // try {
    //     let res = wx.getSystemInfoSync();
    //     windowWidth = res.windowWidth;
    // } catch (e) {
        
    // }
    //  console.log(windowWidth)
    option.width = windowWidth ;
    option.height = 220;
    option.categories = ['','','','',''];
    option.dataLabel = false;
    option.dataPointShape = false;
    option.series = [{
      name:' ',
      data: [90, 110, 125, 95, 87],
      color:'#82d6fe'
    }]
    option.extra ={
      legendTextColor:'#ffffff',
       radar: {
                max: 150,
                labelColor:'#ffffff',
                gridColor:'#ffffff'
            }
    }
    new wxCharts(option)
     
  },
  onPullDownRefresh:function(){
    wx.stopPullDownRefresh();//处理完数据后执行

  }
})
