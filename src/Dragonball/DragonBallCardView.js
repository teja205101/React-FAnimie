import * as React from "react";
import { herosContext } from "../App";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import fakeData from "../Fixtures/Heroes descriptions";

function CustomCard() {
  var listOfHeroes = React.useContext(herosContext);
  const card = listOfHeroes.Dragonball.map((hero, index) => (
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
        <h3>{hero.name}</h3>
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
