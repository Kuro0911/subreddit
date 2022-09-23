import React, { useState } from "react";
import { SortbarWrap } from "./Sortbar.style";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/Button";

import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import MovingOutlinedIcon from "@mui/icons-material/MovingOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export const Sortbar = () => {
  const [active, setActive] = useState(0);
  const handleClick = (ind) => {
    setActive(ind);
  };
  return (
    <SortbarWrap>
      <div className="left">
        <Button
          variant="text"
          className={active === 0 ? "active-btn" : "btn"}
          startIcon={<LocalFireDepartmentIcon />}
          onClick={() => handleClick(0)}
        >
          <span>Hot</span>
        </Button>
        <Button
          variant="text"
          className={active === 1 ? "active-btn" : "btn"}
          startIcon={<NewReleasesOutlinedIcon />}
          onClick={() => handleClick(1)}
        >
          <span>New</span>
        </Button>
        <Button
          variant="text"
          className={active === 2 ? "active-btn" : "btn"}
          startIcon={<MovingOutlinedIcon />}
          onClick={() => handleClick(2)}
        >
          <span>Top</span>
        </Button>
        <IconButton className="btn">
          <MoreHorizOutlinedIcon />
        </IconButton>
      </div>
      <div className="right">
        <IconButton className="btn">
          <IndeterminateCheckBoxOutlinedIcon />
          <KeyboardArrowDownOutlinedIcon />
        </IconButton>
      </div>
    </SortbarWrap>
  );
};
