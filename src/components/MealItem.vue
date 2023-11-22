<template>
    <div class="rounded-t-xl bg-gray-50 dark:bg-gray-800 shadow hover:scale-105 transition-all">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover">
        </router-link>
        <section class="p-3">
            <h3 class="p-3 text-lg font-bold dark:text-gray-50">{{ meal.strMeal }}</h3>
            <div class="flex p-3 justify-between">
                <YoutubeBtn :href="meal.strYoutube">YouTube</YoutubeBtn>
                <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
                    class="px-3 py-2 rounded border border-transparent text-slate-50 bg-blue-400 hover:bg-slate-50 hover:border-blue-400 hover:text-gray-950 transition-colors">
                    Details
                </router-link>
            </div>
        </section>
    </div>
</template>

<script setup>
import YoutubeBtn from '../components/YoutubeBtn.vue';

const { meal } = defineProps({
    meal: {
        required: true,
        type: Object
    }
})
</script>