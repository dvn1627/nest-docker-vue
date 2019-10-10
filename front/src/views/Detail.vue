<template>
  <div>
    <h2>{{hero.name | uppercase}} Details</h2>
    <div>
      <span>id: </span>
      {{hero.id}}
    </div>
    <div>
      <label>name:
        <input v-model="hero.name" placeholder="name"/>
      </label>
    </div>
    <button @click="saveHero()">save</button>
    <button @click="goBack()">go back</button>
  </div>
</template>
<script lang="ts">
  import { Vue } from 'vue-property-decorator';

  export default Vue.extend({
    name: 'Detail',
    data() {
      return {
        hero: {
          id: 0,
          name: ''
        },
      };
    },
    methods: {
      saveHero() {

      },
      goBack() {
        this.$router.back();
      },
    },
  });
</script>
<style scoped lang="scss">
label {
  display: inline-block;
  width: 3em;
  margin: .5em 0;
  color: #607D8B;
  font-weight: bold;
}
input {
  height: 2em;
  font-size: 1em;
  padding-left: .4em;
}
button {
  margin-top: 20px;
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #ccc;
  cursor: auto;
}
</style>