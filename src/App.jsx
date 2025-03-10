import { Outlet } from "react-router-dom";
import Header from "./component/Header/Header";
import { useEffect, useRef, useState } from "react";


const App = (props) => {
  return (
    <div className="w-full">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default App;