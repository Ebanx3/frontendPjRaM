<template>
  <div id="mainContent">
    <div id="pagesManager">
      <span @click="decreasePage()" id="prevPage" v-if="page > 1">{{
        page - 1
      }}</span>
      <span id="actualPage">{{ page }}</span>
      <span @click="increasePage()" id="nextPage" v-if="page < maxPage">{{
        page + 1
      }}</span>
    </div>
    <h2 v-if="chars?.length == 0" class="noCharsFounded">
      Characters not founded
    </h2>
    <div v-for="char in chars" class="char">
      <router-link :to="{ name: 'Character', params: { id: char.id } }">
        <img :src="char.image" :alt="char.name" />
        <p class="charName">{{ char.name }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUpdated, ref } from "vue";

const page = ref(1);
const maxPage = ref(42);

const urlBase = "https://rickandmortyapi.com/api/character/";
const url = ref(`${urlBase}?page=${page.value}`);

const chars = ref([]);

const fetchUrl = () => {
  fetch(url.value)
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        chars.value = [];
      } else {
        maxPage.value = res.info.pages;
        chars.value = res.results;
      }
    });
};

const increasePage = () => {
  page.value++;
};

const decreasePage = () => {
  page.value--;
};

onMounted(() => {
  fetchUrl();
});

onUpdated(() => {
  if (props.query == "") {
    url.value = `${urlBase}?page=${page.value}`;
  } else {
    url.value = `${urlBase}?page=${page.value}` + props.query;
  }
  fetchUrl();
});

const props = defineProps({
  query: String,
  order: String,
});
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

.noCharsFounded {
  color: white;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
}

#pagesManager {
  position: fixed;
  z-index: 1;
  width: 300px;
  background-color: rgb(24, 24, 24);
  top: 5px;
  border-radius: 3px;
  display: grid;
  grid-template-areas: "p a n";
  padding: 5px;
  color: white;
}

#prevPage {
  grid-area: p;
  text-align: end;
  cursor: pointer;
}

#actualPage {
  grid-area: a;
  text-align: center;
}

#nextPage {
  grid-area: n;
  text-align: start;
  cursor: pointer;
}

@media screen and (max-width: 1024px) {
  #mainContent {
    width: 100%;
  }

  #pagesManager {
    right: 10px;
    width: 180px;
  }
}
</style>
