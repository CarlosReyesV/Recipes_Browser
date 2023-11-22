import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue"
import Home from '../views/Home.vue';
import MealList from '../views/MealList.vue';
import SearchbyLetter from '../views/SearchbyLetter.vue';
import SearchbyName from '../views/SearchbyName.vue';
import SearchbyIngredient from '../views/SearchbyIngredient.vue';
import MealDetails from '../views/MealDetails.vue';
import Ingredients from '../views/Ingredients.vue';
import GuestLayout from '../components/GuestLayout.vue';

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: "/",
                name: "home",
                component: Home,
            },
            {
                path: "/letter/:letter",
                name: "byLetter",
                component: MealList,
            },
            {
                path: "/by-name/:name?",
                name: "byName",
                component: SearchbyName,
            },
            {
                path: "/by-letter/:letter?",
                name: "byLetter",
                component: SearchbyLetter,
            },
            {
                path: "/ingredients",
                name: "ingredients",
                component: Ingredients,
            },
            {
                path: "/by-ingredient/:ingredient",
                name: "byIngredient",
                component: SearchbyIngredient,
            },
            {
                path: "/meal/:id",
                name: "mealDetails",
                component: MealDetails,
            },
        ]
    },
    {
        path: '/guest',
        component: GuestLayout,
        children: [
            
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
