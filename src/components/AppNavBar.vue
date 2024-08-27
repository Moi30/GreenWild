<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          src="@/assets/logo.png"
          alt="GreenWild Logo"
          style="height: 2.5em"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="{ name: 'HomePage' }"
              >Accueil</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link"  @click="removeFocus"  :to="{ name: 'AboutUs' }"
              >À propos de nous</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'ActivitiesInformations' }"
              >Nos activités</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link"  @click="removeFocus"  :to="{ name: 'JoinUs' }"
              >Devenir adhérent</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link"  @click="removeFocus"  :to="{ name: 'DonationPage' }"
              >Faire un don</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link"  @click="removeFocus"  :to="{ name: 'ContactPage' }"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "AppNavBar",
  methods: {
    removeFocus(event) {
      event.target.blur();
    }
  }
};
</script>
