<template>
  <div id="app">
    <b-overlay :show="overlay" rounded="sm" >
      <Header />
        <b-container fluid="md">
          <router-view/>
        </b-container>
      <Footer />
    </b-overlay>
  </div>
</template>

<script>
  import { Header, Footer } from './layout';
  import { mapGetters } from 'vuex';

  export default {
    components : {
      Header,
      Footer,
    },
    computed: mapGetters({'overlay': 'overlay'})
  }
</script>


<style>
#app {
  flex-grow: 1
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
