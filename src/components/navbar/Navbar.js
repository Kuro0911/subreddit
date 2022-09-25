import React from "react";
import { NavbarWrap } from "./Navbar.style";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/Button";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import logo from "../../utils/redditLogo.png";
import { Searchbar } from "./searchbar/Searchbar";
import logoSub from "../../utils/logoImg.png";
export const Navbar = (props) => {
  return (
    <NavbarWrap>
      <div className="left">
        <img
          src={logo}
          className="logo"
          alt=""
          onClick={() => {
            props.open(true);
          }}
        />
        <div className="head">
          <img src={logoSub} alt="" className="img" />
          r/sveltejs
        </div>
      </div>
      <div className="center">
        <Searchbar />
      </div>
      <div className="right">
        <Button variant="outlined" className="log-btn">
          LOG IN
        </Button>
        <Button variant="contained" className="sign-btn">
          SIGN UP
        </Button>
        <IconButton className="btn">
          <PermIdentityOutlinedIcon />
          <KeyboardArrowDownOutlinedIcon />
        </IconButton>
      </div>
    </NavbarWrap>
  );
};
