import Box from "../UI/Box/Box";
import MainBlock from "../UI/MainBlock/MainBlock";
import styles from "./audioSection.module.scss";
export default function AudioSection() {
  return (
    <>
      <MainBlock styles={{ bg: "bgOrange.svg", color: "#e48717", animation: "fade-in-left" }}>
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
            <img src="https://i.ibb.co/ccJwXwr/audio.webp" alt="cs2 audio" />
          </div>
        </Box>
      </MainBlock>
    </>
  );
}
