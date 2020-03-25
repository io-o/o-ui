<template>
  <div id="app">
     <router-link to="/">splite-pane</router-link>
     |
     <router-link to="/menu-page">menu-page</router-link>
     |
     <router-link to="/message">message</router-link>
     <div class="view">
       <router-view/>
     </div>
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  .view
    width 100%
    min-height 80%
    margin-top 20px
</style>
