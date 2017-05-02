//createE.js
//获取应用实例
var app = getApp()
Page({
  data: {
    in:'',
    out:'',
    radio1:0,
    radio2:0,
    office:'',
    hospital:'',
    post:'',
    disabled:false,
    loading:false
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
  officeValue:function(e){
       this.setData({
            office: e.detail.value
      })
  },
  postValue:function(e){
       this.setData({
            post: e.detail.value
      })
  },
   save:function(){
       var that = this;
       if(!that.data.hospital){
           wx.showToast({
            title: '请选择工作单位',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       if(!that.data.office){
           wx.showToast({
            title: '请输入所在科室',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       if(that.data.office.length > 50){
           wx.showToast({
            title: '科室最多50个汉字',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       if(!that.data.post){
           wx.showToast({
            title: '请输入所处职位',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       if(that.data.post.length > 50){
           wx.showToast({
            title: '专业最多50个汉字',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       if(!that.data.in){
           wx.showToast({
            title: '请选择入职时间',
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
  },
  onShow:function(){
     var that = this;
    var hospital = wx.getStorageSync('select_hospital');
    if(hospital){
      that.setData({
            hospital: hospital
      })
    }
  }
})
