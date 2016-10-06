小牛商城 微信小程序版
-------

开发6个小时，中途被微信ide搞懵逼了。  

### 截图

<img src="https://raw.githubusercontent.com/qdsang/weapp-niu-shop/master/image/screenshot.gif">


### 总结

- 彻底没有dom的概念，整体框架规范与格式与[vue](https://vuejs.org/)几乎一个轮子
- 使用时间长了，得杀掉IDE重启下。猜测是修改app.json导致什么事件重复监听导致的事件多次执行，没具体跟进
- wxss 样式与RN基本类似，但是使用的过程中发现部分属性渲染逻辑与web不一样，不知这以后官方会怎么修正。。。
- 关于[rpx](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxss.html?t=1475052055756)单位，设计稿按照640设计，代码写的rem单位。 照着页面的rem值搬砖，rem/16*750、rem/16*750.... 拿着计算器按.
- 官方IDE提供开发与预览，开发也可以使用自己喜欢的编辑器，无所谓。但是没有自动刷新，如果编辑js与wxml文件需要点重启或者编译，快捷键刷新不能生效（修改wxss能生效）


### 相关链接

- [微信开发文档](https://mp.weixin.qq.com/debug/wxadoc/dev/?t=1475052057024)
