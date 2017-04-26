//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            },
            fail:function(res){
              console.info(res);
               wx.openSetting({
                success:(res)=>{
                    console.log("授权结果..")
                  console.log(res);
                  if(res.authSetting["scope.userInfo"]){
                     wx.getUserInfo({
                        success: function (res) {
                          that.globalData.userInfo = res.userInfo
                          typeof cb == "function" && cb(that.globalData.userInfo)
                        },
                        fail:function(res){
                          typeof cb == "function" && cb()
                        }
                   })  
                  
                  }
                }
              })
            }
          })
        },
        fail:function(res){
          console.info(res)
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  getUser:function(cb){
     var that = this
     if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            },
            fail:function(res){
              typeof cb == "function" && cb()
            }
       })
    }
  }
  
})