//createE.js
//获取应用实例
var app = getApp()
Page({
  data: {
    educations:['大专以下','大专','本科','硕士','博士','博士后'],
    educationIndex:3,
    entrance:'2017-09',
    graduation:'',
    radio:0
  },
  //事件处理函数
  bindEducationChange:function(e){
     this.setData({
            educationIndex: e.detail.value
      })
  },
  bindEntranceChange:function(e){
      console.info(e)
     this.setData({
            entrance: e.detail.value
      })
  },
  bindGraduationChange:function(e){
       this.setData({
            graduation: e.detail.value
      })
  },
  radioChange:function(e){

  },
   save:function(){
        wx.navigateBack();
  },
  delete:function(){
      wx.showModal({
        title: '删除教育经历',
        content: '确认要删除教育经历吗？',
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
