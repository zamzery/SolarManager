import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
