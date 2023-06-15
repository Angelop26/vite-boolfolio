<script>
export default {
    name: 'Pagination',

    props:{
        current_page : Number,
        last_page: Number
    },

    emits:['getProjects'],

}
</script>

<template>
    <nav aria-label="Page navigation example ">
        <ul class="pagination justify-content-center mt-4">
            <li class="page-item"><a class="page-link" :class="{ 'disabled': current_page === 1 }"
                    @click.prevent="$emit('getProjects', current_page - 1)" href="">Previous</a></li>
            <li class="page-item" v-for="(pageNum, index) in last_page" :key="index"><a class="page-link"
                    :class="{ 'active': current_page === pageNum }" @click.prevent="$emit('getProjects', pageNum)"
                    href="">{{ pageNum }}</a></li>
            <li class="page-item"><a class="page-link" :class="{ 'disabled': current_page === last_page }"
                    @click.prevent="$emit('getProjects', current_page + 1)" href="">Next</a></li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped></style>