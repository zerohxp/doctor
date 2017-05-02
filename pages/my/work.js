//work.js
//获取应用实例
var app = getApp()
Page({
  data: {
    noData:false
  },
  add:function(){
    wx.navigateTo({
      url: '../edit/createW'
    })
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
  next:function(){
    wx.showModal({
        title: '跳过',
        content: '确认要跳过吗？本页编辑过的数据将不会被保存。',
        confirmColor:'#00acff',
        cancelColor:'#cdcdcd',
        success: function(res) {
            if (res.confirm) {
                  wx.navigateTo({
                    url: '../my/business'
                  })
   
            } 
        }
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
