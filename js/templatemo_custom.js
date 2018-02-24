/*-------------------------------------------------------------------------
 * RENDIFY - Custom jQuery Scripts
 * ------------------------------------------------------------------------

	1.	Plugins Init
	2.	Site Specific Functions
	3.	Shortcodes
	4.      Other Need Scripts (Plugins config, themes and etc)
	
-------------------------------------------------------------------------*/
"use strict";


jQuery(document).ready(function ($) {


	function goToByScroll(id) {
		id = id.replace("#", "");
		// Scroll
		$('html,body').animate({
			scrollTop: $("#" + id).offset().top
		},'slow');
	}
	
	$("#nav > li > a").click(function (e) {
		if ($(this).attr("href").search("#") == -1)
			return;
		// Prevent a page reload when a link is pressed
		e.preventDefault();
		// Call the scroll function
		goToByScroll($(this).attr("href"));
	});
	

	/*------------------------------------------------------------------------*/
	/*	1.	Plugins Init
	/*------------------------------------------------------------------------*/

	/************** MixItUp Plugin *********************/
	$('#Grid').mixitup({
		effects: ['fade', 'grayscale'],
		easing: 'snap',
		transitionSpeed: 800
	});



	/************** Nice Scroll Plugin *********************/
	$("html").niceScroll({
		cursorcolor: '#a71e2b',
		cursorborder: 0,
		zindex: 99999,
	});

	/************** LightBox *********************/
	$(function () {
		$('[data-rel="lightbox"]').lightbox();
	});


	/*------------------------------------------------------------------------*/
	/*	2.	Site Specific Functions
	/*------------------------------------------------------------------------*/


	/************** Responsive Navigation *********************/

	$('.menu-toggle-btn').click(function () {
		$('.responsive_menu').stop(true, true).slideToggle();
	});

	$(".responsive_menu a").click(function () {
		$('.responsive_menu').hide();
	});



	/************** Open Filters on gallery page *********************/
	$(".toggle-filter").click(function () {
		$(".filter-controls").slideToggle();
		return false;
	});

	
	/************** Services Offer Effect *********************/
	$('.services .header .service-header').hover(function () {
		var t = $(this);
		t.find('h4').hide();
		$(this).parent().find('.header-bg').stop(true, true).animate({
			width: '100%'
		}, 'fast', function () {
			t.find('h4').addClass('active').fadeIn('fast')
		})
	}, function () {
		var t = $(this);
		t.find('h4').hide();
		t.parent().find('.header-bg').stop(true, true).animate({
			width: 60
		}, 'fast', function () {
			t.find('h4').removeClass('active').fadeIn('fast')
		});
	});

});