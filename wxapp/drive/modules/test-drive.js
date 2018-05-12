// es6 模块化语法 module
// js 变量或常量 ， 它的类型由值决定
// var a = 1;
// a ='str';
// const b =123;
const testDrive = () => {
    // 用内置的来自微信的API了
    // 原生API 大部分小程序是HTML5 
    // webview nativeview
    // wx 
    // 性能上比原生慢一些
    wx.showToast({
        title: '暂不支持'
    }) 
}
export default testDrive