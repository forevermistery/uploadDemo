var common = require('../../utils/common.js');
var xjCitys={};
Page({
  data:{
    chinaCitys:[],
    cityName:""
  },
  onShareAppMessage:function(){
    return{
      title:'城市列表',
      desc:'',
      path:'/pages/add/add'
    }
  },
  onLoad:function(options){
    xjCitys=common.readXJCitys();
    this.setData({
      chinaCitys:xjCitys
    })
  },
  chinaTaped:function(e){
    var itemId=e.target.id;
    var city=xjCitys[itemId];
    
    var cityData = { "currentCity": city }
    common.addCity(cityData)
    wx.redirectTo({
      url: '../index/index?name=' + city
    })
  },
  searchInput:function(e){
    this.setData({
      cityName:e.detail.value
    })
  },
  searchCity:function(e){
    if(this.data.cityName==""){
      return
    }else if(this.data.cityName=="我的天"){
      wx.redirectTo({
        url: '../index/index?name=' + "广州市",

      })
      var cityname=this.data.cityName
      wx.showModal({
        title: '城市天气搜索失败',
        content: '未找到' + cityname + '的天气预报信息',
        showCancel: false,
        confirmText: "返回"
      })
      
    }else{
      

    wx.redirectTo({
      url: '../index/index?name' + this.data.cityName
    })
  }
  }
})