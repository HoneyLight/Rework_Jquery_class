// $(document).ready(function(){
//     if (localStorage.getItem("bouguessa")) {
//         $("#output").html(localStorage.getItem("bouguessa"));
//       }

//     $("#register").click(function () {
//         if (
//           $("#fname").val() == "" ||
//           $("#lname").val() == "" ||
//           $("#email").val() == "" ||
//           $("#password").val() == "") {
//             alert("Enter your details");
//           }
//           if (
//             $("#fname").val() != "" &&
//             $("#lname").val() != "" &&
//             $("#email").val() != "" &&
//             $("#password").val() != "") {
//               updateLocalStorage();
//           }
//           // else{
//           //   updateLocalStorage();
//           // }
//     })

//     $("#login").click(function () {
//         if (
//           $("#email").val() == "" ||
//           $("#password").val() == "") {
//             alert("Enter your details");
//           }
//           else{
//             updateLocalStorage();
//           }
//     })
//     $('#viewed-item').on('click', '.noura-item', function() {
//       let view = $('.noura-blazer');
//       $('#viewed').append(view);
//     })

//     // $("#viewed-item").click(function() {
//     //   let view = $('.noura-blazer');
//     //   $('#viewed').append(view);
//     // })

//     function updateLocalStorage() {
//         let registerDetails = $("#output").html();
//         localStorage.setItem("bouguessa", registerDetails);
//       }
// })

$(document).ready(function () {
  // if (localStorage.getItem("user-product")) {
  //   $("#output").html(localStorage.getItem("user-product"));
  // }

  $.ajax({
    url: "data.json",
    method: "get",
    dataType: "json",
    success: function (response) {
      //   $('#products').empty();
      $.map(response.products, function (value, index) {
        let product = `   <div data-id=${value._id}>
        <p>Manal image:${value.image}</p>
        <p>Manal Product:${value.name}</p>
        <p>price:${value.price}</p>
        <p>category: ${value.category}</p>
        <label>qty:</label>
        <input id="qty" type=number class"qtyInput" value="1" >
        <button data-name=${value.name} data-price=${value.price}   class="addTocart">Add to cart</button>
        </div>`;

        console.log($("#qty").val());
        $("#products").append(product);
      });
    },
    error: function (err) {
      alert("server error");
    },
  });

  let cart = [];

  displayCartItems();
  //   sumPrice();
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  if (localStorage.getItem("cart_sum")) {
    JSON.parse(localStorage.getItem("cart_sum"));
  }

  $("#products").on("click", ".addTocart", function () {
    let prdId = $(this).closest("div");
    let id = prdId.attr("data-id");
    let pName = $(this).attr("data-name");
    let pPrice = $(this).attr("data-price");
    let qty = prdId.find("input").val();

    // check cart for duplicate
    // alert(index);
    let prdInCart = false;
    $.each(cart, function (i, e) {
      if (id === e.prdId) {
        alert("item already added to cart");
        prdInCart = true;
      }
    });
    if (!prdInCart) {
      cart.push({
        prdId: _id,
        prdName: pName,
        prdPrice: pPrice,
        prdQty: qty,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    $("input").val(1);
    displayCartItems();
    sumPrice();
  });

  function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    $("#cart").empty();
    $.each(cart, function (i, e) {
      let cartDetails = `  <tr>
          <th>product id</th>
          <th>name</th>
          <th>category</th>
          <th>price</th>
          <th>quantity</th>
          <th>Delete/edit</th>
        </tr>
        <tr data-id=${e.prdId}>
          <td>${e.prdName}</td>
          <td>${e.prdCategory}</td>
          <td>${e.prdPrice}</td>
          <td>${e.prdQty}</td>
          <td><button data-index=${i} class="delete">delete</button>
          <button data-index=${i} class="edit" title="Only item quantity can be edited">edit</button></td>
        </tr>`;
      $("#cart").append(cartDetails);
    });
  }

  $("#cart").on("click", ".edit", function () {
    let confirmation = confirm("Are you sure you want to make changes?");
    if (confirmation === true) {
      var index = $(this).attr("data-index");
      let item = cart[index];
      let newQty = prompt("Enter new qty", item.prdQty);
      if (newQty) {
        item.prdQty = newQty;

        localStorage.setItem("cart", JSON.stringify(cart));
        displayCartItems();
        sumPrice();
      }
    } else {
      displayCartItems();
    }
  });

  $("#cart").on("click", ".delete", function () {
    let confirmation = confirm("sure?");
    if (confirmation === true) {
      var index = $(this).attr("data-index");
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCartItems();
      sumPrice();
    } else {
      displayCartItems();
    }
  });

  function sumPrice() {
    let cart = [];
    if (JSON.parse(localStorage.getItem("cart"))) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }

    let sumArry = [];
    let totalSum = 0;
    for (let i = 0; i < cart.length; i++) {
      let cartIndex = cart[i];
      let price = cartIndex.prdPrice;
      let qty = cartIndex.prdQty;

      let total = price * qty;
      sumArry.push(total);
    }
    for (let i = 0; i < sumArry.length; i++) {
      totalSum = totalSum + sumArry[i];
    }
    localStorage.setItem("cart_sum", JSON.stringify(totalSum));
    displayTotal();
  }

  function displayTotal() {
    let cartSum = JSON.parse(localStorage.getItem("cart_sum"));
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart.length != 0) {
      $("#total").css("display", "block");
      $("#sum").empty();
      $("#sum").append(cartSum);
    } else {
      $("#total").css("display", "none");
    }
  }
});




        // let tabledata = `  <tr>
        //   <th>product id</th>
        //   <th>name</th>
        //   <th>category</th>
        //   <th>price</th>
        //   <th>quantity</th>
        //   <th>description</th>
        //   <th>Delete/edit</th>
        // </tr>
        // <tr data-id=${value._id}>
        //   <td>${value.image}</td>
        //   <td>${value.name}</td>
        //   <td>${value.category}</td>
        //   <td>${value.price}</td>
        //   <td>${value.description}</td>
        //   <td><label>qty:</label>
        //   <input id="qty" type=number class"qtyInput" value="1" ></td>
        //   <td><button class="edit">edit</button></td>
        // </tr>`;