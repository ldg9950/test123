$(document).ready(function () {//문서준비 이벤트 시작

  AOS.init();
  //depth2
  $('.depth2,.depth2_bg').hide();
  $('.gnb>li').mouseenter(function () {
    $(this).children('.depth2').stop().fadeIn();
    $('.depth2_bg').stop().fadeIn();
  });
  $('.gnb>li').mouseleave(function () {
    $(this).children('.depth2').stop().fadeOut();
    $('.depth2_bg').stop().fadeOut();
  });

  //search
  $(".search_wrap").hide();

  $(".search").click(function () {
    $(".search_wrap").fadeIn();
  });
  $(".search_close").click(function () {
    $(".search_wrap").fadeOut();
  });


  //sitemap
  $('.sitemap').hide();
  $('.util > li:nth-child(2)').click(function () {
    $('.sitemap').fadeIn();
    $('body').css({ 'overflow': 'hidden' }); //스크롤바 제거
  });
  $('.sitemap_close').click(function () {
    $('.sitemap').fadeOut();
    $('body').css({ 'overflow': 'auto' }); //스크롤바 생성
  });


  //language
  $('.language ul').hide();
  $('.language').click(function () {
    $(this).toggleClass('active').stop();
    $('.language ul').slideToggle();
  });


  $('.popup_close').click(function () {
    $('.popup').slideUp();
  });

  $('.ham').click(function () {
    $('.mgnb_wrap').animate({
      'left': '0'
    });
  });
  $('.mgnb_close').click(function () {
    $('.mgnb_wrap').animate({
      'left': '100%'
    });
  });


  $('.mdepth2').hide();
  $('.mgnb > li').click(function () {
    $(this).children('.mdepth2').slideDown();
    $(this).siblings().children('.mdepth2').slideUp();
  });





  //main_banner  slide
  const mb = new Swiper('.mb', {
    // 옵션
    autoplay: {
      delay: 2000,  // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: true,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },

    speed: 1000,
    loop: true,

    pagination: {
      el: '.swiper-pagination',  // 버튼 태그 설정
      type: 'fraction',  // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true,  // 버튼 클릭 여부
    },

    navigation: {
      nextEl: '.swiper-button-next',  // 다음 버튼
      prevEl: '.swiper-button-prev',  // 이전 버튼
    },
  });

  $('.mb_play').hide();

  $('.mb_pause').click(function () {
    mb.autoplay.stop();
    $('.mb_play').show();
    $('.mb_pause').hide();
  });

  $('.mb_play').click(function () {
    mb.autoplay.start();
    $('.mb_pause').show();
    $('.mb_play').hide();
  });

  // 제품 슬라이드
  const product_list = new Swiper('.product_list', {
    //옵션
    slidesPerView: '3',
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000,  // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false,
    },
    speed: 1000,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },

    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },

      1024: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },

  });



  //탭메뉴
  $('.teaware_list li:first-child').addClass('active');

  $('.teaware_list li').click(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });


  // 아코디언 배너
  $('.museum_list li:first-child').addClass('on');
  $('.museum_list li').mouseenter(function () {
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
  });



})//문서준비 이벤트 종료