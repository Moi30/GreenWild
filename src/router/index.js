// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import AboutUs from '@/components/AboutUs.vue';
import ActivitiesPage from '@/components/ActivitiesPage.vue';
import TeamPage from '@/components/TeamPage.vue';
import JoinUs from '@/components/JoinUs.vue';
import ContactPage from '@/components/ContactPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutUs },
  { path: '/activities', component: ActivitiesPage },
  { path: '/team', component: TeamPage },
  { path: '/join', component: JoinUs },
  { path: '/contact', component: ContactPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
