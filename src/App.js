import logo from "./logo.svg";
import "./App.css";
import Home from "./screen/home";
import weather from "./content/images/A.jpg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${weather})`,
        width: "100%",
        height: "650px",
        backgroundSize: "Cover",
        backgroundPosition: "center",
      }}
    >
    

    <h1 style={{color:"white",textAlign:"center",marginTop:"30px"}}>WEATHER APP</h1>


    </div>
  );
}

export default App;
