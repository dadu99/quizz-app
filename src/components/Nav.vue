<script setup>
import {RouterLink} from "vue-router";

</script>

<template>
    <header>
        <div class="header-container">
                <RouterLink active-class="active" to="/" style="text-decoration: none;">Home</RouterLink>
                <RouterLink active-class="active" to="/cards" style="text-decoration: none;">Cards</RouterLink>
        </div>

    </header>
</template>

<style scoped>
header {
    margin-top: 0px!important;
    padding: 30px;
    background-color: #FEC868;
}
header a {
    color: black;
    font-weight: 300;
}
.header-container {
    display: flex;
    gap: 9px;
    font-size: 22px;
    font-weight: 400;
    color: #333;
}

.active {
    font-weight: 900;
    color:#473C33;
}
</style>