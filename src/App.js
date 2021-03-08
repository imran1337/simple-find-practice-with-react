import "./App.css";
import CompA from "./Component/CompA";
// import CompB from "./Component/CompB";
// import CompC from "./Component/CompC";
import { createContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export const categoriesHandler = createContext();
export const handleCountFunction = createContext();

function App() {
  const [categories, setCategories] = useState('MoBilE');

  return (
    <>
      <categoriesHandler.Provider value={[categories, setCategories]}>
        <CompA />
        {/* <CompB />
        <CompC /> */}
      </categoriesHandler.Provider>
    </>
  );
}

export default App;
// export { CountValue,handleCountFunction } from "./App";
