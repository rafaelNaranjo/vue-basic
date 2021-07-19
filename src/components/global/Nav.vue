<template>
  <div :class="sizenav?'container-fluid':'container'">
    <b-navbar>
      <b-navbar-brand><b-img :src="require('./../../assets/logo.png')" width="60" alt="logo" fluid /></b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item to="/" >Usuarios</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  props:['sizenav'],
  data(){
    return{
    }
  },
  mounted() {
  }
}
</script>
<style scoped>

</style>