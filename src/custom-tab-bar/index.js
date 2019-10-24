const app = getApp()
Component({
  data: {
    showTabbar: true,
    selected: 0,
    color: "#9A9A9A",
    selectedColor: "#493D34",
    backgroundColor: "#FFF",
    list: [
      {
        "pagePath": "/pages/home/index",
        'iconPath': '/image/home.png',
        'selectedIconPath': '/image/home-s.png',
        "text": "首页"
      }, {
        "pagePath": "/pages/service/index",
        'iconPath': '/image/service.png',
        'selectedIconPath': '/image/service-s.png',
        "text": "客服"
      }, {
        "pagePath": "/pages/orders/index",
        'iconPath': '/image/order.png',
        'selectedIconPath': '/image/order-s.png',
        "text": "订单"
      }, {
        "pagePath": "/pages/me/index",
        'iconPath': '/image/me.png',
        'selectedIconPath': '/image/me-s.png',
        "text": "我的"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path

      if (data.index == 1) return;//客服
      wx.switchTab({ url })
      // this.setData({
      //   selected: data.index
      // })
    }
  }
})