import React from "react";
import Button from "@mui/material/Button";
import { BannerWrap, ImageWrap, TextWrap } from "./Banner.style";
import bannerImage from "../../utils/bannerImage.jpg";

export const Banner = () => {
  return (
    <BannerWrap>
      <ImageWrap>
        <img src={bannerImage} className="img" />
      </ImageWrap>
      <TextWrap>
        <div className="circle">
          <h1>s</h1>
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
