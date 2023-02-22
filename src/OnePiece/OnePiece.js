import React, { useContext, useState } from "react";
import { herosContext } from "../App";
import Pagination from "@mui/material/Pagination";
import Card from "@mui/material/Card";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import HeroNormalView from "../HeroNormalView/heroNormalView";
import OutlinedCard from "../OnePiece/OnePieceCardView";
import { cartListContext } from "../App";

export default function OnePiece() {
  const [alignment, setAlignment] = React.useState("Plain View");
  const handleChangeForToogle = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [x, setX] = useState(0);
  const listOfHeroes = useContext(herosContext);
  const handleChange = (event, value) => {
    setX(value - 1);
  };
  const { cartNameList, changeNameCartList, cartImgList, changeImgCartList } =
    useContext(cartListContext);
  function cartNumberChange() {
    if (!cartNameList.includes(listOfHeroes.Onepiece[x].name)) {
      changeNameCartList([...cartNameList, listOfHeroes.Onepiece[x].name]);
    }
    if (!cartImgList.includes(listOfHeroes.Onepiece[x].img)) {
      changeImgCartList([...cartImgList, listOfHeroes.Onepiece[x].img]);
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
            {HeroNormalView(listOfHeroes.Onepiece[x])}
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
              count={listOfHeroes.Powerrangers.length}
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
