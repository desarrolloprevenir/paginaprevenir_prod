function classToggle() {
    var el = document.querySelector('.icon-cards__content');
    el.classList.toggle('');
  }


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel();
  });

;
//# sourceMappingURL=scripts.1af0e625cd12541638a4.js.map