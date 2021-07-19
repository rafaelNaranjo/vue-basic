<template>
  <div id="app">
    <Navigator :sizenav="false"/>
    <router-view/>
  </div>
</template>
<script>
import Navigator from './components/global/Nav'
export default {
  components: {Navigator}
}
</script>
<style>
</style>
