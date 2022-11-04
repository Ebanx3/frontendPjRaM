<template>
  <div id="pagesManager">
    <span @click="decreasePage()" id="prevPage" v-if="page > 1">{{
      page - 1
    }}</span>
    <span id="actualPage">{{ page }}</span>
    <span @click="increasePage()" id="nextPage" v-if="page < 41">{{
      page + 1
    }}</span>
  </div>
</template>

<script>
// defineProps({
//   page: Number,
// });

export default {
  name: "PagersManager",
  props: {
    page: Number,
    increasePage: { type: Function },
    decreasePage: { type: Function },
  },
};
</script>

<style scoped>
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
</style>
