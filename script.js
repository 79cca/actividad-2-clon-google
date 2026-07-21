const formulario = document.querySelector('#formulario-busqueda');
const entrada = document.querySelector('#busqueda');
const borrar = document.querySelector('#borrar');

entrada.addEventListener('input', () => {
  borrar.style.display = entrada.value ? 'block' : 'none';
});

borrar.addEventListener('click', () => {
  entrada.value = '';
  borrar.style.display = 'none';
  entrada.focus();
});

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const consulta = entrada.value.trim();
  if (consulta) location.href = `https://www.google.com/search?q=${encodeURIComponent(consulta)}`;
});

document.querySelector('#suerte').addEventListener('click', () => {
  location.href = 'https://www.google.com/doodles';
});
