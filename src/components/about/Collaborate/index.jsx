import style from "./Collaborate.module.css";

import CardCollaborate from "@/core/cardCollaborate";

export default function Collaborate() {
  return (
    <div className={style.container}>
      <div className={style.title}>Reasons to Collaborate</div>
      <div className={style.wrapper_detail}>
        <CardCollaborate
          img={"/assets/icons/ethical.svg"}
          title="Ethical"
          desc="  We maintain the confidentiality of our clients data. We uphold our
        integrity by practicing zero-tolerance policy for bribery."
        />
        <CardCollaborate
          img={"/assets/icons/relaible.svg"}
          title="Relaible"
          desc="We strive to provide solutions that are supported by data and technology."
        />
        <CardCollaborate
          img={"/assets/icons/agile.svg"}
          title="Agile"
          desc="We listen to our clients deliberately and deliver bespoke solutions to achieve excellent outcome."
        />
      </div>
    </div>
  );
}
