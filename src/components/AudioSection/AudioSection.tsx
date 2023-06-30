import Box from "../UI/Box/Box";
import styles from "./audioSection.module.scss";
export default function AudioSection() {
  return (
    <>
      <section className={styles["main-block"]}>
        <div className={styles["animation"]} data-scroll>
          <Box bgColor="#f99b00">
            <Box.Heading>ACCURATE AUDIO</Box.Heading>
            <Box.SubHeadingBold>Reworked, Rebalanced, Reverbed</Box.SubHeadingBold>
            <Box.SubHeading>
              <>
                Counter-Strike 2 sounds have been reworked to better reflect the physical environment, be more distinct,
                and express more game state. They have also been rebalanced for a more comfortable listening experience.
              </>
            </Box.SubHeading>
            <div className={styles["picture-container"]}>
              {/* 
            cuz the official png one is like 1.6mb
            also, Vercel servers are kinda slow, thats why i uploaded it to ibb
            */}
              <img src="https://i.ibb.co/ccJwXwr/audio.webp" alt="cs2 audio" />
            </div>
          </Box>
        </div>
      </section>
    </>
  );
}
