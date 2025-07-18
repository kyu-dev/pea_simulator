export function simulateCompoundInterest({
  initial,
  rate,
  compoundFreq,
  duration,
  contribution,
  contributionFreq,
}: {
  initial: number;
  rate: number; // ex: 0.05
  compoundFreq: number; // ex: 12
  duration: number; // en années
  contribution: number; // montant de l'apport périodique
  contributionFreq: number; // ex: 4 pour versement trimestriel
}) {
  const totalPeriods = compoundFreq * duration;
  const contributionInterval = compoundFreq / contributionFreq;
  const ratePerPeriod = rate / compoundFreq;

  let capital = initial;
  const history: number[] = [];

  for (let i = 1; i <= totalPeriods; i++) {
    // Ajouter les intérêts
    capital *= 1 + ratePerPeriod;

    // Ajouter le versement si c'est le bon moment
    if (i % contributionInterval === 0) {
      capital += contribution;
    }

    history.push(capital);
  }

  return {
    final: capital,
    history,
  };
}

export function getResult(
  initialCapital: number,
  regularContribution: number,
  frequency: string,
  interestRate: number,
  duration: number
) {
  // Conversion du taux d'intérêt en décimal
  const rate = interestRate / 100;

  // Détermination des fréquences
  const compoundFreq = 12; // Capitalisation mensuelle
  const contributionFreq = frequency === "Mensuel" ? 12 : 1;

  return simulateCompoundInterest({
    initial: initialCapital,
    rate,
    compoundFreq,
    duration,
    contribution: regularContribution,
    contributionFreq,
  });
}
