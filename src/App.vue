<template>
  <div id="app" class="wrapper fixed">
    <re-header></re-header>

    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import "font-awesome/css/font-awesome.css"
import 'animate.css'
import Vue from 'vue'
import reHeader from './components/layout/header.vue'
import reSideMenu from './components/layout/sideMenu.vue'
import {mapGetters, mapActions, mapMutations} from 'vuex'
import types from './store/mutation-types'
export default {
  name: 'App',
  components: {
    reHeader
  },
  computed:{
    ...mapGetters({
      sidebar:'sidebar'
    })
  },
  data:function(){
    return {
      active: true,
      headerFixed: true
    }
  },
  methods: {
    ...mapMutations({
      toggleSidebar: types.TOGGLE_SIDEBAR,
      toggleSidebarShow: types.TOGGLE_SIDEBAR_SHOW
    })
  },
  watch: {
    '$route': function(to, from){
    }
  },
  beforeMount() {
    //do something before mounting vue instance
    const { body } = document
    const WIDTH = 784
    const handler = () =>{
      if (!document.hidden) {
        let rect = body.getBoundingClientRect()
        this.toggleSidebarShow(true);
      }
    }
    document.addEventListener('visibilitychange', handler)
    window.addEventListener('DOMContentLoaded', handler)
    window.addEventListener('resize', handler)
  },
  mounted () {
      //  [App.vue specific] When App.vue is finish loading finish the progress bar
      // this.$Progress.finish()
    },
    created () {
      //  [App.vue specific] When App.vue is first loaded start the progress bar
      // this.$Progress.start()
      //  hook the progress bar to start before we move router-view
      this.$router.beforeEach((to, from, next) => {
        //  does the page we want to go to have a meta.progress object
//        if (to.meta.progress !== undefined) {
//          let meta = to.meta.progress
//          // parse meta tags
//          this.$Progress.parseMeta(meta)
//        }
        // this.$store.dispatch('changeCurrentMenu',to);
        //  start the progress bar
        // this.$Progress.start()
        //  continue to next page
        next()
      })
      //  hook the progress bar to finish after we've finished moving router-view
      this.$router.afterEach((to, from) => {
        //  finish the progress bar
//        console.log(JSON.stringify())
        // this.$Progress.finish()
      })

//      this.$router.push('/activePublic');
    }
}
</script>

<style>
blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0;
  }

  *,:after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
html {
    background-color: #333;
    font-size: 14px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    min-width: 300px;
    overflow-x: hidden;
    /*overflow-y: hidden;*/
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
  }

  body {
    color: #333;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
