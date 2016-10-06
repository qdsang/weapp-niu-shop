Page({
  data: {
    isLoading: true,
    swiper: {
      data: [
        { image: 'http://o3keqvepz.qnssl.com/663AD0D0F9954E58BE8AF3A4375D8BA9.png'}
        ],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200,
    },
    options: [
      {
        name: '属性',
        values: [{name: '单人版', isActive: false}, {name: '双人版', isActive: false}]
      },
      {
        name: '版本',
        values: [{name: '青春版Lite', isActive: false}, {name: '都市版Civic', isActive: false}]
      }
    ],
    spu: {
        name: 'M1 牛油保+sim卡流量包',
        price: '$120'
    },
    skus: [
      {
        skuid: 2,
        option: {
          '属性': '单人版',
          '版本': '青春版Lite'
        },
        name: 'M1 牛油保+sim卡流量包 单人版 青春版Lite',
        price: 801
      },
      {
        skuid: 1,
        option: {
          '属性': '单人版',
          '版本': '都市版Civic'
        },
        name: 'M1 牛油保+sim卡流量包 单人版 都市版Civic',
        price: 802
      },
      {
        skuid: 4,
        option: {
          '属性': '双人版',
          '版本': '青春版Lite'
        },
        name: 'M1 牛油保+sim卡流量包 双人版 青春版Lite',
        price: 803
      },
      {
        skuid: 3,
        option: {
          '属性': '双人版',
          '版本': '都市版Civic'
        },
        name: 'M1 牛油保+sim卡流量包 双人版 都市版Civic',
        price: 804
      },
    ],
    mapKey: {
      image: "{属性}",
      sku: "{属性}-{版本}"
    }
  },
  onLoad: function(){
    wx.showNavigationBarLoading();

    var spuid = 58;

    var skuIndex = {};
    var skus = this.data.skus || [];
    var skuIndexKey = this.data.mapKey.sku;
    for (var i = 0; i < skus.length; i++) {
      var key = mapKeyFormat(skuIndexKey, skus[i].option);
      skuIndex[key] = skus[i];
    }
    this.data.skuIndex = skuIndex;

    this.data.sku = skus[0];

    setTimeout(function(){
      wx.hideNavigationBarLoading();
    }, 1000);

  },
  onShow: function(){
    this.setPageTitle();
  },
  onReady: function(){
    this.setPageTitle();
  },
  setPageTitle: function(){
    var pageTitle = this.data.spu.name;
    wx.setNavigationBarTitle({
      title: pageTitle
    });
  },
  optionChange: function(event){
    var optionName = event.target.dataset.optionName;
    var optionValue = event.detail.value;

    this.setOption(optionName, optionValue);
  },
  setOption: function(optionName, optionValue){
    var sku = this.data.sku || {};
    var skus = this.data.skus || [];
    var option = {};
    for (var key in sku.option) {
      if (optionName == key) {
        option[key] = optionValue;
      } else {
        option[key] = sku.option[key];
      }
    }

    var skuIndexKey = mapKeyFormat(this.data.mapKey.sku, option);
    var newSku = this.data.skuIndex[skuIndexKey];
    console.log('setOption', optionName, optionValue, 'skuid', newSku.skuid);
    this.setData({sku: newSku});

    var options = this.data.options;
    for (var i = 0; i < options.length; i++) {
      var optionItem = options[i];
      for (var oi = 0; oi < optionItem.values.length; oi++) {
        optionItem.values[oi].isActive = (optionItem.values[oi].name == option[optionItem.name]);
      }
    }
    this.setData({options: options});
  },
  addCart: function(){
    wx.navigateTo({url: '/page/order/cart/index'});
    return;
    
    var skuid = this.data.sku.skuid;
    wx.request({
      url: 'http://m.niu.com/api/cart/updata',
      data: {
         skuId: skuid ,
         quantity: 1
      },
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
      }
    });
  }
});

function mapKeyFormat(key, info){
  return key.replace(/\{([^\}]*)\}/ig, function($0, $1, $2) {
    if (typeof info[$1] != 'undefined') {
      return info[$1];
    } else {
      return $0;
    }
  });
}
