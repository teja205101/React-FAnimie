import React from "react";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function Login() {
  return (
    <Card
      style={{
        marginLeft: 700,
        height: 400,
        width: 450,
        padding: 20,
        marginTop: 300,
      }}
      sx={{ flexGrow: 1 }}
    >
      <h2> Log In </h2>
      <Grid container spacing={2} style={{ paddingBottom: 30 }}>
        <Grid item xs={5}>
          <input
            type="text"
            placeholder="username"
            style={{ width: 170, height: 20 }}
          />
        </Grid>
        <Grid item xs={5}>
          <input
            type="text"
            placeholder="lastname"
            style={{ width: 170, height: 20 }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ paddingBottom: 50 }}>
        <Grid item xs={5}>
          <input
            placeholder="Id"
            type="text"
            style={{ width: 170, height: 20 }}
          />
        </Grid>
        <Grid item xs={5}>
          <input
            type="text"
            placeholder="TeamCode"
            style={{ width: 170, height: 20 }}
          />
        </Grid>
      </Grid>
      <div style={{ paddingLeft: 90 }}>
        <Button
          variant="contained"
          size="small"
          style={{ padding: 5, height: 50 }}
        >
          <Link
            to="RecruiterDashBoard"
            style={{ textDecoration: "none", color: "white" }}
          >
            Recruiter DashBoard
          </Link>
        </Button>
      </div>
    </Card>
  );
}
