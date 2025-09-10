import React from "react";
import type { Product } from "../../ShoppingCart";

interface Props {
  cartItems: (Product & { quantity: number })[];
  onRemove: (id: number) => void;
  onQuantityChange: (id: number, amount: number) => void;
  isOpen: boolean; // nhận thêm prop để mở/đóng
}

const Cart: React.FC<Props> = ({
  cartItems,
  onRemove,
  onQuantityChange,
  isOpen,
}) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={`cart ${isOpen ? "open" : ""}`}>
      <h2>🛒 Giỏ hàng</h2>
      {cartItems.length === 0 && <p>Chưa có sản phẩm nào</p>}
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="info">
            <p>{item.name}</p>
            <p>{item.price.toLocaleString()} đ</p>
          </div>
          <div className="quantity">
            <button onClick={() => onQuantityChange(item.id, -1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => onQuantityChange(item.id, 1)}>+</button>
          </div>
          <button className="remove" onClick={() => onRemove(item.id)}>
            🗑
          </button>
        </div>
      ))}
      <h3>Tổng tiền: {total.toLocaleString()} đ</h3>
    </div>
  );
};

export default Cart;
