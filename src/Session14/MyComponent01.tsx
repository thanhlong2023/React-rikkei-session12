import React, { Component } from "react";

// Định nghĩa kiểu cho state
interface MyState {
  message: string;
}

class MyComponent extends Component<{}, MyState> {
  constructor(props: {}) {
    super(props);
    // Khởi tạo state
    this.state = {
      message: "Học code để đi làm",
    };
  }

  // Hàm xử lý sự kiện
  handleClick = () => {
    this.setState({
      message: "Học code sẽ thành công. Cố lên!!!",
    });
  };

  // Ngăn component render lại khi state thay đổi
  shouldComponentUpdate(nextProps: {}, nextState: MyState): boolean {
    console.log("State mới:", nextState.message);
    return false; // Ngăn render lại
  }

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
