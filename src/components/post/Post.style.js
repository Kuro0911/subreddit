import styled from "styled-components";

export const PostWrap = styled.div`
  width: 50%;
  height: 30vh;
  background-color: white;
  margin-bottom: 0.75em;
  display: flex;
  .vote {
    height: 100%
    width: 5%;
    .number{
    font-size: 12px;
    font-weight: 700;
    margin-top: 0.25em;
    margin-bottom: 0.25em;
    color: ${(props) =>
      props.active === "up"
        ? "#ff6a33"
        : props.active === "down"
        ? "#7193ff"
        : "black"};
    }
    .upvote{      
      transform: rotateZ(270deg);
      color: #7c7c7c;
      cursor: pointer;
    }
    .upvote-act{      
      transform: rotateZ(270deg);
      background-color: #ff6a33;
      cursor: pointer;
    }
    .upvote:hover{
      color: #ff6a33;
    }
    .downvote{
      transform: rotateZ(90deg);
      color: #7c7c7c;
      cursor: pointer;
    }
    .downvote-act{      
      transform: rotateZ(90deg);
      background-color: #7193ff;
      cursor: pointer;
    }
    .downvote:hover{
      color: #7193ff;
    }
  }
  .body {
    background-color: red;
    height: 100%
    width: 95%;
  }
`;
