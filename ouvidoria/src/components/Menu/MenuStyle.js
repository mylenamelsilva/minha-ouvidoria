import styled from "styled-components";

export const Header = styled.header `
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

export const Nav = styled.nav `
  justify-content: center;
  align-items: center;

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
  }
  
  li a:hover {
    border-bottom: 2px solid rgb(81, 230, 130);
  }
`;

export const Btn = styled.button `
  width: 69px;
  margin-right: 14%;
  border: none;
  padding: 10px;
  border-radius: 6px;
  background-color: #6fd222;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;

  :hover {
  background-color: #9e9ec2;
  }

`;