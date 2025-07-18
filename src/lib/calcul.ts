export function getResult(p: number, r: number, n: number, t: number) {
  return p * (1 + r / n) ** (n * t);
}

console.log(getResult(1000, 0.07, 1, 25));
