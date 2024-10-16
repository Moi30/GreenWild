// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/views/HomePageView.vue';
import AboutUs from '@/views/AboutUsView.vue';
import ActivitiesInformations from '@/views/ActivitiesInformationsView.vue';
import JoinUs from '@/views/JoinUsView.vue';
import DonationPage from '@/views/DonationPageView.vue';
import ContactPage from '@/views/ContactPageView.vue';
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage, sensitive: true },
  { path: '/a-propos', name: 'AboutUs', component: AboutUs, sensitive: true },
  { path: '/nos-activites', name: "ActivitiesInformations", component: ActivitiesInformations, sensitive: true },
  { path: '/nous-rejoindre', name: "JoinUs", component: JoinUs, sensitive: true },
  { path: '/donation', name: "DonationPage", component: DonationPage, sensitive: true },
  { path: '/contact', name: 'ContactPage', component: ContactPage, sensitive: true },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView, sensitive: true },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
