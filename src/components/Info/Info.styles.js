import styled from "styled-components";

export const DivRedes = styled.div`
  width: auto;
  height: 60px;
  left: 12%;
  margin-top: 10px;
  color: #ffffff;
  font-family: Outfit, sans-serif;
  font-size: 16px;
  line-height: 23px;
  text-align: center;

  .email {
    margin-top: 20px;
    height: 45px;
    cursor: pointer;
    width: 45px;
    margin-left: 5px;
    color: #000000;
    background: #ffffff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    border: 10px solid #ffffff;
    border-radius: 50%;
    @media (max-width: 1350px) {
      height: 25px;
      width: 25px;
    }
    @media (max-width: 400px) {
      height: 15px;
      width: 15px;
    }
  }

  .facebook {
    margin-top: 20px;
    height: 45px;
    cursor: pointer;
    width: 45px;
    color: #1976d2;
    margin-left: 5px;
    background: #ffffff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    border: 10px solid #ffffff;
    border-radius: 50%;
    @media (max-width: 1350px) {
      height: 25px;
      width: 25px;
    }
    @media (max-width: 400px) {
      height: 15px;
      width: 15px;
    }
  }
  .google {
    margin-top: 20px;
    height: 45px;
    cursor: pointer;
    width: 45px;
    margin-left: 5px;
    background: #ffffff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    border: 10px solid #ffffff;
    border-radius: 50%;
    @media (max-width: 1350px) {
      height: 25px;
      width: 25px;
    }
    @media (max-width: 400px) {
      height: 15px;
      width: 15px;
    }
  }

  a {
    text-decoration: none;
    color: #ffffff;
    @media (max-width: 500px) {
      font-size: 10px;
    }
  }
`;
