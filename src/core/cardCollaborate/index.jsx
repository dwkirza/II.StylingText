import style from "./cardCollaborate.module.css";
import Image from "next/image";

export default function CardCollaborate({ img, title, desc }) {
  return (
    <div className={style.detail}>
      <Image src={img} alt="icon" width={64} height={64} priority />
      <div className={style.subtitle}>{title}</div>
      <div className={style.text}>{desc}</div>
    </div>
  );
}
