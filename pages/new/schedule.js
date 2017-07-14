//position.js
//获取应用实例
var app = getApp()
Page({
  data: {
    tab_active:1,
    style:"",
    loading1:false,
    loading2:false,
    disabled1:false,
    disabled2:false,
     loading3:false,
    loading4:false,
    disabled3:false,
    disabled4:false,
    times:[
        {
            week:['周一','周二','周三','周四','周五','周六','周日'],
            weekIndex:0,
            begin:['8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
            beginIndex:0,
            end:['9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'],
            endIndex:0
        }
    ],
    times2:[
        {
            week:['周一','周二','周三','周四','周五','周六','周日'],
            weekIndex:0,
            begin:['8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
            beginIndex:0,
            end:['9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'],
            endIndex:0
        }
    ]
  },
  //选择tab
  tabClick:function(e){
      var that = this;
      var currentTarget = e.currentTarget;
      var tab = 1;
      if(currentTarget){
        tab = currentTarget.dataset.tab;
      }
      that.setData({
            tab_active:tab
      }); 
  },
 //选择时间（周）
 weekChange:function(e){
      var currentTarget = e.currentTarget;
      var index = 0;
      if(currentTarget){
        index = currentTarget.dataset.index;
      }
      var times = this.data.times;
      times[index].weekIndex = e.detail.value;
      times[index].beginIndex = 0;
      times[index].end = ['9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'];
      times[index].endIndex = 0;
     this.setData({
            times:times
      })
 },
 //选择时间（开始）
 beginChange:function(e){
      var currentTarget = e.currentTarget;
      var index = 0;
      if(currentTarget){
        index = currentTarget.dataset.index;
      }
     var that = this;
     var times = that.data.times;
     var beginStr = times[index].begin[e.detail.value];
     var number = beginStr.split(":")[0];
     number = Number(number) + 1;
     var end = [];
     for(var i = number;i<= 24;i++){
         end.push(i+":00");
     }
      times[index].beginIndex = e.detail.value;
      times[index].end = end;
      times[index].endIndex = 0;
     that.setData({
            times:times
      })
     
 },
  //选择时间（结束）
 endChange:function(e){
      var currentTarget = e.currentTarget;
      var index = 0;
      if(currentTarget){
        index = currentTarget.dataset.index;
      }
       var times = this.data.times;
      times[index].endIndex = e.detail.value;
     this.setData({
            times: times
      })
 },
 //添加
 add:function(e){
    var that = this;
    var times = that.data.times;
    var obj = {
            week:['周一','周二','周三','周四','周五','周六','周日'],
            weekIndex:0,
            begin:['8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
            beginIndex:0,
            end:['9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'],
            endIndex:0
    }
    times.push(obj);
     that.setData({
            times: times
      })
 },
 //删除
 del:function(e){
     var that = this;
     var times = that.data.times;
     var currentTarget = e.currentTarget;
      var index = 1;
      if(currentTarget){
        index = currentTarget.dataset.index;
      }
      times.splice(index,1);
       that.setData({
            times: times
      })
 },
 //选择时间（周）
 weekChange2:function(e){
      var currentTarget = e.currentTarget;
      var index = 0;
      if(currentTarget){
        index = currentTarget.dataset.index;
      }
      var times = this.data.times2;
      times[index].weekIndex = e.detail.value;
      times[index].beginIndex = 0;
      times[index].end = ['9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'];
      times[index].endIndex = 0;
     this.setData({
            times2:times
      })
 },
 //选择时间（开始）
 beginChange2:function(e){
      var currentTarget = e.currentTarget;
      var index = 0;
      if(currentTarget){
        index = currentTarget.dataset.index;
      }
     var that = this;
     var times = that.data.times2;
     var beginStr = times[index].begin[e.detail.value];
     var number = beginStr.split(":")[0];
     number = Number(number) + 1;
     var end = [];
     for(var i = number;i<= 24;i++){
         end.push(i+":00");
     }
      times[index].beginIndex = e.detail.value;
      times[index].end = end;
      times[index].endIndex = 0;
     that.setData({
            times2:times
      })
     
 },
  //选择时间（结束）
 endChange2:function(e){
      var currentTarget = e.currentTarget;
      var index = 0;
      if(currentTarget){
        index = currentTarget.dataset.index;
      }
       var times = this.data.times2;
      times[index].endIndex = e.detail.value;
     this.setData({
            times2: times
      })
 },
 //添加
 add2:function(e){
    var that = this;
    var times = that.data.times2;
    var obj = {
            week:['周一','周二','周三','周四','周五','周六','周日'],
            weekIndex:0,
            begin:['8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
            beginIndex:0,
            end:['9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'],
            endIndex:0
    }
    times.push(obj);
     that.setData({
            times2: times
      })
 },
 //删除
 del2:function(e){
     var that = this;
     var times = that.data.times2;
     var currentTarget = e.currentTarget;
      var index = 1;
      if(currentTarget){
        index = currentTarget.dataset.index;
      }
      times.splice(index,1);
       that.setData({
            times2: times
      })
 },
 save1:function(){
      wx.showToast({
          title: '日程有冲突，请核对',
          duration:3000,
          image:'../common/img/error.png',
      })
 },
 save2:function(){
      wx.showToast({
          title: '日程有冲突，请核对',
           image:'../common/img/error.png',
           duration:3000
      })
 },
 save3:function(){
      wx.showToast({
          title: '日程有冲突，请核对',
           image:'../common/img/error.png',
           duration:3000
          
      })
 },
 save4:function(){
      wx.showToast({
          title: '日程有冲突，请核对',
          image:'../common/img/error.png',
          duration:3000
      })
 },
  onLoad: function (option) {
     var that = this
    wx.getSystemInfo({  
      success: function (res) {  
        var windowWidth = res.windowWidth; 
        windowWidth = windowWidth - 30; 
        that.setData({
          style:"width:"+windowWidth+"px"
        });         
      }  
    })  
   //调用应用实例的方法获取全局数据
    if(option.week){
        var times = that.data.times;
        times[0].weekIndex = option.week;
        that.setData({
          times:times
        })
    }
  }
})
