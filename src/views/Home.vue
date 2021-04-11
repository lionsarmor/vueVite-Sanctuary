<template>
  <NavbarSanc />
  <HeroSanc />
  <FeatureSanc />
  <VideoSanc />
  <QuoteSanc />
  <FooterSanc />
</template>

<script>
import NavbarSanc from '../components/Home/Navbar.vue'
import HeroSanc from '../components/Home/Hero.vue'
import FeatureSanc from '../components/Home/Feature.vue'
import QuoteSanc from '../components/Home/Quote.vue'
import VideoSanc from '../components/Home/Video.vue'
import FooterSanc from '../components/Home/Footer.vue'

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