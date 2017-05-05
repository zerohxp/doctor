//createA.js
//获取应用实例
var app = getApp()
Page({
  data: {
    tempFilePaths:[],
    title:'',
    people:'',
    disabled:false,
    loading:false
  },
  //事件处理函数
   titleValue:function(e){
     this.setData({
            title: e.detail.value
      })
  },
  peopleValue:function(e){
     this.setData({
            people: e.detail.value
      })
  },
  
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
         var that = this;
      if(!that.data.title){
           wx.showToast({
            title: '请输入活动名称',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
      if(that.data.title.length > 50){
           wx.showToast({
            title: '活动名称限50个汉字以内',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       if(!that.data.people){
           wx.showToast({
            title: '请输入角色',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
      if(that.data.people.length > 50){
           wx.showToast({
            title: '角色限50个汉字以内',
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
  delete:function(){
      wx.showModal({
        title: '删除社会活动',
        content: '确认要删除社会活动吗？',
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
