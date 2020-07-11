//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    select: false,
    goodslist:[{
        catid:"1",
        itemlist:[{
            id:"1",
            name:"男装 轻型腰包 423485423485423485",
            desc:"123456",
            ischosen:false
        }]
      },
      {
        catid:"2",
        itemlist:[{
          id:"1",
          name:"女装 轻型腰包 423485423485423485",
          desc:"abcde",
          ischosen:false
        }]
      }
    ]
  },

  selectTap: function(){
    this.setData({
        select:!this.data.select
    })
  }


})
