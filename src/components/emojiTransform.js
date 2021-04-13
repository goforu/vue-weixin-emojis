import Vue from 'vue'
import { string2emoji } from '../util'

Vue.directive('weixin-emoji', {
    inserted: function(el){
        el.innerHTML = string2emoji(el.innerHTML)
    }
})