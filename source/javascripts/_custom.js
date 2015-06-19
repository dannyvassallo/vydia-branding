// Copy Stuff
$(function(){
  $('.color').each(function(){
    var client = new ZeroClipboard( $(this) );

    client.on( "ready", function( readyEvent ) {
      // console.log( "ZeroClipboard SWF is ready!" );

      client.on( "aftercopy", function( event ) {
        // `this` === `client`
        // `event.target` === the element that was clicked
        // alert("Copied text to clipboard: " + event.data["text/plain"] );
        var color = event.data["text/plain"];
        $('#copied-alert').css('background-color',color);
        $('#copied-alert').fadeIn();
        $('#copied-alert').delay( 1500 ).fadeOut();
      } );
    } );
  });
});

// Center Copy text
$(function(){
  var bodH = ($('body').height()) / 2;
  var textH = $('.copy-text').height();
  var margin = bodH - (textH / 2);
  $('.copy-text').css('margin-top',margin);
});
