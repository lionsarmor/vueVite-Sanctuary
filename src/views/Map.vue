<template>
            <router-link to="/" class="back">
            <a href="#" class="bg-vegan-green hover:bg-yellow-400 py-3 px-4 rounded-full text-lg text-white sanctuary-font font-bold uppercase">
                Back
            </a>
            </router-link>
<section class="bg-green sanctuary-font text-gray-600 body-font">
<div class="center" id="map">
<div class="map-responsive">
<iframe src="https://www.google.com/maps/d/embed?mid=1M0kUPSXPXQdxgyvjAUEpnNk_XJK_QmE3&hl=en" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>
</div> 
</section>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}
.map-rsponsive{

    overflow:hidden;

    padding-bottom: 66%;

    position:relative;

    height:0;

}

.map-responsive iframe{

    left:0;

    top:12vh;

    height:100%;

    width:100%;

    position:absolute;

}
.back {
  position: absolute;
  margin-top: -35px;
  left:1%;
}
</style>