import style from "./footer.module.css";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { HiArrowLongRight, HiArrowLongUp } from "react-icons/hi2";
export default function Footer() {
  return (
    <div className={style.container}>
      <button className={style.up}>
        <HiArrowLongUp size={28} color="white" />
      </button>
      <div className={style.wrapper}>
        <div className={style.wrapper_icon}>
          <Image
            className="z-50"
            src="/assets/icons/great.svg"
            alt="Logo"
            width={35}
            height={60}
            priority
          />
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
            height={50}
            priority
          />
          <div className={style.icon}>
            <FaFacebookF
              color="white"
              size={32}
              className="cursor-pointer z-20"
            />
            <AiFillInstagram color="white" size={32} />
            <FaLinkedinIn color="white" size={32} />
            <FaYoutube color="white" size={32} />
            <FaTwitter color="white" size={32} />
          </div>
        </div>

        <div className={style.subs}>
          <div>Subscribe. Join the Community.</div>
          <div className="flex flex-row ">
            <input className={style.input} placeholder="Email address" />
            <button className={style.wrapper_button}>
              <HiArrowLongRight size={24} color="white" />
            </button>
          </div>
        </div>
      </div>
      <div className={style.copyright}>
        <div>
          Copyright © 2022 Daya Dimensi Indonesia. Website crafted by Antikode.
        </div>
        <div>Privacy Policy | Terms & Conditions</div>
      </div>
    </div>
  );
}
