import styled from "styled-components";

export const NavbarWrap = styled.div`
  width: 100%;
  height: 3em;
  text-align: left;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  .left {
    width: 20%;
    display: flex;
    align-items: center;
    .logo {
      height: 2em;
      margin-left: 1em;
      margin-top: 0.5em;
    }
    .head {
      display: flex;
      align-items: center;
      margin-left: 3em;
      font-size: 16px;
      .slug {
        background-color: #ff3d00;
        width: 1.1em;
        height: 1.1em;
        border-radius: 20px;
        margin-right: 0.5em;
        color: white;
        text-align: center;
        font-weight: bolder;
      }
    }
  }
  .center {
    width: 55%;
  }
  .right {
    width: 25%;
    display: flex;
    align-items: center;
    .log-btn {
      border-radius: 20px;
      margin-left: 2%;
      height: 2.5em;
      width: 10em;
    }
    .sign-btn {
      border-radius: 20px;
      margin-left: 2%;
      color: #fff;
      height: 2.5em;
      width: 10em;
    }
    .btn {
      border-radius: 20px;
      margin-left: 5%;
      margin-right: 2%;
      height: 2.75em;
      color: #7c7c7c;
    }
  }
`;
