import React, { Component } from "react";

// Định nghĩa kiểu cho state
interface Exercise01State {
  userName: string;
}

class Exercise01Class extends Component<{}, Exercise01State> {
  constructor(props: {}) {
    super(props);
    // Khởi tạo state
    this.state = {
      userName: "Cao Thành Long",
    };
  }

  componentDidMount(): void {
    console.log("Component đã mount, userName:", this.state.userName);
  }

  render() {
    return (
      <div>
        <h2>Xin chào, tôi là {this.state.userName}</h2>
      </div>
    );
  }
}

export default Exercise01Class;

/**
 * import React, { useState, useEffect } from "react";

const Exercise01: React.FC = () => {
  // Tạo state userName
  const [userName, setUserName] = useState<string>("Cao Thành Long");

  useEffect(() => {
    console.log("Component đã mount, userName:", userName);
  }, [userName]);

  return (
    <div>
      <h1>Bài tập 01</h1>
      <h2>Xin chào, tôi là {userName}</h2>
    </div>
  );
};

export default Exercise01;

 */
