<template>
  <div id="app">
    <Description/>
    <router-view/>
  </div>
</template>

<script>
import Description from '@/components/Description.vue';

export default {
  name: 'App',
  components: {
    Description,
  },
};
</script>
