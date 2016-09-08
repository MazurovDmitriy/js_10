
$(function(){

  $('.jcarousel').jcarousel();

  $('.jcarousel-control-prev')
  .on('jcarouselcontrol:active', function() {
    $(this).removeClass('inactive');
  })
  .on('jcarouselcontrol:inactive', function() {
    $(this).addClass('inactive');
  })
  .jcarouselControl({
    target: '-=1'
  });

  $('.jcarousel-control-next')
  .on('jcarouselcontrol:active', function() {
    $(this).removeClass('inactive');
  })
  .on('jcarouselcontrol:inactive', function() {
    $(this).addClass('inactive');
  })
  .jcarouselControl({
    target: '+=1'
  });

  $('.jcarousel-pagination')
  .on('jcarouselpagination:active', 'a', function() {
    $(this).addClass('active');
  })
  .on('jcarouselpagination:inactive', 'a', function() {
    $(this).removeClass('active');
  })
  .jcarouselPagination();

  $('select')
  .selectBox({
    mobile: true
  });
  $('.jquery-menu .parent').mouseenter(function() {
    $(this).find('> ul').stop().animate({backgroundColor: '#245e98',  height: 'show'}, 400);
  });
  $('.jquery-menu .parent'). mouseleave(function() {
    $(this).find('> ul').stop().animate({backgroundColor: '#6496C8', height: 'hide'}, 400);
  });

})
