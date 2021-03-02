import ImageGridList from "./categories/CategoryList";
import NavBar from "./resources/Navbar";
import Slider from "./resources/Carousel";

function App() {
  return (
    <div className="App">
      <NavBar>

      </NavBar>
      <Slider/>

      <div className="separator"><h1>Categories</h1>
      </div>
      <ImageGridList>

      </ImageGridList>
      
    </div>
  );
}

export default App;
