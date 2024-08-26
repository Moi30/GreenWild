<template>
  <div class="donation container my-5 animate__animated animate__fadeIn">
    <h1 class="text-center mb-4 animate__animated animate__fadeInDown">Faire un don</h1>
    <p class="lead text-center animate__animated animate__fadeInDown">Votre soutien nous aide à continuer nos actions en faveur de l'environnement. Tous les dons sont appréciés.</p>

    <form @submit.prevent="submitDonation" class="donation-form mx-auto mt-4 animate__animated animate__fadeInUp" style="max-width: 500px;">
      <div class="form-group mb-3">
        <label for="amount">Montant du don (€)</label>
        <input type="number" id="amount" v-model="amount" class="form-control" required min="5">
      </div>

      <div class="form-group mb-3">
        <label for="paymentMethod">Méthode de paiement</label>
        <select id="paymentMethod" v-model="paymentMethod" class="form-control">
          <option value="creditCard">Carte de crédit</option>
          <option value="paypal">PayPal</option>
          <option value="bankTransfer">Virement bancaire</option>
        </select>
      </div>

      <button type="submit" class="btn btn-success btn-lg animate__animated animate__pulse animate__infinite">Donner</button>
    </form>
  </div>
</template>

<script>
  export default {
    mounted() {
      window.open("https://greenwild.assoconnect.com/collect/description/451107-n-campagne-de-dons-pour-soutenir-nos-projets", '_blank');
      this.$router.replace('/'); // Redirige vers la page d'accueil ou une autre page après l'ouverture du nouvel onglet sinon on arrive sur donation...
    }
  }
  // export default {
  //   name: 'DonationPage',
  //   data() {
  //     return {
  //       amount: '',
  //       paymentMethod: 'creditCard'
  //     };
  //   },
  //   methods: {
  //     submitDonation() {
  //       console.log(`Donation of €${this.amount} via ${this.paymentMethod}`);
  //       alert("Le formulaire n'est pas encore prêt. Vous pouvez nous joindre directement via contact@greenwild.fr");
  //       this.amount = ''; // Reset amount after submission
  //     }
  //   }
  // }
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
