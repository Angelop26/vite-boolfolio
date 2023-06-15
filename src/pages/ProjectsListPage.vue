<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";
import Pagination from "../components/Pagination.vue";

export default {
    name: 'ProjectsListPage',

    components: {
        ProjectCard,
        Pagination
    },

    data() {
        return {
            dataUrl: "http://127.0.0.1:8000",
            projects: [],
            current_page: '',
            last_page: ''
        };
    },

    mounted() {
        this.getProjects();
    },

    methods: {
        getProjects(page = 1) {
            const params = {
                page: page
            }
            axios.get(`${this.dataUrl}/api/homeapi`, { params }).then(resp => {
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
            <div class="col mt-3" v-for="project in projects" :key="project.id">
                <ProjectCard :project="project" />
            </div>
        </div>
        <Pagination :current_page="current_page" :last_page="last_page" @getProjects="getProjects" />
    </div>
</template>

<style lang="scss" scoped></style>