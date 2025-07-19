<script>
  let { result, initialCapital, regularContribution, frequency, duration } =
    $props();
</script>

<div
  class="card bg-white/30 backdrop-blur-lg border border-white/20 shadow-2xl w-full mx-auto gap-6 p-6 md:p-8 lg:p-10 hover:bg-white/40 transition-all duration-300"
>
  <div class="card-body p-0">
    <h2
      class="card-title text-2xl md:text-3xl justify-center font-bold bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-6 text-center"
    >
      🚀 Votre Fortune Future
    </h2>

    <div class="space-y-6">
      <!-- Capital final avec effet dramatique -->
      <div
        class="stats shadow-lg bg-gradient-to-r w-full from-amber-500 to-pink-500 text-white rounded-xl"
      >
        <div class="stat place-items-center p-4 md:p-6">
          <div
            class="stat-title text-white/90 font-semibold text-sm md:text-base"
          >
            🎉 Votre patrimoine dans {duration} ans
          </div>
          <div class="stat-value text-2xl md:text-3xl lg:text-4xl">
            {result.final.toLocaleString("fr-FR", {
              style: "currency",
              currency: "EUR",
            })}
          </div>
          <div class="stat-desc text-white/80 text-xs sm:text-sm">
            Votre patrimoine final
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-3 sm:gap-4">
        <div
          class="stat bg-white/50 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg hover:bg-white/60 transition-all p-3 sm:p-4"
        >
          <div class="stat-figure text-amber-500"></div>
          <div
            class="stat-title font-semibold text-gray-700 text-xs sm:text-sm"
          >
            💳 Total investi
          </div>
          <div class="stat-value text-lg sm:text-xl md:text-2xl text-gray-800">
            {(
              initialCapital +
              regularContribution *
                (frequency === "Mensuel" ? 12 : 1) *
                duration
            ).toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
          </div>
          <div class="stat-desc text-gray-600 text-xs sm:text-sm">
            Vos versements cumulés
          </div>
        </div>

        <div
          class="stat bg-white/50 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg hover:bg-white/60 transition-all p-3 sm:p-4"
        >
          <div class="stat-figure text-pink-500"></div>
          <div
            class="stat-title font-semibold text-gray-700 text-xs sm:text-sm"
          >
            📈 Gains nets
          </div>
          <div
            class="stat-value text-lg sm:text-xl md:text-2xl text-emerald-600"
          >
            {(
              result.final -
              initialCapital -
              regularContribution *
                (frequency === "Mensuel" ? 12 : 1) *
                duration
            ).toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
          </div>
          <div class="stat-desc text-gray-600 text-xs sm:text-sm">
            Intérêts composés générés
          </div>
        </div>
      </div>

      <!-- Indicateur de performance -->
      <div
        class="alert bg-gradient-to-r from-emerald-100 to-blue-100 border-emerald-300/50 backdrop-blur-sm rounded-xl p-3 sm:p-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="stroke-emerald-600 shrink-0 w-5 h-5 sm:w-6 sm:h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span
          class="font-semibold text-emerald-700 text-xs sm:text-sm md:text-base"
        >
          📊 Rendement de {(
            (result.final /
              (initialCapital +
                regularContribution *
                  (frequency === "Mensuel" ? 12 : 1) *
                  duration) -
              1) *
            100
          ).toFixed(1)}%
        </span>
      </div>
    </div>
  </div>
</div>
