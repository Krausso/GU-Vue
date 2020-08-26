<template>
  <section class="app-info">
    <div
      class="info-card"
      v-for="(pair, index) in info"
      :key="index"
    >
      <h3 class="card-title">{{ pair[0] }}</h3>
      <p class="card-text">{{ pair[1] }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ShowInfo',
  props: {
    info: {
      type: Array,
      required: true,
    },
  },
  // [{key: value}, {key: value}]
};
</script>
