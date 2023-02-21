import React, { useContext } from "react";
import { herosContext } from "../App";
import Pagination from "@mui/material/Pagination";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import HeroNormalView from "../HeroNormalView/heroNormalView";
import OutlinedCard from "../PowerRangers/PowerRangerCardView";
import { cartListContext } from "../App";

export default function PowerRangers() {
  const [alignment, setAlignment] = React.useState("Plain View");
  const handleChangeForToogle = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [x, setX] = React.useState(0);
  const listOfHeroes = useContext(herosContext);
  const handleChange = (event, value) => {
    setX(value - 1);
  };
  const { cartList, changeCartList } = useContext(cartListContext);
  const {
    cartNameList,
    changeNameCartList,
    cartImgList,
    changeCartImgList,
  } = useContext(cartListContext);
  function cartNumberChange() {
    cartNameList.push(listOfHeroes.Powerrangers[x].name);
    changeNameCartList(cartNameList);
    cartImgList.push(listOfHeroes.Powerrangers[x].img);
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
            {HeroNormalView(listOfHeroes.Powerrangers[x])}
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
              count={3}
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
