import React, { useState, useContext, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { cartListContext, heroListLimit, herosContext } from "../App";
import HeroNormalView from "../HeroNormalView/heroNormalView";
import DcCardView from "../DC/DcCardView";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import CropLandscapeIcon from "@mui/icons-material/CropLandscape";

function Dc() {
  const [alignment, setAlignment] = React.useState("Plain View");
  const handleChangeForToogle = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [x, setX] = useState(0);
  const listOfHeroes = useContext(herosContext);
  const handleChange = (event, value) => {
    setX(value - 1);
  };
  const { displaySnackBar, setDisplaySnackBar } = useContext(heroListLimit);
  const {
    cartNameList,
    changeNameCartList,
    cartImgList,
    changeImgCartList,
    cartCostList,
    changeCostCartList,
  } = useContext(cartListContext);
  function cartNumberChange(e) {
    if (!cartNameList.includes(listOfHeroes.DC[x].name)) {
      changeNameCartList([...cartNameList, listOfHeroes.DC[x].name]);
      changeImgCartList([...cartImgList, listOfHeroes.DC[x].img]);
      changeCostCartList([...cartCostList, listOfHeroes.DC[x].cost]);
    }
  }
  const [y, setY] = useState(false);
  useEffect(() => {
    const z = cartNameList.length > 1 ? true : false;
    setY(z);
    y
      ? setDisplaySnackBar(
          <>
            <h1 style={{ color: "red" }}>
              You have {cartNameList.length} reached max Heroes for the Team
            </h1>
          </>
        )
      : setDisplaySnackBar("");
  }, []);
  useEffect(() => {
    const z = cartNameList.length > 1 ? true : false;
    setY(z);
    y
      ? setDisplaySnackBar(
          <>
            <h1 style={{ color: "red" }}>
              You have {cartNameList.length} reached max Heroes for the Team
            </h1>
          </>
        )
      : setDisplaySnackBar("");
  }, [cartNameList.length, x]);
  const [nameButtonSelected, changeNameButtonSelected] = useState(false);
  const [costButtonSelected, changeCostButtonSelected] = useState(false);
  function nameSort() {
    listOfHeroes.DC = listOfHeroes.DC.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    changeNameButtonSelected(true);
    changeCostButtonSelected(false);
  }
  function costSort() {
    listOfHeroes.DC = listOfHeroes.DC.sort((a, b) => a.cost - b.cost);
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
        {alignment == "Card View" ? (
          <>
            <DcCardView />
          </>
        ) : (
          <>
            {HeroNormalView(listOfHeroes.DC[x])}
            <Button
              color="primary"
              onClick={cartNumberChange}
              value={listOfHeroes.DC[x].name}
              variant="outlined"
              fullWidth={true}
              style={{
                paddingLeft: 580,
                fontSize: 20,
              }}
            >
              <div style={{ textAlign: "center" }}>Add to collection</div>
              <AddIcon />
            </Button>
            <Pagination
              count={listOfHeroes.DC.length}
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

export default Dc;
