<template>
  <div class="activities container my-5">
    <h1 class="text-center mb-4 animate__animated animate__fadeIn">Nos Activités</h1>
    <p class="lead text-center animate__animated animate__fadeIn">Découvrez les diverses activités que nous organisons pour nettoyer et préserver notre environnement.</p>

    <div class="row animate__animated animate__fadeInUp">
      <div class="col-md-4 mb-4" v-for="activity in activities" :key="activity.title">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h2 class="card-title">{{ activity.title }}</h2>
            <p class="card-text">{{ activity.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Événements à venir -->
    <section class="upcoming-events mt-5">
      <h2 class="text-center animate__animated animate__fadeIn">Événements à venir</h2>
      <div class="row animate__animated animate__fadeInUp">
        <div class="col-md-6" v-for="event in upcomingEvents" :key="event.name">
          <div class="event-card p-3 mb-3 shadow-sm">
            <h3>{{ event.name }}</h3>
            <p>{{ event.date }}</p>
            <p>{{ event.description }}</p>
          </div>
        </div>
      </div>
    </section>
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
      ],
      upcomingEvents: [
        { name: 'Nettoyage de Plage', date: '12 octobre 2023', description: 'Un événement pour nettoyer notre littoral local.' },
        { name: 'Journée de la Terre', date: '22 avril 2024', description: 'Participez à des activités ....' },
        { name: 'Rocher des deux trous', date: '22 avril 2024', description: 'Randonnée de 18km' }
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
.event-card h3 {
  color: #4CAF50;
}
.event-card p {
  font-size: 1.2em;
  color: #555;
}
</style>

<!-- Import Animate.css for animations -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
