$(window).scroll(function() {

  var $window = $(window),
      $body = $('body'),
      $bgChange = $('.bgChange');

  // Change 33% earlier than scroll position
  var scroll = $window.scrollTop() + ($window.height() / 3);

  // check position of each div with class bgChange
  $bgChange.each(function () {
    var $this = $(this);

    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });

      // Add data-color class to body element from current bgChange div
      $body.addClass('color-' + $(this).data('color'));
    }
  });

}).scroll();
