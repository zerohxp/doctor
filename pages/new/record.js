//position.js
//获取应用实例
var app = getApp()
Page({
  data: {
    style:"",
    filterDate:''
  },
  //edit
  edit:function(){
     wx.navigateTo({
            url: '../new/scheduleEdit'
        })
  },
  //筛选
  filterClick:function(){

  },
  filterDateChange:function(e){
    console.info(e.detail.value)
  },
  onLoad: function (option) {
     var that = this;
      that.setData({
           filterDate:app.getToday()
      });
    wx.getSystemInfo({  
      success: function (res) {  
        var windowWidth = res.windowWidth; 
        windowWidth = windowWidth - 30; 
        that.setData({
          style:"width:"+windowWidth+"px"
        });         
      }  
    })  
  }
   
})
