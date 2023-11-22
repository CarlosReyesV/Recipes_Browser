<template>
    <header
        class="bg-white dark:bg-slate-950 shadow h-32 sm:h-20 px-2 flex flex-col sm:flex-row justify-center sm:justify-between items-stretch mb-5">
        <div class="mb-5 sm:mb-0">
            <router-link :to="{ name: 'home' }"
                class="inline-flex items-center justify-center h-full px-5 transition-colors hover:text-orange-300 text-orange-500 font-bold">
                Fabrays "Meals Collection"
            </router-link>
            <button class="text-2xl transition-colors hover:text-slate-500" @click="changeDarkMode">
                <i class="pi pi-sun dark:text-slate-50"></i>
            </button>
        </div>
        <div class="flex items-center gap-1">
            <router-link :to="{ name: 'byName' }"
                class="dark:text-white inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-slate-50 font-bold">
                Meals by Name
            </router-link>
            <router-link :to="{ name: 'byLetter' }"
                class="dark:text-white inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-slate-50 font-bold">
                Meals by Letter
            </router-link>
            <router-link :to="{ name: 'ingredients' }"
                class="dark:text-white inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-slate-50 font-bold">
                Meals by Ingredients
            </router-link>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';

if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}

// const toggleDarkMode = ref(document.documentElement.className === "dark");
const toggleDarkMode = ref(document.documentElement.className.includes("dark"));

const changeDarkMode = () => {
    toggleDarkMode.value = document.documentElement.classList.toggle("dark");
    toggleDarkMode.value
        ? (localStorage.theme = "dark")
        : (localStorage.theme = "light");
};
</script>

<style></style>