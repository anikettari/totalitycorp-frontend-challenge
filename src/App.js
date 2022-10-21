import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Pages/Navbar";
import "../src/Components/Css/Main.css";
import "../src/Components/Css/style.css";
import "../src/Components/Css/sidebar.css";
import "../src/Components/Css/activities.css";
import MainBody from "./Components/Pages/MainBody";

function App() {
  return (
    <div>
      <Navbar />
      <MainBody />
    </div>
  );
}

export default App;
