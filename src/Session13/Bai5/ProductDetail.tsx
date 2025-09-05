import React from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div>
      <h3>Dữ liệu trong component con</h3>
      <p>Id: {product.id}</p>
      <p>Product name: {product.name}</p>
      <p>Price: {product.price.toLocaleString()} đ</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
};

export default ProductDetail;
