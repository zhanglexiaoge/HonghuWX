 var http = require('../../service/http.js')

Page({
  data: {
    downloadData: [],
    imageUrl: ""
  },
  // onLoad: function () {
  //   this.setData({
  //     logs: (wx.getStorageSync('logs') || []).map(log => {
  //       return util.formatTime(new Date(log))
  //     })
  //   })
  // }
  onLoad: function (options) {
    // console.log(options.dataObj)
    var that = this
    that.reqData(options.dataObj)
    
    
  },
//http://img1.3lian.com/2015/w7/85/d/101.jpg

reqData:function(obj){
  console.log('00000000000  ' + obj)
var that = this
  http.getReqZL("ARProjectionManagePro/pc/getFilePathById", obj, function (res) {
    //更新数据
  // console.log(res )
   if (res.statusCode = 200){
    // console.log(res.data)
       that.setData({
         imageUrl: res.data
    })
     
   }

  })

},


  downloadtap: function (e) {
    console.log('下载')
    //最大下载10M视频 图片

    console.log(this.data.imageUrl)
    wx.downloadFile({
      // url: 'https://pic.ibaotu.com/00/74/91/19p888piCizZ.jpg-0.jpg!ww700', 

      

      url: this.data.imageUrl,
      success: function (res) {
        console.log(res)
        
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          let path = res.tempFilePath
          //保存到系统相册
          wx.saveImageToPhotosAlbum({
            filePath: path,
            success(res) {
              console.log(res)
            },
            fail(res) {
              console.log(res)
            },
            complete(res) {
              console.log(res)
            }
          })

        }
      },
      fail: function (err) {
        console.log(err)

        wx.showModal({
          title: '提示',
          content: '这是一个模态弹窗',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }
    })

  },


})