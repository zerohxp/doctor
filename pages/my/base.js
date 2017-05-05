//create.js
//获取应用实例
var app = getApp();


Page({
  data: {
    disabled: false,
    loading: false,
    userImg:'',
    sixs:['男','女'],
    sixIndex:0,
    birthday:'1970-07-01',
    selectArea:false,
    place:[0,0,0],
    provinces:[],
    province:'上海',
    citys:[],
    city:'上海市',
    areas:[],
    area:'闵行区',
    placeholder:true,
     name:'',
     email:'',
    phone:''
  },
  //事件处理函数
  bindSixChange:function(e){
     this.setData({
            sixIndex: e.detail.value
      })
  },
  bindBirthdayChange:function(e){
     this.setData({
            birthday: e.detail.value
      })
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
  nameValue:function(e){
       this.setData({
            name: e.detail.value
      })
  },
  emailValue:function(e){
       this.setData({
            email: e.detail.value
      })
  },
  phoneValue:function(e){
       this.setData({
            phone: e.detail.value
      })
  },
  save:function(){
      var that = this;
      if(!that.data.name){
           wx.showToast({
            title: '请填写姓名',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       if(that.data.name.length < 2 || that.data.name.length > 5){
           wx.showToast({
            title: '请填写2~5个汉字',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       if(!that.data.email && !that.data.phone){
           wx.showToast({
            title: '邮箱与手机至少需输入一项',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       if(that.data.email && !/\w@\w*\.\w/.test(that.data.email)){
           wx.showToast({
            title: '请填写正确邮箱',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       if(that.data.phone && !/^(13[0-9]{9})|(15[89][0-9]{8})$/.test(that.data.phone)){
           wx.showToast({
            title: '请填写正确手机号',
            image:'../common/img/error.png',
            duration: 2000
           })
           return;
       }
       that.setData({
            disabled: true,
            loading: true
      })
  },
  chooseImg:function(){
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['compressed'], // 可以指定是原图还是压缩图,默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机,默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表,tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
        }
      })
  },
  next:function(){
    wx.showModal({
        title: '跳过',
        content: '确认要跳过吗？本页编辑过的数据将不会被保存。',
        confirmColor:'#00acff',
        cancelColor:'#cdcdcd',
        success: function(res) {
            if (res.confirm) {
                 wx.redirectTo({
                    url: '../my/technical'
                })
            } 
        }
    })
  },
  onLoad: function (option) {
    var that = this
    //调用应用实例的方法获取全局数据
   app.getUserInfo(function(userinfo){
        if(userinfo){
            that.setData({
              userImg:userinfo.avatarUrl
            })
        }
        
    })
    that.setData({
            provinces:app.getProvinces()
       })
   //调用数据时,判断下自我评价的字段是否有值,如果有值的话,请将placeholder设置成false
  },
  isPlaceholder:function(e){
    var value = e.detail.value;
    if(!value){
      this.setData({
            placeholder:true
      })
    }else{
      this.setData({
              placeholder:false
      })
    } 
  },
  disPlaceholder:function(e){
    this.setData({
              placeholder:false
    })
  }
})
