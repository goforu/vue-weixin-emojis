import EmojiPicker from "./components/EmojiPicker.vue";

const EmojiPickerSimple = {
 install(Vue) {
  // Let's register our component globally
  // https://vuejs.org/v2/guide/components-registration.html
  Vue.component("emoji-picker", EmojiPicker);
 }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(EmojiPickerSimple);
}

export default EmojiPickerSimple;