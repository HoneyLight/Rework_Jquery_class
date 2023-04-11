$(document).ready(function() {
  if (localStorage.getItem('todo-list')) {
    $('#output').html(localStorage.getItem('todo-list'));
  }

  //add task
  $('#btn').click(function() {
    if ($('#txt').val() != '') {
      let todo = `<div class="list">
        <p>${$('#txt').val()}</p>
        <div class="btns">
          <button class="blue">Edit</button><button class="red">Delete</button
          ><button class="green">Completed</button>
        </div>
      </div>`;
      $('#output').append(todo);
      updateLocalStorage();
      if ($('#btn').html() === 'Add task') {
        $('#txt').val('');
      } else {
        $('#btn').html('Add task');
        $('#txt').val('');
      }
    } else {
      alert('Enter a task');
    }
  });

  //delete task
  $('#output').on('click', '.red', function() {
    $(this)
      .parent()
      .parent()
      .remove();
    updateLocalStorage();
  });

  //edit task
  $('#output').on('click', '.blue', function() {
    let removedIndex = $(this)
      .parent()
      .parent();
    let selectedIndex = removedIndex
      .children()
      .first()
      .html();
    console.log(selectedIndex);
    $('#txt').val(selectedIndex);
    $('#btn').html('Update');
    removedIndex.remove();
    updateLocalStorage();
  });

  //completed
  $('#output').on('click', '.green', function() {
    let removedIndex = $(this)
      .parent()
      .parent();
    let selectedIndex = removedIndex.children().first();
    selectedIndex.toggleClass('complete');
  });

  function updateLocalStorage() {
    let items = $('#output').html();
    localStorage.setItem('todo-list', items);
  }
//   let URL = 'https://fakestoreapi.com';
  $('#get').click(function() {
    $.ajax({
      url: `https://fakestoreapi.com/products`,
      method: 'GET',
      dataType: 'json',
      success: function(response) {
        // console.log(url);
        $('#employees').empty();
        $.map(response, function(value, index) {
          let tabledata = `  <tr data-id=${value.id}>
          <td>${value.title}</td>
          <td>${value.price}</td>
          <td>${value.rating.rate}</td>
<td><button class="edit">edit</button></td>
        </tr>`;

          $('#employees').append(tabledata);
        });
      },
      error: function(err) {
        alert('server error');
      },
    });
  });

  $('#employees').on('click', '.edit', function() {
    let row = $(this).closest('tr');
    let id = row.attr('data-id');
    // $(this).attr("data-id")
    alert(`${id}`);
  });

  //  $('#get').click(function() {
  $.ajax({
    url: 'data.json',
    method: 'get',
    dataType: 'json',
    success: function(response) {
      //   $('#products').empty();
      $.map(response.products, function(value, index) {
        let product = `   <div data-id=${value.id}>
        <p>Product Name:${value.name}</p>
        <p>price:${value.price}</p>
<label>qty:</label>
<input id="qty" type=number class"qtyInput" value="1" >
<button data-name=${value.name} data-price=${value.price}   class="addTocart">Add to cart</button>
      </div>`;
        console.log($('#qty').val());
        $('#products').append(product);
      });
    },
    error: function(err) {
      alert('server error');
    },
  });
  //   });
  let cart = [];

  displayCartItems();
//   sumPrice();
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
  }
  if (localStorage.getItem('cart_sum')) {
    JSON.parse(localStorage.getItem('cart_sum'));
  }

  $('#products').on('click', '.addTocart', function() {
    let prdId = $(this).closest('div');
    let id = prdId.attr('data-id');
    let pname = $(this).attr('data-name');
    let pPrice = $(this).attr('data-price');
    let qty = prdId.find('input').val();

    // check cart for duplicate
    // alert(index);
    let prdInCart = false;
    $.each(cart, function(i, e) {
      if (id === e.prdId) {
        alert('item already added to cart');
        prdInCart = true;
      }
    });
    if (!prdInCart) {
      cart.push({
        prdId: id,
        prdName: pname,
        prdPrice: pPrice,
        prdQty: qty,
      });
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    $('input').val(1);
    displayCartItems();
    sumPrice();
  });

  function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    $('#cart').empty();
    $.each(cart, function(i, e) {
      let cartDetails = ` <div  data-id=${e.prdId}>
        <p>Product Name:${e.prdName}</p>
        <p>price:${e.prdPrice}</p>
        <p>qty:${e.prdQty}</p>
<button data-index=${i} class="delete">delete</button>
<button data-index=${i} class="edit" title="Only item quantity can be edited">edit</button>
      </div>`;
      $('#cart').append(cartDetails);
    });
  }

  $('#cart').on('click', '.edit', function() {
    let confirmation = confirm('Are you sure you want to make changes?');
    if (confirmation === true) {
      var index = $(this).attr('data-index');
      let item = cart[index];
      let newQty = prompt('Enter new qty', item.prdQty);
      if (newQty) {
        item.prdQty = newQty;

        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        sumPrice();
      }
    } else {
      displayCartItems();
    }
  });

  $('#cart').on('click', '.delete', function() {
    let confirmation = confirm('sure?');
    if (confirmation === true) {
      var index = $(this).attr('data-index');
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      displayCartItems();
      sumPrice();
    } else {
      displayCartItems();
    }
  });

  function sumPrice() {
    let cart = [];
    if (JSON.parse(localStorage.getItem('cart'))) {
      cart = JSON.parse(localStorage.getItem('cart'));
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
    localStorage.setItem('cart_sum', JSON.stringify(totalSum));
    displayTotal();
  }

  function displayTotal() {
    let cartSum = JSON.parse(localStorage.getItem('cart_sum'));
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (cart.length != 0) {
      $('#total').css('display', 'block');
      $('#sum').empty();
      $('#sum').append(cartSum);
    } else {
      $('#total').css('display', 'none');
    }
  }
});
