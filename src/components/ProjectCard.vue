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
        <div class="card-title">
            <h6>{{ project.title }}</h6>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>