import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate the error
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI with error message
      return (
        <div>
          <h1>Something went wrong</h1>
          <p>{this.state.error.toString()}</p>
        </div>
      );
    }

    // Render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;
