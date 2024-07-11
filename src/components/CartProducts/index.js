import React, {useState} from 'react'
import { LikeImg01, trash } from '../../asserts/images';

const CartProducts = () => {

    const [quantity, setQuantity] = useState(4);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
      };

      const handleDecrease = () => {
        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
      };

  return (
    <>
          <div className='all_cart_items'>

<div className='single_cart_product'>
    <div className='cart_left_part'>
        <div className='cart_product_Img'>
            <img src={LikeImg01} alt='car_img'></img>
        </div>

        <div className='cart_product_details'>
            <h4 className='cart_product_title'>Cellular shades</h4>

            <p class="welcome_para cart_product_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>

            <div className='cart_quantity_box'>
                <div>
                    <span className='quantity_text'>Quantity</span>
                </div>
               <div className='cart_quantity_actionBtns'>
                    <button onClick={handleDecrease} className='subtraction_btn'>-</button>
                    <span className='quantity_number'>{quantity.toString().padStart(2, '0')}</span>
                    <button onClick={handleIncrease} className='addition_btn'>+</button>
               </div>
            </div>

            <div className='cart_product_price_main'>
                <div>
                    <span className='cart_product_price text-uppercase'>price:</span>
                    <span className='cart_product_price pl-1'>$0</span>
                </div>
                <div>
                    <button className='request_quote_actionBtn'>request a free quote over the phone</button>
                </div>
            </div>

        </div>

    </div>

    <div className='cart_right_part'>
        <button className='cart_item_delete_btn'>
            <img src={trash} alt='trash'></img>
        </button>
    </div>
   
</div>

<div className='single_cart_product'>
    <div className='cart_left_part'>
        <div className='cart_product_Img'>
            <img src={LikeImg01} alt='car_img'></img>
        </div>

        <div className='cart_product_details'>
            <h4 className='cart_product_title'>Cellular shades</h4>

            <p class="welcome_para cart_product_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>

            <div className='cart_quantity_box'>
                <div>
                    <span className='quantity_text'>Quantity</span>
                </div>
               <div className='cart_quantity_actionBtns'>
                    <button onClick={handleDecrease} className='subtraction_btn'>-</button>
                    <span className='quantity_number'>{quantity.toString().padStart(2, '0')}</span>
                    <button onClick={handleIncrease} className='addition_btn'>+</button>
               </div>
            </div>

            <div className='cart_product_price_main'>
                <div>
                    <span className='cart_product_price text-uppercase'>price:</span>
                    <span className='cart_product_price pl-1'>$0</span>
                </div>
                <div>
                    <button className='request_quote_actionBtn'>request a free quote over the phone</button>
                </div>
            </div>

        </div>

    </div>

    <div className='cart_right_part'>
        <button className='cart_item_delete_btn'>
            <img src={trash} alt='trash'></img>
        </button>
    </div>
   
</div>

<div className='single_cart_product'>
    <div className='cart_left_part'>
        <div className='cart_product_Img'>
            <img src={LikeImg01} alt='car_img'></img>
        </div>

        <div className='cart_product_details'>
            <h4 className='cart_product_title'>Cellular shades</h4>

            <p class="welcome_para cart_product_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>

            <div className='cart_quantity_box'>
                <div>
                    <span className='quantity_text'>Quantity</span>
                </div>
               <div className='cart_quantity_actionBtns'>
                    <button onClick={handleDecrease} className='subtraction_btn'>-</button>
                    <span className='quantity_number'>{quantity.toString().padStart(2, '0')}</span>
                    <button onClick={handleIncrease} className='addition_btn'>+</button>
               </div>
            </div>

            <div className='cart_product_price_main'>
                <div>
                    <span className='cart_product_price text-uppercase'>price:</span>
                    <span className='cart_product_price pl-1'>$0</span>
                </div>
                <div>
                    <button className='request_quote_actionBtn'>request a free quote over the phone</button>
                </div>
            </div>

        </div>

    </div>

    <div className='cart_right_part'>
        <button className='cart_item_delete_btn'>
            <img src={trash} alt='trash'></img>
        </button>
    </div>
   
</div>

</div>
    </>
  )
}

export default CartProducts