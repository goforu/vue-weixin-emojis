<template>
  <div style="overflow-y: auto;">
    <span style="display: inline-block;transform: scale(1.4); margin: 12px" class="qqface-container" v-for="[key, value] of Object.entries(emoijs)" :key="value">
      <img src="@/assets/qqface.png" class="qqface" :class="[`qqface${value}`]" @click="$emit('put', key)">
    </span>
  </div>
</template>

<script>
  import { qqfaceArr } from '../util'

  export default {
    name: 'EmojiPicker',
    data(){
      return {
        emoijs: qqfaceArr
      }
    }
  }
</script>
