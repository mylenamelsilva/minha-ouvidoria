import styled, { css } from "styled-components";

export const HeaderR = styled.header `
  width: 100%;
  height: 70px;
  background-color: #235ae2;
  box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.35);
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;

  img {
    width: 10rem;
    margin-left: 14%;
  }
`;

export const NavR = styled.nav `
  justify-content: center;
  align-items: center;
  margin-right: 14%;

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  
  li a {
    text-decoration: none;
    list-style-type: none;
    color: aliceblue;
    font-size: 18px;
    margin-right: 20px;
    padding: 22px 4px;
    word-spacing: 4px;
    cursor: pointer;
  }
  
  li a:hover {
    border-bottom: 2px solid rgb(81, 230, 130);
  }
`;