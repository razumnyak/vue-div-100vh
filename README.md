## `vue100vh` Vue component
[![npm version](https://badge.fury.io/js/vue-100vh.svg)](https://badge.fury.io/js/vue-100vh)

This is a workaround for iOS Safari and other mobile browsers.

Forked from [react-div-100vh](https://github.com/mvasin/react-div-100vh) by [mvasin](https://github.com/mvasin).

[ViewDemo vue-100vh](https://razumnyak.github.io/vue-div-100vh/)


## Add in your Vue project

> npm i vue-100vh


## The default behavior

```jsx
<template>
  <vue100vh :css="{height: '100rvh';}">
    <marquee>Your stuff goes here</marquee>
  </vue100vh>
</template>

<script>
import vue100vh from 'vue-100vh'

export default {
  components: { vue100vh },
}
</script>
```

### Using `rvh` units
```jsx
  <vue100vh :style="{ minHeight: '50rvh' }">
    <marquee>This is inside a div that takes at least 50% of viewport height.</marquee>
  </vue100vh>
```
