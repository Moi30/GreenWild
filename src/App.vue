<template>  
  <head>
    <title>GreenWild</title>
    <meta name="description" content="GreenWild est une association écologique à but non lucratif située dans le sud de la france, France, dédiée à la protection de la nature à travers des randonnées et balades organisées. Rejoignez-nous pour explorer et préserver la beauté de notre planète.">
    <meta name="keywords" content="GreenWild, sud de la france, environnement, conservation, biodiversité, écosystème, recyclage, éducation, action écologique, développement durable, respect de la nature, écologie, sensibilisation, communauté verte, engagement, durabilité, éco-responsabilité, activités en plein air, protection des ressources, initiatives écologiques, protection des espèces, réduction des déchets, nature préservée, randonnées éco-citoyennes, bénévolat écologique, protection de l'environnement">
    <meta name="author" content="GreenWild">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://greenwild.fr/">
    <meta name="language" content="fr">
    <meta name="subject" content="Protection de la nature et randonnée">
    <meta name="geo.region" content="FR-HER">
    <meta name="geo.placename" content="Gard">
    <meta name="geo.position" content="43.6119;3.8772">
    <meta name="ICBM" content="43.6119, 3.8772">
    <meta property="og:title" content="GreenWild">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://greenwild.fr/">
    <meta property="og:image" content="/img/logo.2f84a885.png">
    <meta property="og:description" content="GreenWild est une association écologique située dans le sud de la france, dédiée à la protection de la nature et à l'organisation de randonnées et balades pour sensibiliser à la préservation de notre planète.">
    <meta property="og:site_name" content="GreenWild">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-XSS-Protection" content="1; mode=block">
    <meta http-equiv="X-Content-Type-Options" content="nosniff">
    <meta name="theme-color" content="#ffffff">
    <meta name="application-name" content="GreenWild">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="GreenWild">
    <link rel="icon" href="/favicon.png" type="image/x-icon">
  </head>
  <div id="app">
    <app-nav-bar />
    <router-view />
    <site-footer class="footer-bottom" />
  </div>
</template>

<script>
import AppNavBar from "@/components/AppNavBar.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  components: {
    SiteFooter,
    AppNavBar,
  },
};
</script>
