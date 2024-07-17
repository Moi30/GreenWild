<template>
  <div class="team container my-5">
    <h1 class="text-center mb-4">Notre Équipe</h1>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="member in team" :key="member.name">
        <div class="card h-100 shadow-sm">
          <div class="card-body text-center">
            <h2 class="card-title">{{ member.name }}</h2>
            <p class="card-text">{{ member.role }}</p>
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
        { name: 'Maleaume', role: 'CEO' },
        { name: 'Fanny', role: 'Co-Fondatrice et DA' },
        { name: 'Jeremy', role: 'Développeur' },
        { name: 'Alexis', role: 'Développeur' },
        { name: 'Phil', role: 'Organisateur' },
        { name: 'Ugo', role: 'Organisateur' },
        { name: 'Clara', role: 'Com et Marketing' },
        { name: 'Corentin', role: 'Trésorier' }
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
