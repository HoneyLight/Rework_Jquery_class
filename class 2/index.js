let inputTag = $('#text');
let inputBtn = $('#btn');
let ulTag = $('#listTag');

// .toggle()
// .toggleClass()
// .show()
// .hide()
// .get()
// .index()
// .closest()
// .remove()
// Fade
// Slide
// Animate

$(document).ready(function() {
  inputBtn.click(function() {
    let showGet = $('input').get(4);
    console.log(showGet);

    let liTag = $('li').index($('#liTag'));
    console.log(liTag);

    let showClosestDiv = $('#showBtn').closest('div');
    console.log(showClosestDiv);
  });

  $('#removeBtn').click(function() {
    // ulTag.toggle();
    // ulTag.toggleClass('divOne');
    ulTag.remove();
  });
  $('#showBtn').click(function() {
    ulTag.show();
  });

  $('#effectBtn').click(function() {
    // ulTag.fadeToggle(2000)
    ulTag.slideToggle(1000, function() {
      alert("I'm coming up");
    });
  });

  $('#animateBtn').click(function() {
    $('#descp').animate(
      { width: '100px', height: '100px', marginTop: '20px' },
      2000,
    );
  });

  let tableData = [
    { name: 'Binta', age: '30' },
    { name: 'John', age: '29' },
    { name: 'Tina', age: '50' },
  ];

//   $('#popTable').click(function() {
//     $.each(tableData, function(index, value) {
//       let studentNo = index + 1;
//       let tableRow =
//         '<tr><td>' +
//         studentNo +
//         '</td><td>' +
//         value.name +
//         '</td><td>' +
//         value.age +
//         '</td></tr>';
//       $('.tableDiv tbody').append(tableRow);
//     });
//   });

 $('#popTable').click(function() {
    $.each(tableData, function(index, value) {
      // for every time you use 'each', note that itmust take in anindex and value but ifyou use 'map', you can take in only value.
      let studentNo = index + 1;
      let tableRow =
       ` <tr><td>${studentNo}
        </td><td> ${value.name}
        </td><td>${value.age}</td></tr>`;
      $('.tableDiv tbody').append(tableRow);
    });
  });
alert("name: "+tableData[0].name+ "," + " age: " +tableData[0].age)
// alert(`name:${tableData.name[0]}, age: ${tableData.age[0]}`)
});
