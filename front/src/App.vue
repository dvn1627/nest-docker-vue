<template>
  <div id="app">
      <h1>Heroes</h1>
      <nav v-if="getToken">
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/heroes">Heroes</router-link>
        <router-link to="/about">About</router-link>
      </nav>
      <nav v-else>
        <router-link :to="{name: 'login'}">Login</router-link>
      </nav>
    <router-view></router-view>
  </div>
</template>
<script type="ts">
  import { Vue } from 'vue-property-decorator';
  import { mapGetters } from 'vuex';

  export default Vue.extend({
    name: 'Login',
    data() {
      return {
        email : '',
        password: '',
      };
    },
    computed: {
      ...mapGetters(['getToken']),
    },
    

    

  });
</script>
<style lang="scss">
#app {
  h1 {
    font-size: 1.2em;
    margin-bottom: 0;
  }
  h2 {
    font-size: 2em;
    margin-top: 0;
    padding-top: 0;
  }
  nav a {
    padding: 5px 10px;
    text-decoration: none;
    margin-top: 10px;
    display: inline-block;
    background-color: #eee;
    border-radius: 4px;
  }
  nav a:visited, a:link {
    color: #334953;
  }
  nav a:hover {
    color: #039be5;
    background-color: #cfd8dc;
  }
  nav a.active {
    color: #039be5;
  }
}
</style>
