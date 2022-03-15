import { LoginButton } from "./Button.styles";

interface IProps {
  typebtn?: string;
  namebtn: string;
  background?: string;
}
export default function Button(props: IProps) {
  const { typebtn, namebtn, background } = props;
  return (
    <LoginButton
      type={typebtn || "submit"}
      style={{ background: background ?? "#1abc9c" }}
    >
      {namebtn}
    </LoginButton>
  );
}
