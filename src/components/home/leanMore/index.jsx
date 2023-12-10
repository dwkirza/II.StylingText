import style from "./leadnMore.module.css";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";

export default function LeanMore() {
  return (
    <div className={style.container}>
      <div className={style.imageWrapper}>
        <Image
          src="/assets/imgs/learn.svg"
          alt="Logo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={style.wrapper_text}>
        <div className={style.title1}>Be a Part of</div>
        <div className={style.title1}>Daya Dimensi Indonesia</div>
        <div className={style.desc}>
          Are you the resilient leaders we are searching for? Join Daya Dimensi
          Indonesia to advance your leadership skill and generate exceptional
          leaders across Indonesia at once.
        </div>
        <button className={style.button}>
          <div>LEARN MORE</div>
          <HiArrowLongRight size={25} />
        </button>
      </div>
    </div>
  );
}
