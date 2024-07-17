<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">GreenWild</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">À propos de nous</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/activities">Nos activités</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/team">L'équipe</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/join">Devenir membre</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav a {
  text-decoration: none;
  color: #42b983;
}
nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
