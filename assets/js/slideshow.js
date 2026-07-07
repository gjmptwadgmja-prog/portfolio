$(function(){
	const $slideShow = $('#slideShow');

	$slideShow.find('li:gt(0)').hide();

	setInterval(() => {
		const $first = $slideShow.find('li:first');

			$first.stop(true,true)
			.fadeOut(1500)
			.next('li')
			.stop(true,true)
			.fadeIn(1500)
			.end()
			.appendTo($slideShow);
	},4000);
});