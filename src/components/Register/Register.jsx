import {
  ContainerRegister,
  RegisterButton,
  InputStyles,
  CheckForm,
  CheckBox,
} from "./Register.styles";
import Logo from "../Logo/Logo";

const Register = () => {
  return (
    <div className="container">
      <div>
        <Logo></Logo>
        <ContainerRegister>
          <p className="description-input">Nome</p>
          <InputStyles type="text" className="" />
          <p className="description-input">Email:</p>
          <InputStyles type="mail" className="" />
          <p className="description-input">Senha:</p>
          <InputStyles type="password" />
          <CheckForm>
            <div className="colum left">
              <CheckBox type="checkbox" className="checkbox-input" />
              <a className="links-form">
                Confirmo que eu tenho pelo menos 18 anos de idade e que eu li e
                entendi o{" "}
                <a>
                  <strong>Acordo de Licença do Usuário Final</strong>
                </a>{" "}
                e a{" "}
                <a>
                  <strong>Política de Privacidade</strong>
                </a>
                .
              </a>
            </div>
          </CheckForm>
        </ContainerRegister>
        <RegisterButton href="/index">CRIAR CONTA</RegisterButton>
      </div>
    </div>
  );
};

export default Register;
