export function formatNumber(number: number) {
  return Math.trunc(number)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
