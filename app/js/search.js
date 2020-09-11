// // function getSlider($nameSlider, _$nameInputs, _$input1, _$input2, _$input1Min, _$input2Max){

// //   var $nameSlider = document.getElementById($nameSlider);

// //   var $input1 = document.getElementById($nameSlider + '-0');
// //   var $input2 = document.getElementById($nameSlider + '-1');

// //   var $input1Min = $($nameSlider + '-0').data('min');
// //   var $input2Max = $($nameSlider + '-1').data('max');

// //   var $nameInputs = [$input1, $input2];

// //   noUiSlider.create($nameSlider, {
// //     start: [$input2Min/8, $input2Min/1.2],
// //     step: 1,
// //     connect: true,
// //     range: {
// //         'min': $input1Min,
// //         'max': $input2Min
// //     },
// //     format: wNumb({
// //       decimals: 0,
// //       thousand: ' ',
// //     })
// //   });

// //   $nameSlider.noUiSlider.on('update', function (values, handle) {
// //     $nameInputs[handle].value = values[handle];
// //   });

// //   $nameInputs.forEach(function (input, handle) {
// //     input.addEventListener('change', function () {
// //       $nameSlider.noUiSlider.setHandle(handle, this.value);
// //     });
// //     input.addEventListener('keydown', function (e) {
// //       var values = $nameSlider.noUiSlider.get();
// //       var value = Number(values[handle]);
// //       var steps = $nameSlider.noUiSlider.steps();
// //       var step = steps[handle];
// //       var position;
// //       switch (e.which) {
// //         case 13:
// //           $nameSlider.noUiSlider.setHandle(handle, this.value);
// //           break;
// //         case 38:
// //           position = step[1];
// //           if (position === false) {
// //             position = 1;
// //           }
// //           if (position !== null) {
// //             $nameSlider.noUiSlider.setHandle(handle, value + position);
// //           }
// //         break;
// //         case 40:
// //           position = step[0];
// //           if (position === false) {
// //             position = 1;
// //           }
// //           if (position !== null) {
// //             $nameSlider.noUiSlider.setHandle(handle, value - position);
// //           }
// //         break;
// //       }
// //     });
// //   });
// // };

// // var sliderOne = {
// //   $nameSlider: priceSlider, 
// //   _$nameInputs: priceInputs, 
// //   _$input1: priceInput1, 
// //   _$input2: priceInput2, 
// //   _$input1Min: priceInput1Min, 
// //   _$input2Max: priceInput2Max
// // };
// // getSlider(sliderOne);



// function getSlider($nameSlider, $nameInputs, $input1, $input2, $input1Min, $input2Max){
//   // console.log(params);
//   var $nameSlider = document.getElementById($nameSlider);

//   var $input1 = document.getElementById($nameSlider + '-0');
//   var $input2 = document.getElementById($nameSlider + '-1');

//   var $input1Min = $('#' + $nameSlider + '-0').data('min');
//   var $input2Max = $('#' + $nameSlider + '-1').data('max');

//   var $nameInputs = [$input1, $input2];

//   noUiSlider.create($nameSlider, {
//     start: [$input2Max/8, $input2Max/1.2],
//     step: 1,
//     connect: true,
//     range: {
//         'min': $input1Min,
//         'max': $input2Max
//     },
//     format: wNumb({
//       decimals: 0,
//       thousand: ' ',
//     })
//   });

//   $nameSlider.noUiSlider.on('update', function (values, handle) {
//     $nameInputs[handle].value = values[handle];
//   });

//   $nameInputs.forEach(function (input, handle) {
//     input.addEventListener('change', function () {
//       $nameSlider.noUiSlider.setHandle(handle, this.value);
//     });
//     input.addEventListener('keydown', function (e) {
//       var values = $nameSlider.noUiSlider.get();
//       var value = Number(values[handle]);
//       var steps = $nameSlider.noUiSlider.steps();
//       var step = steps[handle];
//       var position;
//       switch (e.which) {
//         case 13:
//           $nameSlider.noUiSlider.setHandle(handle, this.value);
//           break;
//         case 38:
//           position = step[1];
//           if (position === false) {
//             position = 1;
//           }
//           if (position !== null) {
//             $nameSlider.noUiSlider.setHandle(handle, value + position);
//           }
//         break;
//         case 40:
//           position = step[0];
//           if (position === false) {
//             position = 1;
//           }
//           if (position !== null) {
//             $nameSlider.noUiSlider.setHandle(handle, value - position);
//           }
//         break;
//       }
//     });
//   });
// };

// getSlider(areaSlider, 'areaInputs', 'areaInput1', 'areaInput2', 'areaInput1Min', 'areaInput2Max');