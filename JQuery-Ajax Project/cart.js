$(document).ready(function () {
    let url = window.location.search;
    let urlParams = new URLSearchParams(url);
    let id = urlParams.get("id");
    $.ajax({
      type: "GET",
      url: `http://159.65.21.42:9000/product/${id}`,
      success: function (resp) {
        let result = `
              <div class="details">
                  <img src="http://159.65.21.42:9000${resp.image}" alt="product"/>
                  <div>
                      <h2>${resp.name}</h2>
                      <p>${resp.description}</p>
                      <h3>₦${resp.price}</h3>
                  </div>
              </div>
          `;
        $("#productCart").append(result);
      },
    });
  });
  