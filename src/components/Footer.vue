<template>
    <div class="hero-intro mt-28">
            <ul class="nav overflow-hidden">
                <li>
                    <a class="text-size"><p class="copy inline-block">©</p> SANCTUARY 2021. All rights reserved</a>
                </li>
            </ul>        </div>
</template>

<script>
    import { defineProps, reactive } from "vue";

    defineProps({});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
    a {
        color: #ffffff;
  font-family: 'Julius Sans One', sans-serif;
    }
    .hero-intro {
  font-family: 'Julius Sans One', sans-serif;
        color: #9e9e9e;
    }
    .nav {
        list-style-type: none;
        text-align: left;
        margin: 0;
        padding: 0;
    }

    .nav li {
        display: inline-block;
        font-size: 20px;
        padding: 20px;
    }
    .text-size {
        font-size: 12px;
        font-weight: bold;
    }
    .copy {
        font-size: 14px;
        font-weight: 100;
    }
</style>
