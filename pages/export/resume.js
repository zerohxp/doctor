//resume.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    modal:false,
    modal1:false,
    email:'',
    errorMsg:'',
    loading:false,
    loading2:false,
    disabled:false,
    disabled2:false
  },
  //事件处理函数
  dowbload:function(){
     this.setData({
            loading:true,
            disabled:true
        })
    wx.showModal({
        title: '下载到本地',
        content: '正在下载PDF简历到本地，请稍后 到微信默认存储路径查询。',
        confirmColor:'#00acff',
        showCancel:false,
        success: function(res) {
            if (res.confirm) {
                
            } 
        }
    })
  },
  closeModal:function(){
     var that = this;
       that.setData({
           modal:false,
           modal1:false
       })
  },
  send:function(){
       var that = this;
       that.setData({
           modal:true,
           modal1:true
       })
   
   
  },
  send2:function(){
      var email = this.data.email;
      if(!email){
           this.setData({
            errorMsg:'请输入邮箱地址',
        })
        return;
      }
     else if(!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(email)){
            this.setData({
                errorMsg:'请输入正确的邮箱地址',
            })
            return;
       }
      this.setData({
           email:'',
           errorMsg:'',
           modal:false,
           modal1:false
       })
      wx.showModal({
        title: '简历已发送到邮箱',
        content: ' 若未收到邮件，请检查：1.邮件是否在垃圾箱，有可能被当作垃圾邮件过滤了。2.邮箱地址是否填写正确。 ',
        confirmColor:'#00acff',
        showCancel:false,
        success: function(res) {
            if (res.confirm) {
                
            } 
        }
    })
  },
  cancel:function(){
       var that = this;
       that.setData({
           email:'',
           errorMsg:'',
           modal:false,
           modal1:false
       })
   
  },
  emailValue:function(e){
       this.setData({
            email: e.detail.value
      })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userinfo){
        that.setData({
            userInfo:userinfo
        })
    })
  }
})
