<template>
  <div class="contact container my-5">
    <h1 class="text-center mb-4">Contactez-nous</h1>
    <p class="lead text-center">Vous avez des questions ou des suggestions ? N'hésitez pas à nous contacter via le formulaire ci-dessous ou par email à <a href="mailto:contact@greenwild.fr">contact@greenwild.fr</a>.</p>
    <form @submit.prevent="submitForm" class="mx-auto" style="max-width: 600px;">
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
        <textarea id="message" v-model="message" class="form-control" required></textarea>
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
      // Logic to handle form submission
      console.log('Form submitted:', this.name, this.email, this.message);
      alert('Merci pour votre message ! Nous vous contacterons bientôt.');
      // Reset form fields
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
}
</script>

<style scoped>
.form-group label {
  font-weight: bold;
}

button {
  width: 100%;
}
</style>
