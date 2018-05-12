//app.js
// 应用启动 onlaunch
// App->Page
// 全局的，应用级别的一些行为，
// 添加全局数据
import db from './assets/db.js';

App({
  onLaunch: function () {
    Object.assign(this.globalData,db);
    // ajax请求
    // wx.request({
    //   url: 'https://resources.ninghao.net/wxapp-case/db.json',
    //   success: (response) => {
    //     // console.log(response);
    //      Object.assign(this.globalDate,response.data)
    //      console.log(this.globalData);
    //   },
    //   fail: (error) => {
    //     console.log(error);
    //   }
    // })

   
  },
  globalData: {
    
  }
})