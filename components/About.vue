<template>
  <section class="relative w-full max-w-6xl mx-auto px-6 py-16 text-orange-100 text-center overflow-hidden">

    <h1 class="text-4xl md:text-5xl font-bold text-orange-400 mb-6 tracking-tight drop-shadow-[0_0_12px_#f97316aa]">
      About Us
    </h1>

    <p class="text-lg md:text-xl text-orange-200 leading-relaxed max-w-3xl mx-auto mb-10">
      IndoBERT Verify is an AI-powered tool designed to detect hoaxes in Indonesian news articles.
      Built with cutting-edge natural language processing technology, it aims to provide fast, accurate, and transparent detection with interpretable results.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
      <div
        class="p-6 rounded-2xl border border-orange-500/30 transition duration-300 
               shadow-none hover:shadow-[0_0_30px_#f97316ee]"
      >
        <h3 class="text-xl font-semibold text-orange-300 mb-2">👥 Creator</h3>
        <p class="text-sm text-orange-100">
          Developed by <strong>Jason Emmanuel</strong> — a data science enthusiast focused on practical AI solutions for social impact.
        </p>
      </div>

      <div
        class="p-6 rounded-2xl border border-orange-500/30 transition duration-300 
               shadow-none hover:shadow-[0_0_30px_#f97316ee]"
      >
        <h3 class="text-xl font-semibold text-orange-300 mb-2">🤖 Technology</h3>
        <p class="text-sm text-orange-100">
          Built with <strong>Flask</strong>, <strong>Vue.js</strong>, <strong>Transformers</strong> (HuggingFace), and <strong>IndoBERT</strong> for hoax detection.
        </p>
      </div>

      <div
        class="p-6 rounded-2xl border border-orange-500/30 transition duration-300 
               shadow-none hover:shadow-[0_0_30px_#f97316ee]"
      >
        <h3 class="text-xl font-semibold text-orange-300 mb-2">🔗 Repository</h3>
        <p class="text-sm text-orange-100">
          Explore the code on 
          <a href="https://github.com/namoklom/indobert-verify" class="underline hover:text-orange-400">GitHub</a>. 
          Contributions are welcome!
        </p>
      </div>
    </div>

    <p class="mt-16 text-sm text-orange-300">© 2025 IndoBERT Verify. All rights reserved.</p>
  </section>
</template>

<script setup>
</script>
