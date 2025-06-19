<template>
  <div class="relative min-h-screen w-full pt-[72px] text-orange-100 overflow-x-hidden">
    <div class="absolute inset-0 z-[-1] bg-gradient-to-br from-black via-[#1f0c00] to-[#3c1c00]"></div>

    <nav class="fixed top-0 left-0 w-full z-50 bg-black/5 backdrop-blur-lg shadow-lg border-b border-orange-500/10">
      <div class="w-full px-6 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-orange-400 tracking-tight drop-shadow-[0_0_10px_#f97316]">
          ? IndoBERT Verify
        </h1>
        <ul class="flex space-x-6 text-sm md:text-base">
          <li>
            <a
              href="#"
              @click.prevent="page = 'home'"
              :class="page === 'home' ? activeClass : baseClass"
            >Home</a>
          </li>
          <li>
            <a
              href="#"
              @click.prevent="page = 'detect'"
              :class="page === 'detect' ? activeClass : baseClass"
            >News Detection</a>
          </li>
          <li>
            <a
              href="#"
              @click.prevent="page = 'about'"
              :class="page === 'about' ? activeClass : baseClass"
            >About</a>
          </li>
        </ul>
      </div>
    </nav>

    <component :is="pages[page]" :setPage="setPage" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Home from './components/Home.vue'
import Detect from './components/Detect.vue'
import About from './components/About.vue'

const page = ref('home')

const pages = {
  home: Home,
  detect: Detect,
  about: About
}

const setPage = (name) => {
  if (pages[name]) page.value = name
}

const baseClass = 'transition duration-200 hover:text-orange-400 hover:underline underline-offset-4'
const activeClass = 'text-orange-500 font-semibold underline underline-offset-4'
</script>
