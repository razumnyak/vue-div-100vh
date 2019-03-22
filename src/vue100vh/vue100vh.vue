<template>
  <div :style=objectStyle data-vue100vh>
    <slot></slot>
  </div>
</template>
<script>
import convertStyle from './convertStyle/convertStyle'
export default {
  name: 'vue100vh',
  props:['css'],
  data () {
    return {
      objectStyle: {}
    }
  },
  mounted () {
    this.updateStyle();
    window.addEventListener('resize', this.updateStyle);
  },
  destroyed () {
    window.removeEventListener('resize', this.updateStyle);
  },
  methods:{
    updateStyle () {
      const convertedStyle = convertStyle(this.css, this.getWindowHeight());
      this.objectStyle = convertedStyle;
    },
    getWindowHeight(){
      return window.innerHeight;
    }
  }
}
</script>
