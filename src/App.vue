<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>
