<template>
  <div>
    <b-table :items="usuarios" :per-page="perpage" :current-page="currentPage" bordered></b-table>
    <b-pagination @change="updatePage" v-model="currentPage" :per-page="perpage" :total-rows="totalPages"></b-pagination>
  </div>
</template>

<script>
export default {
  name: "ListUsers",
  props: ['usuarios', 'perpage','currentPage','totalPages'],
  methods:{
    updatePage: function(value){
      this.$emit('updateUsers',value);
    }
  }
}
</script>

<style scoped>

</style>