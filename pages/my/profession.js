//profession.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
  },
  //事件处理函数
  back:function(){
      var currentPages = getCurrentPages();
      for(var i=0;i<currentPages.length;i++){
          var current = currentPages[i];
          if(current.data && current.data.myPlus){
              var num = i + 1;
              num = currentPages.length - num;
              wx.navigateBack({
                delta: num
              })
          }
      }
  },
  add:function(){
      wx.navigateTo({
        url: '../edit/createP'
        })
  },
  onLoad: function (option) {
    var that = this
    //调用应用实例的方法获取全局数据
   
  },
  onPullDownRefresh:function(){
    wx.stopPullDownRefresh();//处理完数据后执行

  }
})
