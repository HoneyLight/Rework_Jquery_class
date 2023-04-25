$(document).ready(function () {
    $.ajax({
      type: "GET",
      url: "http://159.65.21.42:9000/products",
      success: function (response) {
        let arr = [];
        $(response).each(function (i, data) {
          if (data.category == "bouguessa") {
            arr.push(data);
            console.log([data].length);
            let myShop = `
                  <div class="product">
                  <a href='cart.html?id=${data._id}'}>
                      <div class="image"><img src='http://159.65.21.42:9000${data.image}' alt="Image" /></div>
                      <h3>${data.name}</h3>
                      <p>${data.description}</p>
                      <h4>$${data.price}</h4>
                  </a>
                  </div>
                  `;
            $("#productsContainer").append(myShop);
          }
        });
        // $("#totalPrd").html(arr.length);
      },
      error: function (err) {
        console.log(err);
      },
  });
});
  