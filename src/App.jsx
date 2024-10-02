import "./App.css";
import Navbar from "./components/Navbar";
import RouterConfig from "./config/RouterConfig";

function App() {
  return (
    <div className="px-4 md:px-16 lg:px-32">
      <Navbar />
      <RouterConfig />
    </div>
  );
}

export default App;
