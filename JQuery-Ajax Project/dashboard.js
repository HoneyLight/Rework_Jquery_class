$(document).ready(function() {
    $("#menu-bar").click (function(){
        $("#slide").toggle()
    })
    
    $.ajax({
        type:"GET",
        url: "http://159.65.21.42:9000/users",
        success: function(resp) {
            let arr = [];
            $(response).each(function (i, data) {
                      if (data.category == "bouguessa") {
                        arr.push(data);
                        console.log([data].length);
                      };
                      });
            let userNo = index + 1;
            let userDetails = `<tr>
            <td>${resp.userNo}</td>
            <td>${resp.name}</td>
            <td>${resp.phone}</td>
            <td>${resp.email}</td>
            <td><button class="edit">Edit</button></td>
            <td><button class="delete">Delete</button></td>
            </tr>`;
            $("tbody").append(userDetails);
            $("#totalPrd").html(arr.length);
        },       
        error: function(err) {
            console.log(err);
        },
    });

    // edit dashboard details

    // delete dashboard details
    $("#tablebody").on("click", ".delete", function (){
        $(this)
      .parent()
      .remove();
        // userDetails.remove();
    })
});

// $.map(response.products, function (value, index) {
    // $("#output").on("click", ".delete", function () {
    //     $(this).parent().parent().remove();
    //     updateLocalStorage();
    //   });