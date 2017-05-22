//createP.js
//获取应用实例
var app = getApp()
Page({
  data: {
    title:'',
    description:'',
    divisor:'',
    disabled:false,
    loading:false,
    disabled2:false,
    loading2:false
  },
  //事件处理函数
  delete:function(){
      wx.showModal({
        title: '删除发表论文',
        content: '确认要删除论文XXXXX（论文名称）吗？',
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
  titleValue:function(e){
     this.setData({
            title: e.detail.value
      })
  },
  descriptionValue:function(e){
     this.setData({
            description: e.detail.value
      })
  },
  divisorValue:function(e){
     this.setData({
            divisor: e.detail.value
      })
  },
   save:function(){
      var that = this;
        if(!that.data.title){
           wx.showToast({
            title: '请输入论文题目',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
      if(that.data.title.length > 100){
           wx.showToast({
            title: '论文题目过长，100个汉字以内',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       if(!that.data.description){
           wx.showToast({
            title: '请输入发表期刊',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
      if(that.data.description.length > 100){
           wx.showToast({
            title: '发表期刊过长，100个汉字以内',
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
