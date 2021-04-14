<template>
  <div class="picker-container" v-if="emojisUrl">
    <span class="qqface-container" v-for="[key, value] of Object.entries(emoijs)" :key="value">
      <img :src="emojisUrl" class="qqface" :class="[`qqface${value}`]" @click="input(key)">
    </span>
    <div class="picker-button" @click="deleteEmoji" v-if="button">
      <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"/>
      </svg>
    </div>
  </div>
</template>

<script>
  import { deleteEmoji, qqfaceArr } from '../util'
  // const emojisUrl = require(url)
  // const emojisUrl = require(url)

  export default {
    name: 'EmojiPicker',
    props: {
      value:{
        type: String
      },
      button: {
        type: Boolean
      }
    },
    data(){
      return {
        emoijs: qqfaceArr,
      }
    },
    inject: ['emojisUrl'],
    methods: {
      input(key){
        this.$emit('input', this.value + key)
      },
      deleteEmoji(){
        this.$emit('input', deleteEmoji(this.value))
    }
    },
  }
</script>

<style lang="scss">
.picker-container{
  overflow-y: auto;
  position: relative;
  // height: 300px;
  .qqface-container{
    display: inline-block;
    transform: scale(1.4);
    margin: 12px
  }
}

.picker-button{
  position: absolute;
  color: #fff;
  right: 20px;
  bottom: 20px;
}
</style>