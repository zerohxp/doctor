//createP.js
//获取应用实例
var app = getApp()
Page({
  data: {
    tempFilePaths:[]
  },
  //事件处理函数
  chooseImage:function(){
      var that = this;
      if(that.data.tempFilePaths.length > 8){
           wx.showToast({
                title: '图片不能超过9张',
                image:'../common/img/error.png',
                duration: 2000
           })
          return;
      }
      wx.chooseImage({
        count: 9, // 默认9
        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
            var tempFilePaths = res.tempFilePaths
            that.data.tempFilePaths.push(tempFilePaths);
            that.setData({
                tempFilePaths:that.data.tempFilePaths
            })
        }
      })
  },
  onLoad: function (option) {
    var that = this
    //调用应用实例的方法获取全局数据
   
  }
})
