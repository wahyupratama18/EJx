<script setup>
defineProps({
    headerClass: String,
    mainModalClass: String,
    modalClass: String,
    footerClass: String,
})
</script>

<template>
    <div class="fixed inset-0 bg-slate-800/70 flex justify-center items-center">
        <div class="flex flex-col overflow-auto" :class="mainModalClass">
            <header class="p-4 flex items-center justify-between" :class="headerClass">
                <div>
                    <slot name="header" />
                </div>

                <button type="button" @click="$emit('close')">
                    <i class="mdi mdi-close text-slate-50" />
                </button>
            </header>

            <div class="p-4 shadow-lg max-w-xl min-w-min" :class="modalClass">
                <slot />
            </div>

            <footer class="p-4" :class="footerClass">
                <slot name="footer" />
            </footer>
        </div>
    </div>
</template>