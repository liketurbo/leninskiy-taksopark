export default (rem: number) =>
  rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
