//preference.js
//获取应用实例
var app = getApp()
Page({
  data: {
      radio:1,
      check1:false,
      check2:false,
      selectArea:false,
      place:[1,1,1],
      provinces:[1,2,3],
      province:'1',
      citys:[4,5],
      city:'4',
      areas:[6,7],
      area:'6',
      grades:['三甲','三乙','二级','基层'],
      gradeIndex:0,
      selectArea2:false,
      place2:[1,1,1],
      provinces2:[1,2,3],
      province2:'1',
      citys2:[4,5],
      city2:'4',
      areas2:[6,7],
      area2:'6',
      grades2:['三甲','三乙','二级','基层'],
      gradeIndex2:0
  },
  //事件处理函数
  radioChange:function(e){
       this.setData({
            radio: e.detail.value
      })
  },
  checkboxChange:function(e){
      var array = e.detail.value;
      if(array.indexOf("0") != -1){
          this.setData({
            check1: true
          })
      }else{
          this.setData({
            check1: false
          })
      }
      if(array.indexOf("1") != -1){
          this.setData({
            check2: true
          })
      }else{
          this.setData({
            check2: false
          })
      }
  },
  chooseArea:function(){
     var that = this;
      that.setData({
             selectArea:true
      })
  },
  colseArea:function(){
    this.setData({
            selectArea:false
      })
  },
  bindAreaChange:function(e){
     var that = this;
    var value = e.detail.value;
    var array = that.data.place;
    if(value[0] != array[0]){
       that.setData({
            place:[value[0],0,0]
      })
    }else if(value[1] != array[1]){
       that.setData({
            place:[value[0],value[1],0]
      })
    }else{
       that.setData({
            place:value
      })
    }
    
  },
  sureArea:function(){
    var that = this;
    var value = that.data.place;
    var provinces = that.data.provinces;
    var citys = that.data.citys;
    var areas = that.data.areas;
    this.setData({
            province:provinces[value[0]],
            city:citys[value[1]],
            area:areas[value[2]],
            selectArea:false
      })
  },
  bindGradeChange:function(e){
       this.setData({
            gradeIndex: e.detail.value
      })
  },
  chooseArea2:function(){
     var that = this;
      that.setData({
             selectArea2:true
      })
  },
  colseArea2:function(){
    this.setData({
            selectArea2:false
      })
  },
  bindAreaChange2:function(e){
     var that = this;
    var value = e.detail.value;
    var array = that.data.place2;
    if(value[0] != array[0]){
       that.setData({
            place2:[value[0],0,0]
      })
    }else if(value[1] != array[1]){
       that.setData({
            place2:[value[0],value[1],0]
      })
    }else{
       that.setData({
            place2:value
      })
    }
    
  },
  sureArea2:function(){
    var that = this;
    var value = that.data.place2;
    var provinces2 = that.data.provinces2;
    var citys2 = that.data.citys2;
    var areas2 = that.data.areas2;
    this.setData({
            province2:provinces2[value[0]],
            city2:citys2[value[1]],
            area2:areas2[value[2]],
            selectArea2:false
      })
  },
  bindGradeChange2:function(e){
       this.setData({
            gradeIndex2: e.detail.value
      })
  },
  onLoad: function (option) {
     var that = this
    //调用应用实例的方法获取全局数据
  
  }
})
