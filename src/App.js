import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullWidthTabs from "./Tab";
import listOfHeroes from "./Fixtures/listOfHeroes.json";
import Login from "../src/Login/Login";
import Autocomplete from "@mui/material/Autocomplete";
import autoCompleteList from "../src/Fixtures/autoCompleteHero";
import { TextField } from "@material-ui/core";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const herosContext = createContext(listOfHeroes);

export const cartListContext = createContext([]);

export const heroListLimit = createContext();

function App() {
  const [cartNameList, changeNameCartList] = useState([]);
  const [cartImgList, changeImgCartList] = useState([]);
  const [cartCostList, changeCostCartList] = useState([]);
  const [displaySnackBar, setDisplaySnackBar] = useState("");
  const [heros, setHero] = useState(null);
  const [cardDisplay, setCardDisplay] = useState(false);
  const [autoCardDisplay, setAutoCardDisplay] = useState(false);
  const [heroDetails, setHeroDetails] = useState("");

  function HeroCard(hero) {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {hero.name}
          </Typography>
          <img src={hero.img} alt={hero.name} />
          <h1>Cost : {hero.cost}</h1>
          <Button variant="contained" onClick={() => setCardDisplay(false)}>
            Close
          </Button>
        </CardContent>
      </Card>
    );
  }
  function findIndex(obj, value) {
    for (let key in obj) {
      const currentValue = obj[key];
      if (currentValue === value) {
        return key;
      } else if (typeof currentValue === "object") {
        const index = findIndex(currentValue, value);
        if (index !== undefined) {
          return `${key}.${index}`;
        }
      }
    }
  }
  const handleOnChange = (event, newValue) => {
    setHero(heros);
    const x = findIndex(listOfHeroes, newValue);
    const myArray = x.split(".", 2);
    setHeroDetails(listOfHeroes[myArray[0]][myArray[1]]);
    setAutoCardDisplay(true);
  };

  function cartNumberChange() {
    if (heroDetails) {
      const heroIndex = listOfHeroes.DC.findIndex(
        (hero) => hero.name === heroDetails.name
      );
      if (heroIndex !== -1 && !cartNameList.includes(heroDetails.name)) {
        changeNameCartList([...cartNameList, heroDetails.name]);
        changeImgCartList([...cartImgList, heroDetails.img]);
        changeCostCartList([...cartCostList, heroDetails.cost]);
        setDisplaySnackBar("Hero added to cart");
      }
    }
  }

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
            exacts
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
                      cartCostList,
                      changeCostCartList,
                    }}
                  >
                    <heroListLimit.Provider
                      value={{ displaySnackBar, setDisplaySnackBar }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={autoCompleteList}
                          sx={{ width: 300, paddingLeft: 80, paddingBottom: 2 }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Search for the Hero"
                            />
                          )}
                          onChange={handleOnChange}
                        />
                        <Button
                          variant="contained"
                          onClick={() => setCardDisplay(true)}
                        >
                          Search
                        </Button>
                      </div>
                      {autoCardDisplay && cardDisplay && true ? (
                        <>
                          {HeroCard(heroDetails)}
                          <Button
                            variant="contained"
                            onClick={cartNumberChange}
                          >
                            ADD To collection
                          </Button>
                        </>
                      ) : (
                        <FullWidthTabs />
                      )}
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
