// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePageView.vue';
import AboutUs from '@/views/AboutUsView.vue';
import ActivitiesInformations from '@/views/ActivitiesInformationsView.vue';
import JoinUs from '@/views/JoinUsView.vue';
import DonationPage from '@/views/DonationPageView.vue';
import ContactPage from '@/views/ContactPageView.vue';
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/a-propos', name: 'AboutUs', component: AboutUs },
  { path: '/nos-activites', name: "ActivitiesInformations", component: ActivitiesInformations },
  { path: '/nous-rejoindre', name: "JoinUs", component: JoinUs },
  { path: '/donation', name: "DonationPage", component: DonationPage },
  { path: '/contact', name: 'ContactPage', component: ContactPage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
