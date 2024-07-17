<template>
  <div class="home">
    <!-- Banner Section -->
    <section class="banner d-flex align-items-center justify-content-center text-center text-white">
      <div class="banner-content">
        <h1 class="display-4">Bienvenue chez GreenWild</h1>
        <p class="lead">Participez à nos activités pour un monde plus propre!</p>
        <button class="btn btn-success btn-lg" @click="joinUs">Rejoignez-nous</button>
      </div>
    </section>

    <!-- About Section -->
    <section class="container my-5 text-center">
      <h2 class="mb-4">Qui sommes-nous?</h2>
      <p class="lead">Nous sommes une association dédiée à la préservation de l'environnement par le nettoyage des espaces naturels.</p>
    </section>

    <!-- Statistics Section -->
    <section class="container my-5">
      <h2 class="text-center mb-4">Impact de Nos Actions</h2>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="stat-item p-4 bg-light rounded shadow">
            <span class="number display-4">50+</span>
            <span class="desc d-block mt-2">Balades organisées</span>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="stat-item p-4 bg-light rounded shadow">
            <span class="number display-4">1,000kg</span>
            <span class="desc d-block mt-2">Déchets collectés</span>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="stat-item p-4 bg-light rounded shadow">
            <span class="number display-4">500</span>
            <span class="desc d-block mt-2">Volontaires actifs</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    joinUs() {
      this.$router.push('/join');
    }
  }
}
</script>

<style scoped>
.home .banner {
  background: url('@/assets/banner.webp') no-repeat center center/cover;
  height: 100vh;
}

.stat-item .number {
  font-size: 2.5em;
  font-weight: bold;
  color: #4CAF50;
}

.stat-item .desc {
  font-size: 1.2em;
  color: #555;
}
</style>
