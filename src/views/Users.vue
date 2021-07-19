<template>
  <div class="container">
    <TableUsers @updateUsers="updatePage" :usuarios="usuarios" :current-page="currentPage" :perpage="perpage" :total-pages="totalPages"/>
  </div>
</template>

<script lang="js">
import * as userServices from '../services/user_services'
import TableUsers from '../components/users/ListUsers'
export default {
  name: 'Users',
  components: {
    TableUsers
  },
  data(){
    return{
      usuarios: [],
      currentPage: 1,
      totalPages: 1,
      perpage: 15
    }
  },
  mounted() {
    this.obtenerUsuarios();
  },
  methods:{
    obtenerUsuarios: async function(){
      const data = await userServices.findAllUsers(this.currentPage==1?0:this.currentPage, this.perpage);
      this.usuarios = data.content;
      this.currentPage = data.number;
      this.totalPages = data.totalElements;
      this.perpage = data.size;
    },
    updatePage: async  function(currentPage){
      const data = await userServices.findAllUsers(currentPage, this.perpage);
      this.usuarios.push(...data.content);
      this.currentPage = currentPage;
      this.totalPages = data.totalElements;
      this.perpage = data.size;
    }
  }
}
</script>
