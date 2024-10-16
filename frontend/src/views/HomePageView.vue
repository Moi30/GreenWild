<template>
  <div class="home">
    <!-- Banner Section -->
    <section
      class="banner d-flex align-items-center justify-content-center text-center text-white"
    >
      <div class="banner-content">
        <h1 class="display-4 animate__animated animate__fadeInDown">
          Bienvenue chez GreenWild
        </h1>
        <p class="lead animate__animated animate__fadeInUp">
          Participez à nos activités pour un monde plus propre!
        </p>
        <button
          class="btn btn-success btn-lg animate__animated animate__zoomIn"
          @click="joinUs"
        >
          Rejoignez-nous
        </button>
      </div>
    </section>

    <!-- About Section -->
    <section class="container my-5 text-center">
      <h2 class="mb-4">Qui sommes-nous?</h2>
      <p class="lead">
        Nous sommes une association dédiée à la préservation de l'environnement
        par le nettoyage des espaces naturels.
      </p>
    </section>

    <!-- Activities Section -->
    <section class="container my-5">
      <h2 class="text-center mb-4">Nos Activités</h2>
      <div class="row">
        <div
          class="col-md-4 mb-4"
          v-for="activity in activities"
          :key="activity.title"
        >
          <div class="card h-100 shadow-sm hover-shadow">
            <img
              :src="activity.image"
              class="card-img-top"
              alt="Activity image"
            />
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
        <p class="lead mb-4">
          Rejoignez-nous et participez à nos activités pour un environnement
          plus propre et plus sain.
        </p>
        <button class="btn btn-light btn-lg" @click="joinUs">
          Devenir adhérent
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import eventsJson from "@/assets/events.json";
export default {
  name: "HomePage",
  data() {
    return {
      activities: [
        {
          title: "Randonnées de Nettoyage",
          description:
            "Participez à nos randonnées pour nettoyer les sentiers et profiter de la nature.",
          image: require("@/assets/cleaning-hike.webp"),
        },
        {
          title: "Campagnes de Sensibilisation",
          description:
            "Nous organisons des campagnes pour sensibiliser le public à l’importance de la protection de l’environnement.",
          image: require("@/assets/awareness-campaign.webp"),
        },
        {
          title: "Événements Communautaires",
          description:
            "Rejoignez nos événements communautaires pour apprendre et contribuer à des initiatives écologiques.",
          image: require("@/assets/community-event.webp"),
        },
      ],
      totalCleanups: 0,
      totalWasteCollected: 0,
    };
  },
  methods: {
    joinUs() {
      this.$router.push("/nous-rejoindre");
    },
    loadEvents() {
      this.totalCleanups = eventsJson.events.filter(
        (event) => event.type === "passed"
      ).length;
      this.totalWasteCollected = this.roundToDecimals(
        eventsJson.events
        .filter((event) => event.type === "passed")
        .reduce((acc, event) => {
          const waste = parseFloat(event.wasteCollected);
          return acc + (isNaN(waste) ? 0 : waste);
        }, 0),
        2
      );
      // fetch(new URL("./events.json", import.meta.url))
      //   .then((response) => response.json())
      //   .then((data) => {
      //     this.totalCleanups = data.events.filter(
      //       (event) => event.type === "passed"
      //     ).length;
      //     this.totalWasteCollected = data.events
      //       .filter((event) => event.type === "passed")
      //       .reduce((acc, event) => {
      //         const waste = parseFloat(event.wasteCollected);
      //         return acc + (isNaN(waste) ? 0 : waste);
      //       }, 0);
      //     this.totalWasteCollected = this.roundToDecimals(
      //       this.totalWasteCollected,
      //       2
      //     );
      //   })
      //   .catch((error) => console.error("Error loading events.json:", error));
    },
    roundToDecimals(value, decimals) {
      if (typeof value !== "number" || typeof decimals !== "number") {
        throw new Error("Both parameters must be numbers.");
      }
      const factor = Math.pow(10, decimals);
      return Math.round(value * factor) / factor;
    },
  },
  mounted() {
    this.loadEvents();
  },
};
</script>
