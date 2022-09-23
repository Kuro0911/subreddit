import styled from "styled-components";

export const SearchWrap = styled.div`
  margin-top: 0.25em;
  .container {
    background-color: rgb(246 247 248);
    display: flex;
    align-items: center;
    height: 2.15em;
    width: 40vw;
    border-radius: 10px;
    border: 2px solid transparent;
    .icon {
      margin-left: 0.25em;
      color: #7c7c7c;
      font-size: 2em;
    }
    .sub-name {
      background-color: #d6d6d6;
      font-size: small;
      display: flex;
      align-items: center;
      margin-left: 0.25em;
      width: 7.5vw;
      height: 4vh;
      border-radius: 20px;
      span {
        margin-left: 0.5em;
        margin-top: -0.2em;
      }
      .icon {
        margin-left: 0.25em;
        color: #007ed0;
        font-size: 20px;
      }
      .cross-icon {
        margin-left: 0.2em;
        font-size: 20px;
      }
    }
    .input {
      width: 70%;
      height: 80%;
      font-size: medium;
      background-color: inherit;
      border: 0;
      outline: 0;
      margin-left: 0.5em;
    }
    input:focus {
      outline: none !important;
    }
  }
  .container:hover {
    border: 2px solid lightblue;
    background-color: #fff;
  }
`;
