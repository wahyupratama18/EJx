<script setup>
import collect from 'collect.js';

defineProps({
    block: Object,
})
</script>

<template>
    <template v-for="(showed, j) in block" :key="j">
        <td v-if="showed == undefined" />
        <td class="bg-red-700 shadow text-white p-3" v-else-if="showed !== true" :rowspan="showed.span">
            <h5 class="font-medium" v-text="showed.date" />
            <h3 class="text-lg font-semibold" v-html="showed.agenda" />
        </td>
    </template>
</template>