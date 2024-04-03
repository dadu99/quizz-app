<script setup>
import cars from "../data/cars.json";
import {RouterLink} from "vue-router";

</script>

<template>
    <div class="cars-section">
        <div class="cars">
        <RouterLink :to="`/cars/${car.id}`" v-for="car in cars" :key="car.id" href="">
            {{ car.name }}
        </RouterLink>
        </div>  
    </div>
</template>

<style scoped>
.cars-section {
    min-height: 82vh;
    background-color:antiquewhite;
}
.cars {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
    align-items: stretch;
    margin: 0 auto;
    max-width: 960px;
    padding: 20px;
    gap: 10px;
    overflow-x: auto;
}
.cars a {
    text-decoration: none;
    padding: 50px;
    background-color: #ABC270;
    color: black;
    font-size: 22px;
    border-radius: 8px;
    font-weight: 300;
    text-align: center;
    border: 1px solid black;
}
.cars a:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    transition: 0.3s ease;
} 
</style>