import styled from "styled-components";

export const ContainerLogin = styled.div`
  position: absolute;
  width: auto;
  left: 128.49px;
  top: 284px;
  color: white;
  font-family: Outfit, sans-serif;

  .links-form {
    margin-right: 12rem;
    width: 500px;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
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
  .colum {
    justify-content: space-between;
  }
  .colum left {
    margin: 0;
  }
`;
