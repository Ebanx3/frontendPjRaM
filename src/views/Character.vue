<template>
  <div class="character">
    <div class="characterInfo">
      <h1 class="characterName">{{ char.name }}</h1>
      <h3 class="characterDetails">Gender: {{ char.gender }}</h3>
      <h3 class="characterDetails">Specie: {{ char.species }}</h3>
      <h3 class="characterDetails">Status: {{ char.status }}</h3>
      <h3 class="characterDetails">Origin: {{ char?.origin?.name }}</h3>
      <h3 class="characterDetails">Location: {{ char?.location?.name }}</h3>
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

    <div class="messages">
      <form class="addMessageForm">
        <input
          type="text"
          name=""
          id="authorMsg"
          placeholder="author"
          v-model="author"
        />
        <textarea
          name=""
          id="contentMsg"
          rows="10"
          placeholder="new comment"
          v-model="message"
        ></textarea>
        <input
          type="submit"
          value="Comment"
          id="submitMsg"
          @click="sendMessage"
        />
      </form>
      <div class="messagesContainer">
        <div class="message" v-for="msg in comments">
          <p class="author">{{ msg.author }} :</p>
          <p class="comment">{{ msg.comment }}</p>
        </div>
      </div>
    </div>
  </div>
  <router-link to="/Characters" class="backButton">BACK</router-link>
</template>

<script setup>
import { onMounted, onUpdated, ref } from "vue";
import { useRoute } from "vue-router";

const char = ref({});
const comments = ref([]);
const route = useRoute();

const author = ref("");
const message = ref("");

const fetchUrl = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      char.value = res;
    });
};

const urlMessages = `http://localhost:8080/character/${route.params.id}/comments`;

const getMessages = () => {
  fetch(urlMessages)
    .then((res) => res.json())
    .then((res) => (comments.value = res.data));
};

const sendMessage = () => {
  console.log(char.value);
  fetch(urlMessages, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      charId: char.value.id,
      charName: char.value.name,
      author: author.value,
      comment: message.value,
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};

onMounted(() => {
  const id = route.params.id;
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  fetchUrl(url);
  getMessages();
});

onUpdated(() => {
  getMessages();
});
</script>

<style>
.character {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-areas:
    "d i e"
    "m m m";
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 3fr 2fr;
  color: rgb(233, 233, 233);
  padding: 20px;
  font-family: "Courier New", Courier, monospace;
  gap: 30px;
}

.characterImg {
  height: 42vh;
  width: auto;
  border-radius: 5px;
  margin: 0 auto;
}

.characterInfo {
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

.messages {
  grid-area: m;
  display: flex;
}

.addMessageForm {
  width: 25%;
  padding: 10px;
}

#authorMsg {
  border: none;
  padding: 5px;
  border-radius: 5px;
  font-size: 1.1rem;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  margin: 5px auto;
  width: 90%;
}

#contentMsg {
  font-family: "Courier New", Courier, monospace;
  border-radius: 5px;
  padding: 3px;
  text-align: center;
  resize: none;
  width: 90%;
}

#submitMsg {
  width: 90%;
  padding: 4px;
  border-radius: 5px;
  border: none;
  overflow: hidden;
  background-color: rgb(91, 26, 153);
  color: white;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
}

#submitMsg:hover {
  background-color: rgb(154, 70, 233);
  cursor: pointer;
}

.messagesContainer {
  padding: 5px;
  overflow: hidden;
  height: 40vh;
  overflow-y: auto;
}

.message {
  border: 1px solid gray;
  margin: 2px;
  padding: 3px;
}

.author {
  font-size: 1.1rem;
}

.comment {
  text-align: center;
}

@media screen and (max-width: 1024px) {
  .linkEpisode {
    font-size: 1rem;
    padding: 3px;
    width: 24px;
  }
}

@media screen and (max-width: 768px) {
  .character {
    height: auto;
    grid-template-areas:
      "d i"
      "e e"
      "m m";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 200px auto 250px;
    overflow-y: scroll;
    padding: 5px;
    gap: 10px;
  }

  .characterImg {
    width: 200px;
    height: auto;
  }

  .characterInfo {
    height: 200px;
  }

  .characterEpisodes {
    grid-column: 1 / span 3;
    margin: 10px auto;
  }

  .linkEpisode {
    font-size: 1rem;
    padding: 3px;
    width: 24px;
  }

  .addMessageForm {
    width: 34%;
    padding: 4px;
    margin: 8px;
  }
}

@media screen and (max-width: 425px) {
  .character {
    grid-template-areas:
      "i"
      "d"
      "e"
      "m";
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
  }

  .characterImg,
  .characterInfo {
    height: auto;
  }

  .characterImg {
    margin: 5px auto;
  }

  .characterEpisodes {
    grid-column: 1/2;
  }

  .messages {
    flex-direction: column;
  }

  .addMessageForm {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
