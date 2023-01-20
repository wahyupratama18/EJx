<script setup>
import { ref } from 'vue'
import Sider from './Sider.vue'
import { programs } from '../data'

const sidebar = ref(false)

const toggleSidebar = () => {
    sidebar.value = ! sidebar.value
}

const closeSidebar = () => {
    sidebar.value = false
}

const menus = [{
    to: '/',
    anchor: 'welcome',
    text: 'Home'
}, {
    opened: ref(false),
    text: 'About',
    children: [{
        to: '/',
        anchor: 'about',
        text: 'KNB Scholarship'
    }, {
        to: '/',
        anchor: 'knbum',
        text: 'KNB at UM'
    }]
}, {
    opened: ref(false),
    text: 'Programs',
    children: programs.map(program => {
        return {
            to: '/',
            anchor: `${program.name}inum`,
            text: `${ program.name } Program`
        }
    })
}, {
    opened: ref(false),
    text: 'Apply',
    children: [{
        to: '/apply',
        anchor: '',
        text: 'How to Apply'
    }, {
        to: '/',
        anchor: 'programs',
        text: 'Programs'
    }]
}, {
    to: '/galleries',
    anchor: 'galleries',
    text: 'Galleries'
}, {
    to: '/',
    anchor: 'testimonials',
    text: 'Testimonials'
}, {
    to: '/',
    anchor: 'footer',
    text: 'Contact Us'
}]
</script>

<template>
    <nav class="fixed top-0 z-30 h-16 md:h-20 w-72 md:w-84 flex items-center gap-6 px-4 md:px-8 py-3 bg-slate-100 rounded-br-2xl shadow-lg">
        <button type="button" @click="toggleSidebar()" @keydown.esc="closeSidebar()">
            <i class="mdi mdi-dots-grid text-xl" />
        </button>

        <router-link to="/" v-scroll-to="'#welcome'" @click="closeSidebar()" class="flex items-center gap-x-2">
            <img src="../assets/kemdikbud.png" class="h-10" />
            <img src="../assets/knb.png" class="h-10" />
            <img src="../assets/um.png" class="h-10" />
        </router-link>
    </nav>

    <div v-if="sidebar" @click="closeSidebar()" class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"></div>
    <Transition name="slide-fade" mode="in-out" :duration="{ enter: 500, leave: 800 }">
        <aside
        v-if="sidebar"
        class="fixed left-0 z-20 h-screen w-56 pt-20 bg-slate-50 shadow overflow-y-auto">
            <Sider :menus="menus"></Sider>
        </aside>
    </Transition>
    
</template>