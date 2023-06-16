<script>
export default {
    name: "ProjectCard",
    props: {
        project: Object,
    },
}
</script>

<template>
    <div class="card h-100">
        <div class="card-body">
            <div class="card-title">
                <h5>{{ project.title }}</h5>
            </div>

            <h6>lista tecnologie</h6>
            <ul v-if="(project.technologies.length > 0)">
                <li   v-for="elem,index in project.technologies" :key="index">{{ elem.name }}</li>
            </ul>
            <div v-else>
                <p> non ci sono tecnologie </p>
            </div>

            <h6>tipo</h6>
            <p v-if="(project.type)">
                {{ project.type.name }}
            </p>
            <div v-else>
                <p> non ci sono tipi </p>
            </div>
            <div>
                <router-link :to="{name: 'SingleProjectPage', params: {slug: project.slug}}"  class="btn btn-primary" > dettagli</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>