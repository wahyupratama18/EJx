<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { ref } from 'vue'
import Button from '../components/Button.vue'
import Heading from '../components/Heading.vue';
import ToBe from '../components/ToBe.vue';
import Modal from '../components/Modal.vue';
import { universities, programs, topics, schedules, dates, requirements, testimonials, galleries } from '../data'

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
                <h1 class="text-5xl font-bold uppercase break-words" data-aos="fade-down">East Java Exploration</h1>
                <h2 class="text-4xl font-semibold my-4 text-red-500" data-aos="fade-right">(EJx) 2023</h2>
                
                <div class="flex justify-center my-6">
                    <div class="bg-slate-50 py-3 px-6 rounded-md md:rounded-full grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-3">
                        <a :href="university.url" v-for="(university, i) in universities" :key="i" class="flex items-center justify-center">
                            <img v-lazy="university.logo" :alt="university.name" class="h-10">
                        </a>
                    </div>
                </div>

                <!-- <div class="flex justify-center my-6">
                    <Button class="rounded-full flex items-center !p-2 aspect-square w-12 h-12" @click="changeYoutubeModal(true)">
                        <i class="mdi mdi-play mdi-36px"></i>
                    </Button>
                </div> -->
                
                <div class="flex justify-center">
                    <router-link v-scroll-to="'#requirements'" to="/" data-aos="fade-up">
                        <Button class="w-full">Apply Now</Button>
                    </router-link>
                </div>

            </div>
        </section>

        <!-- <Modal v-show="youtubeModal === true" @close="changeYoutubeModal(false)" @keydown.esc="changeYoutubeModal(false)" modalClass="rounded-lg">
            <-- <template v-slot:header>
                <div>
                    header
                </div>
            </template> --

            <iframe class="w-[75vh]" width="100%" height="315" src="https://www.youtube.com/embed/csWx7RcNh5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
        </Modal> -->

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
                    <img v-lazy="'src/assets/logo.png'" alt="EJx" class="max-h-64">
                </div>
            </div>
        </section>

        <section id="details" class="p-8 lg:p-16 min-h-screen bg-tugu">
            <h2 class="text-3xl font-bold border-l-4 border-red-400 pl-3" data-aos="fade-up">Program Details</h2>
            <div class="grid grid-cols-1 md:grid-cols-6 gap-20 mt-8" data-aos="fade-down">
                <!-- <img src="../assets/gkb.jpg" alt="Gedung Kuliah Bersama" class="rounded-lg"> -->

                <div :class="{'md:col-span-2': program.contents, 'md:col-span-3': program.description}" v-for="(program, i) in programs" :key="i">
                    <h3 class="text-lg text-red-400" v-text="program.title" />
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

        <!-- <section id="topics" class="p-8 lg:p-16 bg-batik bg-slate-200">
            <Heading v-text="'List of Topics'" />

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
        </section> -->
        
        <section id="schedules" class="p-8 lg:p-16 bg-suroboyo bg-slate-200">
            <Heading v-text="'Program Schedule'" />

            <div class="grid grid-cols-1 md:grid-cols-9 gap-y-5 mb-4 border-b" v-for="(schedule, i) in schedules" :key="i">
                <div class="md:col-span-2 md:border-b md:border-red-400 mb:pb-4">
                    <h4 class="font-medium" v-text="schedule.date" />
                    <h4 v-text="schedule.time" />
                </div>

                <div class="md:col-span-7 border-b border-red-400 pb-4">
                    <div class="flex gap-x-5 items-center"
                    :class="{'cursor-pointer': schedule.lectures?.length > 0}"
                    @click="schedule.opened ? schedule.opened.value = ! schedule.opened.value : ''">
                        <img v-lazy="schedule.icon ?? schedule.university?.logo" :alt="schedule.title" class="max-h-12 justify-self-center">
                        <h4>
                            <span class="font-medium text-lg" v-text="schedule.title" />
                            <i v-if="schedule.lectures?.length > 0" class="mdi" :class="{
                                'mdi-chevron-down': ! schedule.opened.value,
                                'mdi-chevron-up': schedule.opened.value
                            }" />
                            
                            <p class="italic" v-text="schedule.description ?? schedule.university?.name" />
                        </h4>
                    </div>

                    <div v-show="schedule.opened.value" v-if="schedule.lectures?.length > 0">
                        <hr class="border-[.5px] border-slate-400 my-4">
                        <h5 class="font-medium mb-2" v-text="'Agendas:'" />

                        <ol class="list-decimal list-inside">
                            <li v-text="lecture" v-for="(lecture, j) in schedule.lectures" :key="j" />
                        </ol>
                    </div>
                </div>
            </div>

            <div class="flex justify-end mt-8">
                <router-link v-scroll-to="`#app`" to="/schedule">
                    <Button>
                        <i class="mdi mdi-calendar"></i>
                        Watch Full Schedule
                    </Button>
                </router-link>
            </div>
        </section>

        <section id="dates" class="p-8 lg:p-16 bg-medunten">
            <Heading v-text="'Important Dates'" />

            <ul class="timeline">
                <li class="flex flex-col md:flex-row md:justify-between" v-for="(date, i) in dates" :key="i">
                    <p v-text="date.title" />
                    <span class="text-red-400 font-semibold" v-text="date.date" />
                </li>
            </ul>
        </section>

        <section id="requirements" class="p-8 lg:p-16 bg-batik bg-slate-200">
            <Heading v-text="'Requirements'" />

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(requirement, i) in requirements" :key="i">
                    <h3 class="font-semibold text-red-400" v-text="requirement.name" />

                    <ol class="list-decimal prose">
                        <li v-for="(detail, j) in requirement.details" :key="j" v-html="detail" />
                    </ol>
                </div>
            </div>
        </section>

        <section id="further" class="bg-[url('/gallery/51.jpg')] bg-intact text-white text-center">
            <div class="bg-rose-900/30 flex items-center justify-center min-h-screen p-8 lg:p-16">
                <div>
                    <h2 class="text-4xl mb-4 font-bold">Apply Now!</h2>
        
                    <a href="https://forms.gle/5J1vqgTmiYzHtPLL7" target="_blank">
                        <Button>Click Here</Button>
                    </a>
                </div>
            </div>
        </section>

        <section id="testimonials" class="p-8 lg:p-16 bg-batik" v-if="testimonials.length > 0">
            <Heading v-text="'Testimonials'" />

            <Splide :options="{
                autoplay: true,
                rewind: true,
            }" aria-label="Testimonials carousel">
                <SplideSlide v-for="(testimonial, index) in testimonials" :key="index">
                    <img v-lazy="testimonial" class="rounded-lg w-full">
                </SplideSlide>
            </Splide>
        </section>

        <section id="galleries" class="p-8 lg:p-16 bg-suroboyo bg-slate-200">
            <Heading v-text="'Gallery'" />

            <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                <a :href="gallery" target="_blank" v-for="(gallery, i) in galleries.slice(0, 12)" :key="i">
                    <img class="block object-cover object-center w-full h-full rounded-lg" v-lazy="gallery" alt="Gallery collections of EJx UM">
                </a>
            </div>
        </section>

        <section id="universities" class="p-6 lg:p-16 bg-batik">
            <Heading v-text="'Organized by'" />

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <a :href="university.url" target="_blank" v-for="(university, i) in universities" :key="i">
                    <img class="block object-cover object-center rounded-t-lg" v-lazy="university.image" :alt="university.name" />
                    <h4 class="text-center bg-slate-800 text-white rounded-b-lg p-4" v-text="university.name" />
                </a>
            </div>
        </section>
    </div>
</template>