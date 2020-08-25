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
    <ShowInfo :info="this.$store.state.userData"/>
  </section>
</template>

<script>
import ShowInfo from '@/components/ShowInfo.vue';

export default {
  name: 'Home',
  data() {
    return {
      username: '',
      found: false,
    };
  },
  components: {
    ShowInfo,
  },
  methods: {
    pushData() {
      this.$store.commit('changeAuthData', this.username);
      this.$store.dispatch('getData');
      this.username = '';
      this.found = true;
    },
  },
};
</script>
