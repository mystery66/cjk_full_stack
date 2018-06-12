// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: '',
    historyInfo: [],
    hotwords:[{
      text: '赵芸蕾洪玮结婚',
      },
      {
        text: '法国队3-1意大利',
        },
      {
        text: '以军打死巴志愿者',
      },
      {
        text: '朱雨玲出局',
      },
      {
        text: '台北发生停电事故',
      },
      {
        text: '苹果拒出席听证会',
      },
      {
        text: '深圳村霸被逮捕',
      },
      {
        text: 'G1加时勇士胜骑士',
      },
      {
        text: '扳笋发现滑坡征兆',
      },
      {
        text: '大张高铁全线铺轨',
      },

    ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindInput (e) {
    console.log(e);
     let inputVal = this.data.inputVal;
     let historyInfo = this.data.historyInfo;
     inputVal = e.detail.value;
     historyInfo = inputVal;
     console.log(historyInfo);
     this.setData({
      inputVal,
      historyInfo
      })
   
      
  },
  cancel (e) {
    
    wx.navigateBack({  
      delta: 1  
   })  
  },
deleteHistory (e) {
    wx.showModal({
      title: '提示',
      content: '是否删除历史记录',
      success: (res)=> {
        if (res.confirm) {
         const a=[];
          this.data.historyInfo=a;
          let historyInfo = this.data.historyInfo;
            
           this.setData({
             historyInfo
           })
          
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  Tosearch(e) {
   console.log(e);
  var item = e.currentTarget.dataset.item;
  const text = this.data.hotwords[item].text;
  let inputVal = this.data.inputVal;
  inputVal = text ;
  this.setData({
    inputVal
  })


  },
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