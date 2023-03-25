import styles from "./home2.module.scss";
export default function Home2() {
  return (
    <>
      <section className={styles["main-block"]}>
        <div className={styles["intro-box"]} data-scroll>
          <div className={styles["intro-box__header"]}>
            <span className={styles["intro-box__header--minor"]}>The next era of</span>
            <br />
            Counter-Strike
            <br />
            <span className={styles["intro-box__header--minor"]}>begins this summer</span>
          </div>
          <div className={styles["intro-box__paragraph"]}>
            Counter-Strike 2 is the largest technical leap forward in Counter-Strike’s history, ensuring new features
            and updates for years to come.
            <br />
            <br />
            All of the game’s new features will be revealed when it officially launches this summer, but the road to
            Counter-Strike 2 begins today as a Limited Test for select CS:GO players. During this testing period, we’ll
            be evaluating a subset of features to shake out any issues before the worldwide release.
            <br />
            <br />
            Counter-Strike 2 arrives this summer as a free upgrade to CS:GO. So build your loadout, hone your skills,
            and prepare yourself for what’s next!
            <br />
            <br />
            Read on to learn more about some of the features of the Counter-Strike 2 Limited Test.
          </div>
        </div>
      </section>
    </>
  );
}
