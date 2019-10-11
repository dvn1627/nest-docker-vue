<template>
  <div>
    <div v-if="hero._id">
      <h2>{{getHero.name | uppercase}} Details</h2>
      <div>
        <span>id: </span>
        {{hero._id}}
      </div>
      <div>
        <label>name:
          <input v-model="getHero.name" placeholder="name"/>
        </label>
      </div>
      <button @click="saveHero()">save</button>
      <button @click="goBack()">go back</button>
    </div>
    <div v-else>
      Hero not selected
    </div>
  </div>
</template>
<script lang="ts">
  import { Vue } from 'vue-property-decorator';
  import { mapGetters, mapActions } from 'vuex';

  export default Vue.extend({
    name: 'Detail',
    data() {
      return {
        hero: {
          _id: 0,
          name: ''
        },
      };
    },
    computed: {
      ...mapGetters(['getHero']),
    },
    watch: {
      'getHero': 'handleHeroFetched',
    },
    mounted() {
      const heroId = this.$route.params.id;
      if (heroId) {
        this.fetchHeroAction(heroId);
      }
    },
    methods: {
      ...mapActions(['fetchHeroAction', 'saveHeroAction']),
      saveHero() {
        this.saveHeroAction({
          id: this.hero._id,
          name: this.hero.name,
        });
      },
      goBack() {
        this.$router.back();
      },
      handleHeroFetched(value) {
        this.hero = this.getHero;
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