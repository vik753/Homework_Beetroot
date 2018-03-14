$(function () {
	const btnRight = $('.btn-right')
		, btnLeft = $('.btn-left')
		, btn = $('.btn')
		, slider = $('.slider')
		, containerSlider = $('.container-slider');
	let intervalId;
	
	containerSlider.css('overflow', 'hidden');
	slider.find('li').stop(true, true).fadeOut();//http://api.jquery.com/stop/
	slider.find('li:first').stop(true, true).fadeIn();
	
	autoSlide();
	
	function autoSlide() {
		clearInterval(intervalId);
		intervalId = setInterval(toLeft, 5000);
	}
	
	
	btnRight.on('click', () => {
		event.preventDefault();
		toRight();
		clearInterval(intervalId);
		intervalId = setInterval(toRight, 5000);
	});
	
	btnLeft.on('click', () => {
		event.preventDefault();
		toLeft();
		clearInterval(intervalId);
		intervalId = setInterval(toLeft, 5000);
	});
	
	
	function toLeft() {
		slider.find('li:first').stop(true, true).fadeOut(500);
		let lastImg = slider.find('li:last').clone();
		slider.find('li:last').remove();
		slider.prepend(lastImg);
		slider.find('li:first').stop(true, true).fadeIn(500);
	}
	
	function toRight() {
		slider.find('li:first').stop(true, true).fadeOut(500);
		let firstImg = slider.find('li:first').clone();
		slider.find('li:first').remove();
		slider.append(firstImg);
		slider.find('li:last').stop(true, true).fadeOut();
		slider.find('li:first').stop(true, true).fadeIn(500);
	}
	
});

