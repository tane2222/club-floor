// JavaScript Document

$(function() {

	var modal_flg = false;	
	var illust = [];
	var ability = [];

	
	for (i = 0; i <= 32; i++) {
		illust[i] = 'img/chara/' + (6659 + i) + '.png'; 
	}

	for (i = 0; i < illust.length; i++){
			var img = document.createElement('img');
		img.src = illust[i];
	}

	for (i = 0; i <= 32; i++) {
		ability[i] = 'img/ability/' + (6659 + i) + '.jpg'; 
	}

	for (i = 0; i < ability.length; i++){
			var img = document.createElement('img');
			img.src = ability[i];
	}

if (navigator.userAgent.indexOf('iPhone')>0 ||
    navigator.userAgent.indexOf('iPod')>0 ||
    navigator.userAgent.indexOf('iPad')>0) {
        $('.download_Andr,.download_Kndl').css('display','none');
    	$('.download_box ul').css('max-width','160px');
    	$('.download_box li').css('margin-right','0');
}
if (
  	navigator.userAgent.indexOf('Silk')>0 ||
    navigator.userAgent.indexOf('kindle')>0 ||
    navigator.userAgent.indexOf('Android')>0) {
  	$('.download_ios').css('display','none');
    $('.download_box ul').css('max-width','300px');
}
	
$('#list_chara li a').click(function() {
	if(modal_flg === false) {
		var chara_id = '#' + $(this).data('id');
		$(chara_id + ' .cho_kakusei_box li:first-child').show();		
		$(chara_id + '.modal-content')
			.before('<div class="over-ray"><div>')
			.fadeIn(500);
		$('.modal-content .btn li a[data-btn="chara_01"]').find('img').attr('src','img/btn_chara_01_on.gif');
		modal_flg = true;
	}	
	return false;		
});

$('.btn_ability a').click(function() {
	if(modal_flg === false) {
		var ability_id = '#' + $(this).data('id');		
		$(ability_id + '.modal-content')
			.before('<div class="over-ray"><div>')
			.fadeIn(500);
		modal_flg = true;
	}	
});	

function modal_init() {
	$('.modal-content .btn li a[data-btn="chara_01"]').find('img').attr('src','img/btn_chara_01.gif'),
	$('.modal-content .btn li a[data-btn="chara_02"]').find('img').attr('src','img/btn_chara_02.gif'),
	$('.modal-content .btn li a[data-btn="chara_03"]').find('img').attr('src','img/btn_chara_03.gif'),
	$('.modal-content .btn li a[data-btn="chara_04"]').find('img').attr('src','img/btn_chara_04.gif'),
	$('.modal-content .btn li a').removeClass('active'),
	$('.modal-content .btn li a[data-btn="chara_01"]').addClass('active');
}

function btn_init() {
	$('.modal-content .btn li a[data-btn="chara_01"]').find('img').attr('src','img/btn_chara_01.gif');
	$('.modal-content .btn li a[data-btn="chara_02"]').find('img').attr('src','img/btn_chara_02.gif');
	$('.modal-content .btn li a[data-btn="chara_03"]').find('img').attr('src','img/btn_chara_03.gif');
	$('.modal-content .btn li a[data-btn="chara_04"]').find('img').attr('src','img/btn_chara_04.gif');
	$('.modal-content .btn li a').removeClass('active');

}

$(document).on('click','.over-ray',(function() {
	if(modal_flg === true) {
		var this_first_id = $(this).next('.modal-content').find('ul').find('li:first-child').find('a').data('id');
		$('.modal-content').fadeOut(500);
		$('.over-ray').fadeOut(500).queue(function(){
			if(this_first_id !== undefined) {
			$('.modal-content .btn li a[data-btn="chara_01"]').find('img').attr('src','img/btn_chara_01_on.gif');
			$(this).next('.modal-content').find('.illust').children('img').attr('src','img/chara/'+ this_first_id +'.png');
			$(this).next('.modal-content').find('.ability_img').children('img').attr('src','img/ability/'+ this_first_id +'.jpg');
			$('.cho_kakusei').hide();
			$('.cho_kakusei[data-id="'+ this_first_id +'"]').show();
			$(this).remove();
			modal_init();
			}
		})
		modal_flg = false;
		return false;
	}
})
);

$(document).on('click','.modal_close',(function() {
	if(modal_flg === true) {
		var this_first_id = $(this).prev('.btn').find('li:first-child').find('a').data('id');
		$('.modal-content').fadeOut(500);
		$('.over-ray').fadeOut(500).queue(function(){
			if(this_first_id !== undefined) {
				$('.modal-content .btn li a[data-btn="chara_01"]').find('img').attr('src','img/btn_chara_01_on.gif');
				$(this).next('.modal-content').find('.illust').children('img').attr('src','img/chara/'+ this_first_id +'.png');
				$(this).next('.modal-content').find('.ability_img').children('img').attr('src','img/ability/'+ this_first_id +'.jpg');
				$('.cho_kakusei').hide();
				$('.cho_kakusei[data-id="'+ this_first_id +'"]').show();
				$('.over-ray').remove();
				modal_init();
			}
		})
		modal_flg = false;
		return false;
	}
})
);
	
$('#modal_illust .btn li a').not(':animated').click(function() {
	if(!$(this).hasClass('active')) {
		var g_mon_id = $(this).data('id');
		var btn_src =  $(this).find('img').attr('src');
		var btn_src_arr = $(this).find('img').attr('src').split('.');
		var btn_src_on = btn_src_arr[0] + '_on.gif';
		btn_src_arr[0] = btn_src_arr[0].split('_');

		if(!$(this).hasClass('active')) {
			$('#modal_illust .btn li a').removeClass('active');
			$('#modal_ability .btn li a').removeClass('active');
			$(this).find('img').attr('src', btn_src_on);
			$(this).parents('.modal-content').find('.illust').css('opacity','0');
			$(this).parents('.modal-content').find('.illust').children('img').attr('src','img/chara/'+ g_mon_id +'.png');
			$(this).parents('.modal-content').find('.illust').animate({'opacity':'1'},500);		
			$(this).addClass('active');
			switch(btn_src_arr[0][2]) {
				case '01':
					btn_init();
					$(this).find('img').attr('src','img/btn_chara_01_on.gif');
					$(this).addClass('active');
					break;
				case '02':
					btn_init();
					$(this).find('img').attr('src','img/btn_chara_02_on.gif');
					$(this).addClass('active');
					break;
				case '03':
					btn_init();
					$(this).find('img').attr('src','img/btn_chara_03_on.gif');
					$(this).addClass('active');
					break;
				case '04':
					btn_init();
					$(this).find('img').attr('src','img/btn_chara_04_on.gif');
					$(this).addClass('active');
					break;
				}
		} 
	}
	return false;
});
	
$('#modal_ability .btn li a').not(':animated').click(function() {
		if(!$(this).hasClass('active')) {
		var g_mon_id = $(this).data('id');
		var btn_src_arr = $(this).find('img').attr('src').split('.');
		var btn_src_on = btn_src_arr[0] + '_on.jpg';
		btn_src_arr[0] = btn_src_arr[0].split('_');
		$('.cho_kakusei').hide();
		$('.cho_kakusei[data-id="'+ g_mon_id +'"]').show();
		$(this).parents('.modal-content').find('.ability_box').css('opacity','0');
		$(this).parents('.modal-content').find('.ability_img').children('img').attr('src','img/ability/'+ g_mon_id +'.jpg');
		$(this).parents('.modal-content').find('.ability_box').animate({'opacity':'1'},500);
		switch(btn_src_arr[0][2]) {
			case '01':
				btn_init();
				$(this).find('img').attr('src','img/btn_chara_01_on.gif');
				$(this).addClass('active');
				break;
			case '02':
				btn_init();
				$(this).find('img').attr('src','img/btn_chara_02_on.gif');
				$(this).addClass('active');
				break;
			case '03':
				btn_init();
				$(this).find('img').attr('src','img/btn_chara_03_on.gif');
				$(this).addClass('active');
				break;
			case '04':
				btn_init();
				$(this).find('img').attr('src','img/btn_chara_04_on.gif');
				$(this).addClass('active');
				break;
			}		
		}
	return false;
});
	
var nav = $('#nav_list').offset().top;
var navHeight = $('#nav_list').outerHeight();

$(window).on('load scroll',function() {

	var page_top = $(window).scrollTop();

	if( page_top >= 500) {
		$('#pagetop').fadeIn(500);
	} else {
		$('#pagetop').fadeOut(500);
	}

	if(page_top > nav) {
		$('#nav_list').addClass('fixed');
		$('#head').css('margin-top', navHeight);
	}	else {
	 	$('#nav_list').removeClass('fixed');
		$('#head').css('margin-top', 0);
	}
});
	
$('#nav_list a').click(function() {
		var nav_id = $(this).attr('id');
		var list_chara_top = $('#list_chara').offset().top;
		var list_dungeon_top = $('#list_dungeon').offset().top;
		var list_exchange_top = $('#others').offset().top;
	
	switch(nav_id) {
		case 'nav01':
			$(window).scrollTop(list_chara_top - navHeight);
			break;
		case 'nav02':
			$(window).scrollTop(list_dungeon_top - navHeight);
			break;
		case 'nav03':
			$(window).scrollTop(list_exchange_top - navHeight);
			break;


	}	
});	

var urlsearch = location.hash;
var howto_param = '#howto';

if(urlsearch === howto_param) {
	$('#head').css('margin-top', navHeight);
}

var urlsearch = location.hash;
var once_param = '#once';

if(urlsearch === once_param) {
	$('#head').css('margin-top', navHeight);
}


$('#pagetop').click(function(){
  $('body,html').animate({
  scrollTop: 0},500);
  return false;
});	

$('.overlay').fadeOut(500, function(){
	$(this).remove();
});

});

