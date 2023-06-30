import Box from "../UI/Box/Box";
import YoutubeCard from "../UI/YoutubeCard/YoutubeCard";
import styles from "./ticksSection.module.scss";
export default function TicksSection() {
  return (
    <>
      <section className={styles["main-block"]}>
        <div className={styles["animation"]} data-scroll>
          <Box bgColor="#ff9b01">
            <YoutubeCard text="Moving Beyond Tick Rate" videoName="video_ticks" />
            <Box.Heading>WHAT YOU SEE IS WHAT YOU GET</Box.Heading>
            <Box.SubHeadingBold>Tick rate no longer matters for moving, shooting, or throwing.</Box.SubHeadingBold>
            <Box.SubHeading>
              <>
                Sub-tick updates are the heart of Counter-Strike 2. Previously, the server only evaluated the world in
                discrete time intervals (called ticks). Thanks to Counter-Strike 2’s sub-tick update architecture,
                servers know the exact instant that motion starts, a shot is fired, or a ‘nade is thrown.
                <br />
                <br />
                As a result, regardless of tick rate, your moving and shooting will be equally responsive and your
                grenades will always land the same way.
              </>
            </Box.SubHeading>
          </Box>
        </div>
      </section>
    </>
  );
}
