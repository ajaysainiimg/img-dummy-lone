// // on scorll navbar
window.onscroll = function () {
    scrollFunction();
  };
  var first = true;
  function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
      document.getElementById("navbar").classList.add('fixed-navbar');
    }
     else {
      document.getElementById("navbar").classList.remove('fixed-navbar');
    }
  }


  // animation cursor
// slider
// $(document).ready(function () {
//   (function ($) {
// $('.style-carousel').owlCarousel({
//   items:3,
//   loop:true,
//   margin:20,
//   nav:false,
//   dots:false,
//   autoplay:false,
//   autoplayTimeout:5000,
//   autoplayHoverPause:true,
//   // navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:1
//       },
//       1000:{
//           items:3
//       }
//   }
// })
// $( ".owl-prev").html('<img src="assets/img/index/owl-next.svg" alt="client" class="h-100 w-100 img-fluid">');
//  $( ".owl-next").html('<img src="assets/img/index/owl-preview.svg" alt="client" class="h-100 w-100 img-fluid">');
// })(jQuery);
// });

// cursor js
if ($(".custom-cursor").length) {
  var cursor = document.querySelector(".custom-cursor__cursor");
  var cursorinner = document.querySelector(".custom-cursor__cursor-two");
  var a = document.querySelectorAll("a");

  document.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
  });

  document.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + "px";
    cursorinner.style.top = y + "px";
  });

  document.addEventListener("mousedown", function () {
    cursor.classList.add("click");
    cursorinner.classList.add("custom-cursor__innerhover");
  });

  document.addEventListener("mouseup", function () {
    cursor.classList.remove("click");
    cursorinner.classList.remove("custom-cursor__innerhover");
  });

  a.forEach((item) => {
    item.addEventListener("mouseover", () => {
      cursor.classList.add("custom-cursor__hover");
    });
    item.addEventListener("mouseleave", () => {
      cursor.classList.remove("custom-cursor__hover");
    });
  });
}


// brand slider
var swiper = new Swiper(".brandslider", {
  spaceBetween: 10,
  loop:true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

// counter js
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});