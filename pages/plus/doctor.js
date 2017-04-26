//doctor.js
//获取应用实例
var app = getApp()
Page({
  data: {
     currentSelect:0,
     type:['医疗技术人员','药剂（含中药、西药）人员','其他卫生技术人员']
  },
  //事件处理函数
  next:function(){
       wx.navigateTo({
          url: '../plus/capacity?dtype='+this.data.currentSelect
      })
  },
  uploadPlus:function(){
     wx.navigateTo({
          url: '../upload/upload'
      })
  },
  selectBlock:function(event){
     var that = this;
    var dataset = event.target.dataset;
    var select = "";
    if(dataset){
      select = dataset.select;
    }
    if(that.data.currentSelect != select && select != ""){
       that.setData({
             currentSelect:select
       });
    }
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
   
  }
})
