
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


const currentPageURL = window.location.href;

const navLinks = document.querySelectorAll('nav a');

for(var i=0; i< navLinks.length; i++) 
{
    if(navLinks[i].href === currentPageURL)
    {
        navLinks[i].classList.add('active');
    }
}