$(document).ready(function () {
  if (localStorage.getItem("input-list")) {
    $("#output").html(localStorage.getItem("input-list"));
  }

  //   save
  $("#save").click(function () {
    if (
      $("#name").val() != "" &&
      $("#age").val() != "" &&
      $("#email").val() != ""
    ) {
      let inputValue = `<div class="list">
            <p>${$("#name").val()}</p> 
            <p>${$("#age").val()}</p>
            <p>${$("#email").val()}</p>
            <div class="btns">
              <button class="edit">Edit</button>
              <button class="delete">Delete</button>
              <button class="complete">Complete</button>
            </div>
          </div>`;
      $("#output").append(inputValue);

      updateLocalStorage();

      if ($("#save").html() === "Save") {
        $("#name").val("") && $("#age").val("") && $("#email").val("");
      } else {
        $("#save").html("Save");
        $("#name").val("") && $("#age").val("") && $("#email").val("");
      }
    } else {
      alert("Enter your details");
    }
  });

  //delete
  $("#output").on("click", ".delete", function () {
    $(this).parent().parent().remove();
    updateLocalStorage();
  });

  //edit
  $("#output").on("click", ".edit", function () {
    // let name = $('#name').val();
    // let age = $('#age').val();
    // let email = $('#email').val();
    // let selectedName =
    let removedIndex = $(this).parent().parent();
    let selectedIndex = removedIndex.children();
    let gerald1 = selectedIndex.eq(0).html();
    let geraldAge = selectedIndex.eq(1).html();
    let geraldEmail = selectedIndex.eq(2).html();
    $("#name").val(gerald1);
    $("#age").val(geraldAge);
    $('#email').val(geraldEmail);
    $('#save').html('Update');
    removedIndex.remove();
    updateLocalStorage();
  });

  // completed

  $("#output").on("click", ".complete", function () {
    let removedIndex = $(this).parent().parent();
    let selectedIndex = removedIndex.children().first();
    selectedIndex.toggleClass("line");
  });

  function updateLocalStorage() {
    let items = $("#output").html();
    localStorage.setItem("input-list", items);
  }
});

// $(document).ready(function () {
//     let localData = localStorage.getItem('form-input');

//     if (localData) {
//         $("#table tbody").html("");
//     }

//     let inputArry = [];

//   $('#save').click(function() {
//     inputArry.push($('#name').val());
//     inputArry.push($('#age').val());
//     inputArry.push($('#email').val());
//     localStorage.setItem('InputValue', JSON.stringify(inputArry));
//     updateLocalStorage();
//   });

//   $('#get').click(function() {
//         let items = JSON.parse(localStorage.getItem('InputValue'));
//     $.each(items, function(index, value) {
//         let studentNo = index + 1;
//         let tabledata = `  <tr>
//           <td>${studentNo}</td>
//           <td>${value.name}</td>
//           <td>${value.age}</td>
//           <td>${value.email}</td>
//         </tr>`;
//       $('#table').append(tabledata);
//       updateLocalStorage();
//        });

//     });

//     function updateLocalStorage() {
//         let item = $('#table').html();
//         localStorage.setItem('form-input', item);
//       }
// });

// // let localArray = JSON.parse(localData);
//     //     let index = 1;
// // error: function(err) {
//         //     alert('server error');
//         // },
