<script>
  import Input from "./components/Input.svelte";
  import Result from "./components/Result.svelte";
  import Hero from "./components/Hero.svelte";
  import { getResult } from "./lib/calcul";
  import Header from "./components/Header.svelte";

  // Variables d'état dans le parent
  let initialCapital = $state(10000);
  let regularContribution = $state(1000);
  let frequency = $state("Mensuel");
  let interestRate = $state(5);
  let duration = $state(20);

  // Calcul réactif
  let result = $derived(
    getResult(
      initialCapital,
      regularContribution,
      frequency,
      interestRate,
      duration
    )
  );
</script>

<div
  class="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50"
>
  <!-- Éléments décoratifs animés en arrière-plan -->
  <div class="fixed inset-0 overflow-hidden pointer-events-none">
    <div
      class="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-amber-300/20 to-orange-300/20 rounded-full blur-3xl animate-blob"
    ></div>
    <div
      class="absolute top-96 right-10 w-96 h-96 bg-gradient-to-r from-pink-300/20 to-rose-300/20 rounded-full blur-3xl animate-blob-reverse"
    ></div>
    <div
      class="absolute bottom-10 left-1/3 w-80 h-80 bg-gradient-to-r from-orange-300/20 to-amber-300/20 rounded-full blur-3xl animate-blob-slow"
    ></div>
  </div>

  <!-- Contenu principal -->
  <div class="relative z-10">
    <Header />
    <Hero />

    <div
      class="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pb-12 sm:pb-16 lg:pb-20"
    >
      <div
        class="flex flex-col lg:flex-row justify-center items-stretch gap-6 sm:gap-8 lg:gap-10 xl:gap-16 max-w-7xl mx-auto"
      >
        <div class="w-full lg:flex-1 lg:max-w-lg flex justify-center">
          <Input
            bind:initialCapital
            bind:regularContribution
            bind:frequency
            bind:interestRate
            bind:duration
          />
        </div>

        <div class="w-full lg:flex-1 lg:max-w-lg flex justify-center">
          <Result
            {result}
            {initialCapital}
            {regularContribution}
            {frequency}
            {duration}
          />
        </div>
      </div>
    </div>
  </div>
</div>
