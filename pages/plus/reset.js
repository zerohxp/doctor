//capacity.js
//获取应用实例
var app = getApp()
Page({
  data: {
     dtype:'',
     currentSelect:0,
     type:['业务型','科研型','管理型'],
    loading: false,
    pageLoaded:false
  },
  //事件处理函数
  create:function(){
     that.setData({
           disabled:true,
           loading:true
       });
    wx.navigateTo({
          url: '../create/create?dtype='+this.data.dtype
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
  onLoad: function (option) {
    var that = this;
    if(option && option.dtype){
      that.setData({
        dtype:option.dtype
      })
    }
    //调用应用实例的方法获取全局数据
   
  }
})
