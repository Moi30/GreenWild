<template>
  <div class="contact container my-5">
    <h1 class="text-center mb-4 animate__animated animate__fadeIn">Contactez-nous</h1>
    <p class="lead text-center animate__animated animate__fadeIn">Vous avez des questions ou des suggestions ? N'hésitez pas à nous contacter via le formulaire ci-dessous ou par email à <a href="mailto:contact@greenwild.fr">contact@greenwild.fr</a>.</p>
    <form @submit.prevent="submitForm" class="mx-auto form-animate" style="max-width: 600px;">
      <div class="form-group mb-3">
        <label for="name">Nom</label>
        <input type="text" id="name" v-model="name" class="form-control" required />
      </div>
      <div class="form-group mb-3">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" class="form-control" required />
      </div>
      <div class="form-group mb-3">
        <label for="message">Message</label>
        <textarea id="message" v-model="message" class="form-control" required rows="4"></textarea>
      </div>
      <button type="submit" class="btn btn-success btn-lg">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.name, this.email, this.message);
      alert("Le formulaire n'est pas encore prêt. Vous pouvez nous joindre directement via contact@greenwild.fr");
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
}
</script>

<style scoped>
.contact {
  animation-delay: 0.5s;
}

.form-group label {
  font-weight: bold;
  color: #4CAF50; /* Theme color */
}

.form-control {
  border: 2px solid #ccc;
  border-radius: 0.25rem;
  transition: border-color 0.3s ease-in-out;
}

.form-control:focus {
  border-color: #4CAF50;
  box-shadow: none; /* Removes Bootstrap default focus shadow */
}

button {
  width: 100%;
  background-color: #4CAF50; /* Theme color */
  border: none;
}

button:hover {
  background-color: #367c39;
}

.form-animate {
  animation: fadeInUp 1s;
}

@keyframes fadeInUp {
  from {
    transform: translate3d(0, 40px, 0);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

/* Import Animate.css for smooth animations */
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
</style>
