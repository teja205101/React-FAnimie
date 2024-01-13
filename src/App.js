import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FullWidthTabs from "./Tab";
import listOfHeroes from "./Fixtures/listOfHeroes.json";
import Login from "../src/Login/Login";
import Autocomplete from "@mui/material/Autocomplete";
import autoCompleteHeroList from "../src/Fixtures/autoCompleteHero";
import { TextField } from "@material-ui/core";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";

// const listOfHeroes = {
//   Powerrangers: [
//     {
//       name: "Red Ranger",
//       cost: 100,
//       img: "https://assets.mycast.io/characters/140452_normal.jpg?1551552412",
//     },
//     {
//       name: "Green Ranger",
//       cost: 80,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5EMETVrDDCyTCO8LmtY_SqNRpYB7SalpLDVUei17ziupPUIez58uV3_mZ7tgrRUr7QFQ&usqp=CAU",
//     },
//     {
//       name: "Yellow Ranger",
//       cost: 60,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTg_Q6K8YbXKfRRlibDka2k35Ba05QtD9yuw&usqp=CAU",
//     },
//   ],
// };

export const herosContext = createContext(listOfHeroes);

export const cartListContext = createContext([]);

export const heroListLimit = createContext();

function App() {
  const [cartNameList, changeNameCartList] = useState([]);
  const [cartImgList, changeImgCartList] = useState([]);
  const [cartCostList, changeCostCartList] = useState([]);
  const [displaySnackBar, setDisplaySnackBar] = useState("");
  const [heroBasedCardDisplay, setHeroBasedCardDisplay] = useState(false);
  const [costBasedCardDisplay, setCostBasedCardDisplay] = useState(false);
  const [heroDetails, setHeroDetails] = useState();
  const [costSearchHeroDetails, setCostSearchHeroDetails] = useState("");

  function heroCard(hero) {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {hero.name}
          </Typography>
          <img src={hero.img} alt={hero.name} />
          Cost : {hero.cost}
          <Button
            variant="contained"
            onClick={() => setHeroBasedCardDisplay(false)}
          >
            Close
          </Button>
        </CardContent>
      </Card>
    );
  }

  function costCard(x) {
    const y = x.map((hero, ind) => (
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {hero.name}
          </Typography>
          <img src={hero.img} alt={hero.name} />
          <h1>Cost : {hero.cost}</h1>
          <Button
            variant="contained"
            onClick={() => setCostBasedCardDisplay(false)}
          >
            Closex
          </Button>
        </CardContent>
      </Card>
    ));
    return y;
    // console.log("Bleach -----", x.Bleach[0].name);
    // return <h1>{x.Bleach[0].name}</h1>;
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

  const searchByName = (event, newValue) => {
    const x = findIndex(listOfHeroes, newValue);
    const myArray = x.split(".", 2);
    setHeroDetails(listOfHeroes[myArray[0]][myArray[1]]);
    setHeroBasedCardDisplay(false);
  };

  function searchByCost(cost) {
    const result = {};
    for (let [key, value] of Object.entries(listOfHeroes)) {
      const filteredList = value.filter((hero) => hero.cost === cost);
      if (filteredList.length > 0) {
        result[key] = filteredList;
      }
    }
    return result;
  }

  function valueSearch(event, newValue) {
    console.clear();
    console.log("newValue ------", searchByCost(Number(newValue)));
    setCostSearchHeroDetails(searchByCost(Number(newValue)));
  }

  function cartNumberChange() {
    if (heroDetails) {
      var heroIndex = listOfHeroes.DC.findIndex(
        (hero) => hero.name === heroDetails.name
      );
      if (heroIndex === -1) {
        heroIndex = listOfHeroes.Bleach.findIndex(
          (hero) => hero.name === heroDetails.name
        );
      }
      if (heroIndex === -1) {
        heroIndex = listOfHeroes.Avengers.findIndex(
          (hero) => hero.name === heroDetails.name
        );
      }
      if (heroIndex === -1) {
        heroIndex = listOfHeroes.Naruto.findIndex(
          (hero) => hero.name === heroDetails.name
        );
      }
      if (heroIndex === -1) {
        heroIndex = listOfHeroes.Dragonball.findIndex(
          (hero) => hero.name === heroDetails.name
        );
      }
      if (heroIndex === -1) {
        heroIndex = listOfHeroes.Powerrangers.findIndex(
          (hero) => hero.name === heroDetails.name
        );
      }
      if (heroIndex === -1) {
        heroIndex = listOfHeroes.Onepiece.findIndex(
          (hero) => hero.name === heroDetails.name
        );
      }
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
            exact
            path="/RecruiterDashBoard"
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
                      <Link to="/RecruiterDashBoard">
                        <HomeIcon />
                      </Link>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={autoCompleteHeroList}
                          sx={{ width: 300, paddingLeft: 30, paddingBottom: 2 }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Search for the heroes"
                            />
                          )}
                          onChange={searchByName}
                        />
                        <div style={{ height: 30, paddingLeft: 10 }}>
                          <Button
                            variant="contained"
                            onClick={() => setHeroBasedCardDisplay(true)}
                            style={{ height: 30 }}
                          >
                            Search for Hero
                          </Button>
                        </div>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={[100, 2]}
                          sx={{ width: 300, paddingLeft: 30, paddingBottom: 2 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Search by cost" />
                          )}
                          onChange={valueSearch}
                        />
                        <div style={{ height: 30, paddingLeft: 10 }}>
                          <Button
                            variant="contained"
                            onClick={() => setCostBasedCardDisplay(true)}
                            style={{ height: 30 }}
                          >
                            Search By Cost
                          </Button>
                        </div>
                      </div>
                      {heroBasedCardDisplay ? (
                        <>
                          {heroCard(heroDetails)}
                          <Button
                            variant="contained"
                            onClick={cartNumberChange}
                          >
                            ADD To collection
                          </Button>
                        </>
                      ) : costBasedCardDisplay ? (
                        <>
                          <h1>Hi</h1>
                          {costCard(costSearchHeroDetails)}
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
