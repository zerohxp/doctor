//create.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userImg:'',
    sixs:['男','女'],
    sixIndex:0,
    birthday:'1970-07-01',
    hospital:'请选择',
    technicals:['医学生','规培生','住院医师','主治医师','副主任医师','主任医师'],
    technicalIndex:0,
    selectArea:false,
    place:[1,1,1],
    provinces:[1,2,3],
    province:'1',
    citys:[4,5],
    city:'4',
    areas:[6,7],
    area:'6'
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
  save:function(){
      wx.reLaunch({
        url: '../main/index'
      })
  },
  chooseImg:function(){
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
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
    if(option && option.dtype){
        var dtype = option.dtype;
        if(dtype == 2){
          that.setData({
               technicals:['医学生','规培生','药士','药师','主管药师','副主任药师','主任药师']
          })
        }else if(dtype == 3){
          that.setData({
               technicals:['医学生','规培生','技士','技师','主管技师','副主任技师','主任技师']
          })
        }
    }
    wx.removeStorageSync('select_hospital');
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
