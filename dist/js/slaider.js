$('.slick-slider').slick({
	dots: true,
	arrows: false,
});

$('.multiple-items').slick({
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      rows: 1
});

$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );