Page({
  data: {
    theme: 'light',
    list: [
      {
        id: 'spring',
        page: '../spring/spring',
        title: 'spring-boot',
        url: 'https://spring.io/projects/spring-boot',
        image: '../../../../image/spring.jpg',
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
      title: 'java',
      path: 'packageComponent/pages/view/java/java'
    }
  },
})
