//**** Menu *****// 
((d) => {

	const $btnMenu = d.querySelectorAll('.menu-btn');
	const $menu = d.querySelector('.menu');

	// Abrir y cerrar menu :D
	$btnMenu.forEach(btn => { 
		btn.addEventListener('click', () => {
			// Mostar el menu
			$menu.classList.toggle('is-active');
		})
	});

	// Cerrar menu al dar click en el enlace
	d.addEventListener('click', e => {

		if (!e.target.matches(".menu a")) return false;
		// Cerrar menu...
		$menu.classList.remove('is-active');
	});
	

})(document)