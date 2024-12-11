import { Suspense } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "@/utils/router";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <Routes>{routes}</Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
