import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Isupdate from "./components/Isupdate";

function App() {
  return (
    <div className="flex h-screen w-screen bg-[#f8f9fd] overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Home />
        </main>
        <Routes>
      <Route path="/update/:id" element={<Isupdate />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
