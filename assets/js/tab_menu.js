$(function(){
	$('.panel section').hide().eq(0).show();
	$('.tab li').on('click',function(){
		const index =$(this).index();

		$('.tab li').removeClass('active');
		$(this).addClass('active');

		$('.panel section').hide().eq(index).show();
	});
});