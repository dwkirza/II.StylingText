// Copyright 1999-2023. Plesk International GmbH. All rights reserved.
import style from "./Navbar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const route = useRouter();

  const handleButtonBeranda = () => {
    route.push("/");
  };

  const handleButtonAbout = () => {
    route.push("/about");
  };

  const handleButtonProgram = () => {
    route.push("/program");
  };

  const handleButtonExpertise = () => {
    route.push("/expertise");
  };

  const handleButtonOdyssey = () => {
    route.push("/odyssey");
  };

  const handleButtonNews = () => {
    route.push("/news");
  };

  const handleButtonContact = () => {
    route.push("/contact");
  };

  const handleButtonCareer = () => {
    route.push("/career");
  };

  return (
    <div className={style.container}>
      <div>
        <Image
          src="/assets/imgs/logo.svg"
          alt="Logo"
          width={160}
          height={50}
          priority
        />
      </div>
      <div className={style.wrapper_menulist}>
        <div className={style.wrapper_menu}>
          <button
            className={route.pathname === "/" ? style.active_text : style.text}
            onClick={handleButtonBeranda}
          >
            Home
          </button>

          <div className={route.pathname === "/" ? style.active : ""}></div>
        </div>
        <div className={style.wrapper_menu} onClick={handleButtonAbout}>
          <button
            className={
              route.pathname === "/about" ? style.active_text : style.text
            }
          >
            About
          </button>
          <div
            className={route.pathname === "/about" ? style.active : ""}
          ></div>
        </div>
        <div className={style.wrapper_menu} onClick={handleButtonExpertise}>
          <button
            className={
              route.pathname === "/expertise" ? style.active_text : style.text
            }
          >
            Expertise
          </button>
          <div
            className={route.pathname === "/expertise" ? style.active : ""}
          ></div>
        </div>
        <div className={style.wrapper_menu} onClick={handleButtonProgram}>
          <button
            className={
              route.pathname === "/program" ? style.active_text : style.text
            }
          >
            Program
          </button>
          <div
            className={route.pathname === "/program" ? style.active : ""}
          ></div>
        </div>
        <div className={style.wrapper_menu} onClick={handleButtonOdyssey}>
          <button
            className={
              route.pathname === "/odyssey" ? style.active_text : style.text
            }
          >
            Odyssey
          </button>
          <div
            className={route.pathname === "/odyssey" ? style.active : ""}
          ></div>
        </div>
        <div className={style.wrapper_menu} onClick={handleButtonNews}>
          <button
            className={
              route.pathname === "/news" ? style.active_text : style.text
            }
          >
            News
          </button>
          <div className={route.pathname === "/news" ? style.active : ""}></div>
        </div>
        <div className={style.wrapper_menu} onClick={handleButtonContact}>
          <button
            className={
              route.pathname === "/contact" ? style.active_text : style.text
            }
          >
            Contact
          </button>
          <div
            className={route.pathname === "/contact" ? style.active : ""}
          ></div>
        </div>
        <div className={style.wrapper_menu} onClick={handleButtonCareer}>
          <button
            className={
              route.pathname === "/career" ? style.active_text : style.text
            }
          >
            Career
          </button>
          <div
            className={route.pathname === "/career" ? style.active : ""}
          ></div>
        </div>
      </div>
    </div>
  );
}
