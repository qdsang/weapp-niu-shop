Page({
  data: {
    cartList: [{"quantity":"1","skuId":"223","name":"M1 牛油保+sim卡流量一年服务 青春版 单人版","price":{"salePrice":329,"retailPrice":329},"options":[{"版本":"青春版Lite"},{"属性":"单人版"}],"itemId":"14759345276570578","imgUrl":"http://dn-shop-niu.qbox.me/img/sku/223?imageView2/2/w/500/"}]
  },
  submit: function(){
    wx.redirectTo({url: '/page/order/confirm/index'});
  }
});
