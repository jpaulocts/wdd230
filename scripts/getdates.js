
const options = {year: 'numeric'}
document.querySelector('#year').textContent = new Date().toLocaleDateString('pt-BR', options);

const oLastModif = new Date(document.lastModified);
document.querySelector('#modified').textContent = oLastModif;