<template>
  <div id="app">
    <nav>
      <router-link to="/">Accueil</router-link> |
      <router-link to="/about">À propos de nous</router-link> |
      <router-link to="/activities">Nos activités</router-link> |
      <router-link to="/team">L'équipe</router-link> |
      <router-link to="/join">Devenir membre</router-link> |
      <router-link to="/contact">Contact</router-link>
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
nav {
  padding: 15px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
}
nav a.router-link-exact-active {
  font-weight: bold;
}
</style>