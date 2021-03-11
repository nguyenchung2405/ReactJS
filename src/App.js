import BT3Footer from "./Components/BaiTapThucHanhLayout/BT3Footer";
import BT3Header from "./Components/BaiTapThucHanhLayout/BT3Header";
import BT3Navbar from "./Components/BaiTapThucHanhLayout/BT3Navbar";
import BT3ProductList from "./Components/BaiTapThucHanhLayout/BT3ProductList";


function App() {
  return (
    <div className="App">
      <div className="container">
        <BT3Navbar />
        <BT3Header />
        <BT3ProductList />
      </div>
      <BT3Footer />
    </div>

  );
}

export default App;
