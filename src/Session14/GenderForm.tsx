import React, { Component, ChangeEvent, FormEvent } from "react";

interface MyState {
  gender: string;
}

class GenderForm extends Component<{}, MyState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      gender: "", // ban đầu chưa chọn gì
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: e.target.value });
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Giới tính đã chọn:", this.state.gender);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Chọn giới tính:</h3>

        <label>
          <input
            type="radio"
            name="gender"
            value="Nam"
            checked={this.state.gender === "Nam"}
            onChange={this.handleChange}
          />
          Nam
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="Nữ"
            checked={this.state.gender === "Nữ"}
            onChange={this.handleChange}
          />
          Nữ
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="Khác"
            checked={this.state.gender === "Khác"}
            onChange={this.handleChange}
          />
          Khác
        </label>

        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default GenderForm;
