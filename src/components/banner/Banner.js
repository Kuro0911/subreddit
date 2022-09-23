import React from "react";
import Button from "@mui/material/Button";
import { BannerWrap, ImageWrap, TextWrap } from "./Banner.style";
import bannerImage from "../../utils/bannerImage.jpg";
import logoImage from "../../utils/logoImg.png";

export const Banner = () => {
  return (
    <BannerWrap>
      <ImageWrap>
        <img src={bannerImage} className="img" alt="" />
      </ImageWrap>
      <TextWrap>
        <div className="circle">
          <img src={logoImage} className="img" alt="" />
        </div>
        <div style={{ textAlign: "left" }}>
          <h1>Svelte the JavaScript Non-Framework</h1>
          <span>r/sveltejs</span>
        </div>
        <Button variant="contained" className="btn">
          Join
        </Button>
      </TextWrap>
    </BannerWrap>
  );
};
