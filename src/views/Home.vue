<template>
  <div class="app-home">
    <h2 class="app-subtitle">Please input your Github username</h2>
    <input
      type="text"
      class="app-input"
      v-model="value"
    />
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      value: '',
    };
  },
  components: {
  },
};
</script>
