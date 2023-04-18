$(document).ready(function () {
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
        success: function (resp) {
          alert("Product Created");
          console.log(resp);
        },
        error: function (err) {
          console.log(err);
        },
      });
    });
  });
  