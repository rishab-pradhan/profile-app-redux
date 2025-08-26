import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from './store/store';
import Home from './pages/Home';
import ProfileForm from './pages/ProfileForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfileForm />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
