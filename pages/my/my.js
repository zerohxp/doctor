//my.js
//获取应用实例
var app = getApp()
Page({
  data: {
    myPlus:true,
    userInfo:{}
  },
  //事件处理函数
  link:function(e){
    var stype = "";
    var url = "";
    if(e.currentTarget.dataset){
      stype = e.currentTarget.dataset.stype;
    }
    if(stype == "1"){
      url = "setting_wx";
    }else if(stype == "2"){
      url = "setting_dxk";
    }else if(stype == "3"){
      url = "setting_wb";
    }else if(stype == "4"){
      url = "setting_z";
    }else if(stype == "5"){
      url = "setting_db";
    }
    if(!url) return;
    wx.navigateTo({
      url: '../setting/'+url
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
  },
  onPullDownRefresh:function(){
    wx.stopPullDownRefresh();//处理完数据后执行

  }
})
