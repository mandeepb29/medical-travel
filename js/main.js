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
