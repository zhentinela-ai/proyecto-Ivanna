// crear la función sleep, para que el programa espere un tiempo
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
