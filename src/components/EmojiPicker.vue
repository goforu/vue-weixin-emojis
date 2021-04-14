<template>
  <div style="position: relative;">
    <div v-if="url" :style="{height: height}" class="qqface-container">
      <span class="qqface-wrapper" v-for="[key, value] of Object.entries(emoijs)" :key="value">
        <img :src="url" class="qqface" :class="[`qqface${value}`]" @click="input(key)">
      </span>
      <div class="picker-button" @click="deleteEmoji" v-if="button">
        <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"/>
        </svg>
      </div>
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
        type: String,
        default: () => {
          return ''
        }
      },
      button: {
        type: Boolean
      },
      height: {
        type: String,
        default: 'auto'
      }
    },
    data(){
      return {
        emoijs: qqfaceArr,
        url: ''
      }
    },
    // inject: ['emojisUrl'],
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
@import '../css/app.scss';
.qqface-container{
  overflow-y: scroll;
  // position: relative;
  // height: 300px;
  .qqface-wrapper{
    display: inline-block;
    transform: scale(1.4);
    margin: 12px
  }
}

.picker-button{
  position: absolute;
  right: 20px;
  bottom: 20px;
  background: #fff;
  padding: 10px 20px 4px 20px;
  border-radius: 6px;
}
</style>