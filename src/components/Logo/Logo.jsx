import { LogoDiv } from "./Logo.styles";
import Image from "next/image";
import LogoPoker from "../../../public/images/logo.png";
const Logo = () => {
  return (
    <LogoDiv>
      <Image src={LogoPoker} />
    </LogoDiv>
  );
};

export default Logo;
