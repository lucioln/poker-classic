import { LoginButton } from "./Button.styles";

export default function ButtonLogin(props) {
  return (
    <div>
      <a href="/index">
        <LoginButton type="submit">{props.nome}</LoginButton>
      </a>
    </div>
  );
}
