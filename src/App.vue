<template>  
  <div id="app">
    <app-nav-bar />
    <router-view />
    <site-footer class="footer-bottom" />
  </div>
</template>

<script>
import AppNavBar from "@/components/AppNavBar.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import { useHead } from '@vueuse/head';

export default {
  components: {
    SiteFooter,
    AppNavBar,
  },
  setup() {
    useHead({
      title: 'GreenWild',      
      meta: [
        { charset: 'UTF-8' },
        {
          name: 'description',
          content: 'GreenWild est une association écologique à but non lucratif située dans le sud de la France, dédiée à la protection de la nature à travers des randonnées et balades organisées. Rejoignez-nous pour explorer et préserver la beauté de notre planète.'
        },
        {
          name: 'keywords',
          content: 'GreenWild, sud de la France, environnement, conservation, biodiversité, écosystème, recyclage, éducation, action écologique, développement durable, respect de la nature, écologie, sensibilisation, communauté verte, engagement, durabilité, éco-responsabilité, activités en plein air, protection des ressources, initiatives écologiques, protection des espèces, réduction des déchets, nature préservée, randonnées éco-citoyennes, bénévolat écologique, protection de l\'environnement'
        },
        { name: 'author', content: 'GreenWild' },
        { name: 'robots', content: 'index, follow' },
        { name: 'language', content: 'fr' },
        { name: 'subject', content: 'Protection de la nature et randonnée' },
        { name: 'geo.region', content: 'FR-HER' },
        { name: 'geo.placename', content: 'Gard' },
        { name: 'geo.position', content: '43.6119;3.8772' },
        { name: 'ICBM', content: '43.6119, 3.8772' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' },
        { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'application-name', content: 'GreenWild' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: 'GreenWild' },
        { property: 'og:title', content: 'GreenWild' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://greenwild.fr/' },
        { property: 'og:image', content: '/img/logo.2f84a885.png' },
        { property: 'og:description', content: 'GreenWild est une association écologique située dans le sud de la France, dédiée à la protection de la nature et à l\'organisation de randonnées et balades pour sensibiliser à la préservation de notre planète.' },
        { property: 'og:site_name', content: 'GreenWild' }
      ],
      link: [
        { rel: 'canonical', href: 'https://greenwild.fr/' },
        { rel: 'icon', href: '/favicon.png', type: 'image/x-icon' }
      ]
    });
  },
  name: 'GreenWild'
};
</script>
