import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./styles/app.css";

import { AppRoutes } from "./routes/appRoute";
import { Nav } from "./component/nav";
import { SuggestedUsers } from "./component/suggestedUsers";

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
      <div className="main-container">
        <div className="left-section">
          <Nav />
        </div>
        <div className="middle-section">
          <AppRoutes />
        </div>
        <div className="right-section">
          <SuggestedUsers />
        </div>
      </div>
    </div>
  );
}

export default App;
