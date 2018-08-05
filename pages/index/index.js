// pages/product/productList/productList.js
const app = getApp();
const data = require("../../data/data.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    classIndex: 0,
    productListTitle: data.data.classList,
    discountList: data.data.productDetail,
    scrollLeft: 0,
    scrollTopLeft: 0,
    cartShow:"none",
    totalPrice:120,
    payDesc:"去结算",
    totalCount:12,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.key);
    // console.log(data);
    var screenWidth = parseInt(wx.getSystemInfoSync().windowWidth);
    this.setData({
      scrollLeft: parseInt(options.key) * screenWidth,
      classIndex: options.key
    });
    //this.setData({ discountList: this.data.list[options.key]});
  },
  changeClass: function (e) {
    console.log(e.currentTarget.id);
    var data = e.currentTarget.id;
  },
  scrollHandler: function (e) {
    console.log();
    var distance = e.detail.scrollLeft;
    var width = 200;
    var screenWidth = parseInt(wx.getSystemInfoSync().windowWidth);
    var toMove = parseInt(distance / 100);
    this.setData({
      scrollLeft: toMove * screenWidth,
      classIndex: toMove
    });
  },
  toMove: function (e) {
    // console.log(e.currentTarget.id);
    var screenWidth = parseInt(wx.getSystemInfoSync().windowWidth);
    this.setData({
      scrollLeft: parseInt(e.currentTarget.id) * screenWidth,
      classIndex: e.currentTarget.id
    });
  },
  // 上面事件滚动
  scrollTopHandler: function (e) {
    var screenWidth = parseInt(wx.getSystemInfoSync().windowWidth);
    var distance = e.detail.scrollLeft;
    var toMove = parseInt(distance / screenWidth);
    console.log(toMove);
    this.setData({
      scrollTopLeft: toMove * 100,
      classIndex: toMove
    });
  },
  skip: function (e) {
    wx.navigateTo({
      url: e.currentTarget.id,
    })
  }
})