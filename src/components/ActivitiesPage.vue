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

    <!-- Carte des lieux de passage avec animation -->
    <div id="map" v-if="isReady" class="animate__animated animate__fadeInUp" style="height: 400px;">
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker v-for="loc in validLocations" :key="loc.name" :lat-lng="loc.latLng"></l-marker>
      </l-map>
    </div>

    <!-- Section Événements à venir avec bouton d'inscription -->
    <section class="upcoming-events mt-5">
      <h2 class="text-center animate__animated animate__fadeIn">Événements à venir</h2>
      <div class="row animate__animated animate__fadeInUp">
        <div class="col-md-4" v-for="event in upcomingEvents" :key="event.name">
          <div class="event-card p-3 mb-3 shadow-sm h-100">
            <h3>{{ event.name }}</h3>
            <p>{{ event.date }}</p>
            <p>{{ event.description }}</p>
            <router-link :to="{ name: 'contact' }" class="btn btn-primary">S'inscrire</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Événements passés -->
    <section class="passed-events mt-5">
      <h2 class="text-center animate__animated animate__fadeIn">Événements passés</h2>
      <div class="row animate__animated animate__fadeInUp">
        <div class="col-md-4" v-for="event in passedEvents" :key="event.name">
          <div class="event-card p-3 mb-3 shadow-sm h-100">
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
import { LMap, LTileLayer, LMarker } from 'vue3-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'ActivitiesPage',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      activities: [
        { title: 'Randonnées de Nettoyage', description: 'Participez à nos randonnées pour nettoyer les sentiers et profiter de la nature.' },
        { title: 'Campagnes de Sensibilisation', description: 'Nous organisons des campagnes pour sensibiliser le public à l’importance de la protection de l’environnement.' },
        { title: 'Événements Communautaires', description: 'Rejoignez nos événements communautaires pour apprendre et contribuer à des initiatives écologiques.' }
      ],
      events: [],
      isReady: false,
      center: [46.2276, 2.2137],
      zoom: 6,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    };
  },
  computed: {
    upcomingEvents() {
      return this.events.filter(event => event.type === 'upcoming');
    },
    passedEvents() {
      return this.events.filter(event => event.type === 'passed');
    },
    validLocations() {
      return this.events.map(event => ({
        name: event.location.name,
        latLng: event.location.latLng
      }));
    }
  },
  mounted() {
    fetch(new URL('./events.json', import.meta.url))
      .then(response => response.json())
      .then(data => {
        this.events = data.events;
        this.isReady = true;
      })
      .catch(error => console.error('Error loading events.json:', error));
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
.event-card {
  position: relative;
  font-size: 1.2em;
  color: #555;
  background-color: #fff;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
}
.btn-primary {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
}
#map {
  height: 400px;
}
</style>
