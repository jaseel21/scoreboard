import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Graph from './components/Graph';
import Admin from './components/Admin';
import {DataProvider} from "./store/dataBase" 


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <DataProvider>

      <Routes>
        <Route path="/" element={<Graph />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
     </DataProvider>
    </>
  );
}

export default App;
