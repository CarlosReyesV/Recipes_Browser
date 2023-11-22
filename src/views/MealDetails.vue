<template>
    <div class="mx-auto p-8 flex flex-col shadow-lg bg-slate-50 dark:bg-slate-800">
        <div class="lg:grid lg:grid-cols-2 lg:gap-2">
            <section class="mt-5">
                <h1 class="text-center sm:text-left text-4xl font-bold mb-5 text-orange-500 self-center">{{ meal.strMeal }}</h1>
                <hr class="dark:bg-slate-700">
                <div class="grid grid-cols-1 sm:grid-cols-2 text-lg dark:text-slate-200 py-2 my-2 text-center sm:text-left">
                    <div>
                        <strong class="font-bold">Category: </strong>{{ meal.strCategory }}
                    </div>
                    <div>
                        <strong class="font-bold">Area: </strong>{{ meal.strArea }}
                    </div>
                </div>
                <hr>
                <div class="my-3 dark:text-slate-200">
                    <span class="font-bold">Instructions:</span> {{ meal.strInstructions }}
                    <div class="flex flex-col justify-center sm:flex-row mt-3">
                        <YoutubeBtn :href="meal.strYoutube"> YouTube</YoutubeBtn>
                        <a :href="meal.strSource" target="_blank"
                            class="w-44	ml-0 sm:ml-3 sm:mt-0 mt-5 px-3 py-2 rounded border-2 border-transparent text-slate-50 bg-blue-400 hover:bg-slate-50 hover:border-blue-400 hover:text-gray-950 transition-colors">
                            View original source
                        </a>
                    </div>
                </div>
            </section>
            <section class="lg:border-l-slate-100 lg:border-l-4 dark:border-l-slate-700 p-1">
                <div class="flex justify-center ">
                    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%] sm:max-w-[75%] my-5 p-4 shadow-2xl bg-slate-50 dark:bg-slate-600 self-center">
                </div>
                <hr>
                <div class="grid grid-cols-1 sm:grid-cols-2 text-center dark:text-slate-200 mt-2">
                    <div class="mb-2">
                        <h2 class="text-2xl font-semibold mb-2">Ingredients: </h2>
                        <ul >
                            <template v-for="(el, ind) of new Array(20)">
                                <li v-if="meal[`strIngredient${ind + 1}`]">
                                    {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
                                </li>
                            </template>
                        </ul>
                    </div>
                    <div>
                        <h2 class="text-2xl font-semibold mb-2">Measures: </h2>
                        <ul>
                            <template v-for="(el, ind) of new Array(20)">
                                <li v-if="meal[`strMeasure${ind + 1}`]">
                                    {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
                                </li>
                            </template>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YoutubeBtn from '../components/YoutubeBtn.vue';

const route = useRoute();
const meal = ref({});

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => (
            meal.value = data.meals[0] || {}
        ))
})
</script>