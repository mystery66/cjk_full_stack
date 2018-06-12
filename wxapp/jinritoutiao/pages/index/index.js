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
 


  curIndex: 0,
  index: 0,
  duration: 500,
  Circular: true,
  hidden: true,
  scrollTop: 0,
  swiperActiceIndex: 0,
  Recommend: [],
  Hot: [],
  Refresh: false,
  RefreshNews: false,
  

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
    console.log(e);
  this.setData({
      curIndex:e.currentTarget.dataset.index,
      swiperActiceIndex: e.currentTarget.dataset.index
     
    })
  },
  onSwiperChange (e) {
    // console.log (e);
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
    console.log(e);
    let addchannel = this.data.addchannel;
    let topbar = this.data.topbar;
    var item = e.currentTarget.dataset.item; 
    console.log(item);
    topbar.push((addchannel.splice(item,1))[0]);
    // console.log(topbar);
     console.log(addchannel);
    // console.log((addchannel.splice(index,1))[0])
    wx.showModal({
      title: '提示',
      content: '是否添加此频道',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            topbar,
            addchannel
          })
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    
  },
  minusChannelTitle(e) {
    // console.log(e);
    console.log(e);
     var index = e.currentTarget.dataset.index; 
     if ( index == 0) {
     console.log('禁止移除该项')
    } else {
      let addchannel = this.data.addchannel;
      let topbar = this.data.topbar;
      var index = e.currentTarget.dataset.index; 
    // console.log(index);
    addchannel.push((topbar.splice(index,1))[0]);
    // console.log(topbar);
    console.log(addchannel);
      wx.showModal({
        title: '提示',
        content: '是否删除此频道',
        success: (res) => {
          if (res.confirm) {
            this.setData({
              topbar,
              addchannel
            })
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
    
    
   
  },
  toSeeNews(e) {
    
    wx.navigateTo({
      url: '/pages/news/news'
    })
  },
  videoplay(e) {
    // console.log(e);
    wx.navigateTo({
      url: '/pages/videoplay/videoplay'
    })
  },
  ToRefresh(e) {
    let Refresh = this.data.Refresh;
    Refresh = !Refresh;
    console.log(Refresh);
   this.setData({
    Refresh
  })
   setTimeout(() => {
     this.setData({
       Refresh:!Refresh,
     })
   }, 1000);
  console.log(Refresh)
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
          Hot: res.data.data.Hot,
          video: res.data.data.video,
          addchannel: res.data.data.addchannel,
        })

      }
    })
  },
})
