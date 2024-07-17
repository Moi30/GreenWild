<template>
  <div class="home">
    <section class="banner">
      <div class="banner-content">
        <h1>Bienvenue chez GreenWild</h1>
        <p>Participez à nos activités pour un monde plus propre!</p>
        <button @click="joinUs">Rejoignez-nous</button>
      </div>
    </section>

    <section class="about">
      <h2>Qui sommes-nous?</h2>
      <p>Nous sommes une association dédiée à la préservation de l'environnement par le nettoyage des espaces naturels.</p>
    </section>

    <section class="statistics">
      <h2>Impact de Nos Actions</h2>
      <div class="stat-item">
        <span class="number" v-scroll-animation="50">50+</span>
        <span class="desc">Balades organisées</span>
      </div>
      <div class="stat-item">
        <span class="number" v-scroll-animation="1000">1,000kg</span>
        <span class="desc">Déchets collectés</span>
      </div>
      <div class="stat-item">
        <span class="number" v-scroll-animation="500">500</span>
        <span class="desc">Volontaires actifs</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    joinUs() {
      this.$router.push('/join');
    }
  },
  directives: {
    scrollAnimation: {
      inserted: (el, binding) => {
        let f = () => {
          let rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            el.textContent = binding.value;
            window.removeEventListener('scroll', f);
          }
        };
        window.addEventListener('scroll', f);
      }
    }
  }
}
</script>

<style scoped>
.home .banner {
  background: url('@/assets/banner.webp') no-repeat center center/cover;
  text-align: center;
  padding: 100px 20px;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-content {
  max-width: 600px;
}

.home .about, .home .statistics {
  text-align: center;
  padding: 50px 20px;
}

.statistics .stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.number {
  font-size: 3em;
  font-weight: bold;
  color: #4CAF50;
}

.desc {
  font-size: 1.2em;
  margin-top: 5px;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #367c39;
}
</style>
