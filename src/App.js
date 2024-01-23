import logo from "./logo.svg";
import "./App.css";
import FetchRequests from "./Api/FetchRequests";
import Routing from "./component/Routing";

function App() {
  return (
    <>
      <FetchRequests>
        <Routing />
      </FetchRequests>
    </>
  );
}

export default App;
