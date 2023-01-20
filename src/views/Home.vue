<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { ref } from 'vue'
import Button from '../components/Button.vue'
import ToBe from '../components/ToBe.vue';
import { infos, flyers, programs, howTos, testimonials, galleries } from '../data'

const opened = ref(0)

const changeTab = (i) => {
    opened.value = i
}
</script>

<template>
    <div>
        <section id="welcome" class="w-full min-h-screen bg-cover relative text-white bg-[url('/src/assets/background.jpg')] bg-[center_top] bg-no-repeat bg-fixed flex items-center">
            <div class="w-full text-center">
                <h1 class="text-5xl font-bold" data-aos="fade-down">KNB</h1>
                <h2 class="text-xl font-semibold my-4" data-aos="fade-right">Kemitraan Negara Berkembang</h2>
                <h3 class="font-medium mb-6" data-aos="fade-up">at Universitas Negeri Malang</h3>

                <a href="https://knb.kemdikbud.go.id" data-aos="fade-up">
                    <Button class="text-lg">Apply Now</Button>
                </a>
            </div>
        </section>

        <section id="about" class="p-8 lg:p-16 min-h-screen umbg bg-slate-200">
            <h1 class="text-3xl font-bold border-l-4 border-sky-400 pl-3" data-aos="fade-up">KNB Scholarship</h1>
            
            <div class="md:grid md:grid-cols-2 gap-6 w-full mt-6">
                
                <div class="flex items-center justify-center mb-6 md:mb-0" data-aos="fade-down">
                    <img src="../assets/logo.png" alt="KNB" class="h-64">
                </div>

                <div class="prose">
                    <p data-aos="fade-down">
                        KNB (Kemitraan Negara Berkembang) Scholarship is a prestigious scholarship provided by the Directorate General of Higher Education, Ministry of Education and Culture of Indonesia, for international students from developing countries who desire to pursue their bachelor’s, master’s, and doctoral degree in Indonesian universities. This scholarship program offers the chance to learn and experience life in the middle of Indonesian culture. Therefore, international students will obtain both educational scholarship and a deeper cultural understanding of Indonesia.
                    </p>

                    <p data-aos="fade-down">
                        The KNB Scholarship aims to increase the quality of human resources in developing countries, assist in promoting culture overseas, and improve the internationalization of educational institutions in Indonesia. Additionally, this scholarship has partnered with 20 leading universities in Indonesia, with more than 1200 recipients from 94 countries.
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div v-for="(info, i) in infos" :key="i">
                    <h2 class="text-xl font-semibold mb-4" v-text="info.name" data-aos="fade-right" />

                    <ul class="list-disc list-inside">
                        <li v-for="(content, j) in info.contents" :key="j" v-text="content" data-aos="fade-right" />
                    </ul>
                </div>
            </div>
        </section>

        <section id="knbum" class="p-8 lg:p-16 min-h-screen umbg">
            <h2 class="text-3xl font-bold border-l-4 border-sky-400 pl-3" data-aos="fade-up">KNB at Universitas Negeri Malang</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8" data-aos="fade-down">
                <img src="../assets/gkb.jpg" alt="Gedung Kuliah Bersama" class="rounded-lg">

                <div class="md:col-span-2">
                    <div class="prose">
                        <p>
                            Universitas Negeri Malang (UM), one of top-tier universities in Indonesia, has been working with the Ministry of Education and Culture to offer KNB scholarship for citizens of developing countries since 2008. UM’s international students come from various countries in Asia, Europe, Africa, America, and the Pacific, making the university a vibrant academic community. With the support of excellent teaching infrastructure and international students’ dormitory, UM can offer international students quality study experience. In addition, with UM’s internationally reputed Bahasa Indonesia untuk Penutur Asing (BIPA) course, international students can get the best immersion experience in Indonesian language and culture. You can build your intellectual pathways for a better future with UM.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                        <a :href="flyer.url" v-for="(flyer, i) in flyers" :key="i" target="_blank" class="flex justify-center">
                            <Button v-text="flyer.text" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section id="degrees" class="p-8 lg:p-16 umbg bg-slate-200">
            <div :id="`${program.name}inum`" class="mt-4" v-for="(program, i) in programs" :key="i">
                <h2 class="text-3xl font-bold border-l-4 border-sky-400 pl-3"
                data-aos="fade-up" v-text="`${ program.name }'s Program (S${1 + i})`" />

                <h3 class="font-medium my-4"
                data-aos="fade-up"
                v-text="`List of ${ program.faculties.reduce((total, faculty) => {
                    return total + faculty.programs.length
                }, 0) } ${ program.name.toLowerCase() }'s programs offered by Universitas Negeri Malang`" />

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div v-for="(faculty, j) in program.faculties" :key="j" data-aos="zoom-in-up">
                        <h4 :class="{
                            'rounded-lg': ! faculty.opened.value,
                            'rounded-t-lg': faculty.opened.value,
                        }" class="p-4 bg-sky-400 text-white flex justify-between font-semibold">
                            <a :href="faculty.faculty.url" target="_blank">
                                {{ faculty.faculty.name }}
                            </a>
    
                            <i class="mdi mdi-chevron-down cursor-pointer" :class="{'rotate-180': faculty.opened.value}"  @click="faculty.opened.value = ! faculty.opened.value" />
                        </h4>
    
                        <div class="border rounded-b-lg bg-slate-50 p-4" v-show="faculty.opened.value">
                            <ul class="list-disc list-inside">
                                <li v-for="(program, k) in faculty.programs" :key="k" v-text="program" />
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        
        <section id="timeline" class="umbg">
            <div class="p-8 lg:p-16">
                <h2 class="text-3xl font-bold border-l-4 border-sky-400 pl-3" data-aos="fade-up" v-text="`Timeline`" />
            </div>

            <div class="w-full h-fit bg-[url('/src/assets/bg-timeline.jpg')] bg-center bg-no-repeat bg-cover relative">
                <div class="p-8 lg:p-16 flex items-center justify-center">
                    <img src="../assets/timeline.png" alt="KNB Timeline" data-aos="zoom-in">
                </div>
            </div>
        </section>

        <section id="programs" class="p-8 lg:p-16 umbg bg-slate-200">
            <h2 class="text-3xl font-bold border-l-4 border-sky-400 pl-3" data-aos="fade-up" v-text="`Programs`" />

            <div class="grid grid-cols-3 border-b border-b-sky-400 mt-6" data-aos="fade-down">
                <span :class="{
                    'bg-sky-400 text-white rounded-t-xl': opened == i,
                    'cursor-pointer': opened != i
                }"
                class="text-center p-2 md:p-4"
                v-for="(program, i) in programs"
                :key="i"
                v-text="program.name"
                @click="changeTab(i)" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 bg-slate-50 p-6 rounded-b-xl" data-aos="fade-down">
                <div>
                    <h4 class="font-medium mb-2">Eligibility</h4>

                    <ul class="list-disc list-inside mb-6">
                        <li class="text-sm" v-for="(eligibility, i) in programs[opened].eligibilities" :key="i" v-text="eligibility" />
                    </ul>

                    <h4 class="font-medium mb-2">Note</h4>

                    <ul class="list-disc list-inside">
                        <li class="text-sm" v-for="(note, i) in programs[opened].notes" :key="i" v-text="note" />
                    </ul>
                </div>

                <div>
                    <h4 class="font-medium mb-2">Required Documents</h4>

                    <ul class="list-disc list-inside">
                        <li class="text-sm" v-for="(document, i) in programs[opened].documents" :key="i" v-text="document" />
                    </ul>
                </div>
            </div>

            <h2 class="text-3xl font-bold border-l-4 border-sky-400 pl-3 my-8" data-aos="fade-up" v-text="`How to Apply`" />

            <ul class="list-disc list-inside mb-6" data-aos="fade-down">
                <li v-for="(how, i) in howTos" :key="i" v-text="how" />
            </ul>
        </section>

        <section id="further" class="bg-sky-500 p-8 lg:p-16 text-white text-center">
            <h2 class="text-xl mb-4">Further Information on How to Apply</h2>

            <router-link to="/apply">
                <Button>Click Here</Button>
            </router-link>
        </section>

        <section id="testimonials" class="p-8 lg:p-16 umbg">
            <h2 class="text-3xl font-bold border-l-4 border-sky-400 pl-3 mb-6" data-aos="fade-up" v-text="`Testimonials`" />

            <Splide :options="{
                autoplay: true,
                rewind: true,
            }" aria-label="Testimonials carousel">
                <SplideSlide v-for="(testimonial, index) in testimonials" :key="index">
                    <img :src="testimonial" class="rounded-lg w-full">
                </SplideSlide>
            </Splide>
        </section>

        <section id="galleries" class="p-8 lg:p-16 umbg bg-slate-200">
            <h2 class="text-3xl font-bold border-l-4 border-sky-400 pl-3 mb-6" data-aos="fade-up" v-text="`Gallery`" />

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