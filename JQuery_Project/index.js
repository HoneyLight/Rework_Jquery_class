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
          else{
            updateLocalStorage();
          }
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

    function updateLocalStorage() {
        let registerDetails = $("#output").html();
        localStorage.setItem("bouguessa", registerDetails);
      }
})