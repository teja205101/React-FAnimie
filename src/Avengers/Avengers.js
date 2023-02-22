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

export default function Avengers() {
  const listOfHeroes = useContext(herosContext);
  const [alignment, setAlignment] = React.useState("Plain View");
  const handleChangeForToogle = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const { cartNameList, changeNameCartList, cartImgList, changeImgCartList } =
    useContext(cartListContext);
  function cartNumberChange() {
    if (!cartNameList.includes(listOfHeroes.Avengers[x].name)) {
      changeNameCartList([...cartNameList, listOfHeroes.Avengers[x].name]);
    }
    if (!cartImgList.includes(listOfHeroes.Avengers[x].img)) {
      changeImgCartList([...cartImgList, listOfHeroes.Avengers[x].img]);
    }
  }
  const [x, setX] = useState(0);
  const handleChange = (event, value) => {
    setX(value - 1);
  };
  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChangeForToogle}
        aria-label="Platform"
      >
        <ToggleButton value="Plain View">Plain View</ToggleButton>
        <ToggleButton value="Card View">Card View</ToggleButton>
      </ToggleButtonGroup>
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
              fullWidth="true"
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
