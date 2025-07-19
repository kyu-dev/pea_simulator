<script>
  import Input from "./components/Input.svelte";
  import Result from "./components/Result.svelte";
  import Hero from "./components/Hero.svelte";
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

<Hero />
<div class="flex justify-evenly">
  <Input
    bind:initialCapital
    bind:regularContribution
    bind:frequency
    bind:interestRate
    bind:duration
  />

  <Result
    {result}
    {initialCapital}
    {regularContribution}
    {frequency}
    {duration}
  />
</div>
