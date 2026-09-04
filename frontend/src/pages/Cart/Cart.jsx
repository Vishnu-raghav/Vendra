import "./Cart.css";
export function Cart() {
  return (
    <div className="ecommerce-cart">
      <div className="cart-product-details">
         <div className="address-container">
        <div className="address-info">
          <div className="address-to">
            Deliver to : Vishnu Raghav{" "}
            <span className="address-label">Home</span>
          </div>
          <div className="user-address">
            Palla no 1 tilpat fbd haryaan 121003
          </div>
        </div>

        <button className="address-change-btn">Change</button>
      </div>
      <div className="cart-detail-container">
        <div className="cart-container">

          <div className="cart-product-image-detail-container">
               <div className="cart-image-quatity-container">
            <div className="cart-image">
              <img
                src="/Product-image-1.avif"
                alt=""
                className="product-image"
              />
            </div>

            <div className="cart-quantity">
              <select name="quantity" id="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

          </div>

          <div className="cart-product-details">
            <div className="cart-product-name">Dot & key Ceramides & Hyaluronic Barrier</div>
            <div className="cart-product-quantity">100g</div>
            <div className="cart-product-rating">4.4</div>
            <div className="cart-product-price">292</div>
          </div>
          </div>
          
            <div className="product-dilvery-date">
              delivery by Sep 7, Mon
            </div>

        </div>
          <div className="remove-product-button-container">
             <button className="remove-button">Remove</button>
          </div>
      </div>

      </div>

      <div className="cart-product-"></div>
     
    </div>
  );
}
