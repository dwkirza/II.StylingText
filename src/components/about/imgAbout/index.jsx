import style from "./imgAbout.module.css";
import Image from "next/image";

import { HiArrowLongDown } from "react-icons/hi2";

export default function ImgAbout() {
  return (
    <div className={style.container}>
      <div className={style.wrapper_title}>
        <div className={style.bgup}>
          <Image
            // className="z-50"
            src="/assets/icons/diamond.svg"
            alt="Logo"
            width={328}
            height={321}
            priority
          />
        </div>
        <div className={style.bgdown}>
          <Image
            // className="z-50"
            src="/assets/icons/diamonddown.svg"
            alt="Logo"
            width={250}
            height={250}
            priority
          />
        </div>
        <div className={style.breadcumb}>
          Home / <div className="text-white"> About</div>
        </div>
        <div className="text-white mb-[6px] mt-[150px] font-normal text-[48px]">
          Force of Progress
        </div>
        <div className="text-white  text-base font-normal mb-[80px]">
          Daya Dimensi Indonesia is a leadership consultant that supports
          organisations develop and deliver strategic programmes such as
          assessment centre, selection, learning, and personal & organisational
          transformation.
        </div>
        <button className="opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out">
          {" "}
          <HiArrowLongDown size={24} color="white" />
        </button>
      </div>
      <div className={style.wrapper_img}>
        <Image
          src="/assets/imgs/sliderabout.png"
          alt="Logo"
          priority
          width={60}
          height={100}
          layout="responsive"
          quality={100}
        />
      </div>
    </div>
  );
}
