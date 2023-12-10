import Image from "next/image";
import style from "./imgHome.module.css";
import { HiArrowLongRight, HiArrowLongDown } from "react-icons/hi2";

export default function ImgHome() {
  return (
    <div className={style.container}>
      <Image
        className="-z-10"
        src="/assets/imgs/sliderHome.svg"
        alt="Logo"
        priority
        layout="fill"
      />

      <div className={style.wrapper_title}>
        <div className="text-[52px] mb-2">Adopt Globally, Adapt Locally</div>
        <div className="text-[17px]">
          Daya Dimensi Indonesia is a world-class strategic partner for
          individual and organisational transformation through humanity-based
          and technology-supported solutions to help you hire, promote, and
          develop exceptional leaders.
        </div>
      </div>

      <div className={style.button_nav}>
        <button className={style.button}>
          <div>LEARN MORE ABOUT US</div>
          <HiArrowLongRight size={25} />
        </button>
        <button className={style.button}>
          <div>CONTACT US</div>
          <HiArrowLongRight size={25} />
        </button>
      </div>

      <div className={style.wrapper_info}>
        <div className={style.wrapper_presentase}>
          <div className="mt-4  flex flex-col items-center gap-6">
            <div className="transform rotate-90 font-bold text-[12px]">
              DISCOVER
            </div>
            <HiArrowLongDown size={10} />
          </div>

          <div>
            <div className={style.text_red}>24+ Years</div>
            <div className={style.text_abu}>Experience</div>
          </div>
          <div>
            <div className={style.text_red}>50.000+</div>
            <div className={style.text_abu}>Experience Clients</div>
          </div>
          <div>
            <div className={style.text_red}>400+</div>
            <div className={style.text_abu}>Organization Clients</div>
          </div>
        </div>
        <div className={style.wrapper_icon_logo}>
          <Image
            className="z-50"
            src="/assets/imgs/logoProudToSupport.svg"
            alt="Logo"
            width={200}
            height={80}
            priority
          />
          <Image
            className="z-50"
            src="/assets/imgs/logoIso.png"
            alt="Logo"
            width={260}
            height={64}
            priority
          />
        </div>
      </div>
    </div>
  );
}
