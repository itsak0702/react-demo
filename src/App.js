import Ashish from "./components/Ashish";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";

function App() {
  return (
    <>
      <Navbar title='Ashish Kumar Site'/>
      <div className="container">
        <Textbox title='Enter Text Here...' text='Start Typing here...'/>
      </div>
      <Ashish></Ashish>
    </>
  );
}

export default App;
