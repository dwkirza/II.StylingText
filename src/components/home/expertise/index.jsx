import style from "./Expertise.module.css";
import Card from "@/core/card";
import Image from "next/image";
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";

export default function Expertise() {
  return (
    <div className={style.container}>
      <div className={style.bg_blue}></div>
      <div className={style.title}>Expertise</div>
      <div className={style.sub_title}>
        {"Organisations who will succeed in the long-run are those who are open " +
          "to new ideas, embrace innovations, instill compassion in every act and " +
          "decision, and consistent in advancing humanity through sustainability." +
          " - Excerpts from \\'Leaders of a New Planet\\' book."}
      </div>

      <div className={style.wrapper_card}>
        <Card
          title="Applied Science & Imagination Centre"
          icon="/assets/icons/app.svg"
        />

        <Card
          title="Diagnostics and Assessments"
          icon="/assets/icons/diagnostic.svg"
        />
        <Card
          title="Human Resources
          & Organizational Transformation"
          icon="/assets/icons/human.svg"
        />
        <Card title="Klobility" icon="/assets/icons/klobility.svg" />
        <Card
          title="Leadership Development"
          icon="/assets/icons/leadership.svg"
        />
        <Card
          title="On-Demand 
          Online Learning"
          icon="/assets/icons/learning.svg"
        />
      </div>
      <div className={style.wrapper_testimoni}>
        <Image
          className="absolute left-[120px] z-50"
          src="/assets/imgs/kolaborasi.png"
          alt="kolaborasi"
          width={584}
          height={438}
          priority
        />
        <div className={style.testimoni}>
          <div className={style.circleup}></div>
          <div className={style.circleleft}></div>
          <div className={style.circleright}></div>
          <div className={style.wrapper_text}>
            <Image
              className="mb-[21px]"
              src="/assets/icons/pendidikan.svg"
              alt="kolaborasi"
              width={98}
              height={71}
              priority
            />
            <div className={style.text_testimoni}>
              {
                "Kolaborasi dalam Program Guru Penggerak sangat meaningful dan impactful untuk perkembangan pendidikan di Indonesia, sehingga perlu untuk dilakukan secara berkelanjutan."
              }
            </div>
            <div className={style.subtext_testimoni}>
              Kementerian Pendidikan, Budaya, Riset, dan Teknologi
            </div>
            <div className={style.wrapper_slider}>
              <div className="w-4/5  h-[2px] bg-white"></div>
              <div className={style.wrapper_button}>
                <button>
                  <TfiArrowCircleLeft
                    size={40}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"
                  />
                </button>
                <button>
                  <TfiArrowCircleRight
                    size={40}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
