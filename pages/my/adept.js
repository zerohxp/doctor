//adept.js
//获取应用实例
var app = getApp()
Page({
  data: {
     title:'',
     titleArray:[]
  },
  //事件处理函数
  add:function(e){
    var that = this;
      if(!that.data.title){
           wx.showToast({
            title: '请输入擅长关键字',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       if(that.data.title.length > 50){
           wx.showToast({
            title: '不能超过50个汉字',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       var titleArray = that.data.titleArray;
       titleArray.unshift(that.data.title);
      that.setData({
            titleArray: titleArray
      })
  },
  delItem:function(e){
    var that = this;
    var dataset = e.target.dataset;
    var title = "";
    if(dataset){
        var item = dataset.item;
        title = that.data.titleArray[item];
    }
      wx.showModal({
        title: '删除擅长',
        content: '确认要删除"'+title+"吗？",
        confirmColor:'#00acff',
        cancelColor:'#cdcdcd',
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
 onLoad: function (option) {
    var that = this
    //调用应用实例的方法获取全局数据
   
  }
})
