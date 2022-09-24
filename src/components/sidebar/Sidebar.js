import React from "react";
import { SidebarWrap } from "./Sidebar.style";
import Button from "@mui/material/Button";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MovingOutlinedIcon from "@mui/icons-material/MovingOutlined";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import AddIcon from "@mui/icons-material/Add";
import Brightness7OutlinedIcon from "@mui/icons-material/Brightness7Outlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

export const Sidebar = () => {
  const data = [
    "Gaming",
    "Sports",
    "Television",
    "Celebrity",
    "Business",
    "Crypto",
    "More Topics",
  ];
  return (
    <SidebarWrap>
      <div className="top">
        <span className="head">FEEDS</span>
        <Button variant="text" className="btn" startIcon={<HomeOutlinedIcon />}>
          <span>Home</span>
        </Button>
        <Button
          variant="text"
          className="btn"
          startIcon={<MovingOutlinedIcon />}
        >
          <span>Popular</span>
        </Button>
        <Button variant="text" className="btn" startIcon={<DonutSmallIcon />}>
          <span>All</span>
        </Button>
      </div>
      <div className="mid">
        <span className="head">RECENT COMMUNITY</span>
        <div className="recent">
          <div className="left">
            <Brightness7OutlinedIcon className="ico" />
            <span>r/sveltejs</span>
          </div>
          <StarBorderOutlinedIcon className="ico" />
        </div>

        <Button variant="text" className="btn" startIcon={<AddIcon />}>
          <span>Create Community</span>
        </Button>
      </div>
      <div className="low">
        <span className="head">EXPLORE</span>
        {data.map((i, key) => (
          <Accordion key={key}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              key={i}
            >
              <span>{i}</span>
            </AccordionSummary>
            <AccordionDetails key={key}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </SidebarWrap>
  );
};
