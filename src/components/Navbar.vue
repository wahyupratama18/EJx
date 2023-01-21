<script setup>
import { ref } from 'vue'
import Sider from './Sider.vue'
import { programs } from '../data'
import Button from './Button.vue';

const sidebar = ref(false)

const determineOverflow = () => {
    document.querySelector('body').style.overflow = sidebar.value ? 'hidden' : null
}

const toggleSidebar = () => {
    sidebar.value = ! sidebar.value
    determineOverflow()
}

const closeSidebar = () => {
    sidebar.value = false
    determineOverflow()
}


const menus = [{
    to: '/',
    anchor: 'welcome',
    text: 'Home'
}, {
    to: '/',
    anchor: 'about',
    text: 'About',
}, {
    to: '/',
    anchor: 'topics',
    text: 'Topics',
}, {
    to: '/',
    anchor: 'schedules',
    text: 'Schedule',
}, {
    to: '/',
    anchor: 'galleries',
    text: 'Galleries'
}, {
    to: '/',
    anchor: 'testimonials',
    text: 'Testimonials'
}, {
    to: '/',
    anchor: 'universities',
    text: 'University'
}]
</script>

<template>
    <nav class="fixed top-0 z-30 h-16 md:h-20 w-56 flex items-center gap-6 px-4 md:px-8 py-3 bg-slate-100 rounded-br-2xl shadow-lg">
        <button type="button" @click="toggleSidebar()" @keydown.esc="closeSidebar()">
            <i class="mdi mdi-dots-grid text-xl" />
        </button>

        <router-link to="/" v-scroll-to="'#welcome'" @click="closeSidebar()" class="flex-grow text-center">
            <img src="icon.png" class="h-10" />
        </router-link>
    </nav>

    <div v-if="sidebar" @click="closeSidebar()" class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"></div>
    <Transition name="slide-fade" mode="in-out" :duration="{ enter: 500, leave: 800 }">
        <aside
        v-if="sidebar"
        class="fixed left-0 z-20 h-screen w-48 pt-20 bg-slate-50 shadow overflow-y-auto">
            <Sider :menus="menus"></Sider>

            <div class="px-6 py-2">
                <router-link v-scroll-to="'#requirements'" to="/" class="w-full">
                    <Button class="w-full">Apply Now</Button>
                </router-link>
            </div>
        </aside>
    </Transition>
    
</template>