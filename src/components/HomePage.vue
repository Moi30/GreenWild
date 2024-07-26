<template>
  <div class="home">
    <!-- Banner Section -->
    <section class="banner d-flex align-items-center justify-content-center text-center text-white">
      <div class="banner-content">
        <h1 class="display-4 animate__animated animate__fadeInDown">Bienvenue chez GreenWild</h1>
        <p class="lead animate__animated animate__fadeInUp">Participez à nos activités pour un monde plus propre!</p>
        <button class="btn btn-success btn-lg animate__animated animate__zoomIn" @click="joinUs">Rejoignez-nous</button>
      </div>
    </section>

    <!-- About Section -->
    <section class="container my-5 text-center">
      <h2 class="mb-4">Qui sommes-nous?</h2>
      <p class="lead">Nous sommes une association dédiée à la préservation de l'environnement par le nettoyage des espaces naturels.</p>
    </section>

    <!-- Activities Section -->
    <section class="container my-5">
      <h2 class="text-center mb-4">Nos Activités</h2>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="activity in activities" :key="activity.title">
          <div class="card h-100 shadow-sm hover-shadow">
            <img :src="activity.image" class="card-img-top" alt="Activity image">
            <div class="card-body">
              <h3 class="card-title">{{ activity.title }}</h3>
              <p class="card-text">{{ activity.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="container my-5">
      <h2 class="text-center mb-4">Impact de Nos Actions</h2>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="stat-item p-4 bg-light rounded shadow text-center">
            <span class="number display-4">{{ totalCleanups }}</span>
            <span class="desc d-block mt-2">Balades organisées</span>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="stat-item p-4 bg-light rounded shadow text-center">
            <span class="number display-4">{{ totalWasteCollected }} kg</span>
            <span class="desc d-block mt-2">Déchets collectés</span>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="stat-item p-4 bg-light rounded shadow text-center">
            <span class="number display-4">14</span>
            <span class="desc d-block mt-2">Volontaires actifs</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta bg-success text-white text-center py-5">
      <div class="container">
        <h2 class="mb-4">Prêt à faire la différence ?</h2>
        <p class="lead mb-4">Rejoignez-nous et participez à nos activités pour un environnement plus propre et plus sain.</p>
        <button class="btn btn-light btn-lg" @click="joinUs">Devenir membre</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      activities: [
        { title: 'Randonnées de Nettoyage', description: 'Participez à nos randonnées pour nettoyer les sentiers et profiter de la nature.', image: require('@/assets/cleaning-hike.webp') },
        { title: 'Campagnes de Sensibilisation', description: 'Nous organisons des campagnes pour sensibiliser le public à l’importance de la protection de l’environnement.', image: require('@/assets/awareness-campaign.webp') },
        { title: 'Événements Communautaires', description: 'Rejoignez nos événements communautaires pour apprendre et contribuer à des initiatives écologiques.', image: require('@/assets/community-event.webp') }
      ],
      totalCleanups: 0,
      totalWasteCollected: 0
    };
  },
  methods: {
    joinUs() {
      this.$router.push('/join');
    },
    loadEvents() {
      fetch(new URL('./events.json', import.meta.url))
        .then(response => response.json())
        .then(data => {
          this.totalCleanups = data.events.filter(event => event.type === 'passed').length;
          this.totalWasteCollected = data.events
            .filter(event => event.type === 'passed')
            .reduce((acc, event) => {
              const waste = parseFloat(event.wasteCollected);
              return acc + (isNaN(waste) ? 0 : waste);
            }, 0);
        })
        .catch(error => console.error('Error loading events.json:', error));
    }
  },
  mounted() {
    this.loadEvents();
  }
}
</script>

<style scoped>
.home .banner {
  background: url('@/assets/banner.webp') no-repeat center center/cover;
  height: 100vh;
  position: relative;
}

.home .banner:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay for better text visibility */
}

.banner-content {
  position: relative;
  z-index: 1;
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

.card-title {
  font-size: 1.5em;
  color: #4CAF50;
}

.card-text {
  font-size: 1.2em;
  color: #555;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.card-img-top:hover {
  transform: scale(1.05);
}

.hover-shadow:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
}

.cta {
  background: #28a745;
  color: white;
}

.cta .btn-light {
  color: #28a745;
}
</style>

<!-- Import Animate.css for animations -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
