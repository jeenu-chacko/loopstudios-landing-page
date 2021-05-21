import logo from './logo.svg';
import './App.css';
import ContentSection from "./components/navbar/ContentSection"
import Navbar from "./components/navbar/Navbar";
import Gallery from "./components/Gallery";
import Footer from "./Footer"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ContentSection></ContentSection>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
}
 
export default App;
