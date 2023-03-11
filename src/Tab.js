import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Dc from "./DC/Dc";
import Avengers from "./Avengers/Avengers";
import Naruto from "./Naruto/Naruto";
import Dragonball from "./Dragonball/Dragonball";
import PowerRangers from "./PowerRangers/PowerRangers";
import OnePiece from "./OnePiece/OnePiece";
import Bleach from "./Bleach/Bleach";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { cartListContext } from "../src/App";
import "../src/Tab.css";
import SelectedHeroList from "../src/CartList/SelectedHeroList";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 7 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const {
    cartNameList,
    changeNameCartList,
    cartImgList,
    changeCartImgList,
  } = useContext(cartListContext);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const cartIcon = (
    <IconButton aria-label="cart">
      <StyledBadge color="secondary" badgeContent={cartNameList.length}>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );

  return (
    <>
      {/* <h1>{cartNameList.length} left to select</h1> */}
      <Box sx={{ bgcolor: "background.paper", width: 1790 }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="Dc" {...a11yProps(1)} />
            <Tab label="Avengers" {...a11yProps(2)} />
            <Tab label="Naruto" {...a11yProps(3)} />
            <Tab label="Dragon Ball" {...a11yProps(4)} />
            <Tab label="Power Rangers" {...a11yProps(5)} />
            <Tab label="One Piece" {...a11yProps(6)} />
            <Tab label="Bleach" {...a11yProps(7)} />
            <Tab label={cartIcon} {...a11yProps(8)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <>
              <h1>Welcome Recruiter</h1>
              <img
                src="https://i.pinimg.com/originals/b5/06/f7/b506f7f832c87c7e0a256c43f267b48e.jpg"
                alt="All heroes"
                style={{ width: 1650, height: 750 }}
                usemap="#image-map"
              />
              <map name="image-map">
                <area
                  shape="rect"
                  coords="10,10,100,100"
                  href="#"
                  title="Name 1"
                />
                <area
                  shape="circle"
                  coords="200,200,50"
                  href="#"
                  title="Name 2"
                />
                <area
                  shape="poly"
                  coords="300,100,400,150,350,200,250,180"
                  href="#"
                  title="Name 3"
                />
              </map>
            </>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Dc />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Avengers />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <Naruto />
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            <Dragonball />
          </TabPanel>
          <TabPanel value={value} index={5} dir={theme.direction}>
            <PowerRangers />
          </TabPanel>
          <TabPanel value={value} index={6} dir={theme.direction}>
            <OnePiece />
          </TabPanel>
          <TabPanel value={value} index={7} dir={theme.direction}>
            <Bleach />
          </TabPanel>
          <TabPanel value={value} index={8} dir={theme.direction}>
            <SelectedHeroList />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </>
  );
}
