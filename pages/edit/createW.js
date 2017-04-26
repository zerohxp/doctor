//createE.js
//获取应用实例
var app = getApp()
Page({
  data: {
    in:'',
    out:'',
    radio1:0,
    radio2:0
  },
  //事件处理函数
 bindInChange:function(e){
     this.setData({
            in: e.detail.value
      })
  },
  bindOutChange:function(e){
       this.setData({
            out: e.detail.value
      })
  },
  radioChange1:function(e){
       this.setData({
            radio1: e.detail.value
      })
  },
  radioChange2:function(e){
       this.setData({
            radio2: e.detail.value
      })
  },
   save:function(){
        wx.navigateBack();
  },
  delete:function(){
      wx.showModal({
        title: '删除教育经历',
        content: '确认要删除教育经历吗？',
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
        content: '确认要跳过吗，编辑过的数据将不会被保存。',
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
