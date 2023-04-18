$(document).ready(function () {
    $.ajax({
      type: "GET",
      url: "http://159.65.21.42:9000/products",
      success: function (resp) {
        let arr = [];
        $(resp).each(function (i, data) {
          if (data.category == "people") {
            arr.push(data);
            console.log([data].length);
            let result = `
                  <div class="product">
                  <a href='product.html?id=${data._id}'}>
                      <div class="image"><img src='http://159.65.21.42:9000${data.image}' alt="Image" /></div>
                      <h3>${data.name}</h3>
                      <p>${data.description}</p>
                      <h4>₦${data.price}</h4>
                  </a>
                  </div>
                  `;
            $("#productsContainer").append(result);
          }
        });
        $("#totalProducts").html("Total Products:" + arr.length);
      },
      error: function (err) {
        console.log(err);
      },
    });
  });
  