Page({
  data: {
    swiper: {
      data: [
          {url: '/page/store/detail/index', image: '//m.niucache.com/static/m/widget/store/list/images/s1_c1850a3.jpg'},
          {url: '/page/store/detail/index?id=65', image: '//m.niucache.com/static/m/widget/store/list/images/pifuyi_344b852.jpg'}
        ],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200,
    },
    list: [
      {
        title: "新品上架",
        subtitle: "New Arrivals",
        widget: [
          {
            type: "card",
            image: "http://m.niu.com/static/product/plus/niucover.jpg",
            url: "/page/store/detail/index?id=52",
            title: "M1 牛油保+sim卡流量包",
            subtitle: "￥329~729"
          },
          {
            type: "card",
            image: "http://m.niu.com/static/product/plus/niucover.jpg",
            url: "/page/store/detail/index?id=52",
            title: "M1 牛油保+sim卡流量包",
            subtitle: "￥329~729"
          },
          {
            type: "card",
            image: "http://m.niu.com/static/product/plus/niucover.jpg",
            url: "/page/store/detail/index?id=52",
            title: "M1 牛油保+sim卡流量包",
            subtitle: "￥329~729"
          },
          {
            type: "image",
            image: "http://m.niu.com/static/product/plus/m1battery.jpg",
            url: "/page/store/detail/index?id=52",
          }
        ]
      }
    ]
  }
});
