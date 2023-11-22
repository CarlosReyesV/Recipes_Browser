<template>
    <a :href="href" 
        target="_blank"
        class="w-24 px-3 py-2 text-center rounded border-2 border-transparent text-slate-50 border-slate-50 bg-orange-600 hover:bg-slate-50 hover:border-orange-600 hover:text-gray-950 transition-colors">
        <slot>YouTube</slot>
    </a>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    href: String
})
</script>