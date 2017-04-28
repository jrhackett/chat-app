(function($) {

  var socket = io();

  $messages = $('#messages');
  $inner = $('#inner');

  $messages[0].scrollTop = $messages[0].scrollHeight;

  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });

  socket.on('chat message', function(msg){
    $("#inner").append($('<li>').text(msg));
    $inner[0].scrollTop = $inner[0].scrollHeight;
  });

}) (jQuery);