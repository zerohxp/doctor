//export.js
//获取应用实例
var app = getApp()
Page({
  data: {
      loading:false,
      disabled:false,
      modal:false,
      modal1:false,
      switch1:true,
      switch2:true,
      switch3:false,
      switch4:false,
      switch5:false,
      checkbox1:false,
      checkbox2:false
  },
  //事件处理函数
  switchChange1: function (e){
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  switchChange2: function (e){
    console.log('switch2 发生 change 事件，携带值为', e.detail.value)
  },
  switchChange3: function (e){
    console.log('switch3 发生 change 事件，携带值为', e.detail.value)
  },
  switchChange4: function (e){
    console.log('switch4 发生 change 事件，携带值为', e.detail.value)
  },
  switchChange5: function (e){
    console.log('switch5 发生 change 事件，携带值为', e.detail.value)
  },
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  checkAll:function(e){
     var that = this;
    var value = e.detail.value;
    if(value.indexOf("1") != -1){
        that.setData({
           checkbox1:true,
           checkbox2:true
       })
    }else{
      that.setData({
           checkbox1:false,
           checkbox2:false
       })
    }
    
  },
   openModal1:function(){
      var that = this;
       that.setData({
           modal:true,
           modal1:true
       })
  },
  closeModal:function(){
     var that = this;
       that.setData({
           modal:false,
           modal1:false
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
