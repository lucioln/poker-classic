import { LogoDiv } from "./Logo.styles";

import Image from "next/image";
import LogoPoker from "../../../public/images/logo.png";

import Link from "next/link";

const Logo = () => {
  return (
    <LogoDiv>
      <Link href="/">
        <Image src={LogoPoker} />
      </Link>
    </LogoDiv>
  );
};

export default Logo;
