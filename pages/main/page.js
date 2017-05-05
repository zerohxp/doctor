//index.js
var wxCharts = require('../common/js/wxcharts.js');
//获取应用实例
var app = getApp()
Page({
  data: {
    pageLoaded:false,
    indexPage:true,
    userInfo: {}
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
  link:function(e){
    var href = "";
    if(e.currentTarget.dataset){
      href = e.currentTarget.dataset.href;
    }
     wx.navigateTo({
        url: '../'+href
     })
  },
  onLoad: function () {
    var that = this;
    //调用应用实例的方法获取全局数据
    if (!wx.openBluetoothAdapter) {
       // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
          title: '提示',
          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
          confirmColor:'#00acff',
          cancelColor:'#cdcdcd'
          
      })
      return;
        
    } 
    var indexPage = true;
 //调用应用实例的方法获取全局数据
        app.getUser(function(userinfo){
            if(userinfo){
                that.setData({
                userInfo:userinfo
              })

              var option = {
                  canvasId: 'radarCanvas',
                  type: 'radar',
                  legend:false
                };
                let windowWidth = 320;
                option.width = windowWidth ;
                option.height = 220;
                option.categories = ['','','','',''];
                option.dataLabel = false;
                option.dataPointShape = false;
                option.series = [{
                  name:' ',
                  data: [90, 110, 125, 95, 87],
                  color:'#75d2fe'
                }]
                option.extra ={
                  legendTextColor:'#ffffff',
                  radar: {
                            max: 150,
                            labelColor:'#71d1fe',
                            gridColor:'#71d1fe'
                        }
                }
                new wxCharts(option);
            }else{
              indexPage = false;
            }
             
        })
         that.setData({
               pageLoaded: true,
               indexPage:indexPage
         })       
     
  },
  onPullDownRefresh:function(){
    wx.stopPullDownRefresh();//处理完数据后执行

  }
})
