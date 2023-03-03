$(document).ready(function(){

  let navEl = $('div#nav_wrap');
  console.log(navEl);
  navEl.hide();

  $('div#wrap div.inner section header i.fa-bars').click(function() {
    navEl.show();
  });
  $('div#wrap div#nav_wrap nav i.fa-rectangle-xmark').click(function() {
    navEl.hide();
  });

  let ulEl = $('ul.sub');
  ulEl.hide();

  $('li.hide div#click').click(function(){ //공통되는 함수
    if($('div#click .fa-solid').hasClass("fa-angle-down")) {
      $(ulEl).slideDown('fast');
      $('div#click .fa-solid').removeClass('fa-angle-down').addClass('fa-angle-up');
    } else {
      $(ulEl).slideUp('fast');
      $('div#click .fa-solid').removeClass('fa-angle-up').addClass('fa-angle-down');
    }
  });

});