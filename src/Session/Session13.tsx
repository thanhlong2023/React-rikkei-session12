import React, { Component } from "react";
import Exercises01 from "../Session13/Exercises01";
import Exercises02 from "../Session13/Exercises02";
import Exercises03 from "../Session13/Exercises03";
import Parent from "../Session13/Bai4/Parent";
import Parent5 from "../Session13/Bai5/Parent";
import ListPost from "../Session13/Bai6/ListPost";

export default class Session13 extends Component {
  render() {
    return (
      <>
        <h1>Session 13</h1>
        <Exercises01 />
        <Exercises02 />
        <Exercises03 />
        <Parent />
        <Parent5 />
        <ListPost />
      </>
    );
  }
}
