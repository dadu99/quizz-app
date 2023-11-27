<script setup>
    import { useRoute, RouterView} from "vue-router";
    import cars from "../data/cars.json";

    const route = useRoute();
    const car = cars.find(c => c.id === parseInt(route.params.id));
    
</script>

<template>
    <div class="car-view">
        <h1>Car View : {{ car.name }} </h1>
        <p>Year: {{ car.year }}</p>
        <p>Price : {{ car.price }}</p>

        <RouterView />  
    </div>
</template>

<style scoped>
.car-view {
    padding: 20px;
    margin-top: 30px;
    border-radius: 8px;
    background-color: #eb6b56;
    font-size: 19px;
    border: solid;
    width: fit-content;
}
</style>