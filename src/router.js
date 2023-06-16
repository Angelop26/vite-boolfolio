import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue'
import ProjectsListPage from './pages/ProjectsListPage.vue'
import AboutPage from './pages/AboutPage.vue'
import SingleProjectPage from './pages/SingleProjectPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'home',
            component: HomePage
        },
        {
            path:'/projects',
            name:'projects',
            component: ProjectsListPage
        },
        {
            path:'/projects/:slug',
            name:'SingleProjectPage',
            component: SingleProjectPage
        },
        {
            path:'/about-us',
            name:'abouts',
            component: AboutPage
        },
    ]
})

export{router};