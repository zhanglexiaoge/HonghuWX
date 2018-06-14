var rootDocment = 'http://192.168.1.113:81/';
var header = {
  'Accept': 'application/json',
  'Content-type': 'application/json',
  
  //"Content-Type": "application/text",
  //'Authorization': null,
}
function getReq(url, cb) {
  wx.showLoading({
    title: '加载中',
  })
  console.log("header=="),
    console.log(header)
  wx.request({
    url: rootDocment + url,
    method: 'get',
    header: header,
    success: function (res) {
      wx.hideLoading();
      return typeof cb == "function" && cb(res.data)
    },
    fail: function () {
      wx.hideLoading();
      wx.showModal({
        title: '网络错误',
        content: '网络出错，请刷新重试',
        showCancel: false
      })
      return typeof cb == "function" && cb(false)
    }
  })
}


function getReqZL(url, data, cb) {
  console.log('zlzlzlzz' + data)
  wx.showLoading({
    title: '加载中',
  })
  console.log("header=="),
    console.log(header),
    wx.request({
      url: rootDocment + url,
      header: header,
      data: data,
      method: 'post',
      success: function (res) {
        console.log(res)
        wx.hideLoading();
        return typeof cb == "function" && cb(res.data)
      },
      fail: function () {
        wx.hideLoading();
        wx.showModal({
          title: '网络错误',
          content: '网络出错，请刷新重试',
          showCancel: false
        })
        return typeof cb == "function" && cb(false)
      }
    })
}
function postReq(url, data, cb) {
  console.log( 'zlzlzlzz'+ data )
  wx.showLoading({
    title: '加载中',
  })
  console.log("header=="),
    console.log(header),
    wx.request({
      url: rootDocment + url,
      header: header,
      data: {"data": data },
      method: 'post',
      success: function (res) {
        wx.hideLoading();
        return typeof cb == "function" && cb(res.data)
      },
      fail: function () {
        wx.hideLoading();
        wx.showModal({
          title: '网络错误',
          content: '网络出错，请刷新重试',
          showCancel: false
        })
        return typeof cb == "function" && cb(false)
      }
    })

}
module.exports = {
  getReq: getReq,
  getReqZL: getReqZL,
  postReq: postReq,
  header: header,
} 