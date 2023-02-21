import React, { useContext } from "react";
import { herosContext } from "../App";
import Pagination from "@mui/material/Pagination";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import HeroNormalView from "../HeroNormalView/heroNormalView";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import OutlinedCard from "../Naruto/NarutoCardView";
import { cartListContext } from "../App";

export default function Avengers() {
  const [alignment, setAlignment] = React.useState("Plain View");
  const handleChangeForToogle = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const listOfHeroes = useContext(herosContext);
  const [x, setX] = React.useState(0);
  const handleChange = (event, value) => {
    setX(value - 1);
  };
  const {
    cartNameList,
    changeNameCartList,
    cartImgList,
    changeCartImgList,
  } = useContext(cartListContext);
  function cartNumberChange() {
    cartNameList.push(listOfHeroes.Naruto[x].name);
    changeNameCartList(cartNameList);
    cartImgList.push(listOfHeroes.Naruto[x].img);
    changeCartImgList(cartImgList);
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
            {HeroNormalView(listOfHeroes.Naruto[x])}
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
              count={listOfHeroes.Naruto.length}
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
