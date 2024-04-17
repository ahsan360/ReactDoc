import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import MyForm from "./MyForm";
import ComponentWithError from "./ComponentWithError";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <MyForm />
      </ErrorBoundary>
      <ErrorBoundary>
        <ComponentWithError />
      </ErrorBoundary>
    </>
  );
};

export default App;
