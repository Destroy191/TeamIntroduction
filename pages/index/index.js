// index.js
// 获取应用实例
const app = getApp()

Page({
  Sun_info(e){
    wx.navigateTo({
      url: '/pages/sunyuchen/sunyuchen',
    })
  },
  Shen_info(e){
    wx.navigateTo({
      url: '/pages/shenhaijian/shenhaijian',
    })
  },
  Yuan_info(e){
    wx.navigateTo({
      url: '/pages/yuanchanghao/yuanchanghao',
    })
  },
  Lv_info(e){
    wx.navigateTo({
      url: '/pages/lvruimin/lvruimin',
    })
  },
  data: {
    motto: '团队介绍',
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  }
})
