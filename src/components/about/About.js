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
  const data = {
    heading: "About Community",
    body: "Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app. Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.",
    members: "17.5k",
    membersOnline: "60",
    date: "Dec 3, 2016",
    subName: "r/sveltejs",
  };
  return (
    <AboutWrap>
      <TopWrap>
        <h4>{data.heading}</h4>
        <MoreHorizOutlinedIcon className="icon" />
      </TopWrap>
      <TextWrap>{data.body}</TextWrap>
      <CountWrap>
        <div className="left">
          <h2>{data.members}</h2>
          <span>Members</span>
        </div>
        <div className="right">
          <h2>{data.membersOnline}</h2>
          <span>Online</span>
        </div>
      </CountWrap>
      <Slug />
      <FooterWrap>
        <div className="left">
          <CakeOutlinedIcon />
          <span>Created {data.date}</span>
        </div>
        <div className="right">
          <LocalOfferIcon />
          <span>{data.subName} topics</span>
        </div>
      </FooterWrap>
      <TagWrap>
        <span>Programming</span>
      </TagWrap>
    </AboutWrap>
  );
};
