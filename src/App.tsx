import { FunctionComponent } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Dash, Login, SignUp } from './routes';
import { getDataFromLocalStorage } from './services';

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            getDataFromLocalStorage({ key: '@authToken' }) ? (
              <Navigate to="/dash" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/dash" element={<Dash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/dash" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
