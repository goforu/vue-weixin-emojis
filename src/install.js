import EmojiPicker from "./components/EmojiPicker.vue";
import { emoji2string, genString2emoji } from "./util";

const plugins = {
 install(Vue, options) {
  // Let's register our component globally
  // https://vuejs.org/v2/guide/components-registration.html
  const url = options && options.url || 'https://cdn-9gvbsn1n5046b67b-1301839800.tcloudbaseapp.com/emojis/qqface.png'
  Vue.component("emoji-picker", Vue.extend({ mixins: [EmojiPicker], created: function(){
    this.url = url
    }}));
  Vue.prototype.$string2emoji = genString2emoji(url)
  Vue.prototype.$emoji2string = emoji2string
 }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugins);
}

export default plugins;