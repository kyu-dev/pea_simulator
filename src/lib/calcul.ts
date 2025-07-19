export function getResult(
  initialCapital: number,
  regularContribution: number,
  frequency: string,
  interestRate: number,
  duration: number
) {
  if (
    initialCapital < 0 ||
    regularContribution < 0 ||
    !frequency ||
    interestRate < 0 ||
    duration <= 0
  ) {
    return { final: 0, history: [] };
  }

  // Si pas de capital initial et pas de versements, pas de calcul possible
  if (initialCapital === 0 && regularContribution === 0) {
    return { final: 0, history: [] };
  }

  // Conversion du taux d'intérêt en décimal
  const rate = interestRate / 100;

  // Détermination des fréquences
  const compoundFreq = 12; // Capitalisation mensuelle
  const contributionFreq = frequency === "Mensuel" ? 12 : 1;

  // Calcul direct
  const totalPeriods = compoundFreq * duration;
  const contributionInterval = compoundFreq / contributionFreq;
  const ratePerPeriod = rate / compoundFreq;

  let capital = initialCapital;
  const history: number[] = [];

  for (let i = 1; i <= totalPeriods; i++) {
    // Ajouter les intérêts
    capital *= 1 + ratePerPeriod;

    // Ajouter le versement si c'est le bon moment
    if (i % contributionInterval === 0) {
      capital += regularContribution;
    }

    history.push(capital);
  }

  return {
    final: capital,
    history,
  };
}
