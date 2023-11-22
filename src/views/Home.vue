<template>
    <div class="pb-5">
        <div class="p-8 pb-0 text-orange-500">
            <h1 class="text-4xl font-bold mb-4 cursor-default">Welcome</h1>
        </div>
        <Meals :meals="meals" />
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Meals from "../components/Meals.vue";
import axiosClient from "../axiosClient.js";

const meals = ref([]);

onMounted(async () => {
    for (let i = 0; i < 10; i++) {
        axiosClient
            .get(`random.php`)
            .then(({ data }) => meals.value.push(data.meals[0]));
    }
});
</script>
