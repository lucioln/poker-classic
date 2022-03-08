import Logo from "../components/Logo/Logo";
import { Container } from "../styles/index.styles";
import Info from "../components/Info/Info";
import ImgBack from "../components/ImgBack/ImgBack";
import ButtonLogin from "../components/Button/Button";

const index = () => {
  return (
    <form>
      <Container>
        <Logo />
        <div className="line-form one">
          <label>Login:</label>
          <input type="text" className="input-form"></input>
        </div>
        <div className="line-form two">
          <label className="form-label">Senha:</label>
          <input type="password" className="input-form"></input>
        </div>
        <div className="check">
          <div className="colum left">
            <input type="checkbox" />
            <label className="links-form">Lembrar de mim </label>
          </div>
          <div className="colum right">
            <a className="links-form">Esqueceu a senha?</a>
          </div>
        </div>
        <ButtonLogin nome="LOGIN"></ButtonLogin>
        <Info></Info>
      </Container>
      <ImgBack></ImgBack>
    </form>
  );
};

export default index;
