import React, { useContext } from "react";
import Pagination from "@mui/material/Pagination";
import { herosContext } from "../App";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import HeroNormalView from "../HeroNormalView/heroNormalView";
import OutlinedCard from "../Bleach/BleachCardView";
import { cartListContext } from "../App";

export default function Bleach() {
  const [alignment, setAlignment] = React.useState("Plain View");
  const handleChangeForToogle = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const listOfHeroes = useContext(herosContext);
  const [x, setX] = React.useState(0);
  const handleChange = (event, value) => {
    setX(value - 1);
  };
  const { cartList, changeCartList } = useContext(cartListContext);
  const { cartNameList, changeNameCartList, cartImgList, changeImgCartList } =
    useContext(cartListContext);
  function cartNumberChange(e) {
     if (!cartNameList.includes(listOfHeroes.Bleach[x].name)) {
    changeNameCartList([...cartNameList, listOfHeroes.Bleach[x].name]);
    changeImgCartList([...cartImgList, listOfHeroes.Bleach[x].img]);}
  }
  const [nameButtonSelected,changeNameButtonSelected]=React.useState(false);
  const [costButtonSelected,changeCostButtonSelected]=React.useState(false)
  function nameSort(){
    listOfHeroes.Bleach=listOfHeroes.Bleach.sort((a, b) => a.name.localeCompare(b.name))
    changeNameButtonSelected(true)
    changeCostButtonSelected(false)
  }
  function costSort(){
    listOfHeroes.Bleach=listOfHeroes.Bleach.sort((a, b) => a.cost-b.cost)
    changeNameButtonSelected(false)  
    changeCostButtonSelected(true)
  }
  return (
    <>
     <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        aria-label="Platform"
        style={{float:'right'}}
      >
      <ToggleButton value="Name" onClick={nameSort} 
      selected={nameButtonSelected ? true :false }
      >
        Name</ToggleButton> 
      <ToggleButton value="Cost" onClick={costSort} 
      selected={costButtonSelected ? true :false } >Cost</ToggleButton>
      </ToggleButtonGroup>
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
            {HeroNormalView(listOfHeroes.Bleach[x])}
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
