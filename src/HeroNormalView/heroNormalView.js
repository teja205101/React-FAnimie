import React, { useState } from "react";
import fakeData from "../Fixtures/Heroes descriptions";
import Card from "@mui/material/Card";

export default function HeroNormalView(hero) {
  return (
    <>
      <Card variant="outlined">
        <h1 style={{ float: "right", paddingRight: 20, paddingBottom: 0 }}>
          $ {hero.cost} M
        </h1>
        <h1>{hero.name}</h1>

        <img
          src={hero.img}
          alt={hero.name}
          style={{
            width: 700,
            height: 850,
            paddingTop: 0,
          }}
        />

        <marquee
          direction="up"
          style={{
            padding: 20,
            width: 900,
            height: 750,
          }}
        >
          <h1>Hero Character and Powers</h1>
          <br />
          {fakeData}
        </marquee>
      </Card>
    </>
  );
}
