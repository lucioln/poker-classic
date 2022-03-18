import Link from "next/link";

import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

import { DivRedes } from "./Info.styles";

const Info = () => {
  return (
    <DivRedes>
      <div>
        <Link href="/register">Cadastre-se agora</Link>
      </div>
      <div>
        <AiOutlineMail className="icons" />
        <GrFacebookOption className="icons" color="#1976d2" />
        <FcGoogle className="icons" />
        <FaApple className="icons" />
      </div>
    </DivRedes>
  );
};

export default Info;
