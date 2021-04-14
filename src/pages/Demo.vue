<template>
    <div>
        <EmojiPicker v-model="value" button />
        <div>
            <input v-model="value" />
            <button @click="send">发送</button>
        </div>
        <div v-for="(msg, index) of msgs" :key="index" v-html="msg"></div>
    </div>
</template>

<script>
import EmojiPicker from '../components/EmojiPicker.vue'
import { string2emoji } from '../util'
// import '../components/emojiTransform.js'

export default {
    components:{
        EmojiPicker
    },
    provide:{
        emojisUrl: '/qqface.png'
    },
    data(){
        return {
            value: '',
            msgs: []
        }
    },
    methods:{
        send(){
            this.msgs.push(string2emoji(this.value))
            this.value = ''
        }
    }
}
</script>