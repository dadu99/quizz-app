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
}
.cars a {
    text-decoration: none;
    color: #333;
    width: 100%;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.388);
    margin: 10px;
}
</style>