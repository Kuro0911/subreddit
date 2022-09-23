import styled from "styled-components";

export const BannerWrap = styled.div`
  width: 100%;
  height: 43vh;
  background-color: white;
  h1 {
    font-weight: 500;
  }
`;
const ImageWrap = styled.div`
  img {
    width: 100%;
    height: 35vh;
    object-fit: contain;
  }
`;
const TextWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -1em;
  .btn {
    background-color: #ff4500;
    border-radius: 20px;
    min-width: 6vw;
    margin-left: 2%;
    height: 2.1em;
    margin-top: 1em;
  }
  .btn:hover {
    background-color: #ff6a33;
  }
  .circle {
    height: 10vh;
    width: 5vw;
    background-color: #fff;
    border-radius: 100%;
    margin-right: 1.2em;
    margin-left: -9em;
    margin-top: -1%;
    border: 1px solid black;
  }
  span {
    color: #7c7c7c;
  }
`;
export { ImageWrap, TextWrap };
