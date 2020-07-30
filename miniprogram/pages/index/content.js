const db = wx.cloud.database()

// miniprogram/pages/index/content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mpaContent: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('mpa_content').doc(options.contentId).get().then(res=>{
      this.setData({
        mpaContent: res.data
      })
    })
  },

  tapLink(){
    wx.setClipboardData({
      data: this.data.mpaContent.link,
    })
  },

  tapImage(){
    wx.previewImage({
      urls: [this.data.mpaContent.image],
    })
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