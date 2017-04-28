//technical.js
//获取应用实例
var app = getApp()
Page({
  data: {
    offices:['','外科','内科','中医科','中西医结合科','妇产科','儿科','医技科'],
    officeIndex:0,
    outpatients1:['未开设门诊'],
    outpatientIndex1:0,
    outpatients2:['未开设门诊'],
    outpatientIndex2:0,
    outpatients3:['未开设门诊'],
    outpatientIndex3:0,
    operations:['无'],
    operationIndex:0,
    inspections:['无'],
    inspectionIndex:0,
    films:['无'],
    filmIndex:0
  },
  //事件处理函数
  next:function(){
    wx.showModal({
        title: '跳过',
        content: '确认要跳过吗？本页编辑过的数据将不会被保存。',
        success: function(res) {
            if (res.confirm) {
                 wx.redirectTo({
                    url: '../my/education'
                })
            } 
        }
    })
  },
  bindOfficeChange:function(e){
     this.setData({
            officeIndex: e.detail.value
      })
  },
  bindOutpatientChange1:function(e){
     this.setData({
            positionIndex: e.detail.value
      })
  },
  bindOutpatientChange2:function(e){
     this.setData({
            positionIndex: e.detail.value
      })
  },
  bindOutpatientChange3:function(e){
     this.setData({
            positionIndex: e.detail.value
      })
  },
  bindOperationChange:function(e){
     this.setData({
            operationIndex: e.detail.value
      })
  },
  bindFilmChange:function(e){
     this.setData({
            inspectionIndex: e.detail.value
      })
  },
  bindInspectionChange:function(e){
     this.setData({
            filmIndex: e.detail.value
      })
  },
  save:function(){

  },
  onLoad: function (option) {
    var that = this
    //调用应用实例的方法获取全局数据
   
  }
})
