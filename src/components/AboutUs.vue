<template>
  <div class="about container my-5">
    <h1 class="text-center mb-4">À propos de nous</h1>
    
    <!-- Introduction Section -->
    <section class="mb-5">
      <p class="lead text-center">Nous sommes une équipe dévouée à la préservation de l'environnement, chacun apportant ses compétences uniques pour faire de GreenWild un succès.</p>
      <p class="text-center">GreenWild a été fondée avec la mission de nettoyer et préserver nos espaces naturels. Nous croyons en l'importance de chaque petit geste pour faire une grande différence. Nos activités incluent des randonnées de nettoyage, des campagnes de sensibilisation, et des événements communautaires pour encourager la participation de tous à la préservation de notre planète.</p>
    </section>

    <!-- Missions Section -->
    <section class="mb-5">
      <h2 class="text-center mb-4">Nos Missions</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="card h-100 shadow-sm hover-shadow">
            <div class="card-body text-center">
              <div class="icon mb-3">
                <i class="fas fa-tree fa-2x"></i>
              </div>
              <h3 class="card-title">Nettoyage des Espaces Naturels</h3>
              <p class="card-text">Organiser des randonnées et des événements pour nettoyer les sentiers, les plages et autres espaces naturels.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 shadow-sm hover-shadow">
            <div class="card-body text-center">
              <div class="icon mb-3">
                <i class="fas fa-bullhorn fa-2x"></i>
              </div>
              <h3 class="card-title">Sensibilisation</h3>
              <p class="card-text">Conduire des campagnes de sensibilisation pour éduquer le public sur l'importance de la conservation de l'environnement.</p>
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
              <p class="card-text">Organiser des événements communautaires pour engager et éduquer les membres de la communauté sur les pratiques écologiques.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="mb-5">
      <h2 class="text-center mb-4">Nos Valeurs</h2>
      <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex align-items-center">
          <i class="fas fa-leaf fa-2x me-3 text-success"></i> Respect de la Nature
        </li>
        <li class="list-group-item d-flex align-items-center">
          <i class="fas fa-hands-helping fa-2x me-3 text-success"></i> Engagement Communautaire
        </li>
        <li class="list-group-item d-flex align-items-center">
          <i class="fas fa-graduation-cap fa-2x me-3 text-success"></i> Éducation et Sensibilisation
        </li>
        <li class="list-group-item d-flex align-items-center">
          <i class="fas fa-balance-scale fa-2x me-3 text-success"></i> Transparence et Intégrité
        </li>
      </ul>
    </section>

    <!-- History Section -->
    <section>
      <h2 class="text-center mb-4">Notre Histoire</h2>
      <p class="text-center">Fondée en 2024, GreenWild est née d'une passion commune pour la nature et d'un désir de faire la différence. Depuis notre création, nous organisons des randonnées pour nettoyer la nature, collectons des déchets, et mobilison des volontaires. Nous sommes fiers de notre impact et continuons à travailler pour un avenir plus propre et plus vert.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
}
</script>

<style scoped>
.about {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.card-title {
  font-size: 1.5em;
  color: #4CAF50;
}

.card-text {
  font-size: 1.2em;
  color: #555;
}

.list-group-item {
  font-size: 1.2em;
  color: #555;
}

.icon {
  color: #4CAF50;
}

.hover-shadow:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
}
</style>

<!-- Import Font Awesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
