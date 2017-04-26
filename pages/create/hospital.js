//hospital.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
  },
  //事件处理函数
  chooseHospital:function(event){
      var dataset = event.currentTarget.dataset;
      var hospital = dataset.hospital;
      wx.setStorageSync('select_hospital',hospital);
      wx.navigateBack();
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
   
  }
})
