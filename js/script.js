$(function(){
 
	$('.container-title').on('mouseenter', openContext);
	
	function openContext() {
		
		const $this = $(this);
		$this.parent().siblings().find('.container-article').stop(true,true).slideUp(1500);
		$this.next('.container-article').stop(true,true).slideDown();
	}
	
	
});
