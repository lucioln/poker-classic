import { ContainerLogin } from "./LoginForm.styles";
import ButtonLogin from "../Button/Button";
import Logo from "../Logo/Logo";
import { InputStyles, CheckForm } from "./LoginForm.styles";
import Info from "../Info/Info";

const Login = () => {
  return (
    <div className="container">
      <div>
        <Logo></Logo>
        <ContainerLogin>
          <p className="description-input">Login:</p>
          <InputStyles type="text" className="" />
          <p className="description-input">Senha:</p>
          <InputStyles type="password" />
          <CheckForm>
            <div className="colum left">
              <input type="checkbox" />
              <a className="links-form">Lembrar de mim </a>
            </div>
            <div className="colum right">
              <a className="links-form">Esqueceu a senha?</a>
            </div>
          </CheckForm>
        </ContainerLogin>
        <ButtonLogin href="/index" nome="LOGIN"></ButtonLogin>
        <Info />
      </div>
    </div>
  );
};

export default Login;
