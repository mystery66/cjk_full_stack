//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    topbar: [{
      text: '推荐',
     id: '0'
  }, {
      text: '热点',
      id: '1'
  }, {
      text: '视频',
      id: '2'
  }, {
      text: '图片',
      id: '3'
  }, {
      text: '段子',
      id: '4'
  }, {
      text: '社会',
     id: '5'
  }, {
      text: '娱乐',
      id: '6'
  }, {
      text: '科技',
     id: '7'
  }, {
      text: '体育',
      id: '8'
  }, {
      text: '汽车',
      id: '9'
  }, {
      text: '财经',
      id: '10'
  }, {
      text: '搞笑',
      id: '11'
  }],
  addchannel: [{
    text: '历史',
   id: '0'
   }, {
    text: '健康',
    id: '1'
   }, {
    text: '国际',
    id: '2'
   }, {
    text: '养儿',
    id: '3'
   }, {
    text: '房产',
    id: '4'
  }, {
    text: '数码',
   id: '5'
  }, {
    text: '手机',
    id: '6'
  }, {
    text: '科技',
   id: '7'
}, {
    text: '美食',
    id: '8'
  }, {
    text: '养生',
    id: '9'
  }, {
    text: '情感',
    id: '10'
  }, {
    text: '家居',
    id: '11'
  },
  {
    text: '文化',
    id: '12'
  }, {
    text: '科学',
    id: '13'
  }, {
    text: '动漫',
    id: '14'
  }, {
    text: '星座',
    id: '15'
  },
  {
    text: '宠物',
    id: '16'
  }, {
    text: '彩票',
    id: '17'
  }, {
    text: '正能量',
    id: 18
  }, {
    text: '传媒',
    id: 19
  },
  {
    text: '故事',
    id: 20
  }, {
    text: '精选',
    id: 21
  }, {
    text: '收藏',
    id: 22
  },
],
video: [
  {
  id: 0,
  image: 'http://wx2.sinaimg.cn/mw690/006Bh1yWgy1fs3ohgau1qj30u00gsgv4.jpg',
  detail:[{
    image: '/images/icon_videoinfo.jpg',
    from: '乐娱播报',
    playback: '42万次播放',
    icon: '/images/icon_videoicon.png',
    num: '231'
}]
},
{
  id: 1,
  image: 'http://wx4.sinaimg.cn/mw690/006Bh1yWgy1fs3nxfvsa7j30tw0h0qc4.jpg',
  detail:[{
    image: '/images/icon_videoinfo.jpg',
    from: '乐娱播报',
    playback: '42万次播放',
    icon: '/images/icon_videoicon.png',
    num: '231'
}]
},
{
  id: 2,
  image: 'http://wx1.sinaimg.cn/mw690/006Bh1yWgy1fs3nx4w3y5j30ts0gwakq.jpg',
  detail:[{
    image: '/images/icon_videoinfo.jpg',
    from: '乐娱播报',
    playback: '42万次播放',
    icon: '/images/icon_videoicon.png',
    num: '231'
}]
},
{
  id: 3,
  image: 'http://wx2.sinaimg.cn/mw690/006Bh1yWgy1fs3nwmb5ehj30qo0f0769.jpg',
  detail:[{
    image: '/images/icon_videoinfo.jpg',
    from: '乐娱播报',
    playback: '42万次播放',
    icon: '/images/icon_videoicon.png',
    num: '231'
}]
},
{
  id: 4,
  image: 'http://wx1.sinaimg.cn/mw690/006Bh1yWgy1fs3nvom0u1j30u00gyalv.jpg',
  detail:[{
    image: '/images/icon_videoinfo.jpg',
    from: '乐娱播报',
    playback: '42万次播放',
    icon: '/images/icon_videoicon.png',
    num: '231'
}]
},
],
 


  curIndex: 0,
  index: 0,
  duration: 500,
  Circular: true,
  hidden: true,
  scrollTop: 0,
  swiperActiceIndex: 0,
  Recommend: [],
  Hot: []

},
 
  //事件处理函数
  
  searchInfo(e) {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },
  getInfo(e) {
    wx.navigateTo({
      url: '/pages/userinfo/userinfo'
    })
  },
  Selected(e) {
    
  this.setData({
      curIndex:e.currentTarget.dataset.index,
      swiperActiceIndex: e.currentTarget.dataset.index
     
    })
  },
  onSwiperChange (e) {
  //  console.log (e);
   let swiperActiceIndex = this.data.swiperActiceIndex;
   swiperActiceIndex = e.detail.current;
   let  curIndex = this.data.curIndex;
   curIndex = swiperActiceIndex;
   this.setData({
     swiperActiceIndex,
     curIndex
   })
  },
  addChannel(e) {
      // console.log(e);
  let hidden = !this.data.hidden;
   this.setData({
       hidden
   })

  },
  returnIndex(e) {
    this.setData({
        hidden: true
    })
  },
  addChannelTitle(e) {
//  console.log(e);
  },
  toSeeNews(e) {
    console.log(e);
    wx.navigateTo({
      url: '/pages/news/news'
    })
  },
  videoplay(e) {
    console.log(e);
    wx.navigateTo({
      url: '/pages/videoplay/videoplay'
    })
  },
  onLoad: function () {
    
  },
  onReady: function () {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b13a047c5450f078273c500/jinritoutiao',
      success: (res) => {
        // console.log(res);
        this.setData({
          Recommend: res.data.data.Recommend,
          Hot: res.data.data.Hot
        })

      }
    })
  },
})
