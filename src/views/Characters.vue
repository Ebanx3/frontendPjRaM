<template>
  <div class="charactersContainer">
    <NavLateral :setQuery="setQuery" :setOrder="setOrder" />
    <MainContent :query="query" :order="order" />
  </div>
</template>

<script setup>
import NavLateral from "../components/NavLateral.vue";
import MainContent from "../components/MainContent.vue";
import { ref } from "vue";

const query = ref("");
const order = ref("asc");

const setQuery = (str) => {
  query.value = str;
};

const setOrder = (str) => {
  order.value = str;
};
</script>

<style>
.charactersContainer {
  width: 100%;
  height: 100vh;
  display: flex;
}
@media screen and (max-width: 1024px) {
  .charactersContainer {
    flex-direction: column;
    height: auto;
  }
}
</style>
