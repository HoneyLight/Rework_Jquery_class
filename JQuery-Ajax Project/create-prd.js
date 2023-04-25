$(document).ready(function () {
  $("#menu-bar").click(function () {
    $("#slide").toggle();
  });

  $("#create-prdbtn").click(function () {
    if (
      $("#name").val() == "" ||
      $("#category").val() == "" ||
      $("#price").val() == "" ||
      $("#quantity").val() == "" ||
      $("#image").val() == "" ||
      $("#description").val() == ""
    ) {
      alert("Enter your details");
    }
    else {
      alert('Product created sucessfully')
    }
    // if (
    //   $("#name").val() != "" &&
    //   $("#category").val() != "" &&
    //   $("#price").val() != "" &&
    //   $("#quantity").val() != "" &&
    //   $("#image").val() != "" &&
    //   $("#description").val() != ""
    // ) {
    // }
  });

  $("#create-prdbtn").on("click", function (e) {
    e.preventDefault();
    let myForm = $(".form")[0];
    let myData = new FormData(myForm);

    $.ajax({
      type: "POST",
      url: "http://159.65.21.42:9000/create/product",
      processData: false,
      contentType: false,
      data: myData,
      success: function (response) {
        alert("Product Created successfully");
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  });
});
