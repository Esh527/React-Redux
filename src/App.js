import Account from "./Components/Account";
import DataFetching from "./Components/DataFetching";
import Form from "./Components/Form";
import ReactHooks from "./Components/ReactHooks";

import "./store";

function App() {
  return (
    <div className="App">
      {/* <ReactHooks/>
      <DataFetching/> */}
      <Form />
      <Account />
    </div>
  );
}

export default App;
