<script>
import axios from "axios";
import ProjectCard from "./components/ProjectCard.vue";

export default{
  components: {ProjectCard},

  data(){
    return{
      dataUrl:"http://127.0.0.1:8000",
      projects:[]
    };
  },

  mounted(){
    this.getProjects();
  },

  methods: {
    getProjects(){
      axios.get(`${this.dataUrl}/api/homeapi`).then(resp => {
        this.projects = resp.data.results;
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
</div>
</template>

<style lang="scss">
@use './style/general.scss' as *;

</style>
