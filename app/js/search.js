function getSliderOne() {
  var $inputFrom = $("#priceSlider-0");
  var $inputTo = $("#priceSlider-1");
  var instance;
  var min = 0;
  var max = 1000;
  var from = 0;
  var to = 0;

  $("#priceSlider").ionRangeSlider({
      hide_min_max: true,
      hide_from_to: true,
      onStart: updateInputs,
      onChange: updateInputs,
      onFinish: updateInputs
  });
  instance = $("#priceSlider").data("ionRangeSlider");

  function updateInputs (data) {

    var Format = wNumb({
      prefix: '',
      decimals: 0,
      thousand: ' '
    });

    from = data.from;
    to = data.to;
    $inputFrom.prop("value", Format.to(from));
    $inputTo.prop("value", Format.to(to));

  }

  $inputFrom.on("change", function () {
      var val = $(this).prop("value");
      if (val < min) {
          val = min;
      } else if (val > to) {
          val = to;
      }
      instance.update({
          from: val
      });
      $(this).prop("value", val);
  });

  $inputTo.on("change", function () {
      var val = $(this).prop("value");
      if (val < from) {
          val = from;
      } else if (val > max) {
          val = max;
      }
      instance.update({
          to: val
      });
      $(this).prop("value", val);
  });


}

getSliderOne();

function getSliderTwo() {
  var $inputFrom = $("#areaSlider-0");
  var $inputTo = $("#areaSlider-1");
  var instance;
  var min = 0;
  var max = 1000;
  var from = 0;
  var to = 0;

  $("#areaSlider").ionRangeSlider({
      hide_min_max: true,
      hide_from_to: true,
      onStart: updateInputs,
      onChange: updateInputs,
      onFinish: updateInputs
  });
  instance = $("#areaSlider").data("ionRangeSlider");

  function updateInputs (data) {

    var Format = wNumb({
      prefix: '',
      decimals: 0,
      thousand: ' '
    });

    from = data.from;
    to = data.to;
    $inputFrom.prop("value", Format.to(from));
    $inputTo.prop("value", Format.to(to));

  }

  $inputFrom.on("change", function () {
      var val = $(this).prop("value");
      if (val < min) {
          val = min;
      } else if (val > to) {
          val = to;
      }
      instance.update({
          from: val
      });
      $(this).prop("value", val);
  });

  $inputTo.on("change", function () {
      var val = $(this).prop("value");
      if (val < from) {
          val = from;
      } else if (val > max) {
          val = max;
      }
      instance.update({
          to: val
      });
      $(this).prop("value", val);
  });

}

getSliderTwo();

$('.search-filter__reset').click(function() {
  $('.search-filter input:checked').prop('checked', false);
  
  $("#priceSlider").data("ionRangeSlider").reset();

  var priceMin = $("#priceSlider").data('min');
  var priceMax = $("#priceSlider").data('max');
  $("#priceSlider-0").val(priceMin);
  $("#priceSlider-1").val(priceMax);

  $("#areaSlider").data("ionRangeSlider").reset();

  var priceMin = $("#areaSlider").data('min');
  var priceMax = $("#areaSlider").data('max');
  $("#areaSlider-0").val(priceMin);
  $("#areaSlider-1").val(priceMax);

});