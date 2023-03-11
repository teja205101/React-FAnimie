import * as React from "react";
import { useContext } from "react";
import { cartListContext } from "../App";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function SelectedHeroList() {
  const {
    cartNameList,
    changeNameCartList,
    cartImgList,
    changeImgCartList,
    cartCostList,
    changeCostCartList,
  } = useContext(cartListContext);
  function removeHero(indexToRemove) {
    // const indexToRemove = cartNameList.indexOf(e.target.value);
    const updatedArray = [
      ...cartNameList.slice(0, indexToRemove),
      ...cartNameList.slice(indexToRemove + 1),
    ];
    const updatedImgArray = [
      ...cartImgList.slice(0, indexToRemove),
      ...cartImgList.slice(indexToRemove + 1),
    ];
    changeNameCartList(updatedArray);
    changeImgCartList(updatedImgArray);
    const updatedCostArray = [
    ...cartCostList.slice(0, indexToRemove),
    ...cartCostList.slice(indexToRemove + 1),
    ];
    changeCostCartList(updatedCostArray);

  }
  const cartNameListView = cartNameList.map((hero, ind) => (
    <div style={{ display: "flex", flexDirection: "row", paddingBottom: 50 }}>
      <h1 style={{ paddingLeft: 10, height: 100, paddingTop: 100 }}>{hero}</h1>
      <h1 style={{ paddingLeft: 100, height: 100, paddingTop: 100 }}>
        {" "}
        ${cartCostList[ind]}M
      </h1>
      <img
        src={cartImgList[ind]}
        alt={cartNameList[ind]}
        style={{ height: 300, width: 300, paddingLeft: 100 }}
      />
      <div style={{ paddingLeft: 300, paddingTop: 110 }}>
        <Button
          onClick={()=>removeHero(ind)}
          size="small"
          color="error"
          variant="outlined"
          value={cartNameList[ind]}
          style={{ height: 40 }}
        >
          <h1>Remove</h1>
        </Button>
      </div>
    </div>
  ));
  const [nameButtonSelected, changeNameButtonSelected] = React.useState(false);
  const [costButtonSelected, changeCostButtonSelected] = React.useState(false);
  function nameSort() {
    const sortedNames = cartNameList.slice().sort();
    const sortedImg = sortedNames.map(
      (name) => cartImgList[cartNameList.indexOf(name)]
    );
    const sortedCost = sortedNames.map(
      (name) => cartCostList[cartNameList.indexOf(name)]
    );
    changeNameCartList(sortedNames);
    changeImgCartList(sortedImg);
    changeCostCartList(sortedCost);
    changeNameButtonSelected(true);
    changeCostButtonSelected(false);
  }
  function costSort() {
  const heroes = cartNameList.map((name, index) => ({
    name,
    cost: cartCostList[index],
    img: cartImgList[index]
  }));

  heroes.sort((a, b) => a.cost - b.cost);

  const sortedNameList = heroes.map(hero => hero.name);
  const sortedImgList = heroes.map(hero => hero.img);
  const sortedCostList = heroes.map(hero => hero.cost);

  changeNameCartList(sortedNameList);
  changeImgCartList(sortedImgList);
  changeCostCartList(sortedCostList);

  changeNameButtonSelected(false);
  changeCostButtonSelected(true);
}

  return (
    <div className="container">
      <ToggleButtonGroup color="primary" exclusive style={{ float: "right" }}>
        <ToggleButton
          value="Name"
          onClick={nameSort}
          selected={nameButtonSelected ? true : false}
        >
          Name
        </ToggleButton>
        <ToggleButton
          value="Cost"
          onClick={costSort}
          selected={costButtonSelected ? true : false}
        >
          Cost
        </ToggleButton>
      </ToggleButtonGroup>
      {cartNameListView}
    </div>
  );
}

export default SelectedHeroList;
