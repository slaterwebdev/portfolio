import { Suspense } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { navLinks, routes } from "@/utils/router";
import { Navbar, Footer } from "@/components";
import logo from "@/assets/logo.png";

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex flex-col justify-center min-h-screen text-center">
            Loading...
          </div>
        }
      >
        <div className="flex items-center flex-col overflow-x-hidden px-4">
          <Navbar navLinks={navLinks} title="ADAM SLATER" logo={logo} />
          <Routes>{routes}</Routes>
          <Footer navLinks={navLinks} />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
