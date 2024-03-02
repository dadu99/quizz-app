<script setup>
 
  import {RouterView} from "vue-router"
  import Nav from "./components/Nav.vue"
 
</script>

<template class="quiz-app">
    <Nav></Nav>
    <Transition name="route">
        <RouterView/>
    </Transition>
</template>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.route-enter-to {
  opacity: 1;
  transform: translateY(100px);
}
.route-enter-active {
  transition: all .4s ease;
}

</style>