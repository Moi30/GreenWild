<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="@/assets/logo.png" alt="GreenWild Logo" style="height: 40px;">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">À propos de nous</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/activities">Nos activités</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/join">Devenir membre</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/donation">Faire un don</router-link>
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

.nav-link:hover, .nav-link:focus {
  background-color: #358a5b;
  color: #fff;
}

.nav-link.router-link-exact-active {
  font-weight: bold;
  color: #4CAF50;
}

.navbar-toggler {
  border-color: #4CAF50;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%234CAF50' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
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
