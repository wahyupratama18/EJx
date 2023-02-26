<script setup>
import Breadcrumb from '../components/Breadcrumb.vue'
import Table from '../components/Table.vue'
import ToBe from '../components/ToBe.vue'
import { timeBlocks, compressedSchedules } from '../data'
import collect from 'collect.js';
import ScheduleTd from '../components/ScheduleTd.vue';
</script>

<template>
    <Breadcrumb title="EJx Schedule" :breads="[{
        to: '/',
        name: 'Home',
    }, {
        to: `/schedule`,
        name: 'Schedule',
    }]" />
    
    <section id="applications" class="p-8 lg:p-16 min-h-screen">
        <Table class="[&_td]:border [&_td:not(.stick-time)]:min-w-[18rem] [&_td]:max-w-lg max-h-[85vh]" v-if="timeBlocks.count() > 0">
            <thead>
                <tr>
                    <th class="stick-time" />
                    <th class="sticky top-0 bg-slate-50" v-for="(schedule, i) in compressedSchedules" :key="i">
                        <h3 class="font-semibold" v-text="schedule.date"/>
                        <div class="flex items-center gap-x-3 mt-4">
                            <p>
                                Hosted by:
                            </p>
                            <img v-for="(icon, j) in schedule.icons" :key="j" v-lazy="icon" alt="Logo" class="h-12">
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(block, i) in timeBlocks" :key="i">
                    <tr>
                        <td class="stick-time" v-text="block.time" rowspan="12" />
                        <ScheduleTd :block="collect(block.blocked).pluck('0')" />
                    </tr>

                    <tr v-for="(item, j) in new Array(11)" :key="j">
                        <ScheduleTd :block="collect(block.blocked).pluck(`${1 + j}`)" />
                    </tr>
                </template>
            </tbody>
        </Table>

        <ToBe v-else>To be announced (TBA)</ToBe>
    </section>
</template>