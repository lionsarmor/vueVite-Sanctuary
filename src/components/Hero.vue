<template>
<div class="bg-vegan-blue relative overflow-hidden h-screen">
    <img src="../assets/hero.png" class="absolute h-full w-full object-cover"/>
    <div class="inset-0 bg-black opacity-25 absolute">
    </div>
    <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div class="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
            <span class="font-bold uppercase sanctuary-font text-yellow-400">
                Save a life.
            </span>
            <h1 class="font-bold text-6xl sm:text-7xl text-white leading-tight mt-4">
                Let yourself be carried
                <br/>
                    by nature
            </h1>
            <a href="#" class="block bg-vegan-green hover:bg-yellow-400 py-3 px-4 rounded-full text-lg text-white sanctuary-font font-bold uppercase mt-10">
                Find A Sanctuary
            </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Hero',
  components: {

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
.bg-vegan-green {
  background-color: #53ab40;
}
.text-vegan-green {
  color: #53ab40;
}
.bg-vegan-blue {
  background-color: #3584c9;
}
.sanctuary-font {
  font-family: 'Julius Sans One', sans-serif;
  font-weight: bolder;
}
</style>















