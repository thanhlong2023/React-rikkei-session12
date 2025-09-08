import React, { Component, ChangeEvent, FormEvent } from "react";

// Kiểu cho state
interface Product {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
}

interface MyState {
  product: Product;
}

class ProductForm extends Component<{}, MyState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      product: {
        productId: "",
        productName: "",
        price: 0,
        quantity: 0,
      },
    };
  }

  // Xử lý thay đổi input
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      product: {
        ...prevState.product,
        [name]: name === "price" || name === "quantity" ? Number(value) : value,
      },
    }));
  };

  // Xử lý submit form
  handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // Ngăn reload trang
    console.log("Product:", this.state.product);
  };

  render() {
    const { productId, productName, price, quantity } = this.state.product;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Mã sản phẩm: </label>
          <input
            type="text"
            name="productId"
            value={productId}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label>Tên sản phẩm: </label>
          <input
            type="text"
            name="productName"
            value={productName}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label>Giá: </label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label>Số lượng: </label>
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={this.handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ProductForm;
