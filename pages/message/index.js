// pages/message/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentIndex: 0,
        currentIndex1: 0,
        currentIndex2: 0,
        imgList: [{
          img: "http://localhost:8080/static/verify-image-1.jpg"
        },
        {
          img: "http://localhost:8080/static/verify-image-2.jpg"
        },
        {
          img: "http://localhost:8080/static/verify-image-3.jpg"
        }
        ],
        imgList1: [{
          img: "http://localhost:8080/static/verify-image-4.jpg"
        },
          {
            img: "http://localhost:8080/static/verify-image-5.jpg"
          },
          {
            img: "http://localhost:8080/static/verify-image-6.jpg"
          }
        ],
      },
    
    changeSwiper: function (e) {
        this.setData({
          currentIndex: e.detail.current
        })
      },
    changeSwiper1: function (e) {
        this.setData({
          currentIndex1: e.detail.current
        })
      },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})