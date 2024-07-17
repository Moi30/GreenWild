<template>
  <div class="team container my-5">
    <h1 class="text-center mb-4">Notre Équipe</h1>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="member in team" :key="member.name">
        <div class="card h-100 shadow-sm hover-shadow">
          <img :src="(`@/assets/team/${member.image}`)" class="card-img-top" :alt="member.name">
          <div class="card-body text-center">
            <h2 class="card-title">{{ member.name }}</h2>
            <p class="card-text">{{ member.role }}</p>
            <div class="social-icons mt-3">
              <a href="#" class="text-dark me-2"><i class="fab fa-facebook fa-2x"></i></a>
              <a href="#" class="text-dark me-2"><i class="fab fa-twitter fa-2x"></i></a>
              <a href="#" class="text-dark"><i class="fab fa-linkedin fa-2x"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamPage',
  data() {
    return {
      team: [
        { name: 'Maleaume', role: 'Fondateur et CEO', image: 'maleaume.jpg' },
        { name: 'Fanny', role: 'Co-Fondatrice et Directrice Artistique', image: 'fanny.jpg' },
        { name: 'Jeremy', role: 'Lead Développeur', image: 'jeremy.jpg' },
        { name: 'Alexis', role: 'Lead Développeur', image: 'alexis.jpg' },
        { name: 'Phil', role: 'Trésorier et Responsable Evenementiel', image: 'phil.jpg' },
        { name: 'Ugo', role: 'Co-Responsable Evenementiel', image: 'ugo.jpg' },
        { name: 'Clara', role: 'Responsable Marketing et Communication', image: 'clara.jpg' },
        { name: 'Corentin', role: 'Trésorier', image: 'corentin.jpg' }
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
.card-img-top {
  height: 200px;
  object-fit: cover;
}
.hover-shadow:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
}
.social-icons a {
  color: #4CAF50;
  transition: color 0.3s ease;
}
.social-icons a:hover {
  color: #367c39;
}
</style>

<!-- Import Font Awesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
