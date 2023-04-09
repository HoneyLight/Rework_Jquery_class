$(document).ready(function() {
$.ajax({
    url: 'data.json',
    method: 'get',
    dataType: 'json',
    success: function(response) {
      $.map(response.products, function(value, index) {
        let product = `   <div data-id=${value.id}>
        <p>Product Name:${value.name}</p>
        <p>price:${value.price}</p>
<button data-name=${value.name} data-price=${value.price} class="addTocart">Add to cart</button>
<input type="number" data-name=${value.qty} id="num"> 
      </div>`;

        $('#products').append(product);
      });
    },
    error: function(err) {
      alert('server error');
    },
  });
displayCartItems()

  let cart = [];
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
  }

  $('#products').on('click', '.addTocart', function() {

//get values needed in the cart from the products
    let prdId = $(this).closest('div');
    let id = prdId.attr('data-id');
    let pName = $(this).attr('data-name');
    let pPrice = $(this).attr('data-price');
    let pQty = $(this).attr('data-qty');
    console.log(pQty)

//create a check that would help us validate if items are duplicated in the cart
    let prdInCrt = true;

    $.each(cart, function(i, e) {
      // let flowerPrice = 30;
      let totalPrice;
      if (e.prdId === id && pQty === 1) {
        alert('one');
        // alert('item in cart already');
        // prdInCrt = true;
      }
      if (e.prdId === id && pQty > 1) {
        alert(pQty);
        totalPrice = pPrice * pQty;
        // prdInCrt = true;
      }
    });

//if it's not in there push into a cart that would be set to the localstorage
    if (prdInCrt) {
      cart.push({
        prdId: id,
        prdName: pName,
        prdPrice: pPrice,
        prdQty: pQty,
        prdTotalPrice: totalPrice,
      });
      localStorage.setItem('cart', JSON.stringify(cart));
    }

//after setting to the local storage, get what is already set to fill the cart section
    displayCartItems();

  });

//display cart items
  function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    $('#cart').empty();
    $.each(cart, function(i, e) {
      let cartDetails = ` <div>
        <p>Products Name:${e.prdName}</p>
        <p>Products price:${e.prdPrice}</p>
        <p>Quantity:${e.prdQty}</p>
        <p>Quantity:${e.prdTotalPrice}</p>
      </div>`;
      $('#cart').append(cartDetails);
    });
  }
});
