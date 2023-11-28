<script setup>
 import Question from "../components/Question.vue";
 import QuizHeader from "../components/QuizHeader.vue";
 import {useRoute} from "vue-router";
 import {ref, watch, computed} from "vue";
 import quizez from "../data/data.json";
 import Result from "../components/Result.vue";

 const route = useRoute();

 const quizID = parseInt(route.params.id);

 const quiz = quizez.find(q => q.id === quizID);
 const currentQuestionIndex = ref(0);
 const numberOfCorrectAnswers = ref(0);
 const showResults = ref(false);

 const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`);

 watch(() => currentQuestionIndex.value, () => {
   // console.log('current status has changed!!');
    questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
 })
 //OR
// const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`); //re-render any particular that we utilize that

 const barPercentage = computed(() => `${currentQuestionIndex.value/quiz.questions.length * 100}%`);


    const onOptionSelected = (isCorrect) => {
        console.log("emitted event", isCorrect);
        if(isCorrect) {
            numberOfCorrectAnswers.value++;
        }
        if(quiz.questions.length - 1 === currentQuestionIndex.value) {
            showResults.value = true;
        }
        currentQuestionIndex.value++;
    }
</script>

<template>
    <div>
        <QuizHeader :questionStatus="questionStatus" 
                    :barPercentage="barPercentage">
        </QuizHeader>
       
        <div class="question-section">
            <Question  v-if="!showResults"
                       :question="quiz.questions[currentQuestionIndex]"
                       @selectOption="onOptionSelected">
            </Question> 
            <Result :quizQuestionLength="quiz.questions.length" 
                    :numberOfCorrectAnswers="numberOfCorrectAnswers"
                    v-else />
        </div>

        <!--
        <button @click="currentQuestionIndex++" class="button-current-question">
            Next Question
        </button>
        -->
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