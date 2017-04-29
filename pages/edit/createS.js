//createS.js
//获取应用实例
var app = getApp()
Page({
  data: {
    title:'',
    description:''
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
            title: '限100个汉字以内',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       if(that.data.description && that.data.description.length > 300){
           wx.showToast({
            title: '限300个汉字以内',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       wx.navigateBack();
  },
  onLoad: function (option) {
    var that = this
    //调用应用实例的方法获取全局数据
   
  }
})
