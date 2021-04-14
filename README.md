# vue-wexin-emojis

微信表情包插件

![demo](https://github.com/goforu/vue-weixin-emojis/raw/main/resources/demo.gif)

## 安装
```
npm i vue-weixin-emojis -S
```

### 引入包
下载图片素材 [qqface.png](https://github.com/goforu/vue-weixin-emojis/raw/main/public/qqface.png)
``` javascript
// 引入安装包和样式
import WeixinEmojis from 'vue-weixin-emojis'
import 'vue-weixin-emojis/dist/vue-weixin-emojis.css'
// 将图片qqface.png放在项目中的静态文件夹中（如: /public 或 /src/statics目录下）
// url参数改成你放置的图片位置
Vue.use(WeixinEmojis, {url: 'path/to/qqface.png'})
```

### 使用
表情面板组件，展示所有微信表情，点击会自动给value赋上相应表情key值
``` html
<emoji-picker v-model="value" height="300px" button/>
```
在转换成表情的地方使用以下方法
``` javascript
// 需要在vue组件（实例）中调用
this.value = this.$string2emoji(this.value)
// 修改已发出的表情，使用以下方法
this.value = this.$emoji2string(this.value)
```
