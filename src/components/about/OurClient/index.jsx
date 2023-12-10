import style from "./OurClient.module.css";
import Image from "next/image";

export default function OurClient() {
  return (
    <div className={style.container}>
      <div className={style.title}>Our Clients</div>
      <div className={style.icon}>
        <div className={style.fixHeigh}>
          <Image
            src="/assets/imgs/astra.svg"
            alt="logo"
            width={173}
            height={173}
            priority
          />
        </div>
        <Image
          src="/assets/imgs/blibli.svg"
          alt="logo"
          width={173}
          height={173}
          priority
        />
        <Image
          src="/assets/imgs/bri.svg"
          alt="logo"
          width={173}
          height={173}
          priority
        />
        <Image
          src="/assets/imgs/ifg.svg"
          alt="logo"
          width={173}
          height={173}
          priority
        />
        <div className={style.fixHeigh}>
          <Image
            src="/assets/imgs/kalbe.svg"
            alt="logo"
            width={173}
            height={173}
            priority
          />
        </div>
        <Image
          src="/assets/imgs/pendidikan.svg"
          alt="logo"
          width={173}
          height={173}
          priority
        />

        <Image
          src="/assets/imgs/mandiri.svg"
          alt="logo"
          width={173}
          height={173}
          priority
        />

        <Image
          src="/assets/imgs/mindid.svg"
          alt="logo"
          width={173}
          height={173}
          priority
        />
        <div className={style.fixHeigh}>
          <Image
            src="/assets/imgs/pertamina.svg"
            alt="logo"
            width={173}
            height={173}
            priority
          />
        </div>
        <Image
          src="/assets/imgs/pln.svg"
          alt="logo"
          width={173}
          height={173}
          priority
        />
      </div>
    </div>
  );
}
