import style from "./jasa.module.css";
import Image from "next/image";

export default function Jasa() {
  return (
    <div className={style.container}>
      <Image
        src="/assets/imgs/service.png"
        alt="logo"
        fill
        quality={100}
        priority
      />
      <div className={style.wrapper_card}>
        <div className={style.card}>
          <div className={style.title}>Family</div>
        </div>
        <div className={style.card}>
          <div className={style.title}>Board of Management</div>
        </div>
        <div className={style.card}>
          <div className={style.title}>Partners</div>
        </div>
      </div>
    </div>
  );
}
