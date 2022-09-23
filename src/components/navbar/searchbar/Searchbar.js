import React from "react";
import { SearchWrap } from "./Searchbar.style";

import SearchIcon from "@mui/icons-material/Search";
import FilterTiltShiftSharpIcon from "@mui/icons-material/FilterTiltShiftSharp";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

export const Searchbar = () => {
  return (
    <SearchWrap>
      <div className="container">
        <SearchIcon className="icon" />
        <div className="sub-name">
          <FilterTiltShiftSharpIcon className="icon" />
          <span>r/sveltejs</span>
          <CancelOutlinedIcon className="cross-icon" />
        </div>
        <input className="input" placeholder="Search Reddit" />
      </div>
    </SearchWrap>
  );
};
