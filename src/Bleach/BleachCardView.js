import * as React from "react";
import { cartListContext, herosContext } from "../App";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import fakeData from "../Fixtures/Heroes descriptions";

function CustomCard() {
  var listOfHeroes = React.useContext(herosContext);
  const {
    cartNameList,
    changeNameCartList,
    cartImgList,
    changeImgCartList,
    cartCostList,
    changeCostCartList,
  } = React.useContext(cartListContext);
  const handleClick = (cardValue) => {
    if (!cartNameList.includes(cardValue.name)) {
      changeNameCartList([...cartNameList, cardValue.name]);
    }
    if (!cartImgList.includes(cardValue.img)) {
      changeImgCartList([...cartImgList, cardValue.img]);
      changeCostCartList([...cartCostList, cardValue.cost]);
    }
  };
  const card = listOfHeroes.Bleach.map((hero, index) => (
    <>
      <Card
        raised
        sx={{
          width: 460,
          height: 350,
          margin: "0 auto",
          padding: " 2em 4em 25em 2em",
          float: "left",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <h3>{hero.name}</h3>
          <h3 style={{ paddingLeft: 300 }}>$ {hero.cost}M</h3>
        </div>
        <CardMedia
          component="img"
          height="190"
          image={hero.img}
          alt={hero.name}
          title={hero.name}
          sx={{
            padding: "0em 1em 5em 1em ",
            objectFit: "contain",
          }}
        />
        <marquee direction="up" style={{ height: 300 }}>
          <h4>Hero Character and Powers</h4>
          {fakeData}
        </marquee>
        <Button
          color="primary"
          variant="outlined"
          fullWidth="true"
          onClick={() => handleClick(hero)}
          style={{
            paddingLeft: 5,
            fontSize: 20,
          }}
        >
          <div style={{ textAlign: "center" }}>Add to collection</div>
          <AddIcon />
        </Button>
      </Card>
    </>
  ));
  return card;
}

export default function OutlinedCard() {
  return <Card>{CustomCard()}</Card>;
}
