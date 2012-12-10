$('#header').prepend('<a class="open" href="#">open</a>');

$('.open').click(function(e) {
  e.preventDefault();
  $('body').toggleClass('visibleNav');
})
