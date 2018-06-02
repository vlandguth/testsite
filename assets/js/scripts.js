// Your Scripts
console.log('Hey Browser!');


      //window scrolling
    function resizeHeader() {
      var _posScroll = window.scrollY;
      var _maxScroll = 50;
      
      //Decrease header size
      if (_posScroll > _maxScroll)
      {
        if($('.small-header').size()<=0)
        {
          //small on scroll
          $('.fixed-header').addClass('small-header');
        }
      }
      //back things to normal
      else if (_posScroll < _maxScroll)
      {
        $('.fixed-header').removeClass('small-header');
      }
    }