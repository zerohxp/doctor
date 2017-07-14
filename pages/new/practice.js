//position.js
//获取应用实例
var app = getApp()
Page({
  data: {
    style:"",
    weeks:["星期一","星期二","星期三","星期四","星期五","星期六","星期日"],
    weekIndex:0,
    dates:[],
    dateIndex:0,
    hospital:['请选择医院'],
    hospitalIndex:0,
    works:['请选择工作类型','门诊','手术','病房'],
    workIndex:0,
    type:2//1：修改日程；2：修改日程请联系客服
  },

getDates:function(){
    var that = this;
    var number = 0;
    var d=new Date();
    number += d.getDate();
    var d2 = new Date();
    d2.setDate(0);
    number += d2.getDate();
    d2.setMonth(d2.getMonth());
    d2.setDate(0);
    number += d2.getDate();
    var dates=that.data.dates;

    for(var i=number; i>0; i--)
    {
        var day = d.getDay();
        day = day - 1;
        if(day < 0){
            day = 6;
        }
        if(!dates[day]){
            dates[day] = [];
        }
        dates[day].push((d.getMonth()+1)+'月'+d.getDate()+'日');
        d.setDate(d.getDate()-1);
    }
    that.setData({
        dates:dates
    })
},
    //医院
    hospitalChange:function(e){
        this.setData({
                weekIndex: e.detail.value
        })
    },
   //星期选择
   weekChange:function(e){
         this.setData({
                weekIndex: e.detail.value,
                dateIndex:0
        })
   },
   //日期
   dateChange:function(e){
         this.setData({
                dateIndex: e.detail.value
        })
   },
   //工作类型
   workChange:function(e){
        this.setData({
                workIndex: e.detail.value
        })
   },
   //保存
   save:function(){
        var that = this;
        if(that.data.workIndex == 0){
           wx.showToast({
            title: '请选择工作类型',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
   },
   //联系客服
   kefu:function(){
        wx.showModal({
            title: '提示',
            content: '已绑定医院的执业信息不得修改',
            confirmColor:'#00acff',
            cancelColor:'#00acff',
            confirmText:'暂不修改',
            cancelText:'联系客服',
            success: function(res) {
                if (res.confirm) {
                
                } else if (res.cancel) {
                    wx.showModal({
                        title: '提示',
                        content: '客服微信号：xxxxxxxx ',
                        confirmColor:'#00acff',
                        confirmText:'我知道了',
                        showCancel:false,
                        success: function(res) {
                            if (res.confirm) {
                            
                            }
                        }
                    })
                }
            }
        })
   },
   //修改日程
   edit:function(){
         wx.navigateTo({
            url: '../new/scheduleEdit'
        })
   },
  onLoad: function (option) {
     var that = this;
     that.getDates();
    wx.getSystemInfo({  
      success: function (res) {  
        var windowWidth = res.windowWidth; 
        windowWidth = windowWidth - 30; 
        that.setData({
          style:"width:"+windowWidth+"px"
        });         
      }  
    })  
  }
   
})
