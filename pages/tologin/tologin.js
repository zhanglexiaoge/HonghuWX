
Page({
  data: {
    downloadData: []
  },
 
  getUserInfo: function (e) {
    console.log(e.detail.userInfo)

    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];  //当前页面
    var prevPage = pages[pages.length - 2]; //上一个页面
   
    //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
    prevPage.setData({
      // cityName: cityName
      userInfo: e.detail.userInfo,
      hasUserInfo: true

    })

    wx.navigateBack();

  }

})