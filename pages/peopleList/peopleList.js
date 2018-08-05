// pages/people/peopleList/peopleList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  skip: function (e) {
    wx.navigateTo({
      url: e.currentTarget.id,
    })
  }
})