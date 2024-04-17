import React from "react";

const ComponentWithError = () => {
  throw new Error("Intentional error");
  // This error will be caught by the nearest error boundary
};

export default ComponentWithError;
