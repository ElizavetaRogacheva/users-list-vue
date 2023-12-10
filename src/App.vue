<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
:root {
  --main-bg-color: #f3fafd;
  --main-text-color: #a7a7a7;
  --white: #fff;
  --accent-color: #ea7162;
  --error-color: #7d0303;
  --text-shadow: #aa493e;
  --border-color: #ddd;
}

body {
  background-color: var(--main-bg-color);
  font-family: 'Poppins', sans-serif;
  font-family: 'Rubik', sans-serif;
  color: var(--main-text-color);
}

section {
  background-color: var(--white);
  padding: 20px;
  box-sizing: border-box;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
}

.mainTitle {
  color: var(--accent-color);
  font-weight: bold;
  font-size: 40px;
  margin: 60px 0;
  text-align: center;
}

.sectionTitle {
  color: var(--accent-color);
  font-weight: bold;
  font-size: 30px;
  margin: 0 0 30px;
}

.blockTitle {
  color: var(--accent-color);
  font-weight: bold;
  margin: 0 0 20px;
}

.button {
  display: inline-block;
  background-color: var(--accent-color);
  padding: 15px;
  text-decoration: none;
  color: var(--white);
  border-radius: 5px;
  margin-bottom: 20px;
}

@media (max-width: 1200px) {
  .container {
    padding: 0 30px;
    box-sizing: border-box;
  }
}
</style>
