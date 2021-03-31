export default function debounce(callback, delay) {
  let timer = 0; // variavel para armazenar timer
  return (...args) => {
    // limpa o timer
    if (timer) clearTimeout(timer);
    // armazena o timer novamente
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  }
}