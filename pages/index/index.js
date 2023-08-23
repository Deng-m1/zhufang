// index.js
import {
    getBaseUrl,
    requestUtil
} from "../../utils/requestUtil.js";
import regeneratorRuntime, {
    async
} from '../../lib/runtime/runtime';
Page({
    data: {
        swiperlist: [],
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