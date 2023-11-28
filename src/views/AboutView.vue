<script setup>
  import dataQuiz from "../data/data.json";
  import {ref, watch} from "vue";
  import Card from "../components/Card.vue";

  const quizArr = ref(dataQuiz);
  const search = ref("");

  watch(search, () => {
   // console.log("hello from watch");
   quizArr.value = dataQuiz.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
  })
</script>


<template>
    <div class="container">
        <header>
            <h1>Quizes</h1>
            <input v-model.trim="search" type="text" placeholder="Search...">
        </header>
        <div class="options-container">
          <TransitionGroup name="card" appear>
             <Card :quiz="quizArr"></Card>
          </TransitionGroup>
        </div>
    </div>
</template>

<style scoped>
.card-enter-from {
  transform: translateY(-50px);
  opacity: 0;

}
.card-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.card-enter-active {
transition: all .4s ease;
}
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
   
    padding: 10px;
    border-radius: 8px;
  }

  .options-container {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 40px;
  }
</style>