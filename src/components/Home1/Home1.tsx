import Header from "../Header/Header";
import styles from "./home1.module.scss";
import cs2Heading from "../../assets/svg/logo_cs2_header.svg";
export default function Home1() {
  return (
    <>
      <section className={styles["main-block"]}>
        <Header />
        <div className={styles["cs2"]}>
          <div className={styles["cs2__picture-container"]}>
            {/* 
            cuz the official png one is like 1.6mb
            also, Vercel servers are kinda slow, thats why i uploaded it to ibb
            */}
            <img src="https://i.ibb.co/DrdsWj4/header-ctt.webp" alt="cs2" />
          </div>
          <div className={styles["cs2__heading-container"]}>
            <img src={cs2Heading} alt="cs2" />
            <div className={styles["label"]}>
              <div className={styles["label__bg"]}>
                <span>LIMITED TEST</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
