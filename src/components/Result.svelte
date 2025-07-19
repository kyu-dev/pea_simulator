<script>
  let { result, initialCapital, regularContribution, frequency, duration } =
    $props();
</script>

<div class="card bg-base-100 flex flex-col shadow-sm w-fit gap-6 p-6">
  <h1
    class=" self-center text-2xl px-6 font-bold bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text"
  >
    Résultat de la simulation
  </h1>

  <div class="flex flex-col gap-6">
    <div class="flex justify-between bg-gray-50 p-3 rounded-md">
      <p class="text-xl">Capital final</p>
      <span>
        {result.final.toLocaleString("fr-FR", {
          style: "currency",
          currency: "EUR",
        })}
      </span>
    </div>

    <div class="flex justify-between bg-gray-50 p-3 rounded-md">
      <p class=" text-xl">Total investi</p>
      <span>
        {(
          initialCapital +
          regularContribution * (frequency === "Mensuel" ? 12 : 1) * duration
        ).toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
      </span>
    </div>
    <div class="flex justify-between bg-gray-50 p-3 rounded-md">
      <p class="text-xl">Gains</p>
      <span>
        {(
          result.final -
          initialCapital -
          regularContribution * (frequency === "Mensuel" ? 12 : 1) * duration
        ).toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
      </span>
    </div>
  </div>
</div>
