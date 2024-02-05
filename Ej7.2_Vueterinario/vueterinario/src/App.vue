<template>
  <nav>
    <router-link to="/">Animal List</router-link> |
    <!-- <router-link to="/animalList">Animal List</router-link> | -->
    <router-link to="/animalForm">Add New Animal</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}

.center {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}

caption {
    font-weight: bold;
}
</style>
