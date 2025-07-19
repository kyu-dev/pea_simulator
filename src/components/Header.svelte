<div class="relative overflow-hidden">
  <!-- Effet de particules en arrière-plan -->
  <div
    class="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 bg-[length:300%_300%] animate-gradient-flow"
  ></div>

  <!-- Éléments décoratifs flottants -->
  <div
    class="absolute top-2 left-20 w-3 h-3 bg-white/30 rounded-full animate-float-slow"
  ></div>
  <div
    class="absolute top-8 right-32 w-2 h-2 bg-white/40 rounded-full animate-float-medium"
  ></div>
  <div
    class="absolute bottom-4 left-1/3 w-4 h-4 bg-white/20 rounded-full animate-float-fast"
  ></div>
  <div
    class="absolute top-3 right-1/4 w-2 h-2 bg-white/35 rounded-full animate-float-slow"
  ></div>

  <!-- Contenu principal -->
  <div
    class="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col items-center gap-3 sm:gap-4 backdrop-blur-sm"
  >
    <div class="flex items-center gap-3 sm:gap-4 text-center">
      <div
        class="p-2 sm:p-3 bg-white/20 rounded-full backdrop-blur-md animate-pulse-gentle"
      >
        <svg
          class="w-6 h-6 sm:w-8 sm:h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          />
        </svg>
      </div>
      <h1
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black drop-shadow-2xl tracking-tight animate-text-shimmer bg-gradient-to-r from-white via-gray-100 to-white bg-[length:200%_200%] text-transparent bg-clip-text leading-tight"
      >
        Calculateur PEA Pro
      </h1>
    </div>
    <p
      class="text-white/90 font-medium text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-lg animate-fade-in-up text-center px-4 max-w-2xl"
    >
      ✨ Maximisez vos investissements avec l'effet des intérêts composés
    </p>
  </div>

  <!-- Ligne de séparation animée -->
  <div
    class="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"
  ></div>
</div>

<style>
  @keyframes gradient-flow {
    0%,
    100% {
      background-position: 0% 50%;
    }
    25% {
      background-position: 100% 50%;
    }
    50% {
      background-position: 50% 100%;
    }
    75% {
      background-position: 0% 100%;
    }
  }

  @keyframes float-slow {
    0%,
    100% {
      transform: translateY(0px) translateX(0px);
    }
    33% {
      transform: translateY(-10px) translateX(5px);
    }
    66% {
      transform: translateY(5px) translateX(-3px);
    }
  }

  @keyframes float-medium {
    0%,
    100% {
      transform: translateY(0px) translateX(0px);
    }
    50% {
      transform: translateY(-8px) translateX(-4px);
    }
  }

  @keyframes float-fast {
    0%,
    100% {
      transform: translateY(0px) translateX(0px);
    }
    25% {
      transform: translateY(-6px) translateX(3px);
    }
    50% {
      transform: translateY(2px) translateX(-2px);
    }
    75% {
      transform: translateY(-4px) translateX(1px);
    }
  }

  @keyframes text-shimmer {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes pulse-gentle {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }

  @keyframes fade-in-up {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-gradient-flow {
    animation: gradient-flow 8s ease-in-out infinite;
  }

  .animate-float-slow {
    animation: float-slow 6s ease-in-out infinite;
  }

  .animate-float-medium {
    animation: float-medium 4s ease-in-out infinite;
  }

  .animate-float-fast {
    animation: float-fast 3s ease-in-out infinite;
  }

  .animate-text-shimmer {
    animation: text-shimmer 3s ease-in-out infinite;
  }

  .animate-pulse-gentle {
    animation: pulse-gentle 2s ease-in-out infinite;
  }

  .animate-fade-in-up {
    animation: fade-in-up 1s ease-out;
  }
</style>
