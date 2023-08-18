// components/swiper/swiper.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
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
     * 组件的方法列表
     */
    methods: {
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
    }
})
