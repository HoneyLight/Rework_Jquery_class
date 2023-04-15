$(document).ready(function(){
    if (localStorage.getItem("bouguessa")) {
        $("#output").html(localStorage.getItem("bouguessa"));
      }
    
    $("#register").click(function () {
        if (
          $("#fname").val() == "" ||
          $("#lname").val() == "" ||
          $("#email").val() == "" ||
          $("#password").val() == "") {
            alert("Enter your details");
          }
          if (
            $("#fname").val() != "" &&
            $("#lname").val() != "" &&
            $("#email").val() != "" &&
            $("#password").val() != "") {
              updateLocalStorage();
          }
          // else{
          //   updateLocalStorage();
          // }
    })

    $("#login").click(function () {
        if (
          $("#email").val() == "" ||
          $("#password").val() == "") {
            alert("Enter your details");
          }
          else{
            updateLocalStorage();
          }
    })
    $('#viewed-item').on('click', '.noura-item', function() {
      let view = $('.noura-blazer');
      $('#viewed').append(view);
    })

    // $("#viewed-item").click(function() {
    //   let view = $('.noura-blazer');
    //   $('#viewed').append(view);
    // })

    function updateLocalStorage() {
        let registerDetails = $("#output").html();
        localStorage.setItem("bouguessa", registerDetails);
      }
})