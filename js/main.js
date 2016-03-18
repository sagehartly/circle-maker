var $body = $('body');
var $html = $('html');

$body.on('keydown', function (e) {
  var $ballAppear = $('<div>');

  $ballAppear.append(div);
  div.addClass('.ball');

  div.css('top', Math.random() * 256);
  div.css('left', Math.random() * 256);

});
