$(function(){

	jQuery(function($){
	   $(".download-form__tel, .feedback-form__tel").mask("+7 (999) 999-99-99");
	});


	$('.generation-block__item-2').hide();
	$('.generation-block__item-3').hide();
	$('.generation-block__item-title-1').click(function(){
		$('.generation-block__item-title-1').addClass('generation-block__item-title_active');
		$('.generation-block__item-title-2').removeClass('generation-block__item-title_active');
		$('.generation-block__item-title-3').removeClass('generation-block__item-title_active');
		$('.generation-block__item-1').fadeIn(300);
		$('.generation-block__item-2').hide();
		$('.generation-block__item-3').hide();
	});
	$('.generation-block__item-title-2').click(function(){
		$('.generation-block__item-title-2').addClass('generation-block__item-title_active');
		$('.generation-block__item-title-1').removeClass('generation-block__item-title_active');
		$('.generation-block__item-title-3').removeClass('generation-block__item-title_active');
		$('.generation-block__item-2').fadeIn(300);
		$('.generation-block__item-1').hide();
		$('.generation-block__item-3').hide();
	});
	$('.generation-block__item-title-3').click(function(){
		$('.generation-block__item-title-3').addClass('generation-block__item-title_active');
		$('.generation-block__item-title-1').removeClass('generation-block__item-title_active');
		$('.generation-block__item-title-2').removeClass('generation-block__item-title_active');
		$('.generation-block__item-3').fadeIn(300);
		$('.generation-block__item-1').hide();
		$('.generation-block__item-2').hide();
	});

	$('.price-slider-list').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		swipe: false,
		touchMove: false,
		variableWidth: true,
		
	});


	$('.stages-item-2').hide();
	$('.stages-item-3').hide();
	$('.stages-item-4').hide();
	$('.stages-item-5').hide();
	$('.stages-number-1').click(function(){
		$('.stages-number-1').addClass('stages-number_active');
		$('.stages-number-1>.stages-number__text').addClass('stages-number__text_active');
		$('.stages-number-1>.stages-number__sub').addClass('stages-number__sub_active');
		$('.stages-number-2').removeClass('stages-number_active');
		$('.stages-number-2>.stages-number__text').removeClass('stages-number__text_active');
		$('.stages-number-2>.stages-number__sub').removeClass('stages-number__sub_active');
		$('.stages-number-3').removeClass('stages-number_active');
		$('.stages-number-3>.stages-number__text').removeClass('stages-number__text_active');
		$('.stages-number-3>.stages-number__sub').removeClass('stages-number__sub_active');
		$('.stages-number-4').removeClass('stages-number_active');
		$('.stages-number-4>.stages-number__text').removeClass('stages-number__text_active');
		$('.stages-number-4>.stages-number__sub').removeClass('stages-number__sub_active');
		$('.stages-number-5').removeClass('stages-number_active');
		$('.stages-number-5>.stages-number__text').removeClass('stages-number__text_active');
		$('.stages-number-5>.stages-number__sub').removeClass('stages-number__sub_active');
		$('.stages-item-1').fadeIn(300);
		$('.stages-item-2').hide();
		$('.stages-item-3').hide();
		$('.stages-item-4').hide();
		$('.stages-item-5').hide();

	});
	$('.stages-number-2').click(function(){
		$('.stages-number-2').addClass('stages-number_active');
		$('.stages-number-2>.stages-number__text').addClass('stages-number__text_active');
		$('.stages-number-2>.stages-number__sub').addClass('stages-number__sub_active');
		$('.stages-number-1').removeClass('stages-number_active');
		$('.stages-number-1>.stages-number__text').removeClass('stages-number__text_active');
		$('.stages-number-1>.stages-number__sub').removeClass('stages-number__sub_active');
		$('.stages-number-3').removeClass('stages-number_active');
		$('.stages-number-3>.stages-number__text').removeClass('stages-number__text_active');
		$('.stages-number-3>.stages-number__sub').removeClass('stages-number__sub_active');
		$('.stages-number-4').removeClass('stages-number_active');
		$('.stages-number-4>.stages-number__text').removeClass('stages-number__text_active');
		$('.stages-number-4>.stages-number__sub').removeClass('stages-number__sub_active');
		$('.stages-number-5').removeClass('stages-number_active');
		$('.stages-number-5>.stages-number__text').removeClass('stages-number__text_active');
		$('.stages-number-5>.stages-number__sub').removeClass('stages-number__sub_active');
		$('.stages-item-2').fadeIn(300);
		$('.stages-item-1').hide();
		$('.stages-item-3').hide();
		$('.stages-item-4').hide();
		$('.stages-item-5').hide();
	});
	$('.stages-number-3').click(function(){
		$('.stages-number-3').addClass('stages-number_active');
		$('.stages-number-3>.stages-number__text').addClass('stages-number__text_active');
		$('.stages-number-3>.stages-number__sub').addClass('stages-number__sub_active');
		$('.stages-number-1').removeClass('stages-number_active');
		$('.stages-number-1>.stages-number__text').removeClass('stages-number__text_active');
		$('.stages-number-1>.stages-number__sub').removeClass('stages-number__sub_active');
		$('.stages-number-2').removeClass('stages-number_active');
		$('.stages-number-2>.stages-number__text').removeClass('stages-number__text_active');
		$('.stages-number-2>.stages-number__sub').removeClass('stages-number__sub_active');
		$('.stages-number-4').removeClass('stages-number_active');
		$('.stages-number-4>.stages-number__text').removeClass('stages-number__text_active');
		$('.stages-number-4>.stages-number__sub').removeClass('stages-number__sub_active');
		$('.stages-number-5').removeClass('stages-number_active');
		$('.stages-number-5>.stages-number__text').removeClass('stages-number__text_active');
		$('.stages-number-5>.stages-number__sub').removeClass('stages-number__sub_active');
		$('.stages-item-3').fadeIn(300);
		$('.stages-item-1').hide();
		$('.stages-item-2').hide();
		$('.stages-item-4').hide();
		$('.stages-item-5').hide();
	});
	$('.stages-number-4').click(function(){
		$('.stages-number-4').addClass('stages-number_active');
		$('.stages-number-4>.stages-number__text').addClass('stages-number__text_active');
		$('.stages-number-4>.stages-number__sub').addClass('stages-number__sub_active');
		$('.stages-number-1').removeClass('stages-number_active');
		$('.stages-number-1>.stages-number__text').removeClass('stages-number__text_active');
		$('.stages-number-1>.stages-number__sub').removeClass('stages-number__sub_active');
		$('.stages-number-2').removeClass('stages-number_active');
		$('.stages-number-2>.stages-number__text').removeClass('stages-number__text_active');
		$('.stages-number-2>.stages-number__sub').removeClass('stages-number__sub_active');
		$('.stages-number-3').removeClass('stages-number_active');
		$('.stages-number-3>.stages-number__text').removeClass('stages-number__text_active');
		$('.stages-number-3>.stages-number__sub').removeClass('stages-number__sub_active');
		$('.stages-number-5').removeClass('stages-number_active');
		$('.stages-number-5>.stages-number__text').removeClass('stages-number__text_active');
		$('.stages-number-5>.stages-number__sub').removeClass('stages-number__sub_active');
		$('.stages-item-4').fadeIn(300);
		$('.stages-item-1').hide();
		$('.stages-item-2').hide();
		$('.stages-item-3').hide();
		$('.stages-item-5').hide();
	});
	$('.stages-number-5').click(function(){
		$('.stages-number-5').addClass('stages-number_active');
		$('.stages-number-5>.stages-number__text').addClass('stages-number__text_active');
		$('.stages-number-5>.stages-number__sub').addClass('stages-number__sub_active');
		$('.stages-number-1').removeClass('stages-number_active');
		$('.stages-number-1>.stages-number__text').removeClass('stages-number__text_active');
		$('.stages-number-1>.stages-number__sub').removeClass('stages-number__sub_active');
		$('.stages-number-2').removeClass('stages-number_active');
		$('.stages-number-2>.stages-number__text').removeClass('stages-number__text_active');
		$('.stages-number-2>.stages-number__sub').removeClass('stages-number__sub_active');
		$('.stages-number-3').removeClass('stages-number_active');
		$('.stages-number-3>.stages-number__text').removeClass('stages-number__text_active');
		$('.stages-number-3>.stages-number__sub').removeClass('stages-number__sub_active');
		$('.stages-number-4').removeClass('stages-number_active');
		$('.stages-number-4>.stages-number__text').removeClass('stages-number__text_active');
		$('.stages-number-4>.stages-number__sub').removeClass('stages-number__sub_active');
		$('.stages-item-5').fadeIn(300);
		$('.stages-item-1').hide();
		$('.stages-item-2').hide();
		$('.stages-item-3').hide();
		$('.stages-item-4').hide();
	});

	$('.feedback-form__social-1-label').click(function(){
		$('.feedback-form__social-1-label').addClass('feedback-form__social-1-label_active');
		$('.feedback-form__social-2-label').removeClass('feedback-form__social-2-label_active');
		$('.feedback-form__social-3-label').removeClass('feedback-form__social-3-label_active');
	});
	$('.feedback-form__social-2-label').click(function(){
		$('.feedback-form__social-2-label').addClass('feedback-form__social-2-label_active');
		$('.feedback-form__social-1-label').removeClass('feedback-form__social-1-label_active');
		$('.feedback-form__social-3-label').removeClass('feedback-form__social-3-label_active');
	});
	$('.feedback-form__social-3-label').click(function(){
		$('.feedback-form__social-3-label').addClass('feedback-form__social-3-label_active');
		$('.feedback-form__social-1-label').removeClass('feedback-form__social-1-label_active');
		$('.feedback-form__social-2-label').removeClass('feedback-form__social-2-label_active');
	});


	$('.download-form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			// wp-content/themes/auto152-theme/
			url: "mailer/price.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("form").trigger("reset");
		});
		return false;
	});
	$('.feedback-form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			// wp-content/themes/auto152-theme/
			url: "mailer/feedback.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("form").trigger("reset");
		});
		return false;
	});



});