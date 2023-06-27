import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./styles/app.css";

import { AppRoutes } from "./routes/appRoute";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        newestOnTop={false}
        closeOnClick
        theme='colored'
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
        <AppRoutes />
    </div>
  );
}

export default App;
