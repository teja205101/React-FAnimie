import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullWidthTabs from "./Tab";
import listOfHeroes from "./Fixtures/listOfHeroes.json";
import Login from "../src/Login/Login";

export const herosContext = createContext(listOfHeroes);

export const cartListContext = createContext([]);

export const heroListLimit = createContext();

function App() {
  const [cartNameList, changeNameCartList] = useState([]);
  const [cartImgList, changeImgCartList] = useState([]);
  const [displaySnackBar, setDisplaySnackBar] = useState("");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            exact
            path="RecruiterDashBoard"
            element={
              <>
                <herosContext.Provider value={listOfHeroes}>
                  <cartListContext.Provider
                    value={{
                      cartNameList,
                      changeNameCartList,
                      cartImgList,
                      changeImgCartList,
                    }}
                  >
                    <heroListLimit.Provider
                      value={{ displaySnackBar, setDisplaySnackBar }}
                    >
                      {displaySnackBar}
                      <FullWidthTabs />
                    </heroListLimit.Provider>
                  </cartListContext.Provider>
                </herosContext.Provider>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
