import { Suspense } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { navLinks, routes } from "@/utils/router";
import { Navbar } from "@/components/layout/Navbar";
import logo from "@/assets/logo.png";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex items-center flex-col overflow-x-hidden px-4">
          <Navbar navLinks={navLinks} title="ADAM SLATER" logo={logo} />
          <Routes>{routes}</Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
