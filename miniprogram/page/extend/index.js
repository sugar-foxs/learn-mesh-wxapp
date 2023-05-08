import CustomPage from './base/CustomPage'

CustomPage({
  onShareAppMessage() {
    return {
      title: '扩展能力',
      path: 'page/extend/index'
    }
  },
  data: {
    list: [
      {
        id: 'form',
        name: '期待',
        open: false,
        father: 'form', // 父文件夹
        pages: []
      },
    ]
  },
  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    // const extendedList = this.data.extendedList.map((item) => ({...item, open: false}))
    this.setData({
      list,
      // extendedList,

    })
  },
  kindExtenedListToggle(e) {
    const id = e.currentTarget.id
    const extendedList = this.data.extendedList
    for (let i = 0, len = extendedList.length; i < len; ++i) {
      if (extendedList[i].id === id) {
        extendedList[i].open = !extendedList[i].open
      } else {
        extendedList[i].open = false
      }
    }
    const list = this.data.list.map((item) => ({...item, open: false}))
    this.setData({
      extendedList,
      list,
    })
  },
  themeToggle() {
    const App = getApp()

    if (App.themeChanged) {
      if (App.globalData.theme === 'light') {
        App.themeChanged('dark')
      } else {
        App.themeChanged('light')
      }
    }
  }
})
