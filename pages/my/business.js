//technical.js
//获取应用实例
var app = getApp()
Page({
  data: {
    offices:['','外科','内科','中医科','中西医结合科','妇产科','儿科','医技科'],
    officeIndex:0,
    outpatients1:['未开设门诊','700次以下','700~1000次','1000次以上'],
    outpatientIndex1:0,
    outpatients2:['未开设门诊','240次以下','240~400次','400次以上'],
    outpatientIndex2:0,
    outpatients3:['未开设门诊','60次以下','60~100次','100次以上'],
    outpatientIndex3:0,
    operations:['无'],
    operationIndex:0,
    inspections:['无','200次以下','200~400次','400次以上'],
    inspectionIndex:0,
    films:['无','200次以下','200~400次','400次以上'],
    filmIndex:0,
    loading: false,
    pageLoaded:false
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
  bindOfficeChange:function(e){
    var operations = ['无'];
    var officeIndex =  e.detail.value;   
    if(officeIndex == 1 ||officeIndex ==5||officeIndex==6){
        operations = ['无','12次以下','12~25次','25次以上'];
    }else if(officeIndex == 2){
         operations = ['无','30次以下','30~70次','70次以上'];
    }
     this.setData({
            officeIndex: e.detail.value,
            operations:operations
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
       that.setData({
           disabled:true,
           loading:true
       });
  },
  onLoad: function (option) {
    var that = this
    //调用应用实例的方法获取全局数据
   
  }
})
