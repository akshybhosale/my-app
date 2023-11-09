// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
import Map from './components/Map';
import "./App.css";
import Header from './components/Header';
function App() {
  return (
    <div className="App">
     <Map />
     <Header />
      {/* <Header />
      <Main />
      <Footer name="footer_name"/>  */}
      {/*declared prop in footer function*/}

    </div>
  );
}
export default App;
