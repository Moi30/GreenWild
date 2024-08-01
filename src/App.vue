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

export default {
  components: {
    SiteFooter,
    AppNavBar,
  },
};
</script>

<style>
.footer-bottom {
  /* width: 100%;
    position: fixed; */
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
