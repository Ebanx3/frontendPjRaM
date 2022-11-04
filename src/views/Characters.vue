<template>
  <div class="charactersContainer">
    <NavLateral :setName="setName" />
    <MainContent :nameCharacter="nameCharacter" />
  </div>
</template>

<script>
import NavLateral from "../components/NavLateral.vue";
import MainContent from "../components/MainContent.vue";
import { ref } from "vue";

const nameCharacter = ref("");

export default {
  name: "Chacters",
  components: {
    NavLateral,
    MainContent,
  },
  data() {
    return {
      nameCharacter,
    };
  },
  methods: {
    setName(str) {
      this.nameCharacter = str;
    },
  },
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
  }
}
</style>
