import * as React from "react";
import { useContext } from "react";
import { cartListContext } from "../App";
import Button from "@mui/material/Button";

function SelectedHeroList() {
  function removeHero(e) {
    const index = cartNameList.indexOf(e.target.value);
    const selectedNameList = [...cartNameList];
    selectedNameList.splice(index, 1);
    changeNameCartList(selectedNameList);
    const selectedImgList = [...cartImgList];
    selectedImgList.splice(index, 1);
    changeImgCartList(selectedImgList);
  }
  const { cartNameList, changeNameCartList, cartImgList, changeImgCartList } =
    useContext(cartListContext);
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
        onClick={removeHero.bind(this)}
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
