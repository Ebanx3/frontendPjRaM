<template>
  <div id="navLateral">
    <form class="nameForm">
      <input
        type="text"
        name=""
        id="inputName"
        placeholder="search by name"
        :value="nameCh"
        @input="(e) => (nameCh = e.target.value)"
      />
      <button id="submitButton" type="submit" @click="setNameCh">
        <span class="material-symbols-outlined"> search </span>
      </button>
    </form>
    <label class="label" for="">FILTER BY</label>
    <select name="" class="selectFilter">
      <option value="">All</option>
      <option value="status">Status</option>
      <option value="gender">Gender</option>
    </select>
    <label class="label" for="">Filter</label>
    <select name="" class="selectFilter">
      <option value="status">Status</option>
    </select>
    <label class="label" for="">ORDER BY</label>
    <select name="" class="selectFilter">
      <option value="status">ID -ascendent</option>
      <option value="species">ID - descendent</option>
    </select>
  </div>
  <router-link class="backBtn" to="/">BACK</router-link>
</template>

<script>
import { ref } from "vue";

const nameCh = ref("");

export default {
  name: "NavLateral",
  data() {
    return {
      nameCh,
    };
  },
  props: {
    setName: { type: Function },
  },
  methods: {
    setNameCh(e) {
      e.preventDefault();
      this.setName(nameCh);
    },
  },
};
</script>

<style scoped>
#navLateral {
  width: 25%;
  height: 100vh;
  background-color: rgb(37, 13, 65);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
}

select {
  width: 60%;
  padding: 8px;
  border: none;
  border-radius: 5px;
  margin-bottom: 15px;
  text-align: center;
}

label {
  color: rgb(247, 247, 247);
  width: 60%;
  text-align: center;
  margin: 10px auto;
  font-weight: bolder;
  font-size: 1.4rem;
}

option,
select {
  font-size: 1.1rem;
  font-weight: bold;
}

.backBtn {
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

#inputName {
  width: 80%;
  font-size: 1.1rem;
  padding: 8px;
  text-align: center;
}

#submitButton {
  width: 20%;
}

.backBtn:hover {
  color: black;
  background-color: rgba(255, 255, 255, 0.788);
}

.nameForm {
  width: 60%;
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  margin: 8px 0;
}

@media screen and (max-width: 1024px) {
  #navLateral {
    width: 100%;
    height: 60vh;
  }
}

@media screen and (max-width: 768px) {
  label {
    font-size: 1rem;
  }

  #navLateral {
    height: 40vh;
  }

  option,
  select {
    font-size: 0.9rem;
  }
}
</style>
