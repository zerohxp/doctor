//export.js
//获取应用实例
var app = getApp()
Page({
  data: {
      loading:false,
      disabled:false,
      modal:false,
      modal1:false
  },
  //事件处理函数
  switchChange: function (e){
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  checkbox1Change: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
   checkbox2Change: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
   checkbox3Change: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
   checkbox4Change: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
   checkbox5Change: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
   checkbox6Change: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
   checkbox7Change: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  openModal1:function(){
      var that = this;
       that.setData({
           modal:true,
           modal1:true
       })
  },
  sure1:function(){
      var that = this;
       that.setData({
           modal:false,
           modal1:false
       })
  },
  submit:function(){

  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
   
  }
})
