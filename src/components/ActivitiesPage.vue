<template>
  <div class="activities container my-5">
    <h1 class="text-center mb-4">Nos Activités</h1>
    <p class="lead text-center">Découvrez les diverses activités que nous organisons pour nettoyer et préserver notre environnement.</p>

    <div class="row">
      <div class="col-md-4 mb-4" v-for="activity in activities" :key="activity.title">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h2 class="card-title">{{ activity.title }}</h2>
            <p class="card-text">{{ activity.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivitiesPage',
  data() {
    return {
      activities: [
        { title: 'Randonnées de Nettoyage', description: 'Participez à nos randonnées pour nettoyer les sentiers et profiter de la nature.' },
        { title: 'Campagnes de Sensibilisation', description: 'Nous organisons des campagnes pour sensibiliser le public à l’importance de la protection de l’environnement.' },
        { title: 'Événements Communautaires', description: 'Rejoignez nos événements communautaires pour apprendre et contribuer à des initiatives écologiques.' }
      ]
    };
  }
}
</script>

<style scoped>
.card-title {
  font-size: 1.5em;
  color: #4CAF50;
}
.card-text {
  font-size: 1.2em;
  color: #555;
}
</style>
