<script>
  import Input from "./components/Input.svelte";
  import { getResult } from "./lib/calcul";

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

<Input
  bind:initialCapital
  bind:regularContribution
  bind:frequency
  bind:interestRate
  bind:duration
/>
<h2>Vos valeurs</h2>

<div class="p-4 bg-gray-100 text-black rounded">
  <p><strong>Versement initial:</strong> {initialCapital}€</p>
  <p><strong>Versement régulier:</strong> {regularContribution}€</p>
  <p><strong>Fréquence:</strong> {frequency}</p>
  <p><strong>Taux d'intérêt:</strong> {interestRate}%</p>
  <p><strong>Durée:</strong> {duration} années</p>
</div>

<h2>Résultat de la simulation</h2>
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
