import React, { Component } from "react";

// Kiểu cho state
interface MyState {
  message: string;
}

class MyComponent extends Component<{}, MyState> {
  constructor(props: {}) {
    super(props);
    // Khởi tạo state
    this.state = {
      message: "Trước khi click",
    };
  }

  // Hàm xử lý sự kiện
  handleClick = () => {
    this.setState({
      message: "Sau khi click",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default MyComponent;
