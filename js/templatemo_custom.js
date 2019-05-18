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

	// Cache selectors
	var mainMenuItems = $(".main_menu > li");
	var menuItems = $("#nav > li");

	function checkIfScrollNavigation() {
		var hyperlink = $("a", this);
		if (hyperlink.attr("href").search("#") != -1)
			return this;
	}

	var scrollItems = menuItems.map(checkIfScrollNavigation);
	var scrollMainMenuItems = mainMenuItems.map(checkIfScrollNavigation);

	function onScroll() {
		// Get container scroll position
		var fromTop = $(this).scrollTop();
		
		// Get id of current scroll item
		var cur = scrollItems.map(function() {
			var elementId = $("a", this).attr("href");

			if ($(elementId).offset().top <= fromTop + 10)
				return this;
		});

		// Get the last element
		cur = cur.last();

		if (!cur.hasClass("current"))
		{
			// Set/remove active class
			cur.addClass("current").siblings().removeClass("current");
		}      
	}

	// Bind to scroll
	$(window).resize(onScroll);
	$(window).scroll(onScroll);

	function goToByScroll(id) {
		id = id.replace("#", "");
		// Scroll
		$('html,body').animate({
			scrollTop: $("#" + id).offset().top
		},'slow');
	}
	
	function animateScroll(e) {
		var hyperlink = $("a", this);

		if (hyperlink.attr("href").search("#") == -1)
			return;

		// Prevent a page reload when a link is pressed
		e.preventDefault();
		// Call the scroll function
		goToByScroll(hyperlink.attr("href"));
	}

	scrollItems.click(animateScroll);
	scrollMainMenuItems.click(animateScroll);

	/*------------------------------------------------------------------------*/
	/*	1.	Plugins Init
	/*------------------------------------------------------------------------*/

	/************** MixItUp Plugin *********************/
	$('#Grid').mixitup({
		effects: ['fade', 'grayscale'],
		easing: 'snap',
		transitionSpeed: 800
	});


	/************** LightBox *********************/
	$(function () {
		$('[data-rel="lightbox"]').lightbox();
	});


	/*------------------------------------------------------------------------*/
	/*	2.	Site Specific Functions
	/*------------------------------------------------------------------------*/


	/************** Responsive Navigation *********************/

	$(document).mouseup(function (e) {
		var menu = $('.responsive-navigation');

		// if the target of the click isn't the container
		// nor a descendant of the container
		if (!menu.is(e.target) && menu.has(e.target).length === 0) 
		{
			$('.responsive_menu').hide();
			e.preventDefault();
		}	
	});

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