<template>
    <div>
        <Navbar />
        <main>
            <div class="max-w-[1200px] mx-auto">
                <router-view />
            </div>
        </main>
        <footer>

        </footer>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
</script>