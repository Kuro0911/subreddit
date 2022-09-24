import React, { useState } from "react";
import { PostWrap } from "./Post.style";
import ForwardOutlinedIcon from "@mui/icons-material/ForwardOutlined";

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
        <ForwardOutlinedIcon
          className={active === "up" ? "upvote-act" : "upvote"}
          onClick={() => {
            handleClick("up");
          }}
        />
        <div className="number">{votes}</div>
        <ForwardOutlinedIcon
          className={active === "down" ? "downvote-act" : "downvote"}
          onClick={() => {
            handleClick("down");
          }}
        />
      </div>
      <div className="body"></div>
    </PostWrap>
  );
};
