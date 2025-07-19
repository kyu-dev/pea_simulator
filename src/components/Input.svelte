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
  class="card bg-white/30 backdrop-blur-lg border border-white/20 shadow-2xl w-fit gap-6 p-8"
>
  <div class="card-body p-0">
    <h2
      class="card-title text-3xl justify-center font-bold bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-6"
    >
      💰 Configuration
    </h2>

    <div class="space-y-6">
      <div class="form-control">
        <label for="initial-capital" class="label">
          <span class="label-text font-semibold text-gray-700 text-lg">
            💳 Capital initial
          </span>
        </label>
        <div class="input-group gap-2 items-center flex">
          <input
            id="initial-capital"
            bind:value={initialCapital}
            class="input input-bordered input-lg bg-white/50 backdrop-blur-sm border-white/30"
            type="number"
            min="0"
            step="100"
            placeholder="10000"
          />
          <span
            class="bg-gradient-to-r h-fit p-1 rounded-md from-amber-500 to-pink-500 text-white font-bold"
            >€</span
          >
        </div>
      </div>

      <div class="form-control">
        <label for="regular-contribution" class="label">
          <span class="label-text font-semibold text-gray-700 text-lg">
            📅 Versement régulier
          </span>
        </label>
        <div class="input-group gap-2 items-center flex">
          <input
            id="regular-contribution"
            bind:value={regularContribution}
            class="input input-bordered input-lg bg-white/50 backdrop-blur-sm border-white/30"
            type="number"
            min="0"
            step="50"
            placeholder="1000"
          />
          <span
            class="bg-gradient-to-r h-fit p-1 rounded-md from-amber-500 to-pink-500 text-white font-bold"
            >€</span
          >
        </div>
      </div>

      <div class="form-control">
        <label for="frequency" class="label">
          <span class="label-text font-semibold text-gray-700 text-lg">
            🔄 Fréquence
          </span>
        </label>
        <select
          id="frequency"
          bind:value={frequency}
          class="select select-bordered select-lg bg-white/50 backdrop-blur-sm border-white/30"
        >
          <option>Mensuel</option>
          <option>Annuel</option>
        </select>
      </div>

      <div class="form-control">
        <label for="interest-rate" class="label">
          <span class="label-text font-semibold text-gray-700 text-lg">
            📈 Taux d'intérêt annuel
          </span>
        </label>
        <div class="input-group gap-2 items-center flex">
          <input
            id="interest-rate"
            bind:value={interestRate}
            class="input input-bordered input-lg bg-white/50 backdrop-blur-sm border-white/30"
            type="number"
            min="0"
            max="20"
            step="0.1"
            placeholder="5"
          />
          <span
            class="bg-gradient-to-r h-fit p-1 rounded-md from-amber-500 to-pink-500 text-white font-bold"
            >%</span
          >
        </div>
      </div>

      <div class="form-control">
        <label for="duration" class="label">
          <span class="label-text font-semibold text-gray-700 text-lg">
            ⏰ Durée d'investissement
          </span>
        </label>
        <div class="input-group gap-2 items-center flex">
          <input
            id="duration"
            bind:value={duration}
            class="input input-bordered input-lg bg-white/50 backdrop-blur-sm border-white/30"
            type="number"
            min="1"
            max="50"
            step="1"
            placeholder="20"
          />
          <span
            class="bg-gradient-to-r h-fit p-1 rounded-md from-amber-500 to-pink-500 text-white font-bold"
            >ans</span
          >
        </div>
      </div>
    </div>
  </div>
</div>
