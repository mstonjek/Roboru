(function($){
	$(function(){


		$(".jq--scroll-domácí-úkoly").click(function(){
				$("html, body").animate({scrollTop: $(".jq--domácí-úkoly").offset().top}, 1000); 
			});



		$(".jq--scroll-kdy-neni").click(function(){
				$("html, body").animate({scrollTop: $(".jq--kdy-neni").offset().top}, 1000); 
			});




		// tlačítko 3 na druhé stránce //


$(".jq--scroll-naše-úspěchy").click(function(){
				$("html, body").animate({scrollTop: $(".jq--naše-úspěchy").offset().top}, 1000); 
			});


        // tlačítko 4 na třetí stránce //

        $(".jq--scroll-chcete-podpořit").click(function(){
				$("html, body").animate({scrollTop: $(".jq--chcete-podpořit").offset().top}, 1000); 
			});


        // tlačítko 5 na čtvrté stránce //

        $(".jq--scroll-facebook").click(function(){
				$("html, body").animate({scrollTop: $(".mezera").offset().top}, 1000); 
			});



        // tlačítko 6 na páté stránce //


         $(".jq--scroll-robotic-day").click(function(){
				$("html, body").animate({scrollTop: $(".mezera-robotic-day").offset().top}, 1000); 
			});

        


         // tlačítko 7 na výsledky //


         $(".jq--scroll-btn7").click(function(){
				$("html, body").animate({scrollTop: $(".mezera--btn7").offset().top}, 1000); 
			});












// responzivní menu ikony //

$(".jq--hamburger").click(function(){
				$(".background1").slideToggle();
				$(".background2").fadeToggle();
				$("nav ul").fadeToggle();


			});


// podmínky //

 $(".jq--hamburger").click(function(){
  
           if($(".jq--hamburger").attr("src") == "img/hamburgerMenu.png")
           {
               $($(".jq--hamburger").attr("src","img/crossMenu.png"));
           } 
           else 
           {
               $($(".jq--hamburger").attr("src","img/hamburgerMenu.png"));
           }  
       });


// upozornění vyskakovací okno //

$(".jq--zmackni").click(function(){
				$(".jq--zmiz").fadeToggle();
				


			});


















		});
})(jQuery);