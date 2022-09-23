import React from "react";
import {
  AboutWrap,
  CountWrap,
  FooterWrap,
  Slug,
  TagWrap,
  TextWrap,
  TopWrap,
} from "./About.style";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

export const About = () => {
  return (
    <AboutWrap>
      <TopWrap>
        <h4>About Community</h4>
        <MoreHorizOutlinedIcon className="icon" />
      </TopWrap>
      <TextWrap>
        Svelte is a radical new approach to building user interfaces. Whereas
        traditional frameworks like React and Vue do the bulk of their work in
        the browser, Svelte shifts that work into a compile step that happens
        when you build your app. Instead of using techniques like virtual DOM
        diffing, Svelte writes code that surgically updates the DOM when the
        state of your app changes.
      </TextWrap>
      <CountWrap>
        <div className="left">
          <h2>17.5k</h2>
          <span>Members</span>
        </div>
        <div className="right">
          <h2>60</h2>
          <span>Online</span>
        </div>
      </CountWrap>
      <Slug />
      <FooterWrap>
        <div className="left">
          <CakeOutlinedIcon />
          <span>Created Dec 3, 2016</span>
        </div>
        <div className="right">
          <LocalOfferIcon />
          <span>r/sveltejs topics</span>
        </div>
      </FooterWrap>
      <TagWrap>
        <span>Programming</span>
      </TagWrap>
    </AboutWrap>
  );
};
