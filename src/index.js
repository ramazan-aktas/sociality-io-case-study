import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Summary from "./pages/customers/Summary";
import Publish from "./pages/customers/Publish";
import Engage from "./pages/customers/Engage";
import Feed from "./pages/customers/Feed";
import Report from "./pages/customers/Report";
import Listen from "./pages/customers/Listen";
import Notifications from "./pages/customers/Notifications";
import Compose from "./pages/customers/Compose";
import SingleCustomerDefault from "./pages/customers/SingleCustomerDefault";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path=":companyName" element={<SingleCustomerDefault />}>
            <Route path="notifications" element={<Notifications />} />
            <Route path="summary" element={<Summary />} />
            <Route path="publish" element={<Publish />}>
              <Route path="compose" element={<Compose />} />
              <Route path="feed" element={<Feed />} />
            </Route>
            <Route path="engage" element={<Engage />}></Route>
            <Route path="listen" element={<Listen />}></Route>
            <Route path="report" element={<Report />}></Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
