import styles from "./header.module.scss";
import csLogo from "../../assets/svg/logo_cs_full_blk.svg";
import arrow from "../../assets/svg/arrow.svg";
import glob from "../../assets/svg/glob.svg";
export default function Header() {
  return (
    <>
      <div className={styles["header"]}>
        <div className={styles["header__faq"]}>Limited Test F.A.Q.</div>
        <div className={styles["header__picture-block"]}>
          <img src={csLogo} alt="cs2" />
        </div>
        <div className={styles["header__language"]}>
          <img
            className={styles["header__language__glob"]}
            src={glob}
            alt="glob"
          />
          <span>Select Language</span>
          <img
            className={styles["header__language__arrow"]}
            src={arrow}
            alt="arrow"
          />
        </div>
      </div>
    </>
  );
}
