import React, { useContext, useState } from "react";
import Pagination from "@mui/material/Pagination";
import AvengersCardView from "../Avengers/AvengersCardView";
import { herosContext } from "../App";
import "../Avengers/Avengers.css";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import HeroNormalView from "../HeroNormalView/heroNormalView";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { cartListContext } from "../App";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import CropLandscapeIcon from "@mui/icons-material/CropLandscape";

export default function Avengers() {
  const listOfHeroes = useContext(herosContext);
  const [nameButtonSelected, changeNameButtonSelected] = useState(false);
  const [costButtonSelected, changeCostButtonSelected] = useState(false);
  const [alignment, setAlignment] = React.useState("Plain View");
  const handleChangeForToogle = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const {
    cartNameList,
    changeNameCartList,
    cartImgList,
    changeImgCartList,
    cartCostList,
    changeCostCartList,
  } = useContext(cartListContext);

  function cartNumberChange(e) {
    if (!cartNameList.includes(listOfHeroes.Avengers[x].name)) {
      changeNameCartList([...cartNameList, listOfHeroes.Avengers[x].name]);
      changeImgCartList([...cartImgList, listOfHeroes.Avengers[x].img]);
      changeCostCartList([...cartCostList, listOfHeroes.DC[x].cost]);
    }
  }
  const [x, setX] = useState(0);
  const handleChange = (event, value) => {
    setX(value - 1);
  };
  function nameSort() {
    listOfHeroes.Avengers = listOfHeroes.Avengers.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    changeNameButtonSelected(true);
    changeCostButtonSelected(false);
  }
  function costSort() {
    listOfHeroes.Avengers = listOfHeroes.Avengers.sort(
      (a, b) => a.cost - b.cost
    );
    changeNameButtonSelected(false);
    changeCostButtonSelected(true);
  }
  return (
    <>
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
      <br />
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChangeForToogle}
      >
        <ToggleButton value="Plain View">
          <CropLandscapeIcon />
        </ToggleButton>
        <ToggleButton value="Card View">
          <ViewCompactIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <br />
      <div>
        {alignment === "Card View" ? (
          <>
            <AvengersCardView />
          </>
        ) : (
          <>
            {HeroNormalView(listOfHeroes.Avengers[x])}
            <Button
              color="primary"
              variant="outlined"
              fullWidth={true}
              onClick={cartNumberChange}
              style={{
                paddingLeft: 580,
                fontSize: 20,
              }}
            >
              <div style={{ textAlign: "center" }}>Add to collection</div>
              <AddIcon />
            </Button>
            <Pagination
              count={listOfHeroes.Avengers.length}
              onChange={handleChange}
              showFirstButton
              showLastButton
              style={{ bottom: 0, float: "right", backgroundColor: "red" }}
            />
          </>
        )}
      </div>
    </>
  );
}
