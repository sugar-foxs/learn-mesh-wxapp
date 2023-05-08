Page({
  data: {
    theme: 'light',
    list: [
      {
        page: '../topgoer/topgoer',
        title: 'topgoer',
        url: 'https://www.topgoer.com',
        image: '../../../../image/topgoer.jpg',
      },
      {
        page: '../gopl/gopl',
        title: 'Go语言圣经（中文版）',
        url: 'https://books.studygolang.com/gopl-zh/',
        image: '../../../../image/gopl.jpeg'
      },
    ]
  },
  onLoad() {
    this.setData({
      theme: wx.getSystemInfoSync().theme || 'light'
    })

    if (wx.onThemeChange) {
      wx.onThemeChange(({theme}) => {
        this.setData({theme})
      })
    }
  },
  onShareAppMessage() {
    return {
      title: 'go',
      path: 'packageComponent/pages/view/go/go'
    }
  },
})
