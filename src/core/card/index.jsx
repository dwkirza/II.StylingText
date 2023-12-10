import style from "./card.module.css";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";

export default function Card({ title, icon }) {
  return (
    <div className={style.wrapper_card}>
      <div className={style.circleup}></div>
      <div className={style.circledown}></div>
      <Image src={icon} alt="Logo" width={56} height={56} priority />
      <div className={style.text}>{title}</div>
      <button className={style.button}>
        <HiArrowLongRight size={35} color="white" />
      </button>
    </div>
  );
}
