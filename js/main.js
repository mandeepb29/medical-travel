feather.replace();

function openSearch() {
  $(".search-box-1").css('display', 'block');
  $("#search-header").focus();
  $('#search-open').css('display', 'none');
  $('#search-close').css('display', 'block');
}

function closeSearch() {
  $(".search-box-1").css('display', 'none');
  $("#search-header").blur();
  $('#search-open').css('display', 'block');
  $('#search-close').css('display', 'none');
}

function showFilters(){
  $(".filter-box").addClass("show");
  $(".body-overlay").addClass("show");
}

function closeFilters(){
  $(".filter-box").removeClass("show");
  $(".body-overlay").removeClass("show");
}

document.body.addEventListener('click', closeSearch, true);


// //owl carousel in blog
// $(document).ready(function(){
//   $('.owl-carousel').owlCarousel();
// });
$(document).ready(function(){
  $("#owl-carousel-image").owlCarousel({
    loop:false,
    margin:10,
    items:1,
    nav:true,
    dots:false,
    navElement:'div',
    navText: [
      `<button type="button" id="lg-prev-1" aria-label="Previous slide" class="lg-prev lg-icon" style="opacity:1;left:0;transform:translateX(-1rem)">  </button>`,
      `<button type="button" id="lg-next-1" aria-label="Next slide" class="lg-next lg-icon"  style="opacity:1;right:0;transform:translateX(1rem)">  </button>`],
  });


  $(".owl-carousel-blogs").owlCarousel({
    loop:false,
    margin:10,
    items:3,
    stagePadding:40,
    nav:true,
    dots:false,
    navElement:'button',
    navText: [
      ` <a class="btn-icon prev">
      <img src="./img/prev.png" alt="prev">
    </a>`,
      ` <a class="btn-icon next">
      <img src="./img/next.png" alt="prev">
    </a>`],
      responsive : {
        // breakpoint from 0 up
        0 : {
          items:1,
          stagePadding:0
        },
     
        480 : {
          items:1,
          stagePadding:50
        },
        781 : {
          items:2,
          stagePadding:50
        },
        900 : {
          items:3,
          stagePadding:20
        },
        1100 : {
          items:3,
          stagePadding:50
        }
      }
    });

  });