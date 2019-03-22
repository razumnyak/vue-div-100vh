<template>
  <div :style=objectStyle data-div100vh>
    <slot></slot>
  </div>
</template>
<script>
import convertStyle from './convertStyle/convertStyle'
export default {
  name: 'div100vh',
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
      console.log(convertedStyle)
      this.objectStyle = convertedStyle;
    },
    getWindowHeight(){
      return window.innerHeight;
    }
  }
}
</script>
