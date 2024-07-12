import React, {useState} from 'react';

const CartQuantity = () => {

    const [quantity, setQuantity] = useState(4);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
      };

      const handleDecrease = () => {
        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
      };

  return (
    <>
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
    </>
  )
}

export default CartQuantity