import React, { useEffect } from "react";

const Notification: React.FC = () => {
  useEffect(() => {
    console.log("Component đã được mount!");
  }, []); // [] đảm bảo chỉ chạy 1 lần khi mount

  return (
    <div>
      <h2>Notification Component</h2>
    </div>
  );
};

export default Notification;

/**\
 * import React, { Component } from "react";

class Notification extends Component {
  componentDidMount(): void {
    console.log("Component đã được mount!");
  }

  render() {
    return (
      <div>
        <h2>Notification Component</h2>
      </div>
    );
  }
}

export default Notification;

 */
