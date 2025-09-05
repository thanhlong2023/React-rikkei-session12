import React, { useState } from "react";
import ProductDetail from "./ProductDetail"; // Import default export
import type { Product } from "./ProductDetail";

function Parent() {
  const [product] = useState<Product>({
    id: 1,
    name: "Bưởi ba roi",
    price: 12000,
    quantity: 6,
  });

  return (
    <div style={{ padding: "20px" }}>
      <ProductDetail product={product} />
    </div>
  );
}

export default Parent;
