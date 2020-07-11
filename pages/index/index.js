//index.js
//获取应用实例
import {data} from '../../utils/data'
const app = getApp()

Page({
  data: {
    data:data,
    select: false,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
		currentTab:0
  },
  tapBox: function(event) {
    console.log(event)
  },
  //事件处理函数

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
  },
  selectTap: function(){
    this.setData({
        select:!this.data.select
    })
  }
})
