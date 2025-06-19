<template>
  <section class="relative w-full px-6 pt-10 pb-16 text-center overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-black via-[#1f0c00] to-[#3c1c00] z-[-1] animate-pulse opacity-90"></div>

    <h1
      class="text-4xl md:text-5xl font-bold text-orange-400 mb-4 tracking-normal drop-shadow-[0_0_15px_rgba(249,115,22,0.7)]
             animate-fade-in-down"
    >
      IndoBERT Verify
    </h1>

    <p class="text-lg text-orange-100 mb-2 leading-relaxed animate-fade-in-up delay-200">
      AI-powered system for hoax detection in Indonesian news using Bidirectional Encoder Representations from Transformers.
    </p>
    <p class="text-sm text-orange-200 leading-relaxed animate-fade-in-up delay-300">
      Real-time, transparent, and research-backed — empowering users with credibility insights.
    </p>

    <div class="w-24 h-1 bg-orange-400 rounded-full mx-auto my-8 animate-scale-in delay-500"></div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      <div
        v-for="(feature, i) in features"
        :key="i"
        :class="`rounded-2xl p-5 text-left border border-orange-500/30 hover:shadow-[0_0_35px_#f97316] transition duration-500 animate-fade-in-up delay-${i * 100}`"
      >
        <h3 class="text-base font-semibold text-orange-300 mb-1">{{ feature.title }}</h3>
        <p class="text-sm text-orange-100 leading-relaxed">{{ feature.desc }}</p>
      </div>
    </div>

    <div class="mt-12 flex justify-center gap-4 flex-wrap animate-fade-in-up delay-700">
      <button
        @click="setPage('detect')"
        class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-full 
               transition duration-300 shadow-md hover:shadow-[0_0_30px_#f97316]"
      >
        Start Detecting
      </button>
      <button
        @click="setPage('about')"
        class="border border-orange-400 text-orange-200 hover:bg-orange-500 hover:text-white 
               px-6 py-2.5 rounded-full transition duration-300 hover:shadow-[0_0_30px_#f97316]"
      >
        About
      </button>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  setPage: Function
})

const features = [
  {
    title: 'AI-Powered',
    desc: 'Uses IndoBERT to deeply understand and classify Indonesian news intelligently.'
  },
  {
    title: 'Real-Time Results',
    desc: 'Instant feedback on credibility — no wait, no complexity.'
  },
  {
    title: 'Confidence Scoring',
    desc: 'Each result includes confidence scores with intuitive risk indicators.'
  }
]
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes scale-in {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out both;
}
.animate-fade-in-down {
  animation: fade-in-down 0.8s ease-out both;
}
.animate-scale-in {
  animation: scale-in 0.6s ease-out both;
}
.delay-200 {
  animation-delay: 0.2s;
}
.delay-300 {
  animation-delay: 0.3s;
}
.delay-500 {
  animation-delay: 0.5s;
}
.delay-700 {
  animation-delay: 0.7s;
}
</style>
