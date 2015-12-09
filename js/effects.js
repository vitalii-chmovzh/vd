$(document).ready(function(){

  var inputWidth = $(".contact_input_section_slide").width();
  var countInputWidth = $(".form_input_animate").length;
  var inputWrapWidth = inputWidth * countInputWidth;
  var value = 1;
  var inputSize = $('.form_input_animate').length;

  var element = $('.header_animation_1');
  var elementTwo = $('.header_animation_2');
  var elementThree = $('.header_animation_3');
  var elementFour = $('.header_animation_4');
  var contactBack = $('.contact_wrapper_animate');
  var feedBack = $(".feed_back_form_wrap_content");
  var h = $(window).height();

  var im = 0
  var imTwo = 0;
  var imThree = 0;
  var imFour = 0;
  var contBack = 0;
  var feedB = 0;

  $('.moved').css('width', inputWrapWidth);
  $('.form_input_animate').css('width', inputWidth);

  setInterval (function() {
      element.css({'background-position':im + 'px'})
      im -= 1;}, 50);
  
  setInterval (function() {
      elementTwo.css({'background-position':imTwo + 'px'})
      imTwo -= 1;}, 80);

    setInterval (function() {
      elementThree.css({'background-position':imThree + 'px'})
      imThree -= 1;}, 120);

    setInterval (function() {
      elementFour.css({'background-position':imFour + 'px'})
      imFour += 1;}, 150);

    setInterval (function() {
      contactBack.css({'background-position':contBack + 'px'})
      contBack -= 1;}, 50);

    setInterval (function() {
      feedBack.css({'background-position':feedB + 'px'})
      feedB += 1;}, 30);



    $('.open_menu').click(function(){
      $('.drop_down_menu').toggleClass("menu_visible");
    });
    $('.close_menu').click(function(){
      $('.drop_down_menu').toggleClass("menu_visible");
    });
    $('.open_form').click(function(){
      $('.feed_back_form_wrapper').show();
    });
    $('.close_form').click(function(){
      $('.feed_back_form_wrapper').hide();
    });
    
    $(document).keydown(function(event) {
      if (event.keyCode == 27) {
        $('.feed_back_form_wrapper').hide();
      }
    });

    $(window).bind('scroll', function() {
      if($(document).scrollTop() === 0) {
        $('.header_nav_wrapper').removeClass('visible');
        $('.header_logo').removeClass('newlogo');
        $('.open_menu').removeClass('open_menu_white');
        $('.header_nav ul li a').removeClass('white');
      } else {
        $('.header_nav_wrapper').addClass('visible');
        $('.header_logo').addClass('newlogo');
        $('.header_nav ul li a').addClass('white');
        $('.open_menu').addClass('open_menu_white');

      }
      
    });
    
    $(window).load(function() {
      if ($(window).width() > "1100"){
        $(function(){
          var topFirst = $('.firstAnchor').offset().top;
          var topSecond = $('.secondAnchor').offset().top;
          var heightBlock = $(".project_row").height();
        
          $(window).scroll(function() { 
            var top = $(document).scrollTop();
              if (top > topFirst) {
                $('.showFirst').addClass('fixed'); 
              }else {
                $('.showFirst').removeClass('fixed');
              }if( top  > 2300){
                  $('.showFirst').removeClass('fixed');
              }
              if (top > topSecond) {
                $('.showSecond').addClass('fixed'); 
              }else {
                $('.showSecond').removeClass('fixed');
              }if( top  > 3495){
                  $('.showSecond').removeClass('fixed');
              }     
          });
        });
        
        }else{
          $('.showFirst').removeClass('fixed');
          $('.showSecond').removeClass('fixed'); 
        }
    });

    $('.bxslider').bxSlider({
      minSlides: 3,
      maxSlides: 3,
      slideWidth: 360,
      pagerCustom: '#bx-pager'
    });

    if (window.matchMedia("(max-width: 640px)").matches) {
      $('.bxslider').parent().parent().css("display","none");
      $('.bx_slider').bxSlider({
        minSlides: 1,
        slideWidth: 220,

      });
    }


    /* feed back form */

    function formAnim(){
      if(value < inputSize){
        $(".moved").css({'margin-left': "-=" + inputWidth + "px"}, "fast");
        $(".form_submit_btn_prev").show();
        $(".moved").removeClass("error");
        value++;
      }
      
      if(value == inputSize){
        $(".form_submit_btn_next").addClass("btn_new_bg");
        $(".form_submit_btn_send").show();
      }
 
    }
  
    $(".form_submit_btn_next").click(function(){
      switch(value) {
        case 1:
          if($(".name").val()==""){
            $(".moved").addClass("error");
          }else{
            formAnim();
          } 
        break;
        case 2:
          if($(".Company").val()==""){
            $(".moved").addClass("error");
          }else{
            formAnim();
          } 
        break;
        case 3:
          if($(".mail").val()==""){
            $(".moved").addClass("error");
          }else{
            formAnim();
          } 
        break;
         case 4:
          if($(".you_message").val()==""){
            $(".moved").addClass("error");
          }else{
          } 
        break;
      }
    });
   
    $(".form_submit_btn_prev").click(function(){
      $(".moved").removeClass("error");
      if(value > 1){
        $(".form_submit_btn_next").show();
        $(".form_submit_btn_next").removeClass("btn_new_bg");
        $(".moved").css('margin-left', "+=" + inputWidth + "px"); 
        value--;
      }
      if(value == 1){
        $(".form_submit_btn_prev").hide();
      }  
    });

    $('.name, .Company, .mail, .you_message').on('keypress', function () {
        $(".moved").removeClass('error');
    });

    /* slider in works project */
    $('.bxslider_1').bxSlider({
      minSlides: 1,
      maxSlides: 1,
      slideWidth: 1200,
      pagerCustom: '#bx-pager',
    });
    

});