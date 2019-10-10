<template>
  <div class="login">
    <h3>Login</h3>
    <label>
      email
      <input type="email" v-model="email">
    </label>
    <label>
      password
      <input type="password" v-model="password">
    </label>
    <button @click="login()">
      Login
    </button>
  </div>
</template>
<script lang="ts">
  import { Vue } from 'vue-property-decorator';
  import { mapActions } from 'vuex';

  export default Vue.extend({
    name: 'Login',
    data() {
      return {
        email : '',
        password: '',
      };
    },
    methods: {
      ...mapActions(['loginAction']),
      login() {
        this.loginAction({email: this.email, password: this.password});
      }
    },
  });
</script>
<style scoped lang="scss">
.login {
  label {
    display: block;
  }
}
</style>