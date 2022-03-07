import styled from "styled-components";

export const CheckBox = styled.input`
  margin-top: 12px;
  margin-right: 10px;
  background: transparent;
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid #ffffff;
`;

export const ContainerRegister = styled.div`
  position: absolute;
  width: auto;
  left: 128.49px;
  top: 284px;
  color: white;
  font-family: Outfit, sans-serif;

  .links-form {
    position: absolute;
    width: 457px;
    height: 57.08px;

    font-family: Nunito, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;

    color: #ffffff;
  }
`;

export const InputStyles = styled.input`
  font-family: Outfit;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 23px;
  width: 485px;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 3px solid #ffffff;
  color: white;
`;

export const CheckForm = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const RegisterButton = styled.button`
  position: absolute;
  width: 485px;
  height: 71px;
  left: 119px;
  top: 666px;
  display: block;
  border: none;
  background: #1abc9c;
  box-shadow: 0px 4px 20px rgba(26, 188, 156, 0.5);
  border-radius: 10px;

  font-family: Outfit, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  align-items: center;
  text-align: center;
  color: white;
  cursor: pointer;
`;
