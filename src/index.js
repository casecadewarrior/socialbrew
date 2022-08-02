import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';

import PublicRecipes from "./screens/public-recipes";
import SocialFeed from "./screens/social-feed";
import Dashboard from "./screens/dashboard";
import UserProfile from "./screens/user-profile";
import Calculators from "./screens/calculators";
import AbvCalculator from "./screens/abv-calculator";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="public-recipes" element={<PublicRecipes />} />
      <Route path="social-feed" element={<SocialFeed />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="brewing-calculators" element={<Calculators />} />
      <Route path="brewing-calculators/abv" element={<AbvCalculator />} />
      <Route path="profile" element={<UserProfile />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
