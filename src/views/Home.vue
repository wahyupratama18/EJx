<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { ref } from 'vue'
import Button from '../components/Button.vue'
import ToBe from '../components/ToBe.vue';
import Modal from '../components/Modal.vue';
import { universities, programs, topics, schedules, dates, testimonials, galleries } from '../data'

const opened = ref(0)

const changeTab = (i) => {
    opened.value = i
}

const youtubeModal = ref(false)

const changeYoutubeModal = (state) => {
    youtubeModal.value = state
    document.querySelector('body').style.overflow = state ? 'hidden' : null
}
</script>

<template>
    <div>
        <section id="welcome" class="min-h-screen bg-cover relative text-white bg-[url('/src/assets/background.jpg')] bg-[center_top] bg-no-repeat bg-fixed flex items-center">
            <div class="w-full text-center">
                <h1 class="text-5xl font-bold uppercase" data-aos="fade-down">East Java Exploration</h1>
                <h2 class="text-4xl font-semibold my-4 text-red-500" data-aos="fade-right">(EJx) 2021</h2>
                
                <div class="flex justify-center my-6">
                    <div class="bg-slate-50 py-3 px-6 rounded-full flex items-center justify-center gap-3">
                        <a :href="university.url" v-for="(university, i) in universities" :key="i">
                            <img :src="university.logo" :alt="university.name" class="h-10">
                        </a>
                    </div>
                </div>

                <div class="flex justify-center my-6">
                    <Button class="rounded-full flex items-center !p-2 aspect-square w-12 h-12" @click="changeYoutubeModal(true)">
                        <i class="mdi mdi-play mdi-36px"></i>
                    </Button>
                </div>
                
                <div class="flex justify-center">
                    <router-link v-scroll-to="'#requirements'" to="/" data-aos="fade-up">
                        <Button class="w-full">Apply Now</Button>
                    </router-link>
                </div>

            </div>
        </section>

        <Modal v-show="youtubeModal === true" @close="changeYoutubeModal(false)" @keydown.esc="changeYoutubeModal(false)" modalClass="rounded-lg">
            <!-- <template v-slot:header>
                <div>
                    header
                </div>
            </template> -->

            <iframe class="w-[75vh]" width="100%" height="315" src="https://www.youtube.com/embed/csWx7RcNh5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
        </Modal>

        <section id="about" class="p-8 lg:p-16 min-h-screen bg-batik bg-slate-200">
            <h1 class="text-3xl font-bold border-l-4 border-red-400 pl-3" data-aos="fade-up">About EJx</h1>
            
            <div class="md:grid md:grid-cols-2 gap-6 w-full mt-6">
                <div class="prose">
                    <p data-aos="fade-down">
                        It is acknowledged that people-to-people connection is the foundation of sustainable collaboration and development. As well as enhancing youth mobility is believed would bring great benefit for mutual understanding and future collaboration among countries. In other hand, COVID-19 Pandemic makes physical mobility becomes impossible. Therefore, 9 East Java Universities are introducing East Java Exploration (EJx) through online platform.
                    </p>
                    
                    <p data-aos="fade-down">
                        This short program is designed as a general course with multidisciplinary approach for participants to explore East Java in various aspects. Through online series of lecture, discussion, case study, observation, and direct interaction with people from different background, participants would gain better understanding about East Java and its potential and challenges.
                    </p>
                    
                    <p data-aos="fade-down">
                        Each topic is designed in a online form in which participants will learn through online explanatioan and cases. It is expected that the program will enhance knowledge, insight, and cross-cultural understanding. There is no doubt that participants will gain memorable experiences through fun learning method.
                    </p>
                </div>

                <div class="flex items-center justify-center mb-6 md:mb-0" data-aos="fade-down">
                    <img src="logo.png" alt="EJx" class="h-64">
                </div>
            </div>
        </section>

        <section id="details" class="p-8 lg:p-16 min-h-screen bg-[url('src/assets/tugu.png')] bg-intact-bottom">
            <h2 class="text-3xl font-bold border-l-4 border-red-400 pl-3" data-aos="fade-up">Program Details</h2>
            <div class="grid grid-cols-1 md:grid-cols-6 gap-20 mt-8" data-aos="fade-down">
                <!-- <img src="../assets/gkb.jpg" alt="Gedung Kuliah Bersama" class="rounded-lg"> -->

                <div :class="{'md:col-span-2': program.contents, 'md:col-span-3': program.description}" v-for="(program, i) in programs" :key="i">
                    <h3 class="text lg text-red-400" v-text="program.title" />
                    <p class="prose" v-if="program.description" v-html="program.description" />

                    <ol class="list-decimal" v-if="program.contents">
                        <li v-for="(content, j) in program.contents" :key="j" v-html="content" />
                    </ol>
                </div>
            </div>

            <div class="flex items-center justify-center my-6">
                <a href="https://drive.google.com/file/d/1b84h6NNbyphPuO2nASRuh4b9xHCBfCza/view?usp=sharing" target="_blank">
                    <Button>Download Brochure</Button>
                </a>
            </div>
        </section>

        <section id="topics" class="p-8 lg:p-16 bg-batik bg-slate-200">
            <h2 class="text-3xl font-bold border-l-4 border-red-400 pl-3 mb-6" data-aos="fade-up">List of Topics</h2>

            <div v-for="(topic, i) in topics" :key="i">
                <div :class="{'text-red-400 font-bold': topic.opened.value}" class="py-2 text-lg font-semibold flex justify-between gap-6 cursor-pointer" @click="topic.opened.value = ! topic.opened.value">
                    <span v-text="topic.title"></span>
                    <i class="mdi" :class="{'mdi-chevron-down': ! topic.opened.value, 'mdi-chevron-up': topic.opened.value}"></i>
                </div>
    
                <div class="prose" v-show="topic.opened.value">
                    <h3 class="font-medium text-lg">Synopsis</h3>
                    <p v-html="topic.synopsis" class="mb-4" />
    
                    <h3 class="font-medium text-lg">Coordinator</h3>
                    <p v-html="topic.coordinator" class="mb-4" />
    
                    <h3 class="font-medium text-lg">University</h3>
                    <p v-html="topic.university.name" class="mb-4" />
                </div>
                <hr class="border border-slate-50 my-4">
            </div>
        </section>
        
        <section id="schedules" class="p-8 lg:p-16 bg-[url('src/assets/suroboyo.png')] bg-intact-bottom">
            <h2 class="text-3xl font-bold border-l-4 border-red-400 pl-3 mb-6" data-aos="fade-up">Program Schedule</h2>

            <div class="grid grid-cols-1 md:grid-cols-6 gap-5 mb-4 border-b pb-4" v-for="(schedule, i) in schedules" :key="i">
                <div>
                    <h4 class="font-medium" v-text="schedule.date" />
                    <h4 v-text="schedule.time" />
                </div>

                <div class="md:col-span-5">
                    <div class="flex items-center gap-4">
                        <img :src="schedule.icon ?? schedule.university?.logo" :alt="schedule.title" class="h-12">
                        <div>
                            <h4 class="font-medium text-lg" v-text="schedule.title" />
                            <p class="italic" v-text="schedule.description ?? schedule.university?.name" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="dates" class="p-8 lg:p-16 bg-medunten">
            <h2 class="text-3xl font-bold border-l-4 border-red-400 pl-3 mb-6" data-aos="fade-up">Important Dates</h2>

            <ul class="timeline">
                <li class="flex justify-between" v-for="(date, i) in dates" :key="i">
                    <p v-text="date.title" />
                    <span class="text-red-400" v-text="date.date" />
                </li>
            </ul>
        </section>

        <section id="further" class="bg-red-500 p-8 lg:p-16 text-white text-center">
            <h2 class="text-xl mb-4">Further Information on How to Apply</h2>

            <router-link to="/apply">
                <Button>Click Here</Button>
            </router-link>
        </section>

        <section id="testimonials" class="p-8 lg:p-16 bg-batik">
            <h2 class="text-3xl font-bold border-l-4 border-red-400 pl-3 mb-6" data-aos="fade-up" v-text="`Testimonials`" />

            <Splide :options="{
                autoplay: true,
                rewind: true,
            }" aria-label="Testimonials carousel">
                <SplideSlide v-for="(testimonial, index) in testimonials" :key="index">
                    <img :src="testimonial" class="rounded-lg w-full">
                </SplideSlide>
            </Splide>
        </section>

        <section id="galleries" class="p-8 lg:p-16 bg-batik bg-slate-200">
            <h2 class="text-3xl font-bold border-l-4 border-red-400 pl-3 mb-6" data-aos="fade-up" v-text="`Gallery`" />

            <div class="flex justify-center mb-6">
                <iframe class="w-full sm:w-3/4 md:w-3/5 h-80 rounded-lg" src="https://www.youtube.com/embed/M8ayvZfhp2s" frameborder="0" allowfullscreen />
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                <a :href="gallery" target="_blank" v-for="(gallery, i) in galleries.slice(0, 6)" :key="i">
                    <img class="block object-cover object-center w-full h-full rounded-lg" :src="gallery" alt="Gallery collections of KNB UM">
                </a>
            </div>

            <div class="flex justify-center mt-6">
                <router-link to="/galleries">
                    <Button>View More</Button>
                </router-link>
            </div>
        </section>
    </div>
</template>