$(window).on("load",function(){$(".loading-icon").fadeOut(100),$(".loading-screen").fadeOut(300),$("body").scrollspy({target:".bs-docs-sidebar",offset:120})}),$(document).ready(function(){$(window).width(),$('[data-toggle="popover"]').popover(),$("#wcag-link").on("click",function(n){return n.preventDefault(),!0}),$(".nav-sub-click").on("click",function(n){if(""!==this.hash){n.preventDefault();var o=this.hash;$("html, body").animate({scrollTop:$(o).offset().top},800,function(){window.location.hash=o})}});var n=$(window),o=$(document),t=$(".kontakt-map");t.css({opacity:1}),n.on("scroll",function(){n.scrollTop()+n.height()==o.height()?t.stop(!0).animate({opacity:0},300):t.stop(!0).animate({opacity:1},300)}),$(".landing-bottom-right").on("click",function(){$(".landing-popup-order-wrapper").fadeIn(),$("body").css("overflow","hidden")}),$(".landing-popup-order-close_btn, .landing-popup-order-wrapper").on("click",function(){$(".landing-popup-order-wrapper").fadeOut(),$("body").css("overflow","visible")}),$(".bars-icon").on("click",function(){$(".menu-container").css("right","0%"),$("body").css("overflow","hidden")});var e=$(window).width();$(window).resize(function(){e=$(window).width()}),e>800&&$(".menu-close-btn").on("click",function(){$(".menu-container").css("right","-30%"),$("body").css("overflow","visible")}),e<800&&e>500&&$(".menu-close-btn").on("click",function(){$(".menu-container").css("right","-50%"),$("body").css("overflow","visible")}),e<500&&$(".menu-close-btn").on("click",function(){$(".menu-container").css("right","-80%"),$("body").css("overflow","visible")});if($(".landing-intro-title").length>=1){var a=$(".landing-intro-title").offset().top,c=$(window).width();$(window).scrollTop()>=a&&c<=500?($(".landing-bottom-right").fadeOut(100),$(".bg-landing").fadeOut(500)):($(".bg-landing").fadeIn(500),$(".landing-bottom-right").fadeIn(100)),$(window).scroll(function(){$(window).scrollTop()>=a&&c<=500?($(".landing-bottom-right").fadeOut(100),$(".bg-landing").fadeOut(500)):($(".bg-landing").fadeIn(500),$(".landing-bottom-right").fadeIn(100))})}$(".hashtagremove").each(function(){var n=$(this).text();$(this).text(n.replace("#",""))}),$(".hashtagremoveId").each(function(){var n=$(this).attr("id").replace("#","");$(this).attr("id",n)}),$(".kos-seminar-rectangle").length>0?$(".kos-seminar-nopost").hide():$(".kos-seminar-nopost").show(),$("a[href^=http]").each(function(){var n=["ullernklinikken.no/info/","ullernklinikken.iux.no/info/"];for(i=0;i<n.length;i++)if(-1!=this.href.indexOf(n[i]))return!0;-1==this.href.indexOf(location.hostname)&&($(this).click(function(){return!0}),$(this).attr({target:"_blank"}),$(this).click())})});