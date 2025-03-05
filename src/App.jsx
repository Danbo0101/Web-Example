import { Outlet } from "react-router-dom";
import Header from "./component/Header/Header";
import { useEffect, useRef, useState } from "react";


const App = (props) => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default App;