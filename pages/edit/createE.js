//createE.js
//获取应用实例
var app = getApp()
Page({
  data: {
    educations:['大专以下','大专','本科','硕士','博士'],
    educationIndex:3,
    entrance:'',
    graduation:'',
    entranceShow:'',
    graduationShow:'',
    radio:0,
    name:'',
    specialty:'',
    disabled:false,
    loading:false
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
            entrance: e.detail.value,
            entranceShow: e.detail.value
      })
  },
  bindGraduationChange:function(e){
       this.setData({
            graduation: e.detail.value,
            graduationShow: e.detail.value
      })
  },
  radioChange:function(e){

  },
  nameValue:function(e){
     this.setData({
            name: e.detail.value
      })
  },
  specialtyValue:function(e){
     this.setData({
            specialty: e.detail.value
      })
  },
   save:function(){
       var that = this;
       if(!that.data.name){
           wx.showToast({
            title: '请输入学校名称',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       if(that.data.name.length > 50){
           wx.showToast({
            title: '学校名称最多50个汉字',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       if(!that.data.specialty){
           wx.showToast({
            title: '请输入专业名称',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
      if(that.data.specialty.length > 50){
           wx.showToast({
            title: '专业名称最多50个汉字',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       if(!that.data.entrance){
           wx.showToast({
            title: '请选择入学时间',
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
    var that = this;
    that.setData({
           entrance:app.getToday(),
           graduation:app.getToday()
      });
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
