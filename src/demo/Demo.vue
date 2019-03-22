<template>
  <div id="app">
    <div100vh :css="{background: 'pink',display: 'flex',flexDirection: 'column',height: '100rvh'}">
      <div style="flex: 'auto'; padding: '1rem';">
        <h1>The Div100vh component demo</h1>
        <p>
          Div100vh component tries to avoid cropping of the bottom of the
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
    </div100vh>
    <div100vh :css="{background: 'purple',display: 'flex',flexDirection: 'column',height: '75rvh'}">
      Something else goes here after the full window height div.
    </div100vh>
    <div100vh :css="{background: 'orange',display: 'flex',flexDirection: 'column',height: '25rvh'}">
      Something else goes here after the full window height div.
    </div100vh>
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
