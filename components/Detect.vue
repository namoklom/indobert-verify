<template>
  <section
    class="bg-white/5 backdrop-blur-2xl border border-orange-500/30 p-10 rounded-3xl shadow-2xl w-full max-w-6xl mx-auto mt-10"
  >
    <!-- Title -->
    <h2 class="text-3xl font-semibold mb-6 text-orange-400 drop-shadow text-center">
      🔍 Detect News
    </h2>

    <!-- Textarea Input -->
    <textarea
      v-model="news"
      class="w-full h-40 p-4 rounded-xl border border-orange-400 bg-white/10 text-orange-100 placeholder-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-inner mb-6"
      placeholder="Paste Indonesian news text here..."
    ></textarea>

    <!-- Detect Button -->
    <button
      @click="detect"
      :disabled="loading || news.trim().length < 10"
      class="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-md hover:shadow-[0_0_25px_#f97316] disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {{ loading ? 'Detecting...' : 'Detect' }}
    </button>

    <!-- Result Output -->
    <div v-if="result !== null" class="mt-8 text-center">
      <p class="text-xl font-semibold text-orange-100 mb-2">
        🧠 Prediction:
        <span :class="resultColor" class="ml-2">{{ resultLabel }}</span>
      </p>

      <p class="text-sm text-orange-300 mb-4">
        Confidence: <span class="font-mono">{{ (confidence * 100).toFixed(1) }}%</span>
      </p>

      <!-- Highlighted News with Keyword Attribution -->
      <div v-if="keywords.length" class="mt-6 text-left text-sm text-orange-100">
        <p class="mb-2 font-semibold text-orange-300">Keyword Attributions:</p>
        <div
          class="p-4 bg-orange-500/5 border border-orange-400/20 rounded-md leading-relaxed whitespace-pre-wrap custom-scrollbar"
        >
          <span v-html="highlightedText" />
        </div>
      </div>
    </div>

    <!-- Error Message -->
    <p v-if="error" class="mt-6 text-red-400 text-sm text-center whitespace-pre-line">
      {{ error }}
    </p>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// STATE
const news = ref('')
const result = ref(null)
const confidence = ref(0)
const keywords = ref([])
const error = ref('')
const loading = ref(false)

// LABEL & COLOR
const resultLabel = computed(() => {
  if (result.value === 0) return 'Likely Hoax'
  if (result.value === 1) return 'Likely Valid'
  return 'Unknown'
})

const resultColor = computed(() =>
  result.value === 1 ? 'text-green-400' : result.value === 0 ? 'text-red-400' : 'text-orange-300'
)

// Highlighted News Renderer
const highlightedText = computed(() => {
  if (!keywords.value.length) return news.value

  const scoreMap = Object.fromEntries(
    keywords.value.map(k => [k.word.toLowerCase(), k.score])
  )

  return news.value.split(/\s+/).map(word => {
    const raw = word.replace(/[^\w]/g, '')
    const score = scoreMap[raw.toLowerCase()]
    if (!score) return word

    const opacity = (0.3 + 0.5 * Math.min(1, Math.max(0, score))).toFixed(2)
    const background = `rgba(251, 146, 60, ${opacity})`
    return `<span style="background:${background}; padding:2px 4px; border-radius:4px;">${word}</span>`
  }).join(' ')
})

// DETECTION
async function detect() {
  error.value = ''
  result.value = null
  confidence.value = 0
  keywords.value = []
  loading.value = true

  try {
    const response = await fetch('https://9014-34-16-209-182.ngrok-free.app/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: news.value }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data?.error || 'Prediction failed.')
    }

    result.value = data.prediction
    confidence.value = Math.max(...(data.confidence || []))
    keywords.value = data.keywords || []
  } catch (err) {
    error.value = 'Failed to load detection result:\n' + (err.message || 'Unknown error.')
    console.error('[Detect Error]', err)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #f97316;
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}
</style>
