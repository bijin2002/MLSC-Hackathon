import Form from "./components/form";
import Navbar from "./components/navbar";
import "./index.css";
import "./button.css";
import "./logoText.css"
function App() {
  return (
    <div className="App">

      <Navbar />
      <div className="mainDiv">
      <img src="/src/assets/image.png" alt="" />
      <div class="logo-holder logo-10">
        <a href="">
          <h3>Customize Your Sneaks</h3>
          <p>&nbsp;</p>
        </a>
      </div>
    </div>
      <Form />
    
    </div>
  );
}

export default App;
