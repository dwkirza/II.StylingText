import { HiArrowLongRight } from "react-icons/hi2";
import style from "./CardUpComing.module.css";

export default function CardUpComing({ category, date, title }) {
  return (
    <div className={style.container}>
      <div className={style.wrapper_category_date}>
        <div className={style.category}>{category}</div>
        <div className={style.date}>{date}</div>
      </div>
      <div className={style.title}>{title}</div>
      <button>
        <HiArrowLongRight
          className="ml-2 pt-1 opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"
          size={24}
          color="#B92322"
        />
      </button>
    </div>
  );
}
