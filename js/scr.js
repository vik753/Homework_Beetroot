$(function () {
	const btnRight = $('.btn-right')
		, btnLeft = $('.btn-left')
		, btn = $('.btn')
		, slider = $('.slider')
		, containerSlider = $('.container-slider');
	
	containerSlider.css('overflow', 'hidden');
	slider.find('li').stop(true, true).fadeOut();//http://api.jquery.com/stop/
	slider.find('li:first').stop(true, true).fadeIn();
	
	
	btnRight.on('click', function () {
		event.preventDefault();
		slider.find('li:first').stop(true, true).fadeOut(700);
		let firstImg = slider.find('li:first').clone();
		slider.find('li:first').remove();
		slider.append(firstImg);
		slider.find('li:last').stop(true, true).fadeOut();
		slider.find('li:first').stop(true, true).fadeIn(700);
		
		
	});
	
	btnLeft.on('click', function () {
		event.preventDefault();
		let lastImg = slider.find('li:last').clone();
		slider.find('li:last').remove();
		slider.find('li:first').stop(true, true).fadeOut(700);
		slider.prepend(lastImg);
		slider.find('li:first').stop(true, true).fadeIn(700);
	});
	
});
