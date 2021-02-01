<template>
  <div id="app">
    Hello Vue
    <!-- webpack会自动把<HelloWorld/>转成<hell-world/> -->
    <!-- <HelloWorld></HelloWorld>  -->

    <TodoList/>
  </div>
</template>

<script>
import TodoList from './components/TodoList/index.vue'
export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
