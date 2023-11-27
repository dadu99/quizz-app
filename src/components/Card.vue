<script setup>
    import {defineProps} from "vue";

    const {quiz} = defineProps(['quiz'])

   // console.log(quiz);
</script>

<template>
 <div class="card" v-for="q in quiz" :key="q.id" >
        <img :src="q.img" alt="Quiz image">
        <div class="card-text">
          <h2>{{q.name}}</h2>
          <p>{{ q.questions.length }} questions</p>
        </div>
      </div>
</template>

<style scoped>

.card {
    width: 310px;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
    background-color: #ccc;
  }

  .card img {
    width: 100%;
    height: 190px;
    margin: 0;
  }

  .card .card-text {
    padding: 8px;
    color:black;
  }
</style>