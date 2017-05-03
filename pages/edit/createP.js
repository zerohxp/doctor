//createP.js
//获取应用实例
var app = getApp()
Page({
  data: {
    tempFilePaths:[],
    title:'',
    description:'',
    disabled:false,
    loading:false,
    work_str:[0,0],
    work:[0,0],
    hospitals:['','长征医院'],
    posts:['','主治医生'],
    selectWork:false
  },
  //事件处理函数
  chooseImage:function(){
      var that = this;
      if(that.data.tempFilePaths.length > 8){
           wx.showToast({
                title: '图片不能超过9张',
                image:'../common/img/error.png',
                duration: 2000
           })
          return;
      }
      wx.chooseImage({
        count: 9, // 默认9
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
  delete:function(){
      wx.showModal({
        title: '删除业务能力案例',
        content: '确认要删除XXXXX（案例标题）吗？',
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
  chooseWork:function(){
     var that = this;
      that.setData({
             selectWork:true
      })
  },
  colseWork:function(){
    this.setData({
            selectWork:false
      })
  },
  bindChange:function(e){
     var that = this;
     this.setData({
            work_str: e.detail.value
    })
  },
  sureWork:function(e){
    var that = this;
    var work_str = that.data.work_str;
    this.setData({
            work: work_str,
             selectWork:false
    })
  },
  save:function(){
      var that = this;
      if(!that.data.title){
           wx.showToast({
            title: '请输入标题',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
      if(that.data.title.length > 50){
           wx.showToast({
            title: '限50个汉字以内',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       if(!that.data.description){
           wx.showToast({
            title: '请描述经过',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
      if(that.data.description.length > 500){
           wx.showToast({
            title: '限限500个汉字以内',
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
