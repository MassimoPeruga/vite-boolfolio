import { reactive } from 'vue';

export const store = reactive({
    baseUrl: 'http://127.0.0.1:8000',
    apiUrls: {
        projects: '/api/projects',
        img: '/storage/',
    },
    projects: {
        currentPage: 1,
        searchKey: null,
    }
});