
import Banner from "./components/blocks/Banner";
import Header from "./components/blocks/Header";
import Stats from "./components/blocks/Stats";
import About from "./components/blocks/About";
import Photos from "./components/blocks/Photos";
import Products from "./components/blocks/Products";
import Security from "./components/blocks/Security";
import Call from "./components/blocks/Call";
import Footer from "./components/blocks/Footer";

function App() {
  return (
    <div className='App'>
            <Header/>
            <Banner/>
            <Stats/>
            <About/>
            <Photos/>
            <Products/>
            <Security/>
            <Call/>
            <Footer/>
    </div>

  );
}

export default App;
