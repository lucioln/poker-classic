import React from "react";
import ButtonLogin from "../components/Button/Button";
import ImgBack from "../components/ImgBack/ImgBack";
import { Container } from "../styles/index.styles";
import Logo from "../components/Logo/Logo";

function recuperar() {
  return (
    <div>
      <Container>
        <Logo />
        <div className="line-form one">
          <label>Email:</label>
          <input type="text" className="input-form"></input>
        </div>
        <ButtonLogin nome="RECUPERAR CONTA"></ButtonLogin>
      </Container>
      <ImgBack></ImgBack>
    </div>
  );
}

export default recuperar;
