import { FunctionComponent } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Dash, Login, Signin } from './routes';
import { getDataFromLocalStorage } from './services';

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dash" />} />
        <Route
          path="dash"
          element={
            getDataFromLocalStorage({ key: '@authToken' }) ? (
              <Dash />
            ) : (
              <Login />
            )
          }>
          <Route
            path=":id"
            element={
              getDataFromLocalStorage({ key: '@authToken' }) ? (
                <Dash />
              ) : (
                <Login />
              )
            }
          />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signin />} />
        <Route path="*" element={<Navigate to="/dash" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
