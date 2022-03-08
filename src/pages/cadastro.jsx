import React from "react";
import ButtonLogin from "../components/Button/Button";
import ImgBack from "../components/ImgBack/ImgBack";
import Logo from "../components/Logo/Logo";
import { Container } from "../styles/index.styles";

function cadastro() {
  return (
    <div>
      <Container>
        <Logo />
        <div className="line-form one">
          <label>Nome:</label>
          <input type="text" className="input-form"></input>
        </div>
        <div className="line-form one">
          <label>Email:</label>
          <input type="email" className="input-form"></input>
        </div>
        <div className="line-form two">
          <label className="form-label">Senha:</label>
          <input type="password" className="input-form"></input>
        </div>
        <div>
          <input type="checkbox"></input>
          <label className="terms">
            Confirmo que eu tenho pelo menos 18 anos de idade e que eu li e
            entendi o <strong>Acordo de Licença do Usuário Final</strong> e a{" "}
            <strong>Política de Privacidade.</strong>
          </label>
        </div>
        <ButtonLogin nome="CRIAR CONTA" />
      </Container>
      <ImgBack />
    </div>
  );
}

export default cadastro;
