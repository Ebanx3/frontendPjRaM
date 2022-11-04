<template>
  <div id="navLateral">
    <input
      type="text"
      name=""
      id="inputName"
      class="inputFilter"
      placeholder="search by name"
      :value="name"
      @input="(e) => (name = e.target.value)"
    />

    <input
      type="text"
      name=""
      id="inputSpecies"
      class="inputFilter"
      placeholder="search by species"
      :value="species"
      @input="(e) => (species = e.target.value)"
    />

    <input
      type="text"
      name=""
      id="inputType"
      class="inputFilter"
      placeholder="search by Type"
      :value="type"
      @input="(e) => (type = e.target.value)"
    />

    <label class="label" for="">FILTER BY STATUS</label>
    <select name="" class="selectFilter" v-model="status">
      <option value="">All</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>

    <label class="label" for="">FILTER BY GENDER</label>
    <select name="" class="selectFilter" v-model="gender">
      <option value="">All</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="genderless">Genderless</option>
      <option value="unknown">Unknown</option>
    </select>

    <!-- <label class="label" for="">ORDER BY</label>
    <select name="" class="selectFilter" v-model="orderStr">
      <option value="asc">ID - ascendent</option>
      <option value="des">ID - descendent</option>
    </select> -->
  </div>
  <router-link class="backBtn" to="/">BACK</router-link>
</template>

<script setup>
import { onUpdated, ref } from "vue";

const name = ref("");
const status = ref("");
const species = ref("");
const type = ref("");
const gender = ref("");

const orderStr = ref("asc");

const query = ref("");

const props = defineProps({
  setQuery: { type: Function },
  setOrder: { type: Function },
});

onUpdated(() => {
  let nameQuery = "";
  let statusQuery = "";
  let speciesQuery = "";
  let typeQuery = "";
  let genderQuery = "";

  name.value != "" ? (nameQuery = `&name=${name.value}`) : (nameQuery = "");
  status.value != ""
    ? (statusQuery = `&status=${status.value}`)
    : (statusQuery = "");
  species.value != ""
    ? (speciesQuery = `&species=${species.value}`)
    : (speciesQuery = "");
  type.value != "" ? (typeQuery = `&type=${type.value}`) : (typeQuery = "");
  gender.value != ""
    ? (genderQuery = `&gender=${gender.value}`)
    : (genderQuery = "");

  query.value =
    nameQuery + statusQuery + speciesQuery + typeQuery + genderQuery;

  props.setOrder(orderStr.value);
  props.setQuery(query.value);
});
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
  padding: 4px;
  border: none;
  border-radius: 5px;
  margin-bottom: 15px;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
}

label {
  color: rgb(247, 247, 247);
  width: 60%;
  text-align: center;
  margin: 10px auto;
  font-weight: bolder;
  font-size: 1.1rem;
  font-family: "Courier New", Courier, monospace;
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

.inputFilter {
  width: 60%;
  font-size: 1.1rem;
  padding: 4px;
  text-align: center;
  border: none;
  border-radius: 5px;
  overflow: hidden;
  margin: 8px 0;
  font-family: "Courier New", Courier, monospace;
}

#submitButton {
  width: 20%;
}

.backBtn:hover {
  color: black;
  background-color: rgba(255, 255, 255, 0.788);
}

@media screen and (max-width: 1024px) {
  #navLateral {
    width: 100%;
    height: 40vh;
  }

  select,
  .inputFilter {
    width: 40%;
    padding: 2px;
    font-size: 0.9rem;
  }

  label {
    margin: 4px auto;
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
