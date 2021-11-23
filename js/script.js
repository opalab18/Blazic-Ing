/*$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navlogo");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});*/
$(window).scroll(function(){
    $(this).scrollTop()>50?$(".fixed-top").addClass("scrolled1"):$(".fixed-top").removeClass("scrolled1")
});
$(window).scroll(function(){
    $(this).scrollTop()>50?$(".navlogo").addClass("scrolled2"):$(".navlogo").removeClass("scrolled2")
});
