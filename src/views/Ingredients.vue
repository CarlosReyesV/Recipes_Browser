<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
    </div>
    <div class="px-8">
        <input type="text" v-model="keyword"
            class="dark:text-white rounded border-2 bg-slate-50 dark:bg-slate-700 border-gray-200 dark:border-slate-900 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
            placeholder="Search for ingredient...">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a href="#" @click.prevent="openIngredient(ingredient)" v-for="ingredient of computedIngredients"
                :key="ingredient.idIngredient" class="block dark:text-white rounded bg-slate-50 dark:bg-slate-700 p-3 mb-3 shadow">
                <h3 class="text-2x1 font-bold mb-2">{{ ingredient.strIngredient }}</h3>
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from "vue-router";
import axiosClient from '../axiosClient';
import store from "../store";

const router = useRouter();
const keyword = ref('');
const ingredients = ref([]);

const computedIngredients = computed(() => {
    if (!computedIngredients) return ingredients;
    return ingredients.value.filter((i) =>
        i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
    );
});

function openIngredient(ingredient) {
    store.commit('setIngredient', ingredient)
    router.push({
        name: "byIngredient",
        params: { ingredient: ingredient.strIngredient },
    });
}

onMounted(() => {
    axiosClient.get("list.php?i=list").then(({ data }) => {
        ingredients.value = data.meals;
    });
});
</script>