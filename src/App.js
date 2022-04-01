import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Text Utils" aboutText="About TextUtils" />
      <TextForm heading="Enter the text below" />
    </>
  );
}

export default App;
