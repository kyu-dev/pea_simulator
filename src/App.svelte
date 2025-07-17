<script>
  import Input from "./components/Input.svelte";

  // Variables d'état dans le parent
  let initial = $state(10000);
  let startCapital = $state(10000);
  let frequency = $state("Mensuel");
  let interestRate = $state(0);
  let duration = $state(20);
</script>

<Input
  bind:initial
  bind:startCapital
  bind:frequency
  bind:interestRate
  bind:duration
/>
<h2>Vos valeurs</h2>
<div class="p-4 bg-gray-100 text-black rounded">
  <p><strong>Versement initial:</strong> {initial}€</p>
  <p><strong>Versement régulier:</strong> {startCapital}€</p>
  <p><strong>Fréquence:</strong> {frequency}</p>
  <p><strong>Taux d'intérêt:</strong> {interestRate}%</p>
  <p><strong>Durée:</strong> {duration} années</p>
</div>
