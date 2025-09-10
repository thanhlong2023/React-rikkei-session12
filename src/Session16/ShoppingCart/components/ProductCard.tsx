import React from "react";
import type { Product } from "../../ShoppingCart";

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price.toLocaleString()} đ</p>
      <button onClick={() => onAddToCart(product)}>🛒 Thêm vào giỏ hàng</button>
    </div>
  );
};

export default ProductCard;
