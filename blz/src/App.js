
import Banner from "./components/blocks/Banner";
import Header from "./components/blocks/Header";
import Stats from "./components/blocks/Stats";
import About from "./components/blocks/About";
import Photos from "./components/blocks/Photos";
import Products from "./components/blocks/Products";
import Security from "./components/blocks/Security";
import Call from "./components/blocks/Call";
import Footer from "./components/blocks/Footer";

import Banner_About from "./components/blocks/Banner_About";
import Facts from "./components/blocks/Facts";
import Background from "./components/blocks/Background";
import Tittle from "./components/blocks/Tittle";

import Banner_Technologies from "./components/blocks/Banner_Technologies";

function App() {
  return (
    <div className='App'>
            {/* Главная
            <Header/>
            <Banner/>
            <Stats/>
            <About/>
            <Photos/>
            <Products/>
            <Security/>
            <Call/>
            <Footer/>
             */}

              {/* О нас
             <Header/>
             <Banner_About/>
             <Tittle/>
             <Facts/>
             <Background/>
             <Call/>
             <Footer/>*/}

              <Header/>
              <Banner_Technologies/>


             
    </div>

  );
}

export default App;
