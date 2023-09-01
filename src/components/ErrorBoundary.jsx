import React, { Component } from "react";
import { ErrorScreen } from "./ErrorScreen";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: "",
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorScreen message={this.state.errorMessage} />;
    }
    return this.props.children;
  }
}
