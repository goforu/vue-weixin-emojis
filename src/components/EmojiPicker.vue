<template>
  <div style="overflow-y: auto;">
    <span style="display: inline-block;transform: scale(1.4); margin: 12px" class="qqface-container" v-for="[key, value] of Object.entries(emoijs)" :key="value">
      <img :src="url" class="qqface" :class="[`qqface${value}`]" @click="input(key)">
    </span>
  </div>
</template>

<script>
  import { qqfaceArr } from '../util'
  // const emojisUrl = require(url)
  // const emojisUrl = require(url)

  export default {
    name: 'EmojiPicker',
    props: ['value', 'url'],
    data(){
      return {
        emoijs: qqfaceArr,
      }
    },
    methods: {
      input(key){
        this.$emit('input', this.value + key)
      }
    }
  }
</script>