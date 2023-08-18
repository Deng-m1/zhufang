// index.js
Page({
    data:{
        swiperlist:[],
        houses:{
            "cityEnName": "bj"
        }
        
    },
    

    onLoad:function(Options)
    {
        
          
        wx.request({
          url: 'http://localhost:8080/house/houses',
          method:"Post",
          data:this.data.houses,
          dataType:'json',
          success:(Response)=>{
             const datalist=Response.data.data.list;
             const houseFormList = [];

                // 遍历 datalist 中的每个对象
        

             console.log(datalist)
             console.log(houseFormList)
          }
          
        })
    }
})
