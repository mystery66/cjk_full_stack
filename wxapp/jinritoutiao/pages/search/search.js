// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: '',
    historyInfo: ''
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindInput (e) {
    console.log(e);
     let inputVal = this.data.inputval;
    this.setData({
    inputVal: e.detail.value,
    
    })
    console.log(inputVal)
    wx.setStorage({
      key:"historyInfo",
     
      
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
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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