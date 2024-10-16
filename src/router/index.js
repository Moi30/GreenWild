// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import AboutUs from '@/components/AboutUs.vue';
import ActivitiesPage from '@/components/ActivitiesPage.vue';
import JoinUs from '@/components/JoinUs.vue';
import DonationPage from '@/components/DonationPage.vue';
import ContactPage from '@/components/ContactPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutUs },
  { path: '/activities', component: ActivitiesPage },
  { path: '/join', component: JoinUs },
  { path: '/donation', component: DonationPage },
  { path: '/contact', component: ContactPage, name: 'contact' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
