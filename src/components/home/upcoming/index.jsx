import style from "./Upcoming.module.css";
import { HiArrowLongRight } from "react-icons/hi2";
import Image from "next/image";

import CardUpComing from "@/core/cardupcoming";

export default function Upcoming() {
  return (
    <div className={style.container}>
      <div className={style.wrapper_head}>
        <div className={style.title}>Upcoming Activities</div>
        <button className={style.viewall}>
          VIEW ALL{" "}
          <HiArrowLongRight size={24} color="#B92322 " className=" ml-2 pt-1" />
        </button>
      </div>
      <div className={style.wrapper_info}>
        <div className=" w-2/5">
          <Image
            src="/assets/imgs/upcoming.png"
            alt="Logo"
            width={481}
            height={481}
            priority
          />
        </div>
        <div className={style.info}>
          <CardUpComing
            category="PUBLIC WORKSHOP"
            date="25 Feb 2022"
            title="Zoompathy vs Zoom-fatigue: Managing Virtual Meeting Burnout"
          />
          <CardUpComing
            category="BUKA PINTU"
            date="20 Oct 2021"
            title="Our New Solution To Hire The Right Person For Your Company"
          />
          <CardUpComing
            category="LIVE WEBINAR"
            date="20 Oct 2021"
            title="DDI : Among Indonesia’s First Signatories of UN WEP"
          />
          <CardUpComing
            category="BUKA PINTU"
            date="20 Oct 2021"
            title="Our New Solution To Hire The Right Person For Your Company"
          />
        </div>
      </div>
    </div>
  );
}
