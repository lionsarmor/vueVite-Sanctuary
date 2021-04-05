<template>
  <NavbarSanc />
  <HeroSanc />
  <FeatureSanc />
  <VideoSanc />
  <QuoteSanc />
  <FooterSanc />
</template>

<script>
import NavbarSanc from './components/Navbar.vue'
import HeroSanc from './components/Hero.vue'
import FeatureSanc from './components/Feature.vue'
import QuoteSanc from './components/Quote.vue'
import VideoSanc from './components/Video.vue'
import FooterSanc from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavbarSanc,
    FooterSanc,
    HeroSanc,
    FeatureSanc,
    QuoteSanc,
    VideoSanc
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
</style>