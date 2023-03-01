import * as React from "react";
import { useContext } from "react";
import { cartListContext } from "../App";
import Button from "@mui/material/Button";

function SelectedHeroList() {
  const {
    cartNameList,
    changeNameCartList,
    cartImgList,
    changeImgCartList,
  } = useContext(cartListContext);
  function removeHero(e) {
    const indexToRemove = cartNameList.indexOf(e.target.value);
    const updatedArray = [...cartNameList.slice(0, indexToRemove), ...cartNameList.slice(indexToRemove + 1)];
    const x=[...cartImgList.slice(0, indexToRemove), ...cartImgList.slice(indexToRemove + 1)];
    changeNameCartList(updatedArray);
    changeImgCartList(x)
  }
  const cartNameListView = cartNameList.map((hero, ind) => (
    <div className="container" key={ind}>
      {" "}
      <h1>{hero}</h1>
      <img
        src={cartImgList[ind]}
        alt={cartNameList[ind]}
        style={{ height: 300, width: 300 }}
      />
      <Button
        onClick={removeHero}
        size="small"
        color="error"
        variant="outlined"
        style={{ width: 300, height: 50 }}
        value={cartNameList[ind]}
      >
        <h1>Remove</h1>
      </Button>
    </div>
  ));
  return <div className="container">{cartNameListView}</div>;
}

export default SelectedHeroList;
