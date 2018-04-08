// pages/bench/bench.js
var app = getApp()
Page({
  data: {
    quetions:[
      {head:"../../imgs/txmb.jpg",
      tittle:"这是哪首学校",
      time:"1小时前",
      anwsers:"30",
      views:"123"},
      {
        head: "../../imgs/txmb.jpg",
        tittle: "这是哪首学校",
        time: "1小时前",
        anwsers: "30",
        views: "123"
      },
      {
        head: "../../imgs/txmb.jpg",
        tittle: "这是哪首学校",
        time: "1小时前",
        anwsers: "30",
        views: "123"
      },
      {
        head: "../../imgs/txmb.jpg",
        tittle: "这是哪首学校",
        time: "1小时前",
        anwsers: "30",
        views: "123"
      },
    ]
  },
  onLoad: function () {
  },

  bindtapAsk:function(){
    wx.navigateTo({
      url: 'ask/ask',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
}) 