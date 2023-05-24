
// import { Button  } from './Button';
// import { Hello } from './Hello';
// import { GreenButton } from './Button';
// import { Counter2 } from './Counter';
// import { Counter } from './Counter';

import ErrorPage from "containers/ErrorPage";
import Home from "containers/Home";
import Login from "containers/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<ErrorPage />} />
   </Routes>
  );
}

export default App;
