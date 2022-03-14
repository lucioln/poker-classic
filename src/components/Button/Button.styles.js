import styled from "styled-components";

export const LoginButton = styled.button`
  margin-top: 15%;
  width: 100%;
  height: 71px;
  border: none;
  background: #1abc9c;
  box-shadow: 0px 4px 20px rgba(26, 188, 156, 0.5);
  border-radius: 10px;
  font-family: Outfit, sans-serif;
  font-size: 20px;
  color: white;
  cursor: pointer;

  @media (max-width: 1300px) {
    margin-left: auto;
    right: 20%;
    height: 55px;
  }
  @media (max-height: 700px) {
    margin-top: 1%;
  }
`;
