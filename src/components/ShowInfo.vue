<template>
  <section class="app-info">
    <div
      class="info-card"
      v-for="key in Object.keys(info)"
      :key="key"
    >
      <h3 class="card-title">{{ key }}</h3>
      <p class="card-text">{{ info[key] }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ShowInfo',
  props: ['info'],
};
</script>
