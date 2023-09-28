
const options = {year: 'numeric'}
document.querySelector('#year').textContent = new Date().toLocaleDateString('pt-BR', options);

const oLastModif = new Date(document.lastModified);
document.querySelector('#lastModified').textContent = oLastModif;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');

});

document.querySelectorAll('.navigation').forEach(link => {
    if(link.href === window.location.pathname) {
        link.classList.add('active');
    }
} )