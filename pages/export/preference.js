//preference.js
//获取应用实例
var app = getApp()
Page({
  data: {
      radio:1,
      check1:false,
      check2:false,
      selectArea:false,
      place:[0,0,0],
      provinces:[],
      province:'上海',
      citys:[],
      city:'上海市',
      areas:[],
      area:'闵行区',
      grades:['三甲','三乙','二级','基层'],
      gradeIndex:0,
      selectArea2:false,
      place2:[0,0,0],
      provinces2:[],
      province2:'上海',
      citys2:[],
      city2:'上海市',
      areas2:[],
      area2:'闵行区',
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
     var province = that.data.province;
     var city = that.data.city;
     var area = that.data.area;
     var provinces = app.getProvinces();
     var citys = app.getCitys(province);
     var areas = app.getAreas(city);
     var province_index = provinces.indexOf(province);
     var city_index = citys.indexOf(city);
     var areae_index = areas.indexOf(area);
      that.setData({
            citys:citys,
            areas:areas,
            place:[province_index,city_index,areae_index],
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
     var provinces = that.data.provinces;
    if(value[0] != array[0]){
       var province = provinces[value[0]];
       var citys = app.getCitys(province);
       var city = citys[0];
       var areas =app.getAreas(city);
       that.setData({
            citys:citys,
            areas:areas,
            place:[value[0],0,0]
      })
    }else if(value[1] != array[1]){
       var citys = that.data.citys;
        var city = citys[value[1]];
      var areas = app.getAreas(city);
       that.setData({
             areas:areas,
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
     var province = that.data.province2;
     var city = that.data.city2;
     var area = that.data.area2;
     var provinces = app.getProvinces();
     var citys = app.getCitys(province);
     var areas = app.getAreas(city);
     var province_index = provinces.indexOf(province);
     var city_index = citys.indexOf(city);
     var areae_index = areas.indexOf(area);
      that.setData({
            citys2:citys,
            areas2:areas,
            place2:[province_index,city_index,areae_index],
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
     var provinces = that.data.provinces2;
    if(value[0] != array[0]){
       var province = provinces[value[0]];
       var citys = app.getCitys(province);
       var city = citys[0];
       var areas =app.getAreas(city);
       that.setData({
            citys2:citys,
            areas2:areas,
            place2:[value[0],0,0]
      })
    }else if(value[1] != array[1]){
       var citys = that.data.citys2;
        var city = citys[value[1]];
      var areas = app.getAreas(city);
       that.setData({
             areas2:areas,
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
  bindGradeChange2:function(e){
       this.setData({
            gradeIndex2: e.detail.value
      })
  },
  onLoad: function (option) {
     var that = this
    //调用应用实例的方法获取全局数据
   that.setData({
            provinces:app.getProvinces(),
            provinces2:app.getProvinces()
   })
  }
})
