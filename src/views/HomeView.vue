<script setup>
 import cars from "../data/cars.json";
 import{ ref } from "vue";
 import {RouterLink} from "vue-router";

</script>

<template>
    <div class="cars">
        <RouterLink :to="`/cars/${car.id}`" v-for="car in cars" :key="car.id" href="">
            {{ car.name }}
        </RouterLink>

    </div>
</template>

<style scoped>
.cars {
    display: flex;
    transform: translateY(0);
}
.cars a {
    text-decoration: none;
    padding: 50px;
    width: fit-content;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.388);
    margin: 10px;
    background-color: #462446;
    color: white;
    font-size: 19px;
    border-radius: 8px;
    font-weight: 300;
}
</style>