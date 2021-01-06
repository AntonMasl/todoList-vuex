<template>
  <div id="app">
    <h1>Todo List</h1>
    <hr>
    <router-view/>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

#app {
  text-align: center;
}


hr {
  border: 1px solid #ff0000;
}

</style>
