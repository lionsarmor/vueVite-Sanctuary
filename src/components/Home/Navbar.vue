<template>
  <nav class="bg-vegan-blue w-full flex relative justify-between items-center mx-auto px-8 h-20">
    <!-- logo -->
    <div class="inline-flex">
        <a class="_o6689fn" href="/"
            >
              <div class="hidden md:block">
              <img class="pig inline-block" src="../../assets/pig.png" alt="SANCTUARY" />
              <h1 class="sanctuary-font inline-block pl-1">SANCTUARY</h1>
            </div>
            <div class="block md:hidden">
              <img class="pig2" src="../../assets/pig.png" alt="SANCTUARY" />
            </div>
        </a>
    </div>

    <!-- end logo -->

    <!-- login -->
    <div class="flex-initial">
      <div class="flex justify-end items-center relative">
        <div class="block">
            <div class="inline relative">
                      <router-link to="/Map">
<button type="button" class="bg-vegan-green	inline-flex items-center relative px-2 rounded-full hover:bg-yellow-400 hover:shadow-lg">
                    <div class="pl-1 text-white">
                      <h1 class="map">MAP</h1>
                    </div>
<div class="block flex-grow-0 flex-shrink-0 h-10 w-12 pt-1.5 pl-5">
 <svg viewBox="0 0 16 16" 
 xmlns="http://www.w3.org/2000/svg" 
  aria-hidden="true" 
  role="presentation" 
  focusable="false" 
  style="height: 26px; width: 26px; fill: white;">
<path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z">
                                          </path>
                                          </svg>
                    </div>
                </button>
                </router-link>
            </div>
        </div>
      </div>
    </div>
    <!-- end login -->
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  components: {

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
a {
  color: #42b983;
}
.bg-vegan-green {
  background-color: #53ab40;
}
.logo {
  width: 28vh;
}
.pig {
    width: 7vh;
    position: relative;
    top: -9px;
}
.pig2 {
    width: 10vh;
    position: relative;
}
.sanctuary-font {
  font-family: 'Julius Sans One', sans-serif;
  font-size: 5vh;
  color: #53ab40;
  font-weight: bolder;
}
.map {
    font-family: 'Julius Sans One', sans-serif;
}
.bg-vegan-blue {
  background-color: #ffffff;
}
</style>















