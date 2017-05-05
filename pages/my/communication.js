//communication.js
//获取应用实例
var app = getApp()
Page({
  data: {
    checkArray:[],
    checkedArray:[false,false,false,false,false,false,false,false,false,false,false],
    loading: false,
    pageLoaded:false
  },
  //事件处理函数
  checkboxChange: function(e) {
     var that = this;
     var value = e.detail.value;
     var checkedArray = that.data.checkedArray;
    if(value.indexOf("1") != -1){
        checkedArray[0] = true;
    }else{
       checkedArray[0] = false;
    }
    if(value.indexOf("2") != -1){
        checkedArray[1] = true;
    }else{
       checkedArray[1] = false;
    }
    if(value.indexOf("3") != -1){
        checkedArray[2] = true;
    }else{
       checkedArray[2] = false;
    }
    if(value.indexOf("4") != -1){
        checkedArray[3] = true;
    }else{
       checkedArray[3] = false;
    }
    if(value.indexOf("5") != -1){
        checkedArray[4] = true;
    }else{
       checkedArray[4] = false;
    }
    if(value.indexOf("6") != -1){
        checkedArray[5] = true;
    }else{
       checkedArray[5] = false;
    }
    if(value.indexOf("7") != -1){
        checkedArray[6] = true;
    }else{
       checkedArray[6] = false;
    }
    if(value.indexOf("8") != -1){
        checkedArray[7] = true;
    }else{
       checkedArray[7] = false;
    }
    if(value.indexOf("9") != -1){
        checkedArray[8] = true;
    }else{
       checkedArray[8] = false;
    }
    if(value.indexOf("10") != -1){
        checkedArray[9] = true;
    }else{
       checkedArray[9] = false;
    }
    if(value.indexOf("11") != -1){
        checkedArray[10] = true;
    }else{
       checkedArray[10] = false;
    }
    this.setData({
          checkArray: e.detail.value,
          checkedArray:checkedArray
       });
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  select:function(e){
     var that = this;
     var dataset = e.target.dataset;
      var check = "";
      var index = "";
      var checkArray = that.data.checkArray;
      var checkedArray = that.data.checkedArray;
      if(dataset){
          check = dataset.check;
          index = dataset.index;
          if(checkArray.indexOf(check) != -1){
            var _index = checkArray.indexOf(check);
            checkArray.splice(_index,1);
            checkedArray[index] = false;
          }else{
            checkArray.push(check);
             checkedArray[index] = true;
          }
           that.setData({
              checkArray:checkArray,
              checkedArray:checkedArray
          });
       }
  },
  save:function(){
       var that = this;
       var checkArray = that.data.checkArray;
       if(checkArray.length == 0){
          wx.showModal({
            title: '提示',
            content: '一项符合的都没有吗？再确认下吧~',
            confirmColor:'#00acff',
            showCancel:false,
            success: function(res) {
                if (res.confirm) {
                    
                } 
            }
        })
        return;
       }
       that.setData({
           disabled:true,
           loading:true
       });
       var currentPages = getCurrentPages();
        for(var i=0;i<currentPages.length;i++){
            var current = currentPages[i];
            if(current.data && current.data.myPlus){
                var num = i + 1;
                num = currentPages.length - num;
                wx.navigateBack({
                  delta: num
                })
            }
        }
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
                    url: '../my/english'
                })
            } 
        }
    })
  },
  onLoad: function (option) {
    var that = this
    //调用应用实例的方法获取全局数据
   
  }
})
