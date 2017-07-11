//position.js
//获取应用实例
var app = getApp()
Page({
  data: {
    tab_active:1,
    style:"",
     offices:['请选择科室','外科','内科','中医科','中西医结合科','妇产科','儿科','医技科'],
    officeIndex:0,
    bespeak_array:[[false,false,false,false,false,false,false],[false,false,false,false,false,false,false],[false,false,false,false,false,false,false]],
    choice_one:[false,false,false,false,false,false,false],
    choice_two:[false,false,false],
    choice_three:[false,false,false,false,false,false,false,false,false],
    loading:false,
    disabled:false
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
  //选择空闲日期
  bespeak:function(e){
      var that = this;
      var currentTarget = e.currentTarget;
      var index1 = 0;
      var index2 = 0;
      if(currentTarget){
        index1 = currentTarget.dataset.indexx;
        index2 = currentTarget.dataset.indexy;
      }
      var bespeak_array = that.data.bespeak_array;
      if(bespeak_array[index1][index2]){
          bespeak_array[index1][index2] = false;
      }else{
        bespeak_array[index1][index2] = true;
      } 
      that.setData({
            bespeak_array:bespeak_array
      });
  },
  //科室
   bindOfficeChange:function(e){
     this.setData({
            officeIndex: e.detail.value
      })
  },
  //医院等级
  choiceCheck1:function(e){
      var that = this;
      var currentTarget = e.currentTarget;
      var index = 0;
      if(currentTarget){
        index = currentTarget.dataset.index;
      }
       var choice_one = that.data.choice_one;
      if(choice_one[index]){
          choice_one[index]= false;
      }else{
         choice_one[index] = true;
      } 
      that.setData({
            choice_one:choice_one
      });
  },
  //公司性质
  choiceCheck2:function(e){
      var that = this;
      var currentTarget = e.currentTarget;
      var index = 0;
      if(currentTarget){
        index = currentTarget.dataset.index;
      }
      var choice_three = that.data.choice_three;
       if(choice_three[index]){
          choice_three[index]= false;
      }else{
         choice_three[index] = true;
      } 
      that.setData({
            choice_three:choice_three
      });
  },
  //公司类型
  choiceCheck3:function(e){
      var that = this;
      var currentTarget = e.currentTarget;
      var index = 0;
      if(currentTarget){
        index = currentTarget.dataset.index;
      }
  },
  //允许
  allowChange:function (e){
    console.log('allowChange 发生 change 事件，携带值为', e.detail.value)
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
    
  }
})
