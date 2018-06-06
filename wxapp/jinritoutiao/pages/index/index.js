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
 
channels: [{
  channel:[{id: 0,
   detail:{title: '90年前日本人拍摄的天下第一佛：乐山大佛，看看和现在有啥不一样',
    image: 'https://p1.pstatp.com/list/190x124/pgc-image/15260958042439138c972f3',
  },
  detail:{title: '90年前日本人拍摄的天下第一佛：乐山大佛，看看和现在有啥不一样',
  images:{image: 'https://p1.pstatp.com/list/190x124/pgc-image/15260958042439138c972f3',
          image: 'https://p1.pstatp.com/list/190x124/pgc-image/15260958042439138c972f3',
  }
}
  }],
  channel:[{id: 1,
    detail:{ num: 1,
      title: '90年前日本人拍摄的天下第一佛：乐山大佛，看看和现在有啥不一样',
      image: 'https://p1.pstatp.com/list/190x124/pgc-image/15260958042439138c972f3',
   },
   detail:{title: '90年前日本人拍摄的天下第一佛：乐山大佛，看看和现在有啥不一样',
   image: 'https://p1.pstatp.com/list/190x124/pgc-image/15260958042439138c972f3',
           image: 'https://p1.pstatp.com/list/190x124/pgc-image/15260958042439138c972f3',
   
 }
   }],
  
    
          }],
  


  curIndex: 0,
  index: 0,
  duration: 500,
  Circular: true,
  hidden: true,
  scrollTop: 0,

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
    
   ;
   
    this.setData({
      curIndex:e.currentTarget.dataset.index
     
    })
  },
  addChannel(e) {
      console.log(e);
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
 console.log(e);
  },
  onLoad: function () {
    
  },
 
})
