import { BrowserRouter, Routes } from "react-router-dom";
import { navLinks, routes } from "@/utils";
import { Footer, Navbar, Spinner } from "@/components";
import logo from "@/assets/logo.png";
import { Suspense } from "react";

function App() {
  return (
    <div className="flex items-center justify-between flex-col overflow-x-hidden px-4">
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Navbar navLinks={navLinks} title="ADAM SLATER" logo={logo} />
          <Routes>{routes}</Routes>
          <Footer navLinks={navLinks} />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
