
import './App.css';
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Signup from "./Signup";
import Login from "./Login";
import Search from "./Search";

function App() {
  return (
    
    <div>
      <Navbar />
      <Login/>
      <Search />
      <Signup/>
      <Home />
      <Search />
    </div>
  );
}

export default App;
