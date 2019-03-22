<template>
  <div id="app">
    <vue100vh :css="{background: 'pink',display: 'flex',flexDirection: 'column',height: '100rvh'}">
      <div style="flex: 'auto'; padding: '1rem';">
        <h1>The Vue100vh component demo</h1>
        <p>
          Vue100vh component tries to avoid cropping of the bottom of the
          fullscreen splash page by mobile browsers.
        </p>
        <p>
          More on this issue <a href="#">here</a>.
        </p>
      </div>
      <div>
        Chances are this part will be cropped by mobile browsers if you use a
        regular 100vh div wrapper.
      </div>
    </vue100vh>
    <vue100vh :css="{background: '#8e9c25',display: 'flex',flexDirection: 'column',height: '75rvh'}">
      Something else goes here after the full window height div.
    </vue100vh>
    <vue100vh :css="{background: 'orange',display: 'flex',flexDirection: 'column',height: '25rvh'}">
      Something else goes here after the full window height div.
    </vue100vh>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body {
  background: #eee;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin: 0;
}
h1,h2,h3,h4,h5,h6 {
  margin: 0;
}
</style>
