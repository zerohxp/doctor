//position.js
//获取应用实例
var app = getApp()
Page({
  data: {
    style:"",
    tdStyle:['',''],
    modal:false,
    homeStyle:"",
    windowWidth:0,
    windowHeight:0,
    info:[
      {//周一
         no_appoint:[{ //没有预约
           style:'',span:''
         }],
         appoint:[{//预约
           style:'',span:''
         }],
         free:[{//空闲
            style:'',span:''
         }]
      },
       {//周二
         no_appoint:[{ //没有预约
           style:'',span:''
         }],
         appoint:[{//预约
           style:'',span:''
         }],
         free:[{//空闲
            style:'',span:''
         }]
      },
       {//周三
         no_appoint:[{ //没有预约
           style:'',span:''
         }],
         appoint:[{//预约
           style:'',span:''
         }],
         free:[{//空闲
            style:'',span:''
         }]
      },
       {//周四
         no_appoint:[{ //没有预约
           style:'',span:''
         }],
         appoint:[{//预约
           style:'',span:''
         }],
         free:[{//空闲
            style:'',span:''
         }]
      },
       {//周五
         no_appoint:[{ //没有预约
           style:'',span:''
         }],
         appoint:[{//预约
           style:'',span:''
         }],
         free:[{//空闲
            style:'',span:''
         }]
      },
       {//周六
         no_appoint:[{ //没有预约
           style:'',span:''
         }],
         appoint:[{//预约
           style:'',span:''
         }],
         free:[{//空闲
            style:'',span:''
         }]
      },
       {//周日
         no_appoint:[{ //没有预约
           style:'',span:''
         }],
         appoint:[{//预约
           style:'',span:''
         }],
         free:[{//空闲
            style:'',span:''
         }]
      }
    ]
  },
  //计算模块left,width
  compute:function(begin,end,width){
      var num = (width - 40) / 16;
      var begin_num = begin.split(":")[0];
      begin_num = Number(begin_num);
      var left = (begin_num - 8) * num;
      var end_num = end.split(":")[0];
      end_num = Number(end_num);
      var _width = (end_num - begin_num ) * num;
      return "left:"+left+"px;width:"+_width+"px";
  },
  //
  noAppoint:function(e){
      wx.navigateTo({
            url: '../new/practice'
        })
  },
  //空闲
  freeClick:function(e){
     wx.navigateTo({
            url: '../new/scheduleEdit?tab=2'
        })
  },
  //预约
  appointClick:function(e){
    this.setData({
      modal:true
    })
  },
  //空白
  blankClick:function(e){
     var currentTarget = e.currentTarget;
      var week = 0;
      if(currentTarget){
        week = currentTarget.dataset.week;
      }
      wx.navigateTo({
            url: '../new/schedule?week='+week
        })
  },
  //关闭弹框
  closeModal:function(){
    this.setData({
      modal:false
    })
  },
  //添加多点执业记录
  save1:function(){
      wx.showModal({
            title: '提示',
            content: '您尚未创建多点执业日程',
            confirmColor:'#00acff',
            cancelColor:'#00acff',
            confirmText:'我知道了',
            cancelText:'前往创建',
            success: function(res) {
                if (res.confirm) {
                
                } else if (res.cancel) {
                   wx.navigateTo({
                      url: '../new/schedule'
                  })
                }
            }
        })
  },
  //查看多点执业记录
  save2:function(){
       wx.navigateTo({
          url: '../new/record'
      })
  },
  onLoad: function (option) {
     var that = this;
     var width=0;
    wx.getSystemInfo({  
      success: function (res) {  
        var windowWidth = res.windowWidth; 
        width = windowWidth - 30;
        var td_w = (width - 40)/16;

        var tdStyle = ["width:"+td_w * 5+"px","width:"+td_w * 6+"px"];
        that.setData({
          style:"width:"+width+"px",
          tdStyle:tdStyle,
          windowWidth:windowWidth,
          windowHeight:res.windowHeight  
        });         
      }  
    })  
    var info = that.data.info;
    //计算数据
    /*
      周一：info[0],
      周二：info[1],
      周三：info[2],
      周四：info[3],
      周五：info[4],
      周六：info[5],
      周日：info[6],
    */
    /*
    模拟数据
    周一：8:00-14:00(未预约)
     周二：9:00-12:00（未预约）14:00-17:00(已预约)
     周三：15:00-20:00(空闲)
    */
    var begin1 = "8:00";
    var end1 = "14:00";
    var begin2 = "9:00";
    var end2 = "12:00";
    var begin3 = "18:00";
    var end3 = "23:00";
    var begin4 = "15:00";
    var end4 = "16:00";
     var begin5 = "13:00";
    var end5 = "14:00";
    var str = that.compute(begin1,end1,width);
    info[0].no_appoint[0].style = str;
    info[0].no_appoint[0].span ="上海交通大学 医学院附属第 九人民医院";
    str = that.compute(begin2,end2,width);
    info[1].no_appoint[0].style = str;
    info[1].no_appoint[0].span ="爱尔眼科";
     str = that.compute(begin3,end3,width);
    info[1].appoint[0].style = str;
    info[1].appoint[0].span ="爱尔眼科 6/25  5人预约";
    str = that.compute(begin4,end4,width);
    info[2].free.push({
      style:str,
      span:'空闲'
    })
    str = that.compute(begin5,end5,width);
    info[2].free.push({
      style:str,
      span:'空闲'
    })
    that.setData({
      info:info
    })
  },
  touchmove:function(e){
    var windowWidth = this.data.windowWidth;
    var windowHeight = this.data.windowHeight;
    var pageX_end= e.touches[0].clientX;
    var pageY_end = e.touches[0].clientY;
    var x = windowWidth - pageX_end;
    var y = windowHeight - pageY_end;
    if(x < 10){
        x = 10;
    }else if(x > (windowWidth - 40)){
        x = (windowWidth - 40);
    }

    if(y < 10 ){
       y = 10;
    }else if(y > (windowHeight - 40)){
        y = windowHeight - 40
    }
    this.setData({
      homeStyle:'right:'+x+'px;bottom:'+y+"px;"
    })
  }
})
