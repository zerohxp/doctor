//technical.js
//获取应用实例
var app = getApp()
Page({
  data: {
    technicals:['医学生','规培生','住院医师','主治医师','副主任医师','主任医师'],
    technicalIndex:0,
    positions:['无','助教','讲师','副教授','教授','博士生导师'],
    positionIndex:0
  },
  //事件处理函数
  next:function(){
    wx.showModal({
        title: '跳过',
        content: '确认要跳过吗？本页编辑过的数据将不会被保存。',
        confirmColor:'#00acff',
        cancelColor:'#cdcdcd',
        success: function(res) {
            if (res.confirm) {
                 wx.redirectTo({
                    url: '../my/education'
                })
            } 
        }
    })
  },
  bindTechnicalChange:function(e){
     this.setData({
            technicalIndex: e.detail.value
      })
  },
  bindPositionChange:function(e){
     this.setData({
            positionIndex: e.detail.value
      })
  },
  save:function(){

  },
  onLoad: function (option) {
    var that = this
    //调用应用实例的方法获取全局数据
   
  }
})
