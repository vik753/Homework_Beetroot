//=============Header Menu===============
//console.log('Hello 333');
var scroll = new SmoothScroll('a[href*="#"]');

const containerMenuMobile = $(".container-header__menu_links");
let device = null;

$(document).click(handler);

function handler(e) {
  if ($(e.target).hasClass('header__menu_link')) {
    $(e.target).css({
      transition: 'all 0.7s ease',
      position: 'relative'
    });
    if (device === 'tablet') {
      $(e.target).siblings('a').css({
        border: "1px solid transparent"
      });
      $(e.target).css({
        border: '1px solid #fff'
      });
    }
    if (device === 'mobile') {
      $(e.target).siblings('a').css({
        backgroundColor: 'rgba(0,0,0,0.9)',
        borderBottom: '1px solid transparent',
        fontStyle: 'normal',
        left: '0',
        width: 'auto'
      });
      $(e.target).css({
        borderBottom: '1px solid #e0e0e0',
        fontStyle: 'italic',
        left: '20%',
        width: '80%'
      });
    }
  }

  if (e.target.classList.contains('header__menu_mobile')) {
    containerMenuMobile.css("display") === "none" ?
      containerMenuMobile.css("display", "block") :
      containerMenuMobile.css("display", "none");
  }
}

//=======================Media for js

function initTablet() {
  device = 'tablet';
  $('.header__menu_link').css({
    backgroundColor: "transparent",
    borderBottom: '1px solid transparent',
    border: "1px solid transparent",
    fontStyle: 'normal',
    left: '0',
    width: 'auto'
  });
}

function initMobile() {
  device = 'mobile';
  $('.header__menu_link').css({
    border: "none",
    backgroundColor: "rgba(0,0,0,0.9)"
  });
}

ssm.addState({
  id: 'tablet',
  query: '(max-width: 768px)',
  onEnter: function() {
    initTablet();
  }
});

ssm.addState({
  id: 'tablet',
  query: '(min-width: 575px)',
  onEnter: function() {
    initTablet();
  }
});

ssm.addState({
  id: 'mobile',
  query: '(max-width: 576px)',
  onEnter: function() {
    initMobile();
  }
});

//============Portfolio-galary=====================

let $portfolioGallery = $('.portfolio__gallery').isotope({
  itemSelector: '.portfolio__img',
  horizontalOrder: true,
  layoutMode: 'masonry',
  masonry: {
    gutter: '.gutter-sizer'
  }
});

$(".galleryBlock__btn").click(function() {
  const $this = $(this);
  const filter = "." + $this.data('filter');
  $portfolioGallery.isotope({
    filter: filter
  });
});

//===================SlickSlider===============

$(document).ready(function() {
  $('.team_slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
  //fade: true,
  });
});

//=================BX-Slider====================
// Initialize the slider
$(document).ready(function() {
  $('.testimonials_slider').bxSlider({
    auto: true,
    stopAutoOnClick: true,
    pause: 4000,
    controls: false,
  });
});

//========Google-Maps==============
var map;
const cnt = {
  lat: 46.485878,
  lng: 30.7399100
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: cnt,
    zoom: 18
  });
  const marker = new google.maps.Marker({
    position: cnt,
    map: map,
    title: 'Cannoli confectionery',
    icon: 'img/cannoliFav.png'
  })
  const infoWindow = new google.maps.InfoWindow({
    content: 'Cannoli confectionery, Tchaikovsky line 19, Odesa Ukraine'
  })
  marker.addListener('click', function() {
    infoWindow.open(map, marker)
  })
}

//========================Animation========

jQuery(document).ready(function() {
  jQuery('.container-header').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated lightSpeedIn', // Class to add to the elements when they are visible
    offset: 100
  });

  jQuery('.container-portfolio__context').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated zoomInDown', // Class to add to the elements when they are visible
    offset: 100
  });

  jQuery('.galleryBlock__nav').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated zoomInDown', // Class to add to the elements when they are visible
    offset: 100
  });

  jQuery('.container-team__context').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated flipInX', // Class to add to the elements when they are visible
    offset: 100
  });

  jQuery('.container-contactUs').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInLeftBig', // Class to add to the elements when they are visible
    offset: 100
  });

  jQuery('.container-testimonials__context').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated zoomIn', // Class to add to the elements when they are visible
    offset: 100
  });

  jQuery('.container-footer__context').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated zoomInRight', // Class to add to the elements when they are visible
    offset: 100
  });

  jQuery('.footer__logo').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated flipInX fadeIn', // Class to add to the elements when they are visible
    offset: 100
  });

  jQuery('.container-footer__social').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated flipInY', // Class to add to the elements when they are visible
    offset: 100
  });

});
