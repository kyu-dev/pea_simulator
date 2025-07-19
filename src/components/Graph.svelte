<script lang="ts">
  import { Chart, registerables } from "chart.js";

  interface Props {
    result: { final: number; history: number[] };
    initialCapital: number;
    duration: number;
    regularContribution: number;
  }

  let { result, initialCapital, duration, regularContribution }: Props =
    $props();
  let canvasElement: HTMLCanvasElement;
  let chartInstance: Chart | null = null;

  Chart.register(...registerables);

  function createChart() {
    if (!canvasElement || !result?.history?.length) return;

    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = canvasElement.getContext("2d");
    if (!ctx) return;

    // Préparer les données simplifiées
    const labels: string[] = [];
    const capitalData: number[] = [];
    const contributionsData: number[] = [];

    for (let year = 0; year <= duration; year++) {
      labels.push(`Année ${year}`);

      if (year === 0) {
        capitalData.push(initialCapital);
        contributionsData.push(initialCapital);
      } else {
        const historyIndex = year * 12 - 1;
        capitalData.push(
          historyIndex < result.history.length
            ? Math.round(result.history[historyIndex])
            : Math.round(result.final)
        );
        contributionsData.push(
          initialCapital + year * 12 * regularContribution
        );
      }
    }

    chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "💰 Capital total",
            data: capitalData,
            borderColor: "rgb(245, 158, 11)",
            backgroundColor: "rgba(245, 158, 11, 0.1)",
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointRadius: 4,
          },
          {
            label: "📈 Contributions",
            data: contributionsData,
            borderColor: "rgb(236, 72, 153)",
            borderWidth: 2,
            borderDash: [5, 5],
            fill: false,
            tension: 0.4,
            pointRadius: 3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "📊 Évolution de votre PEA",
            font: { size: 16 },
            color: "rgb(120, 53, 15)",
          },
          legend: {
            display: true,
            position: "top",
          },
          tooltip: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            callbacks: {
              label: function (context) {
                return (
                  context.dataset.label +
                  ": " +
                  context.parsed.y.toLocaleString("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                    maximumFractionDigits: 0,
                  })
                );
              },
            },
          },
        },
        scales: {
          y: {
            ticks: {
              callback: function (value) {
                return (value as number).toLocaleString("fr-FR", {
                  style: "currency",
                  currency: "EUR",
                  maximumFractionDigits: 0,
                });
              },
            },
          },
        },
      },
    });
  }

  $effect(() => {
    if (result && canvasElement) {
      createChart();
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
      }
    };
  });
</script>

<div
  class="card bg-white/30 backdrop-blur-lg border border-white/20 shadow-xl w-full mx-auto p-6 hover:bg-white/40 transition-all duration-300"
>
  <h2
    class="text-3xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-6 text-center"
  >
    🔎 L'évolution de votre richesse
  </h2>

  <div class="relative w-full h-80 lg:h-96">
    <canvas
      bind:this={canvasElement}
      class="w-full h-full rounded-lg bg-white/50"
    ></canvas>
  </div>

  <div class="mt-6 p-4 bg-white/20 backdrop-blur-sm rounded-lg">
    <div class="grid grid-cols-2 gap-4 text-sm">
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 rounded-full bg-amber-500"></div>
        <span class="font-semibold">Votre fortune totale</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-1 border-2 border-dashed border-pink-500"></div>
        <span class="font-semibold">Vos versements</span>
      </div>
    </div>

    <div
      class="mt-4 text-center p-3 bg-gradient-to-r from-green-100/50 to-amber-100/50 rounded"
    >
      <div class="text-2xl font-bold text-green-800">
        {Math.round(
          result.final - (initialCapital + duration * 12 * regularContribution)
        ).toLocaleString("fr-FR", {
          style: "currency",
          currency: "EUR",
          maximumFractionDigits: 0,
        })}
      </div>
      <div class="text-sm text-green-700">
        🎉 Vos gains purs grâce aux intérêts composés !
      </div>
    </div>
  </div>
</div>
