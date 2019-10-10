<template>
  <div>
  <h2>Messages</h2>
  <button
    class="clear"
    @click="clearMessages()"
  >
    clear
  </button>
  <div v-for="message in messages" :key="message">
    {{message}}
  </div>

</div>
</template>
<script type="ts">
 import { Vue } from 'vue-property-decorator';

  export default Vue.extend({
    name: 'Messages',
    data() {
      return {
        messages: [],
      };
    },
    methods: {
      clearMessages() {

      },
    },
  });
</script>
<style scoped lang="scss">
/* MessagesComponent's private CSS styles */
h2 {
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
body {
  margin: 2em;
}
body, input[text], button {
  color: crimson;
  font-family: Cambria, Georgia;
}

button.clear {
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
  color: #aaa;
  cursor: auto;
}
button.clear {
  color: #333;
  margin-bottom: 12px;
}
</style>
