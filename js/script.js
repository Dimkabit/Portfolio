const headerBerger = document.querySelector('.icon-menu');

const headerMenu = document.querySelector('.menu__body');

const boDy = document.querySelector('body');


headerBerger.addEventListener('click', (e) => {
	e.preventDefault();
	headerBerger.classList.add('active');
	headerMenu.classList.add('active');
	boDy.classList.add('lock');
	
});


