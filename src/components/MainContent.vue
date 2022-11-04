<template>
  <div id="mainContent">
    <PagesManager
      :page="page"
      :increasePage="increasePage"
      :decreasePage="decreasePage"
    />
    <div v-for="char in chars" class="char">
      <router-link :to="{ name: 'Character', params: { id: char.id } }">
        <img :src="char.image" :alt="char.name" />
        <p class="charName">{{ char.name }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import PagesManager from "./PagesManager.vue";
import { ref } from "vue";
//para sort y filter revisar url
const page = ref(1);
const url = ref(`https://rickandmortyapi.com/api/character?page=${page.value}`);

const chars = ref([]);

export default {
  name: "MainContent",
  props: {
    nameCharacter: String,
  },
  data() {
    return {
      chars,
      page,
    };
  },
  created() {
    fetch(url.value)
      .then((res) => res.json())
      .then((res) => {
        this.chars = res.results;
      });
  },
  beforeUpdate() {
    this.fetchUrl();
  },
  methods: {
    increasePage() {
      page.value++;
      fetchUrl();
    },
    decreasePage() {
      page.value--;
      fetchUrl();
    },
    fetchUrl() {
      if (this.nameCharacter == "") {
        url.value = `https://rickandmortyapi.com/api/character?page=${page.value}`;
      } else {
        url.value = `https://rickandmortyapi.com/api/character/?name=${this.nameCharacter}`;
      }
      fetch(url.value)
        .then((res) => res.json())
        .then((res) => {
          chars.value = res.results;
        });
    },
  },
  components: { PagesManager },
};
</script>

<style>
#mainContent {
  width: 75%;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: space-around;
  align-items: center;
  position: relative;
}

.char {
  width: 200px;
  height: 200px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  filter: brightness(90%);
}

.char:hover {
  filter: brightness(110%);
}

.charName {
  position: absolute;
  bottom: 0;
  text-align: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  background-color: rgba(0, 0, 0, 0.788);
}

@media screen and (max-width: 1024px) {
  #mainContent {
    width: 100%;
  }
}
</style>
