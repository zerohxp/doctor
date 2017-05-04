//resume.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
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
  send:function(){
    this.setData({
            loading2:true,
            disabled2:true
        })
      wx.showModal({
        title: '简历已发送到邮箱',
        content: ' 若未收到邮件，请 1.检查是否在垃圾箱，邮件有可能    被当作垃圾邮件过滤了。2.或许邮箱地址填错了，请填写正确的地址后重新发送。   ',
        confirmColor:'#00acff',
        showCancel:false,
        success: function(res) {
            if (res.confirm) {
                
            } 
        }
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
