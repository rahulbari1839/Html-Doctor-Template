

 jQuery('document').ready( function() {

 	$(document).scroll(function () {
    	var x = $(document).scrollTop();
   
	    if (x >= 500) {
	         $('body').addClass('scroll_body')
	    } else {
	        $('body').removeClass('scroll_body');
	    }
});


        
        setTimeout( function(){
          
        
           jQuery('.rbt-loder-wrapper').slideUp(2000);
           jQuery('.body-layout').show("slow");

                    RBTTemplateHtmlWowCall();
       },3000);



        
          






	 	$('.rbt-silder-inner').owlCarousel({
	        items: 1,
	        animateOut: '.rbt-silder-inner',
	        loop: true,
	        margin: 10,
	        nav:true,
	        dots: false,	     
	        autoplay:false,
	        navText:["<div class='nav-btn prev-slide'> <span>Prev</span></div>","<div class='nav-btn next-slide'><span>Next</span></div>"],

	   /*     autoplayTimeout:1000,
	        rewind:true,
           */
	    });

	    $('.rbt-silder-2').owlCarousel({
	        items: 3,
	        animateOut: '.rbt-silder-2',
	        loop: true,
	        margin: 10,
	        nav:false,
	        dots: true,
	        lazyLoad: true,
	        autoplay:true,
	        responsive : {
		 
			    0 : {
			       items:1
			
			       
			    },
			  
			  
			    768 : {
			        items:3
			    }
		}



	    });

	 	$('.client-responce-silder').owlCarousel({
	      
	        animateOut: '.client-responce-silder',
	        loop: true,
	        margin: 10,
	        nav:false,
	        dots: false,
	        lazyLoad: true,
	        autoplay:true,
	        center: true,
		   
		    loop:true,
		    margin:100,
		     responsive : {
		 
			    0 : {
			       items:1,
			       margin:10,


			
			       
			    },
			  
			  
			    768 : {
			        items:2
			    }
		  }

	    });
 




	    //wow function section start//


			function RBTTemplateHtmlWowCall(){

			    if(jQuery('body').find('.wow').length != 0 ){



			        new WOW().init();

			    }
			}
		


         //wow function section start//


	    
              const counters = document.querySelectorAll(".counter");

       counters.forEach((counter) => {
         counter.innerText = "0";
         const updateCounter = (slow) => {
           const target = +counter.getAttribute("data-target");
           const count = +counter.innerText;
           const increment = target / 200;
           if (count < target) {
             counter.innerText = `${Math.ceil(count + increment)}`;
             setTimeout(updateCounter, 1);
           } else counter.innerText = target;
         };
         updateCounter();
       });













});	    

