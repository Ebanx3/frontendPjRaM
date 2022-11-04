<template>
  <div class="home">
    <router-link to="/characters" class="btn"
      ><div class="buttonHome characters"></div>
      <p class="labelHome">Characters</p></router-link
    >
    <router-link to="/" class="inactive btn"
      ><div class="buttonHome locations"></div>
      <p class="labelHome">Locations</p></router-link
    >
    <router-link to="/" class="inactive btn"
      ><div class="buttonHome episodes"></div>
      <p class="labelHome">Espisodes</p></router-link
    >
  </div>
</template>

<style scoped>
.buttonHome {
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.characters {
  background-image: url(https://rickandmortyapi.com/api/character/avatar/1.jpeg);
  background-size: contain;
  border-radius: 5px;
}

.characters:hover {
  filter: brightness(110%);
  box-sizing: border-box;
}

.locations {
  background-image: url(https://overmental.com/wp-content/uploads/2015/10/rick-and-morty-dimension-35c-e1444152907911-750x416.jpg);
  border-radius: 5px;
  filter: brightness(60%);
}

.episodes {
  background-image: url(https://pyxis.nymag.com/v1/imgs/768/076/5519648c8853529ad8823835d47789ce01-08-rick-morty-space-ship.rhorizontal.w700.jpg);
  border-radius: 5px;
  filter: brightness(60%);
  background-size: cover;
  background-position: 40%;
}

.home {
  margin: 0 auto;
  height: 100vh;
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.btn {
  margin: 0 auto;
  width: auto;
  text-decoration: none;
}

.inactive {
  cursor: default;
}

.labelHome {
  font-size: 1.1rem;
  color: rgb(221, 221, 221);
  text-align: center;
  margin-top: 4px;
  font-family: "Courier New", Courier, monospace;
}

.labelHome:hover {
  border: none;
}
</style>
