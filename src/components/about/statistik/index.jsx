import style from "./statistik.module.css";
import Image from "next/image";

import { HiArrowLongRight } from "react-icons/hi2";

export default function Statistik() {
  return (
    <div className={style.container}>
      <div className={style.title}>Daya Dimensi In Numbers</div>
      <div className={style.wrapper_statistik}>
        <div>
          <div className={style.num}>24+ Years</div>
          <div className={style.text}>Experience</div>
        </div>
        <div>
          <div className={style.num}>50.000+</div>
          <div className={style.text}>Executive Clients</div>
        </div>{" "}
        <div>
          <div className={style.num}>400+</div>
          <div className={style.text}>Organization Clients</div>
        </div>
      </div>
      <div className={style.wrapper_detail}>
        <div className={style.detail}>
          <Image
            className="mb-[20px]"
            src="/assets/imgs/leaders.png"
            alt="Logo"
            width={481}
            height={481}
            priority
          />
          <div className={style.text_detail}>Leaders of a New Planet</div>
          <div className={style.subtext_detail}>
            It is our intention is to generate leaders whose mission is to
            advance humanity through fresh ideas, forefront skills, and
            compassion for future generations. We call them Leaders of a New
            Planet.
          </div>
          <button className={style.button}>
            <div>LEARN MORE </div>
            <HiArrowLongRight size={25} />
          </button>
        </div>
        <div className={style.detailSec}>
          <Image
            className="mb-[20px]"
            src="/assets/imgs/innovations.png"
            alt="Logo"
            width={584}
            height={778}
            priority
          />
          <div className={style.text_detail}>Continuous Innovations</div>
          <div className={style.subtext_detail}>
            In working with clients, we curate and provide integrated business
            and leadership solutions. Therefore, we strive to grow our digital
            solutions to better cater your needs.
          </div>
          <button className={style.button}>
            <div>LEARN MORE </div>
            <HiArrowLongRight size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}
