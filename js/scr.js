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
		let firstImg = slider.find('li:first').clone();
		firstImg.stop(true, true).fadeOut();
		slider.append(firstImg);
		slider.find('li:first').stop(true, true).fadeOut();
		slider.find('li:first').remove();
		slider.find('li:first').stop(true ,true).fadeIn();
	});
	
	btnLeft.on('click', function () {
		event.preventDefault();
		let lastImg = slider.find('li:last').clone();
		slider.find('li:last').remove();
		slider.find('li:first').stop(true, true).fadeOut();
		slider.prepend(lastImg);
		slider.find('li:first').stop(true, true).fadeIn();
		console.log("left done");
	});
	
});
