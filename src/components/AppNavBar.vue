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
            <router-link class="nav-link active" aria-current="page" to="/"
              >Accueil</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about"
              >À propos de nous</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/activities"
              >Nos activités</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/join"
              >Devenir membre</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/donation"
              >Faire un don</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "AppNavBar",
};
</script>

<style>
nav .navbar-brand {
  transition: transform 0.3s ease;
}

nav .navbar-brand img:hover {
  transform: scale(1.1);
}

.nav-link {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-link:hover,
.nav-link:active {
  background-color: #358a5b;
  border-radius: 0.7em;
}

.nav-link.router-link-exact-active {
  font-weight: bold;
  color: #4caf50;
}

/* Adjustments for centering and responsive behavior */
.container-fluid {
  padding-right: 0;
  padding-left: 0;
}

.navbar-nav {
  width: 100%;
  justify-content: space-around;
}

@media (min-width: 992px) {
  .navbar-nav {
    justify-content: center;
  }
}
</style>