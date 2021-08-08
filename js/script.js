const headerBerger = document.querySelector('.icon-menu');

const headerMenu = document.querySelector('.menu__body');
const headerLink = document.querySelectorAll('.menu__link')
const boDy = document.querySelector('body');




headerBerger.addEventListener('click', (e) => {
	e.preventDefault();
	headerBerger.classList.toggle('active');
	headerMenu.classList.toggle('active');
	boDy.classList.toggle('lock');
	
});

