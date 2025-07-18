<script>
  let { result, initialCapital, regularContribution, frequency, duration } =
    $props();
</script>

<div
  class="card bg-base-100 flex flex-col items-center shadow-sm w-fit gap-6 p-6"
>
  <h1
    class="text-2xl px-6 font-bold bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text"
  >
    Résultat de la simulation
  </h1>

  <div class="p-4 bg-green-100 text-black rounded mt-4">
    <p>
      <strong>Capital final:</strong>
      {result.final.toLocaleString("fr-FR", {
        style: "currency",
        currency: "EUR",
      })}
    </p>
    <p>
      <strong>Total investi:</strong>
      {(
        initialCapital +
        regularContribution * (frequency === "Mensuel" ? 12 : 1) * duration
      ).toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
    </p>
    <p>
      <strong>Gains:</strong>
      {(
        result.final -
        initialCapital -
        regularContribution * (frequency === "Mensuel" ? 12 : 1) * duration
      ).toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
    </p>
  </div>
</div>
