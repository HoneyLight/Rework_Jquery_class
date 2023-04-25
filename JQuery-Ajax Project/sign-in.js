$(document).ready(function() {

    $("#login").click(function () {
        if (
          $("#email").val() == "" ||
          $("#password").val() == ""
        ) {
          alert("Enter your details");
        }
        else {
          alert('Login sucessful')
        }
      });

    $($('#login')).on('click', function (e) {
        e.preventDefault();
        let myForm = $('.loginForm')[0];
        let myData = new FormData(myForm);

        $.ajax({
            type: "POST",
            url: "http://159.65.21.42:9000/register",
            processData: false,
            contentType: false,
            data: myData,
            success: function (resp) {
                alert("User Created");
                console.log(resp);
            },
            error: function (err) {
                // alert("email or password does not exist");
                console.log(err);
            },
        });
    });
});