<template>
  <div>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li v-for="hero in getHeroes" :key="hero._id">
        <router-link :to="'/detail/' + hero._id">
          <span class="badge">{{hero._id}}</span>
          <span class="name">{{hero.name | trim}} </span>
        </router-link>
        <button
          class="delete"
          title="delete hero"
          @click="deleteHero(hero)"
        >
          x
        </button>
      </li>
    </ul>
    <div>
      <label>Hero name:
        <input type="text" v-model="newHeroName"/>
      </label>
      <!-- (click) passes input value to add() and then clears the input -->
      <button @click="addHero()">
        add
      </button>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import IHero from '../common/IHero';
  import { mapActions, mapGetters } from 'vuex';

  export default Vue.extend({
    name: 'Heroes',
    data() {
      return {
        newHeroName: '',
      };
    },
    computed: {
      ...mapGetters(['getHeroes']),
    },
    mounted() {
      this.fetchHeroes();
    },
    methods: {
      ...mapActions(['fetchHeroes', 'addHeroAction', 'deleteHeroAction']),
      deleteHero(hero: IHero): void {
        this.deleteHeroAction({id : hero._id});
      },
      addHero(): void {
        this.addHeroAction({
          name: this.newHeroName
        });
        this.newHeroName = '';
      },
    },
    filters: {
      trim(value) {
        return value.trim();
      }
    }
  });

</script>
<style scoped lang="scss">
/* HeroesComponent's private CSS styles */
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 600px;

  li {
    display: flex;
    position: relative;
    cursor: pointer;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    border-radius: 4px;
    &:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }

    a {
      color: #333;
      text-decoration: none;
      display: block;
      padding: 0;
      margin: 0;
      &:hover {
        color:#607D8B;
      }

      .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color:#405061;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        min-width: 16px;
        text-align: right;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
      .name {
        display: inline-block;
        max-width: 200px;
      }
    }

    button {
      position: absolute;
      right: 5px;
      top: 5px;
    }
  }
}
</style>
