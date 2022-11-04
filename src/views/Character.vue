<template>
  <div class="character">
    <div class="characterInfo">
      <h1 class="characterName">{{ char.name }}</h1>
      <h3 class="characterDetails">Gender: {{ char.gender }}</h3>
      <h3 class="characterDetails">Specie: {{ char.species }}</h3>
      <h3 class="characterDetails">Status: {{ char.status }}</h3>
      <h3 class="characterDetails">Origin: {{ char.origin.name }}</h3>
      <h3 class="characterDetails">Location: {{ char.location.name }}</h3>
    </div>
    <img class="characterImg" :src="char.image" :alt="char.name" />
    <div class="characterEpisodes">
      <h2>Episodes:</h2>
      <ul>
        <li v-for="episode in char.episode">
          <a class="linkEpisode" :href="episode" target="_blank">
            {{ episode.substring(40) }}
          </a>
        </li>
      </ul>
    </div>
  </div>
  <router-link to="/Characters" class="backButton">BACK</router-link>
</template>

<script>
import { ref } from "vue";

const char = ref({});

export default {
  name: "Character",
  data() {
    return {
      char,
    };
  },
  created() {
    const id = this.$router.currentRoute.value.params.id;
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.char = res;
      });
  },
};
</script>

<style>
.character {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  color: rgb(233, 233, 233);
  align-items: center;
  font-family: "Courier New", Courier, monospace;
  gap: 15px;
}

.characterImg {
  width: 30%;
  height: auto;
  border-radius: 5px;
}

.characterInfo {
  width: 30%;
  text-align: end;
}

.characterName {
  margin: 20px 0;
  font-size: 2.4rem;
}

.characterDetails {
  margin: 6px 0;
}

.characterEpisodes {
  width: 30%;
  text-align: start;
}

.characterEpisodes ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
}

.characterEpisodes ul li {
  width: auto;
  margin: 8px;
}

.linkEpisode {
  color: white;
  text-decoration: none;
  display: block;
  font-size: 1.4rem;
  font-weight: bold;
  background-color: blueviolet;
  padding: 5px 0;
  width: 35px;
  text-align: center;
  border-radius: 3px;
}

.linkEpisode:hover {
  color: rgb(238, 238, 238);
  background-color: rgb(83, 20, 141);
}

.backButton {
  position: absolute;
  width: 80px;
  top: 10px;
  left: 10px;
  color: white;
  font-size: 1.4rem;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.158);
  padding: 10px;
  border-radius: 7px;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
}

.backButton:hover {
  color: black;
  background-color: rgba(255, 255, 255, 0.788);
}
</style>
