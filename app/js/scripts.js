(function($) {

  var socket = io();

  $messages = $('#messages');
  $inner = $('#messages-inner');

  $messages[0].scrollTop = $messages[0].scrollHeight;

  $('#name-input').submit(function() {
    $('#name').hide();
    $('#id').val($('#name-in').val());
    $('#name').val('');
    return false;
  });

  $('#message-input').submit(function(){
    if($('#m').val().length > 0) {
      socket.emit('chat message', $('#id').val() + ": " + $('#m').val());
      $('#m').val('');
    }
    return false;
  });

  socket.on('chat message', function(msg){
    $inner.append($('<li>').text(msg));
    $inner[0].scrollTop = $inner[0].scrollHeight;
  });

}) (jQuery);