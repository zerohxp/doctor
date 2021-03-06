//createS.js
//获取应用实例
var app = getApp()
Page({
  data: {
    title:'',
    description:'',
    disabled:false,
    loading:false
  },
  //事件处理函数
  delete:function(){
      wx.showModal({
        title: '删除科研项目',
        content: '确认要删除XXXXX（项目名称）项目吗？',
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
   save:function(){
      var that = this;
      if(!that.data.title){
           wx.showToast({
            title: '请输入项目名称',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
      if(that.data.title.length > 100){
           wx.showToast({
            title: '项目名称过长，100个汉字以内',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       if(that.data.description && that.data.description.length > 300){
           wx.showToast({
            title: '项目描述过长，300个汉字以内',
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
