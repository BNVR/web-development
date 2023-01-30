import './App.css';
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"

function App() {
  return (
    <>
    <Navbar/>
    <Navbar titler = "Home" abouttext = 'About'/>
    <div className="container">
      <TextForm heading="Enter the text to analyze" />
    </div>

    </>
  );
}

export default App;
