// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import AboutUs from '@/components/AboutUs.vue';
import ActivitiesPage from '@/components/ActivitiesPage.vue';
import JoinUs from '@/components/JoinUs.vue';
import DonationPage from '@/components/DonationPage.vue';
import ContactPage from '@/components/ContactPage.vue';
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage, sensitive: true},
  { path: '/about', component: AboutUs, sensitive: true},
  { path: '/activities', component: ActivitiesPage, sensitive: true},
  { path: '/join', component: JoinUs, sensitive: true},
  { path: '/donation', component: DonationPage, sensitive: true},
  { path: '/contact', component: ContactPage, name: 'contact', sensitive: true},
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
