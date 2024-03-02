<script setup>
    import { useRoute, useRouter, RouterView} from "vue-router";
    import cars from "../data/cars.json";

    const route = useRoute();  //extract information for current path that we are in
    const router = useRouter();

    const carID = parseInt(route.params.id);

    const car = cars.find(c => c.id === carID);

    const showContact = () => {
        if(carID === 4) return;

        return router.push(`/cars/${carID}/contact`);
    }
    
</script>

<template>
    <div class="car-view" v-if="car">
        <h1>Car View : {{ car.name }} </h1>
        <p>Year: {{ car.year }}</p>
        <p>Price : {{ car.price }}</p>

        <button class="show-contact" @click="showContact">Click for contact</button>
        <RouterView />  
    </div>
    <div v-else>
        <h1>Car not found!</h1>
    </div>
</template>

<style scoped>
.car-view {
    padding: 20px;
    margin: 30px auto;
    border-radius: 8px;
    background-color: #eb6b56;
    font-size: 19px;
    border: 1px solid;
    width: fit-content;
}
.show-contact {
    border-radius: 8px;
    margin-top: 15px;
    margin-bottom: 10px;
    padding: 15px;
    border: none;
    background-color: #462446;
    color: white;
}
</style>