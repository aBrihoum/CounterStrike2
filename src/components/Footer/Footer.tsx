import styles from "./footer.module.scss";
export default function Footer() {
  return (
    <>
      <div className={styles["footer"]}>
        <div className={styles["footer__text"]}>
          Counter-Strike, Counter-Strike 2, CS:GO, and their respective logos are trademarks and/or registered
          trademarks of Valve Corporation. © 2023 Valve Corporation, all rights reserved.
        </div>
      </div>
    </>
  );
}
