<template>
  <v-app>
    <Header/>
    <v-main>
      <router-view/>
    </v-main>
    <Cta/>
    <X/>
  </v-app>
</template>

<script>
import Cta from './components/Cta.vue';
import X from './components/X.vue';
import Header from './components/Header.vue';
export default {
  components: { Header, X, Cta},
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
