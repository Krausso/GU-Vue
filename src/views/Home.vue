<template>
  <section>

    <form
      class="app-home"
      @submit.prevent="pushData()"
    >
      <h2 class="app-subtitle">Please input your Github username</h2>
      <input
        type="text"
        class="app-input"
        v-model="username"
      />
      <button
        type="submit"
        class="app-btn"
      >
        Find account
      </button>
    </form>
    <Cards :info="this.$store.state.githubData"/>
  </section>
</template>

<script>
import Cards from '@/components/Cards.vue';

export default {
  name: 'Home',
  data() {
    return {
      username: '',
    };
  },
  components: {
    Cards,
  },
  methods: {
    pushData() {
      this.$store.dispatch('getData', this.username);
      this.username = '';
    },
  },
};
</script>
