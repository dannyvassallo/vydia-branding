// Hex to RGB
function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return "rgb(" + r + "," + g + "," + b + ")";
}
// Hex to RGBA
function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return "rgb(" + r + "," + g + "," + b + ")";
}

// Hex to RGBA
function hexToRgba(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return "rgba(" + r + "," + g + "," + b + ",1)";
}

function rgba2hex(rgb){
 rgba = rgba.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

// RGBA to RGB
function rgbToRgba(rgba){
  rgb.split(')');
  rgb.join(', 1)');
}

// RGB to RGBA
function rgbaToRgb(rgb){
  rgb.split(', 1)');
  rgb.join(')');
}

// RGB to Hex
function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
}

$(function(){
  // Icon hover
  $('.fa').mouseenter(function(){
    $(this).css('color','#41beed')
  }).mouseleave(function(){
    $(this).css('color','black')
  });

  // scroll to
  jQuery(document).ready(function($) {
    $(".scrollto").click(function(event) {
        event.preventDefault();

        var defaultAnchorOffset = 0;

        var anchor = $(this).attr('data-attr-scroll');

        var anchorOffset = $('#'+anchor).attr('data-scroll-offset');
        if (!anchorOffset)
            anchorOffset = defaultAnchorOffset;

        $('html,body').animate({
            scrollTop: $('#'+anchor).offset().top - anchorOffset
        }, 500);
    });
  });


  // Copy Stuff
  // colors
  $('.color').each(function(){
    var client = new ZeroClipboard( $(this) );

    client.on( "ready", function( readyEvent ) {
      // console.log( "ZeroClipboard SWF is ready!" );

      client.on( "aftercopy", function( event ) {
        // `this` === `client`
        // `event.target` === the element that was clicked
        // alert("Copied text to clipboard: " + event.data["text/plain"] );
        var color = event.data["text/plain"];

        if ($('#hex2rgb').val() == 'hexnohash'){
          $('#copied-alert').css('background-color','#'+color);
        } else {
          $('#copied-alert').css('background-color',color);
        }
        $('#copied-alert').fadeIn();
        $('#copied-alert').delay( 1500 ).fadeOut();
      } );
    } );
  });

// icons
$('.icons i').each(function(){
    var client = new ZeroClipboard( $(this) );

    client.on( "ready", function( readyEvent ) {
      // console.log( "ZeroClipboard SWF is ready!" );

      client.on( "aftercopy", function( event ) {
        // `this` === `client`
        // `event.target` === the element that was clicked
        var icon = event.data["text/plain"];
        $('#copied-alert-2').fadeIn();
        $('#copied-alert-2').delay( 1500 ).fadeOut();
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

// Value Switcher
$(function(){
  $('#hex2rgb').bind('change', function(e){
    // Plain RGB
    if($('#hex2rgb').val() == 'rgb'){
      $('.color').each(function(){
        var value = $(this).data("clipboard-text");
        // hex
        if (value.indexOf("#") > -1){
          var hex = value;
          var rgb = hexToRgb(hex.replace('#',''));
          $(this).attr("data-clipboard-text", rgb);
        // rgba
        } else if (value.indexOf("rgba") > -1){
          var rgba = value;
          var rgb = rgbaToRgb(rgba);
          $(this).attr("data-clipboard-text", rgb);
        // hex no hash
        } else {
          var hex = value;
          var rgb = hexToRgb(hex);
          $(this).attr("data-clipboard-text", rgb);
        }
      });
    // Plain Hex
    } else if ($('#hex2rgb').val() == 'hex'){
      $('.color').each(function(){
        var value = $(this).data("clipboard-text");
        // rgb
        if (value.indexOf("rgb(") > -1){
          var rgb = value;
          var hex = rgb2Hex(rgb);
          $(this).attr("data-clipboard-text", hex);
        // rgba
        } else if (value.indexOf("rgba") > -1){
          var rgba = value;
          var hex = rgba2hex(rgba);
          $(this).attr("data-clipboard-text", hex);
        // hex no hash
        } else {
          var hex = value;
          $(this).attr("data-clipboard-text", hex);
        }
      });
    // Hex no Hash
    } else if ($('#hex2rgb').val() == 'hexnohash'){
      $('.color').each(function(){
        var value = $(this).data("clipboard-text");
        // rgb
        if (value.indexOf("rgb(") > -1){
          var rgb = value;
          var hex = rgb2Hex(rgb);
          var nohash = hex.replace('#', '');
          $(this).attr("data-clipboard-text", nohash);
        // rgba
        } else if (value.indexOf("rgba") > -1){
          var rgba = value;
          var hex = rgba2hex(rgba);
          var nohash = hex.replace('#', '');
          $(this).attr("data-clipboard-text", nohash);
        // hex
        } else {
          var hex = value;
          var nohash = hex.replace('#', '');
          $(this).attr("data-clipboard-text", nohash);
        }
      });
    // Rgba
    } else if ($('#hex2rgb').val() == 'rgba'){
      $('.color').each(function(){
        var value = $(this).data("clipboard-text");
        // hex
        if (value.indexOf("#") > -1){
          var hex = value;
          var rgba = hexToRgba(hex.replace('#',''));
          $(this).attr("data-clipboard-text", rgba);
        // rgb
        } else if (value.indexOf("rgb(") > -1){
          var rgb = value;
          var rgba = rgbToRgba(rgb);
          $(this).attr("data-clipboard-text", rgba);
        // hex no hash
        } else {
          var hex = value;
          var rgba = hexToRgb(hex);
          $(this).attr("data-clipboard-text", rgba);
        }
      });
    }
  });
});
