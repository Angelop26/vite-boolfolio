<script>
import axios from "axios";
import ProjectCard from "./components/ProjectCard.vue";

export default{
  components: {ProjectCard},

  data(){
    return{
      dataUrl:"http://127.0.0.1:8000",
      projects:[],
      current_page:'',
      last_page:''
    };
  },

  mounted(){
    this.getProjects();
  },

  methods: {
    getProjects(page = 1){
      const params = {
        page:page
      }
      axios.get(`${this.dataUrl}/api/homeapi`, {params}).then(resp => {
        this.projects = resp.data.results.data;
        this.current_page = resp.data.results.current_page;
        this.last_page = resp.data.results.last_page
      })
    }
  }
}
</script>

<template>
<div class="container">
  <h1>projects</h1>
  <div class="row row-cols-3">
    <div class="col" v-for="project in projects" :key="project.id">
      <ProjectCard :project ="project" />
    </div>
  </div>

  <nav aria-label="Page navigation example ">
  <ul class="pagination justify-content-center mt-3">
    <li class="page-item"><a class="page-link" :class="{'disabled': current_page === 1}"  @click.prevent="getProjects(current_page - 1)" href="">Previous</a></li>
    <li class="page-item" v-for="(pageNum,index) in last_page" :key="index"><a class="page-link" :class="{'active': current_page === pageNum}"  @click.prevent="getProjects(pageNum)" href="">{{pageNum}}</a></li>
    <li class="page-item"><a class="page-link" :class="{'disabled': current_page === last_page}"  @click.prevent="getProjects(current_page + 1)" href="">Next</a></li>
  </ul>
</nav>
</div>
</template>

<style lang="scss">
@use './style/general.scss' as *;

</style>
