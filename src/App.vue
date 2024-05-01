<template>
  <div class="main">
    <nav-bar />
    <router-view />
    <footer-sec />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap");
:root {
  --primary-color: #008D55;
  --secondary-color: #1e3c50;
  --primary-dark: #333333;
  --main-bg-color: white  ;
}
#app {
  font-family: "Tajawal", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
