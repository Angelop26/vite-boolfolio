<script>
import axios from 'axios';
export default{
    name: 'SingleProjectPage',

    data(){
        return{
            dataUrl: "http://127.0.0.1:8000",
            project: null,
        };
    },

    mounted(){
        this.getProject();
    },
    methods:{
        getProject(){
            axios.get(`${this.dataUrl}/api/homeapi/${this.$route.params.slug}`).then(
                resp => {
                    this.project = resp.data.results;

                }
            )
        }
    }

}
</script>

<template>
    <div class="container" v-if="project">
        <h2 class="text-center">{{ project.title }}</h2>

        <h5>tecnologie:</h5>
        <div v-if="project.technologies.length > 0">
            <ul>
                <li v-for="technology,index in project.technologies" :key="index"> {{ technology.name }}</li>
            </ul>
        </div>
        <div v-else>
            <p>nessuna tecnologia trovata</p>
        </div>
        <p>Tipo: {{ project.type ? project.type.name : "questo progetto non ha un tipo"}} </p>

    </div>
</template>

<style lang="scss" scoped>

</style>