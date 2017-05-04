//createE.js
//获取应用实例
var app = getApp()
Page({
  data: {
    tempFilePaths:[],
    disabled:false,
    loading:false
  },
  //事件处理函数
  chooseImage:function(){
      var that = this;
      if(that.data.tempFilePaths.length > 2){
           wx.showToast({
                title: '图片不能超过3张',
                image:'../common/img/error.png',
                duration: 2000
           })
          return;
      }
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
            var tempFilePaths = res.tempFilePaths
            that.data.tempFilePaths.push(tempFilePaths);
            that.setData({
                tempFilePaths:that.data.tempFilePaths
            })
        }
      })
  },
  delImg:function(e){
      var that = this;
      var dataset = e.target.dataset;
        var item = 0;
        if(dataset){
            item = dataset.item;
            var  tempFilePaths = that.data.tempFilePaths;
            tempFilePaths.splice(item,1);
             that.setData({
                tempFilePaths:tempFilePaths
            })
        }
  },
  save:function(){
         that.setData({
           disabled:true,
           loading:true
       });
        wx.navigateBack();
  },
  delete:function(){
      wx.showModal({
        title: '删除社会头衔',
        content: '确认要删除社会头衔吗？',
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
  onLoad: function (option) {
    var that = this
    //调用应用实例的方法获取全局数据
   
  },
  next:function(){
      wx.showModal({
        title: '跳过',
        content: '确认要跳过吗？本页编辑过的数据将不会被保存。',
        confirmColor:'#00acff',
        cancelColor:'#cdcdcd',
        success: function(res) {
            if (res.confirm) {
                 wx.navigateTo({
                    url: '../my/education'
                })
            } 
        }
    })
  }
})
