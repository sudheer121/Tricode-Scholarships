import React, { Component, useContext } from "react";
import Router, { useRouter } from "next/router";

import { AuthContext } from "../context/store";


export default class Index extends Component {
  componentDidMount = () => {
    Router.push("/auth/login");
  };

  render() {
    return <div />;
  }
}
