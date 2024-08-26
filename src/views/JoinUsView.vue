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

<style scoped>
  .join-us .form-group input, .join-us .form-group textarea {
    background-color: #f8f9fa;
    border: 2px solid #dee2e6;
    border-radius: .25rem;
  }

  .join-us .form-group input:focus, .join-us .form-group textarea:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25);
  }

  .join-us button {
    width: 100%;
    background-color: #4CAF50;
    border: none;
  }

  .join-us button:hover {
    background-color: #367c39;
  }

  button {
    width: 100%;
    padding: .75rem;
    font-size: 1.2rem;
    border-radius: .25rem;
    transition: background-color .15s ease-in-out;
  }

  button:hover {
    background-color: #4cae4c;
  }

  .membership-info i {
    color: #4CAF50;
  }

  .membership-info h4 {
    color: #343a40;
    font-weight: bold;
  }

  .membership-info p {
    color: #666;
    font-size: 0.9rem;
  }

  /* Import Animate.css for smooth animations */
  @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
</style>
