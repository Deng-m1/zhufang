// index.js
import {
    getBaseUrl,
    requestUtil
} from "../../utils/requestUtil.js";

var QQMapWX = require('../../libs/qqmap-wx-jssdk');
var qqmapsdk;

import { HouseModel } from '../../model/recommend';
var houseModel = new HouseModel();
import handleImgList from '../../utils/handleImgList';

var Moment = require("../../utils/moment.js");
import regeneratorRuntime, {
    async
} from '../../libs/runtime/runtime';

Page({
    data: {
        // 轮播图部分
        swiperImg: ['https://p0.meituan.net/750.0.0/tdchotel/f1cd131254f350e6d7c6717a49c03489307738.jpg',
            'https://p0.meituan.net/750.0.0/tdchoteldark/2d3f7729cdad16bbc702d43392179a41565998.jpg',
            'https://p0.meituan.net/750.0.0/tdchotel/18d9806aed15e6735f3831f655963478610742.jpg'
        ],
        houses: {
            "cityEnName": "bj"
        },
        cover: [],
        duration: 500,
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2000,
        city: '杭州市', // 搜索框旁的地址
        latitude: '', //纬度
        longitude: '', //经度
        selectCity: false, //进入页面没选择城市 默认false
        apartmentArr: ['三室两厅', '一室一厅'], //房屋类型
        wayArr: ['日租', '短租'], //租住类型,
        apartment: '',
        way: '',
        indexApa: 0, //房屋类型索引
        indexWay: 0, //租住类型索引
        selectApa: false, //进入页面没选择户型 默认false
        selectWay: false, //进入页面没选择租住类型 默认false
        currentIndex: 0, //点击线上签约的索引
        recommendArr: [],
        img: [],
        searchword: '',
        selectedCity: '', //被选中的城市
        type: '', //被选中的房子类型
        rtype: '', //被选中的房子租住类型
        cid: []

    },


    onLoad: function (Options) {
        qqmapsdk = new QQMapWX({
            key: 'DSABZ-WAWWU-CE7VW-GKSWS-5ES76-5HBU5'
          });
          this.addrAuthorized();


        wx.request({
            url: 'http://localhost:8080/house/houses',
            method: "Post",
            data: this.data.houses,
            dataType: 'json',
            success: (Response) => {
                const datalist = Response.data.data.list;
                const houseFormList = [];
                let string = getBaseUrl();
                console.log(string)

                // 遍历 datalist 中的每个对象


                console.log(datalist)
                console.log(houseFormList)
            }

        })

        this.getddd();
    },
    addrAuthorized() {
        var self = this;
        wx.getSetting({
          success(res) {
            // console.log(res);
            // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
            // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
            // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
            if (res.authSetting['scope.userLocation'] !== 'undefined' && res.authSetting['scope.userLocation'] !== true) {
              wx.showModal({
                title: '请求授权当前位置',
                content: '需要获取您的地理位置，请确认授权',
                success(res) {
                  console.log(res);
                  // 用户点击了取消按钮
                  if (res.cancel) {
                    wx.showToast({
                      title: '拒绝授权',
                      image: '../../images/refuse.png',
                      duration: 1000
                    })
                    self.getRecommend(self.data.city);
                  } else {
                    wx.showToast({
                      title: '授权成功',
                      image: '../../images/success.png',
                      duration: 1000
                    })
                    // 授权成功 调用wx.getLocation()
                    self.getLocation();
                  }
                }
              })
            } else {
              // 地理位置已授权
              self.getLocation();
            }
          }
        })
      },
    async getddd() {
        const result = await requestUtil({
            url: 'house/15',
            method: 'GET'
        });
        console.log(result.data);
        this.setData({
            cover: result.data.house.cover
        })
        console.log(this.data.cover);

    }
})