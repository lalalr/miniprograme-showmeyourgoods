//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    select: false,
  },

  selectTap: function(){
    this.setData({
        select:!this.data.select
    })
  }
})
