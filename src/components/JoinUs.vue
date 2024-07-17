<template>
  <div class="join-us container my-5">
    <h1 class="text-center mb-4">Devenir Membre</h1>
    <p class="lead text-center">Rejoignez-nous pour contribuer à la préservation de notre environnement. Ensemble, nous pouvons faire une différence.</p>
    <form @submit.prevent="submitForm" class="mx-auto" style="max-width: 600px;">
      <div class="form-group mb-3">
        <label for="name">Nom</label>
        <input type="text" id="name" v-model="name" class="form-control" placeholder="Votre nom" required />
      </div>
      <div class="form-group mb-3">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" class="form-control" placeholder="Votre email" required />
      </div>
      <div class="form-group mb-3">
        <label for="reason">Pourquoi voulez-vous nous rejoindre?</label>
        <textarea id="reason" v-model="reason" class="form-control" placeholder="Expliquez vos motivations" rows="5" required></textarea>
      </div>
      <button type="submit" class="btn btn-success btn-lg">Envoyer</button>
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
      // Logic to handle form submission
      console.log('Form submitted:', this.name, this.email, this.reason);
      alert('Merci pour votre inscription ! Nous vous contacterons bientôt.');
      // Reset form fields
      this.name = '';
      this.email = '';
      this.reason = '';
    }
  }
}
</script>

<style scoped>
.form-group label {
  font-weight: bold;
  display: block;
  margin-bottom: .5rem;
}

.form-control {
  border: 1px solid #ccc;
  border-radius: .25rem;
  padding: .5rem .75rem;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.form-control:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25);
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
</style>
