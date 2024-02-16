import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import ProjectsList from './pages/ProjectsList.vue';
import ProjectDetails from './pages/ProjectDetails.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: AppHome,
        },
        {
            path: '/projects',
            name: 'Projects',
            component: ProjectsList,
        },
        {
            path: '/projects/:slug',
            name: 'ProjectDetails',
            component: ProjectDetails,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound,
        },
    ],
});

export { router };