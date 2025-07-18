<script>
  let {
    initialCapital = $bindable(10000),
    regularContribution = $bindable(1000),
    frequency = $bindable("Mensuel"),
    interestRate = $bindable(5),
    duration = $bindable(20),
  } = $props();
</script>

<div
  class="card bg-base-100 flex flex-col items-center shadow-sm w-fit gap-6 p-6"
>
  <h1 class="text-2xl px-6 font-bold text-orange-400">
    Calculateur d'intérêt composé
  </h1>
  <form class="flex flex-col gap-4">
    <div class="flex flex-col">
      <label for="initial-capital" class="label">
        Montant du versement initial (€)
      </label>
      <input
        bind:value={initialCapital}
        class="input input-bordered"
        id="initial-capital"
        type="number"
        min="0"
        step="100"
      />
    </div>
    <div class="flex flex-col">
      <label for="regular-contribution" class="label">
        Montant du versement régulier (€)
      </label>
      <input
        bind:value={regularContribution}
        class="input input-bordered"
        id="regular-contribution"
        type="number"
        min="0"
        step="50"
      />
    </div>
    <div class="flex flex-col">
      <label for="frequency" class="label">
        Fréquence du versement régulier
      </label>
      <select
        bind:value={frequency}
        class="select select-bordered"
        id="frequency"
      >
        <option>Mensuel</option>
        <option>Annuel</option>
      </select>
    </div>
    <div class="flex flex-col">
      <label for="interest-rate" class="label">
        Taux d'intérêt annuel (%)
      </label>
      <input
        bind:value={interestRate}
        class="input input-bordered"
        id="interest-rate"
        type="number"
        min="0"
        max="20"
        step="0.1"
      />
    </div>
    <div class="flex flex-col">
      <label for="duration" class="label">
        Durée de l'investissement (années)
      </label>
      <input
        bind:value={duration}
        class="input input-bordered"
        id="duration"
        type="number"
        min="1"
        max="50"
        step="1"
      />
    </div>
  </form>
</div>
