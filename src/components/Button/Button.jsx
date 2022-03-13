import Link from "next/link";
import { LoginButton } from "./Button.styles";

export default function Button(props) {
  return (
    <div>
      <a>
        <LoginButton type="submit">{props.nome}</LoginButton>
      </a>
    </div>
  );
}
