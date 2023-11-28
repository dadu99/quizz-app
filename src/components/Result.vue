<script setup>
import { defineProps } from 'vue';
import {RouterLink} from "vue-router"
const {quizQuestionLength, numberOfCorrectAnswers} = defineProps(['quizQuestionLength', 'numberOfCorrectAnswers'])
</script>
<template>
    <div class="results">
        <p>Your results..</p>
        <h1>
            {{ numberOfCorrectAnswers }}/{{ quizQuestionLength }}
        </h1>
        <RouterLink to="/cards" class="go-back-button">Go Back</RouterLink>
    </div>
</template>

<style scoped>
    .results {
        text-align: center;
        padding: 100px 0;
    }
    p {
        font-size: 25px;
    }
    h1 {
        font-size: 25px;
     }
     .go-back-button {
        padding: 10px;
        color: black;
        background-color: bisque;
        border-radius: 8px;
        float: left;
        text-decoration: none;
     }
     .go-back-button a {
        text-decoration: none;
     }
</style>