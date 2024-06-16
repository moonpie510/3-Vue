// import Vue from 'vue';
// import { createMemoryHistory, createRouter } from 'vue-router'
// import PostComponent from "./components/PostComponent.vue";
//
// Vue.use(createRouter);
//
// export default new createRouter({
//     mode: 'history',
//
//     routes: [
//         {
//             path: '/posts',
//             comments: PostComponent
//         }
//     ]
// })

import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/people', component: () => import('./components/Person/Index.vue'), name: 'person.index'},
    {path: '/people/create', component: () => import('./components/Person/Create.vue'), name: 'person.create'},
    {path: '/people/:id/edit', component: () => import('./components/Person/Edit.vue'), name: 'person.edit'},
    {path: '/people/:id', component: () => import('./components/Person/Show.vue'), name: 'person.show'}
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes,
});

export default router;
