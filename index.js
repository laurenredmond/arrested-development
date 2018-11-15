$(window).scroll(function() {

  var $window = $(window),
      $body = $('body'),
      $container = $('.container');
      $header = $('header');

  // Change 33% earlier than scroll position
  var scroll = $window.scrollTop() + ($window.height() / 3);

  $container.each(function () {
    var $this = $(this);

    // if position is within range of this container.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });

      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });

  if ($header.position().top <= scroll && $header.position().top + $header.height() > scroll) {

    // Remove all classes on body with color-
    $body.removeClass(function (index, css) {
      return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
    });

    // Add class of currently active div
    $body.addClass('color-' + $(header).data('color'));
  }

}).scroll();
