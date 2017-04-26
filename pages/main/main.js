//main.js
//获取应用实例
var app = getApp()
Page({
  data: {
    disabled: false,
    loading: false,
    pageLoaded:false
  },
  //事件处理函数
  loginWX:function(){
       var that = this
       that.setData({
           disabled:true,
           loading:true
       });
      app.getUserInfo(function(userinfo){
           that.setData({
                disabled: false,
                loading: false
            });
            
          if(userinfo){
            wx.navigateTo({
                url: '../plus/doctor'
            })
        }else{
            wx.showToast({
                title: '授权失败',
                duration: 2000
            })
        }
        
      })
  }, 
  onLoad: function () {
    var that = this
    if (wx.openBluetoothAdapter) {
         //调用应用实例的方法获取全局数据
        app.getUser(function(userinfo){
            if(userinfo){
                wx.redirectTo({
                    url: '../main/index'
                })
            }else{
                that.setData({
                    pageLoaded: true
                })
            }
             
        })
    } else {
    // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
    wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
    })
    }
   
  }
})
