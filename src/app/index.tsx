import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../style/main.css";
import Main from "../pages/Main/ui";
import Layout from "../shared/ui/Layout/Layout";

const RestPresentation = lazy(() => import("../pages/RestPresentation/ui"));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route
            path="/rest"
            element={
              <React.Suspense fallback={null}>
                <RestPresentation />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
