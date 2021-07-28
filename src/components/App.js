import React from "react";
import MessageContextProvider from "../contexts/MessageContext";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";

import "../App.css";
import Header from "./Header";

const App = () => {
  return (
    <MessageContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="upper-main">
            <div className="main">
              <MessageList />
              <MessageForm />
            </div>
            <div className="main">
              <MessageList />
              <MessageForm />
            </div>
          </div>
        </div>
      </div>
    </MessageContextProvider>
  );
};

export default App;
