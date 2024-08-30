import "./App.scss";
import Header from "./components/header/Header";
import Photos from "./components/photos/Photos";
import data from "../src/helper/data"

function App() {
  // console.log(data);
  return (
    <div className="App">
      <Header/>
      <Photos data = {data}/>
    </div>
  );
}

export default App;
