<template>
  <div class="about container my-5">
    <h1 class="text-center mb-5 animate__animated animate__fadeIn">
      À propos de nous
    </h1>

    <!-- Introduction Section -->
    <section class="mb-5 animate__animated animate__fadeInLeft">
      <p class="lead text-center">
        Nous sommes une équipe dévouée à la préservation de l'environnement,
        chacun apportant ses compétences uniques pour faire de GreenWild un
        succès.
      </p>
      <p class="text-center">
        GreenWild a été fondée avec la mission de nettoyer et préserver nos
        espaces naturels. Nous croyons en l'importance de chaque petit geste
        pour faire une grande différence. Nos activités incluent des randonnées
        de nettoyage, des campagnes de sensibilisation, et des événements
        communautaires pour encourager la participation de tous à la
        préservation de notre planète.
      </p>
    </section>

    <!-- Missions Section -->
    <section class="mb-5 animate__animated animate__fadeInRight">
      <h2 class="text-center mb-4">Nos Missions</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="card h-100 shadow-sm hover-shadow">
            <div class="card-body text-center">
              <div class="icon mb-3"><i class="fas fa-tree fa-2x"></i></div>
              <h3 class="card-title">Nettoyage des Espaces Naturels</h3>
              <p class="card-text">
                Organiser des randonnées et des événements pour nettoyer les
                sentiers, les plages et autres espaces naturels.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 shadow-sm hover-shadow">
            <div class="card-body text-center">
              <div class="icon mb-3"><i class="fas fa-bullhorn fa-2x"></i></div>
              <h3 class="card-title">Sensibilisation</h3>
              <p class="card-text">
                Conduire des campagnes de sensibilisation pour éduquer le public
                sur l'importance de la conservation de l'environnement.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 shadow-sm hover-shadow">
            <div class="card-body text-center">
              <div class="icon mb-3">
                <i class="fas fa-people-carry fa-2x"></i>
              </div>
              <h3 class="card-title">Événements Communautaires</h3>
              <p class="card-text">
                Organiser des événements communautaires pour engager et éduquer
                les adhérents de la communauté sur les pratiques écologiques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="mb-5 animate__animated animate__fadeInLeft">
      <h2 class="text-center mb-4">Nos Valeurs</h2>
      <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex align-items-center">
          <i class="fas fa-leaf fa-2x me-3 text-success"></i> Respect de la
          Nature
        </li>
        <li class="list-group-item d-flex align-items-center">
          <i class="fas fa-hands-helping fa-2x me-3 text-success"></i>
          Engagement Communautaire
        </li>
        <li class="list-group-item d-flex align-items-center">
          <i class="fas fa-graduation-cap fa-2x me-3 text-success"></i>
          Éducation et Sensibilisation
        </li>
        <li class="list-group-item d-flex align-items-center">
          <i class="fas fa-balance-scale fa-2x me-3 text-success"></i>
          Transparence et Intégrité
        </li>
      </ul>
    </section>

    <!-- History Section -->
    <section class="animate__animated animate__fadeInRight">
      <h2 class="text-center mb-4">Notre Histoire</h2>
      <p class="text-center">
        Fondée en 2024, GreenWild est née d'une passion commune pour la nature
        et d'un désir de faire la différence. Depuis notre création, nous
        organisons des randonnées pour nettoyer la nature, collectons des
        déchets, et mobilisons des volontaires. Nous sommes fiers de notre
        impact et continuons à travailler pour un avenir plus propre et plus
        vert.
      </p>
    </section>
    <section class="team mt-5">
      <h2 class="text-center mb-5">Notre Équipe</h2>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="member in team" :key="member.name">
          <div class="card h-100 shadow-sm hover-shadow">
            <img :src="member.image" class="card-img-top" :alt="member.name" />
            <div class="card-body text-center">
              <h3 class="card-title">{{ member.name }}</h3>
              <p class="card-text">{{ member.role }}</p>
              <div class="social-icons mt-3">
                <a href="#" class="text-dark me-2"
                  ><i class="fab fa-facebook fa-2x"></i
                ></a>
                <a href="#" class="text-dark me-2"
                  ><i class="fab fa-twitter fa-2x"></i
                ></a>
                <a href="#" class="text-dark"
                  ><i class="fab fa-linkedin fa-2x"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import maleaume from "@/assets/team/maleaume.jpg";
import fanny from "@/assets/team/fanny.jpg";
import jeremy from "@/assets/team/jeremy.jpg";
import alexis from "@/assets/team/alexis.jpg";
import phil from "@/assets/team/phil.jpg";
import ugo from "@/assets/team/ugo.jpg";
import clara from "@/assets/team/clara.jpg";

export default {
  name: "AboutUs",
  data() {
    return {
      team: [
        { name: "Maleaume", role: "Fondateur et CEO", image: maleaume },
        {
          name: "Fanny",
          role: "Co-Fondatrice et Directrice Artistique",
          image: fanny,
        },
        { name: "Jeremy", role: "Développeur", image: jeremy },
        { name: "Alexis", role: "Lead Développeur", image: alexis },
        {
          name: "Phil",
          role: "Trésorier et Responsable Evenementiel",
          image: phil,
        },
        { name: "Ugo", role: "Co-Responsable Evenementiel", image: ugo },
        {
          name: "Clara",
          role: "Responsable Marketing et Communication",
          image: clara,
        },
        { name: "Corentin", role: "Trésorier" },
      ],
    };
  },
};
</script>

<style scoped>
/* About Us Styles */
/* Team Page Styles */
.card-title {
  font-size: 1.5em;
  color: #4caf50;
}
.card-text {
  font-size: 1.2em;
  color: #555;
}
.card-img-top {
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}
.card-img-top:hover {
  transform: scale(1.05);
}
.hover-shadow:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease-in-out;
}
.social-icons a {
  color: #4caf50;
  transition: color 0.3s ease;
}
.social-icons a:hover {
  color: #367c39;
}
</style>

<!-- Import Font Awesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">