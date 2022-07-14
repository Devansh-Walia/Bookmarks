import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { store } from './redux/index'
import App from './app'
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme} >
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
