$(document).ready(function() {
  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    prevArrow: '<button type="button" class="slick-prev">&#8592;</button>',
    nextArrow: '<button type="button" class="slick-next">&#8594;</button>',
  });
  let inputArry = [];

  $('#btn').click(function() {
    // alert($('#txt').val());
    inputArry.push($('#txt').val());
    localStorage.setItem('InputValue', JSON.stringify(inputArry));
  });

  $('#btn2').click(function() {
    let items = JSON.parse(localStorage.getItem('InputValue'));
    $.each(items, function(a, b) {
      let li = `<li>${b}</li>`;
      $('#output').append(li);
    });
  });
});
