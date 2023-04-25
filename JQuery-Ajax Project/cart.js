$(document).ready(function () {
  let url = window.location.search;
  let urlParams = new URLSearchParams(url);
  let id = urlParams.get("id");
  
  $.ajax({
    type: "GET",
    url: `http://159.65.21.42:9000/product/${id}`,
    success: function (resp) {
      // cartPrd  = resp;
      let userCart = `
          <div class="productStyles">
          </div>
          <div id="productCart">
            <div class="image">
              <img src="http://159.65.21.42:9000${resp.image}" alt="product"/>
            </div>
          </div>
          <div class="product-description">
            <div class="level1">
                <h4>${resp.name}</h4>
                <p>$${resp.price}</p>
            </div>
            <div class="level2">
                <p>A reinvention of the classic kaftan, the ${resp.name} is cut from a sustainable, light-weight fabric that closes with a front loop detail and cascades of fabric. The stretchy Tencel blend and loose fit design means it’s perfect for lounging at home. Available in white, nude, black, green and red.</p>
                <h5>STYLING TIP</h5>
                <p>Wear your ${resp.name} over our Andy stretch pants and Ichem t-shirt for a comfortable look that still looks chic.</p>
                <div class="product-size">
                    <h5>SIZE & FIT</h5>
                    <ul>
                        <li>Fits true to size, take your normal size</li>
                        <li>Designed for a loose fit</li>
                        <li>Mid Weight, stretchable fabric</li>
                        <li>Loop detail at the front</li>
                        <li>Length In inches for Standard size- S/M-55.5, L/XL-56.5</li>
                        <li>Length In inches for Petite size- - S/M-53.5, L/XL-54.5</li>
                        <li>Model is 177 cm/5’9 and is wearing a size S/M</li>
                        <li>Main fabric: 93% Tencel, 7% Polyurethane</li>
                        <li>Dry clean</li>
                        <li>Made in United Arab Emirates</li>
                        <li>Need Help or advice? Call or whatsapp +971 52 679 9878</li>
                    </ul>
                </div>
                <div class="share">
                    <p>SHARE 
                        <a href="#"><img src="./img/facebook-black-icon.png" alt="" width="10px"></a><a href="#"><img src="./img/youtube-icon.png" alt="" width="10px"></a><a href="#"><img src="./img/pinterest-icon.png" alt="" width="10px"></a>
                    </p>
                </div>
                <div class="product-purchase">
                   <div class="size">
                        <p>Size:</p>
                        <button>S/M</button><button>L/XL</button>
                   </div>
                   <div class="color">
                        <p>Color:</p>
                        <button>White</button><button>Nude</button><button>Black</button><button>Green</button><button>Red</button>
                   </div>
                   <div class="fit">
                        <p>Fit:</p>
                        <button>Standard</button><button>Petite</button>
                   </div>
                   <p><i>Only 1 piece in stock!</i></p>
                </div>
            </div>
            <div id="cart">
                <button id="addToCart">ADD TO CART  .  $${resp.price}</button>
            </div>
            <div id="buy">
                <button id="buynow">BUY IT NOW</button>
            </div>
            <div class="wishlist">
                <p>
                    <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-suit-heart" viewBox="0 0 16 16">
                        <path
                            d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                    </svg></a>
                    Add to wishlist
                </p>
            </div>
              <div class="more-info flex sbw">
                  <p><a href="#">MORE INFORMATION</a></p>
                  <p><a href="#ss">></a></p>
              </div>
            </div>
          </div>
          `;
      $("#cartPage").append(userCart);
    },
    // error: function (err) {
    //   console.log(err);
    // },
  });

  $($("#cart")).on("click", "#addToCart", function(e) {
    e.preventdefault();
    alert('click');
    // prdFound = false;
    // let saveInCart = JSON.parse(localStorage.getItem("cart"));
    // if (saveInCart.length > 0) {
    //   for(i=0; i < saveInCart.length; i++) {
    //     firstPrd = saveInCart[i]
    //     if (firstPrd.id == id) {
    //       prdFound = true;
    //     }
    //   }
    // }
    // if(prdFound) {
    //   alert ("Product already in cart");
    // }
    // else{
    //   saveInCart.push({id:cartPrd._id, name:cartPrd.name, image:cartPrd.image, price:cartPrd.price});
    // }
    // localStorage.setItem("cart", JSON.stringify(saveInCart));
  });

  $('#buynow').click(function() {
    alert('work')
  })
  $("#buy").on("click", "#buynow", function(){
    alert('work')
  })
});
