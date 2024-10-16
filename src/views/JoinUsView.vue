<template>
  <div class="join-us container my-5">
    <h1 class="text-center mb-4 animate__animated animate__fadeInDown">Devenir Adhérent</h1>
    <p class="lead text-center animate__animated animate__fadeInUp">Rejoignez-nous et contribuez activement à la préservation de notre environnement.</p>
    
    <!-- Membership Benefits Section -->
    <section class="membership-info mt-5 p-4 bg-light border rounded animate__animated animate__fadeIn">
      <h2 class="text-center mb-3">Pourquoi devenir Adhérent de GreenWild ?</h2>
      <p class="text-center mb-4">En tant que adhérent, vous bénéficiez de nombreux avantages exclusifs :</p>
      <div class="row">
        <div class="col-md-6 col-lg-3 mb-4 text-center">
          <i class="fas fa-tree fa-3x mb-2 text-success"></i>
          <h4 class="mb-2">Événements Nature</h4>
          <p>Participez à nos randonnées et nettoyages de sites naturels.</p>
        </div>
        <div class="col-md-6 col-lg-3 mb-4 text-center">
          <i class="fas fa-bullhorn fa-3x mb-2 text-success"></i>
          <h4 class="mb-2">Sensibilisation</h4>
          <p>Accès à des campagnes exclusives de sensibilisation environnementale.</p>
        </div>
        <div class="col-md-6 col-lg-3 mb-4 text-center">
          <i class="fas fa-people-carry fa-3x mb-2 text-success"></i>
          <h4 class="mb-2">Communauté</h4>
          <p>Engagez-vous dans nos projets communautaires pour un impact plus grand.</p>
        </div>
        <div class="col-md-6 col-lg-3 mb-4 text-center">
          <i class="fas fa-graduation-cap fa-3x mb-2 text-success"></i>
          <h4 class="mb-2">Formations</h4>
          <p>Formations gratuites sur les pratiques de développement durable.</p>
        </div>
      </div>
      <p class="text-center mt-4">Cotisation annuelle de seulement 25€ qui soutient directement nos initiatives écologiques.</p>
    </section>
    
    <form @submit.prevent="submitForm" class="mx-auto mt-4 animate__animated animate__fadeIn" style="max-width: 500px;">
      <button type="submit" class="btn btn-success btn-block btn-lg">Nous rejoindre !</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'JoinUs',
    data() {
      return {
        name: '',
        email: '',
        reason: ''
      };
    },
    methods: {
      submitForm() {
        window.open("https://greenwild.assoconnect.com/collect/description/451088-n-adhesions-annuelles", '_blank');
      }
    }
  }
</script>
