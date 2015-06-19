// Hex to RGB
function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return "rgb(" + r + "," + g + "," + b + ")";
}

// RGB to Hex
function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
}

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

$(function(){
  $('#hex2rgb').bind('change', function(e){
    if($('#hex2rgb').val() == 'rgb'){
      $('.color').each(function(){
        var hex = $(this).data("clipboard-text");
        var rgb = hexToRgb(hex.replace('#',''));
        $(this).attr("data-clipboard-text", rgb);
      });
    } else if ($('#hex2rgb').val() == 'hex'){
      $('.color').each(function(){
        var rgb = $(this).attr("data-clipboard-text");
        $(this).attr("data-clipboard-text", rgb2hex(rgb));
      });
    }
  });
});
