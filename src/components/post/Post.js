import React, { useState } from "react";
import { PostWrap } from "./Post.style";
import ForwardOutlinedIcon from "@mui/icons-material/ForwardOutlined";
import ForwardIcon from "@mui/icons-material/Forward";

export const Post = () => {
  const [votes, setVotes] = useState(10);
  const [active, setActive] = useState("");
  const handleClick = (flag) => {
    console.log(flag);
    if (flag === "up" && active !== "up") {
      setVotes(votes + 1);
      setActive("up");
    } else if (flag === "up" && active === "up") {
      setVotes(votes - 1);
      setActive("");
    } else if (flag === "down" && active !== "down") {
      setVotes(votes - 1);
      setActive("down");
    } else {
      setVotes(votes + 1);
      setActive("");
    }
  };
  return (
    <PostWrap active={active}>
      <div className="vote">
        {active === "up" ? (
          <ForwardIcon
            className="upvote-act"
            onClick={() => {
              handleClick("up");
            }}
          />
        ) : (
          <ForwardOutlinedIcon
            className="upvote"
            onClick={() => {
              handleClick("up");
            }}
          />
        )}
        <div className="number">{votes}</div>
        {active === "down" ? (
          <ForwardIcon
            className="downvote-act"
            onClick={() => {
              handleClick("down");
            }}
          />
        ) : (
          <ForwardOutlinedIcon
            className="downvote"
            onClick={() => {
              handleClick("down");
            }}
          />
        )}
      </div>
      <div className="body"></div>
    </PostWrap>
  );
};
