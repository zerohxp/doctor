//createS.js
//获取应用实例
var app = getApp()
Page({
  data: {
    name:'',
    amount:'',
    levels:['国家级','省/部级','市厅级','院级','其他'],
    levelIndex:0,
    disabled:false,
    loading:false
  },
  //事件处理函数
  delete:function(){
      wx.showModal({
        title: '删除科研基金',
        content: '确认要删除国家自然基金（基金名称）吗？',
        confirmColor:'#00acff',
        cancelColor:'#cdcdcd',
        confirmText:'删除',
        success: function(res) {
            if (res.confirm) {
                wx.navigateBack();
            } else if (res.cancel) {
            
            }
        }
    })
  },
  nameValue:function(e){
     this.setData({
            name: e.detail.value
      })
  },
  amountValue:function(e){
     this.setData({
            amount: e.detail.value
      })
  },
  bindLevelChange:function(e){
     this.setData({
            name:'',
            levelIndex: e.detail.value
      })
  },
   save:function(){
      var that = this;
      if(that.data.levelIndex == 4 && !that.data.name){
           wx.showToast({
            title: '请输入基金名称',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
      if(that.data.name && that.data.name.length > 30){
           wx.showToast({
            title: '限30个汉字以内',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       if(!that.data.amount ){
           wx.showToast({
            title: '请输入基金数额',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       if(that.data.amount < 1 ||  that.data.amount >10000){
           wx.showToast({
            title: '请输入基金数额/基金数额需是0~10000内的整数',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
        that.setData({
           disabled:true,
           loading:true
       });
        wx.navigateBack();
  },
  onLoad: function (option) {
    var that = this
    //调用应用实例的方法获取全局数据
   
  }
})
