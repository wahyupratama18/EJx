<script setup>
import Breadcrumb from '../components/Breadcrumb.vue'
import NotFound from './NotFound.vue'
import Table from '../components/Table.vue'
import { galleries } from '../data'
</script>

<template>
    <Breadcrumb title="Gallery" :breads="[{
        to: '/',
        name: 'Home',
    }, {
        to: `/galleries`,
        name: 'Gallery',
    }]" />

    <section id="galleries" class="p-8 lg:p-16 min-h-screen">
        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <a :href="gallery" v-for="(gallery, i) in galleries" :key="i" target="_blank">
                <img :src="gallery" alt="Documentation" class="block object-cover object-center w-full h-full rounded-lg">
            </a>
        </div>
    </section>
</template>