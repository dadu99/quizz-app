<script setup>
 import Question from "../components/Question.vue";
 import QuizHeader from "../components/QuizHeader.vue";
 import {useRoute} from "vue-router";
 import {ref, watch} from "vue";
 import quizez from "../data/data.json";

 const route = useRoute();

 const quizID = parseInt(route.params.id);

 const quiz = quizez.find(q => q.id === quizID);
 const currentQuestionIndex = ref(0);

 const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`);

 watch(() => currentQuestionIndex.value, () => {
   // console.log('current status has changed!!');
    questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
 })

</script>

<template>
    <div>
        <QuizHeader :questionStatus="questionStatus"></QuizHeader>
       
        <div class="question-section">
            <Question :question="quiz.questions[currentQuestionIndex]"></Question> 
        </div>
        <button @click="currentQuestionIndex++" class="button-current-question">
            Next Question
        </button>
    </div>

    

</template>

<style scoped>
.question-section {
    width: 80%;
    margin: 0 30px;
}
.button-current-question {
    margin: 0 30px;
    border: none;
    padding: 10px;
    color: black;
    background-color: bisque;
    border-radius: 8px;
}
.button-current-question:hover {
    cursor: pointer;
}

</style>