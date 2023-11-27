<script setup>
import { useRoute} from "vue-router";
import cars from "../data/cars.json";

const route = useRoute();
const car = cars.find(c => c.id === parseInt(route.params.id));

</script>

<template>
     <div v-if="car">
        <h1>Contact info</h1>
        <p>Name: {{ car.contact.dealer}}</p>  
        <p>Call number: {{ car.contact.number }}</p>
     </div>
     <div v-else>
        <h1>Contact not found!</h1>
     </div>
</template>