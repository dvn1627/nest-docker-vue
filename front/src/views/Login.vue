<template>
  <div class="login">
    <h3>Login</h3>
    <label>
      <span>email</span>
      <input type="email" v-model="email">
    </label>
    <label>
      <span>password</span>
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
        this.email = '';
        this.password = '';
      },
    },
  });
</script>
<style scoped lang="scss">
.login {
  label {
    margin: 10px 20px;
    display: block;
    >span {
      display: inline-block;
      width: 150px;
    }
    >input {
      border: 1px #777 solid;
      outline: none;
      padding: 5px;
      border-radius: 3px;
    }
  }
  >button {
    cursor: pointer;
    border: none;
    background: #555;
    padding: 5px 10px;
    border-radius: 3px;
    color: #fff;
    &:hover {
      background: #999;
    }
  }
}
</style>