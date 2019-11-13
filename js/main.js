$(document).ready(function (){
  'use strict';

  var navLink = $('.navigation-bar .nav-link');
  // Add Active Class On Navbar Link And Remove it From Siblings

  navLink.on('click', function (){
    
    // This method (below) is better in case of the HTML structure will be change (may be happen by Teamwork In the future).
    // =========================
    // $('.navigation-bar .nav-link.active').removeClass('active');

    // $(this).addClass('active');
    // =========================

    $(this).addClass('active').parent().siblings().find('a').removeClass('active');

  });

  // Sync active class with links while scrolling the window
  $(window).on('scroll', function (){
    $('.block').each(function (){
      if ($(window).scrollTop() > $(this).offset().top) {

        var blockID = $(this).attr('id');

        /*
        This if condition (below ↓) just to prevent the browser for checking if the class 'active' is 
        exist or not in the links in the navigation bar and to enhance or improve the performance a little bit.
        */
      if (!navLink.hasClass('active')) {

        navLink.removeClass('active');

          $('.navigation-bar .nav-link[data-scroll="' + blockID + '"]').addClass('active');

          // Here we will try to write the above line using the navLink variable, but we will do that later; Ansha'a Aallah (If Allah wishes).

        }

      }
    });

    // Making the navbar background transparent while scrolling the window
    var navbar = $('nav.navbar');

    if ($(window).scrollTop() >= navbar.height()) {

      navbar.addClass('bg-light');
      navLink.css('color', '#000');
      navbar.css('boxShadow', '0px 0px 10px 0px #000');
      $('nav img').attr('src', 'images/logo.webp');

    } else {
      navbar.removeClass('bg-light');
      navLink.css('color', '#fff');
      navbar.css('boxShadow', 'none');
      $('nav img').attr('src', 'images/logo-alt.webp');
    }

  });

  $('.navigation-bar .nav-link').on('click', function () {

    $('html, body').animate({

      scrollTop: $('#' + $(this).data('scroll')).offset().top + 1

    }, 1000);

  });

  // Sync Navbar Links With Sections

  $('.block').each(function () {

    if ($(window).scrollTop() > $(this).offset().top) {

      var blockID = $(this).attr('id');

      /*
      This if condition (below ↓) just to prevent the browser for checking if the class 'active' is 
      exist or not in the links in the navigation bar and to enhance or improve the performance a little bit.
      */
      if (!$('.navigation-bar .nav-link').hasClass('active')) {

        $('.navigation-bar .nav-link').removeClass('active');

        $('.navigation-bar .nav-link[data-scroll="' + blockID + '"]').addClass('active');

      }

    }

  });

  // Back to top button
  $('.back-to-top').on('click', function (){

    'use strict';

    $('html, body').animate({scrollTop: 0}, 600);

  });

});