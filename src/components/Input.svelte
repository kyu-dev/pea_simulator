<script>
  let {
    initial = $bindable(10000),
    startCapital = $bindable(10000),
    frequency = $bindable("Mensuel"),
    interestRate = $bindable(0),
    duration = $bindable(20),
  } = $props();
</script>

<div
  class="card bg-base-100 flex flex-col items-center shadow-sm w-fit gap-6 p-6"
>
  <h1 class="text-2xl px-6 font-bold text-orange-400">
    Calculateur d'intérêt composé
  </h1>
  <form action="flex">
    <div class="flex flex-col">
      <label for="Montant du versement initial "
        >Montant du versement initial
      </label>
      <input
        bind:value={initial}
        class=" input"
        id="Montant du versement initial"
        type="number"
      />
    </div>
    <div class="flex flex-col">
      <label for="Montant du versement régulier ">
        Montant du versement régulier
      </label>
      <input
        bind:value={startCapital}
        class=" input"
        id="Montant du versement régulier "
        type="number"
      />
    </div>
    <div class="flex flex-col">
      <label for="Fréquence du versement régulier">
        Fréquence du versement régulier
      </label>
      <select bind:value={frequency} class="select">
        <option>Mensuel</option>
        <option>Annuel</option>
      </select>
    </div>
    <div class="flex flex-col">
      <label for="Taux d'intérêt (% par an) ">Taux d'intérêt</label>
      <input
        bind:value={interestRate}
        class=" input"
        id="Taux d'intérêt (% par an) "
        type="number"
      />
    </div>
    <div class="flex flex-col">
      <label for="Durée (en années) ">Durée (en années) </label>
      <input
        bind:value={duration}
        class=" input"
        id="Durée (en années) "
        type="number"
      />
    </div>
  </form>
</div>
