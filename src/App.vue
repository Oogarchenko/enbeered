<template>
        <nav-bar/>
    <div class="app">

        <router-view></router-view>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
    name: 'App',
    components: { NavBar },
    created () {
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))  // это вместо плагина для persisted store
    })
  }

}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .app {
        padding: 20px;
        background: url('@/assets/images/bar-bg.webp') no-repeat fixed;
        background-size: auto;
        background-position: 30% 30%;
    }
</style>