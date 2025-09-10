import React, { useState } from "react";
import ProductCard from "./ShoppingCart/components/ProductCard";
import Cart from "./ShoppingCart/components/Cart";
import "./ShoppingCart.css";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ShoppingCart: React.FC = () => {
  const [cart, setCart] = useState<(Product & { quantity: number })[]>([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Điện thoại Samsung Galaxy",
      price: 20000000,
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRo39-lj1PsFYvSwB0JuvDwEvEE6QTNn3Yeug0c7ntRwWrmXeeoJU1FVrkxDnZYSsyVn_OXqrJn8pI7Yj9wnZDzD1gwu0xeoP5XaYjLp6jV_TtZzNtSMEhCrziw4aWWfMP2rsGMpA&usqp=CAc",
    },
    {
      id: 2,
      name: "Điện thoại iPhone 14 Promax",
      price: 20500000,
      image:
        "data:image/webp;base64,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",
    },
    {
      id: 3,
      name: "Điện thoại Oppo A9",
      price: 20000000,
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTqaGgxpLmJASABSbyg5plEp-KNB36PCDftliX9qIvpIzTDGchKU-Lvq54zY1fzA-HyGj8QE6HdfRIQtiTD8R6inWcMJRmCF6ultdz85S2UUFTHlq0TGSoOo_K3Ai_ggAoz4RsLmCA&usqp=CAc",
    },
    {
      id: 4,
      name: "Điện thoại Oppo V5",
      price: 23500000,
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT2DCA6bt15OOS3TTtMJ5tPDcqaiQoxs3-RlDmoQPTzZMfK07xA4qEGWAK1gWc-d-iT62IlxiiQFwgzuuEXfj9HCyxdSobo5b3ZCmfV9PmbFOP8DLLd5LTXiwcUtIs3JhzE19bi4dk&usqp=CAc",
    },
  ];

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const exist = prev.find((p) => p.id === product.id);
      if (exist) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemove = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: number, amount: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  return (
    <div className="app-container">
      <button onClick={() => setIsCartOpen(!isCartOpen)}>🛒 Giỏ hàng</button>

      <Cart
        cartItems={cart}
        onRemove={handleRemove}
        onQuantityChange={handleQuantityChange}
        isOpen={isCartOpen}
      />
      <h2>Danh sách sản phẩm</h2>
      <div className="product-list">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
        ))}
      </div>

      <Cart
        cartItems={cart}
        onRemove={handleRemove}
        onQuantityChange={handleQuantityChange}
      />
    </div>
  );
};

export default ShoppingCart;
