/* ------------------------------------------*/
// 
/* ------------------------------------------*/

window._uac={};var ua=window.navigator.userAgent.toLowerCase();var ver=window.navigator.appVersion.toLowerCase();_uac.browser=(function(){if(ua.indexOf("edge")!==-1){return"edge"}else{if(ua.indexOf("iemobile")!==-1){return"iemobile"}else{if(ua.indexOf("trident/7")!==-1){return"ie11"}else{if(ua.indexOf("msie")!==-1&&ua.indexOf("opera")===-1){if(ver.indexOf("msie 6.")!==-1){return"ie6"}else{if(ver.indexOf("msie 7.")!==-1){return"ie7"}else{if(ver.indexOf("msie 8.")!==-1){return"ie8"}else{if(ver.indexOf("msie 9.")!==-1){return"ie9"}else{if(ver.indexOf("msie 10.")!==-1){return"ie10"}}}}}}else{if(ua.indexOf("chrome")!==-1&&ua.indexOf("edge")===-1){return"chrome"}else{if(ua.indexOf("safari")!==-1&&ua.indexOf("chrome")===-1){return"safari"}else{if(ua.indexOf("opera")!==-1){return"opera"}else{if(ua.indexOf("firefox")!==-1){return"firefox"}else{return"unknown_browser"}}}}}}}}})();_uac.device=(function(){if(ua.indexOf("iphone")!==-1||ua.indexOf("ipod")!==-1){return"iphone"}else{if(ua.indexOf("ipad")!==-1){return"ipad"}else{if(ua.indexOf("android")!==-1){return"android"}else{if(ua.indexOf("windows")!==-1&&ua.indexOf("phone")!==-1){return"windows_phone"}else{return""}}}}})();_uac.iosVer=(function(){if(/iP(hone|od|ad)/.test(navigator.platform)){var b=(navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);var a=[parseInt(b[1],10),parseInt(b[2],10),parseInt(b[3]||0,10)];return a[0]}else{return 0}})();_uac.isIE=(_uac.browser.substr(0,2)==="ie"&&_uac.browser!=="iemobile");_uac.isiOS=(_uac.device==="iphone"||_uac.device==="ipad");_uac.isMobile=(ua.indexOf("mobi")!==-1||_uac.device==="iphone"||(_uac.device==="windows_phone"&&ua.indexO("wpdesktop")===-1)||_uac.device==="iemobile");_uac.isTablet=(_uac.device==="ipad"||(_uac.device==="android"&&!_uac.isMobile));_uac.isTouch=("ontouchstart" in window);_uac.isModern=!(_uac.browser==="ie6"||_uac.browser==="ie7"||_uac.browser==="ie8"||_uac.browser==="ie9"||(0<_uac.iosVer&&_uac.iosVer<8));var homeClass=function(){var a=" ";a+=(_uac.browser!=="")?_uac.browser+" ":"browser-unknown ",a+=(_uac.device!=="")?_uac.device+" ":"device-unknown ",a+=(_uac.isMobile)?"sp ":"pc ",a+=(_uac.isiOS)?"ios ":"",a+=(_uac.isIE)?"ie ":"",a+=(_uac.isModern)?"modern ":"old ";return a};document.addEventListener("DOMContentLoaded",function(){document.documentElement.className+=homeClass()});Pace.on("done",function(){$(".wrap").addClass("is-shown");$(".wrap").on("transitionend webkitTransitionEnd",function(){$(".keyvisual-slide").slick({infinite:true,slidesToShow:1,arrows:false,fade:true,autoplay:true,autoplaySpeed:3000,speed:1200});$(".keyvisual").addClass("is-shown");$(".header").addClass("is-shown")})});$(function(){$('a[href^="#"]').click(function(){var c=500;var b=$(this).attr("href");var d=$(b=="#"||b==""?"html":b);var a=d.offset().top;$("html, body").animate({scrollTop:a},c,"swing");return false});$(".parent-slide").on("init",function(b,a){$(this).append('<div class="slick-counter dosis scroll"><span class="current parent-current"></span> / <span class="total parent-total"></span></div>');$(".parent-current").text(a.currentSlide+1);$(".parent-total").text(a.slideCount)});$(".parent-slide").slick({infinite:true,slidesToShow:3,arrows:true,adaptiveHeight:true,responsive:[{breakpoint:768,settings:{slidesToShow:1}}]}).on("beforeChange",function(b,a,d,c){$(".parent-current").text(c+1)});$(".facility-slide").on("init",function(b,a){$(this).append('<div class="slick-counter dosis scroll"><span class="current facility-current"></span> / <span class="total facility-total"></span></div>');$(".facility-current").text(a.currentSlide+1);$(".facility-total").text(a.slideCount)});$(".facility-slide").slick({arrows:true}).on("beforeChange",function(b,a,d,c){$(".facility-current").text(c+1)});$(".method-img").each(function(){$(this).on("animationend webkitAnimationEnd",function(){$(this).addClass("is-active")})});$(".movie-play").click(function(){$(this).modal({fadeDuration:250});return false})});var header=$(".header");$(window).on("load scroll",function(){$(".scroll").each(function(){add_class_in_scrolling($(this))});var b=$(this).scrollTop();var a=$(".keyvisual").outerHeight();var c=a/2;if(b>c){header.addClass("is-half")}else{header.removeClass("is-half")}if(b>a){header.addClass("is-active")}else{header.removeClass("is-active")}});function add_class_in_scrolling(c){var b=$(window).scrollTop();var a=$(window).height();var d=b+a-200;if(c.offset().top<d){c.addClass("is-shown")}else{}};


