<script setup>
  import dataQuiz from "./data/data.json";
  import {ref, watch} from "vue";

  const quizArr = ref(dataQuiz);
  const search = ref("");

  watch(search, () => {
   // console.log("hello from watch");
   quizArr.value = dataQuiz.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()));
  })

</script>

<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search...">
    </header>
    <div class="options-container" v-for="quiz in quizArr" :key="quiz.id">
      <div class="card">
        <img :src="quiz.img" alt="Quiz image">
        <div class="card-text">
          <h2>{{quiz.name}}</h2>
          <p>{{ quiz.questions.length }} questions</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    max-width: 1000px;
    margin: 0 auto
  }

  header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }

  header h1 {
    font-weight: bold;
    margin-right: 30px;
  }

  header input {
    border: none;
    padding: 10px;
    border-radius: 8px;
  }

  .options-container {
    display: inline-block;
    margin-top: 40px;
  }
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