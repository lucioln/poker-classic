import { ImgBackStyle } from "./ImgBack.styles";

import Image from "next/image";
import LocalBg from "../../../public/images/bgcartas.png";

const ImgBack = () => {
  return (
    <div className="container">
      <ImgBackStyle>
        <Image src={LocalBg} />
      </ImgBackStyle>
    </div>
  );
};

export default ImgBack;
