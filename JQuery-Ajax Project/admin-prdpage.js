$(document).ready(function () {
  $("#menu-bar").click(function () {
    $("#slide").toggle();
  });

  $.ajax({
    type: "GET",
    url: "http://159.65.21.42:9000/products",
    success: function (response) {
      let arr = [];
      $(response).each(function (i, data) {
        // let dataID = (data._id);
        // console.log(dataID);
        if (data.category == "bouguessa") {
          arr.push(data);
          // console.log([data].length);
          let myShop = `
                  <div class="product">
                  <a href='product.html?id=${data._id}'}>
                      <div class="image"><img src='http://159.65.21.42:9000${data.image}' alt="Image" /></div>
                      <h3>${data.name}</h3>
                      <p>${data.description}</p>
                      <h4>$${data.price}</h4>
                  </a>
                  <div class="btn"><button class="edit">Edit</button>
                  <button class="delete">Delete</button>
                  </div>
                  `;
          $("#productsContainer").append(myShop);
        }
      });
    },
  });

  $(".btn").on("click", ".delete", function() {
    alert('working');
    $.ajax({
      type: "GET",
      url: "http://159.65.21.42:9000/products",
      success: function (cloth) {
        let cd = $.each(cloth, function (i, e) {
          let eid = e._id;
          console.log(eid);

          $.ajax({
            type: "DELETE",
            url: `http://159.65.21.42:9000/products/'  + eid `,
            success: function () {
              console.log("delete");
            },
          });
        });
      },
    });
  });
});
