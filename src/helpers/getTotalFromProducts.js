export const getTotalFromProducts = (arr) => {
  const costs = arr.map((e) => e.cost)
  const total = costs.reduce((a, b) => a + b, 0)
  return total
}
