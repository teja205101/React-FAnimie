import React, { useContext } from "react";
import { herosContext } from "../App";
import Pagination from "@mui/material/Pagination";
import Card from "@mui/material/Card";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import HeroNormalView from "../HeroNormalView/heroNormalView";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import OutlinedCard from "../Dragonball/DragonBallCardView";
import { cartListContext } from "../App";

export default function Dragonball() {
  const [alignment, setAlignment] = React.useState("Plain View");
  const handleChangeForToogle = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [x, setX] = React.useState(0);
  const listOfHeroes = useContext(herosContext);
  const handleChange = (event, value) => {
    setX(value - 1);
  };
  const { cartNameList, changeNameCartList, cartImgList, changeImgCartList } =
    useContext(cartListContext);
  function cartNumberChange() {
    if (!cartNameList.includes(listOfHeroes.Dragonball[x].name)) {
      changeNameCartList([...cartNameList, listOfHeroes.Dragonball[x].name]);
    }
    if (!cartImgList.includes(listOfHeroes.Dragonball[x].img)) {
      changeImgCartList([...cartImgList, listOfHeroes.Dragonball[x].img]);
    }
  }
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
            <OutlinedCard />
          </>
        ) : (
          <>
            {HeroNormalView(listOfHeroes.Dragonball[x])}
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
              count={listOfHeroes.Dragonball.length}
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
