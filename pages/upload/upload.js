//upload.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
  },
  //事件处理函数
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
   
  },
  previewImage:function(){
    // wx.previewImage({
    //   current: '', // 当前显示图片的http链接
    //   urls: ['../common/img/erweima.png'] // 需要预览的图片http链接列表
    // })
     wx.saveImageToPhotosAlbum({
      filePath:'../common/img/erweima.png',
       success: function (res) {
            console.info(res)
      },
      fail:function(res){
           console.info(res)    
      }
    })
  }
})
