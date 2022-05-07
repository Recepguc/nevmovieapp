import React from "react";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/Approuter";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
};

export default App;
