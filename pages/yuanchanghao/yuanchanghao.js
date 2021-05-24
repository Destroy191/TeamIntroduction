// pages/yuanchanghao/yuanchanghao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      datalist: []
  },
  onLoad:function(options)
  {
    this.getData();
  },
  getData(){
    let that = this
    wx.cloud.database().collection("logs").where({
      id: 18074306
    }).get({
      success(res) {
        console.log("请求成功", res)
        that.setData({
          datalist: res.data
        })
      },
      fail(res){
        console.log("请求失败", res)
      }
    })
  }
})