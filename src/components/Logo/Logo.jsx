import { LogoDiv } from "./Logo.styles";
import Image from "next/image";
import LogoPoker from "../../../public/images/logo.png";
const Logo = () => {
  return (
    <LogoDiv>
      <a href="/">
        <Image src={LogoPoker} />
      </a>
    </LogoDiv>
  );
};

export default Logo;
