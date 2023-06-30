import Box from "../UI/Box/Box";
import styles from "./comingSection.module.scss";
export default function ComingSection() {
  return (
    <>
      <section className={styles["main-block"]}>
        <div className={styles["animation"]} data-scroll>
          <Box bgColor="#eee">
            <Box.Heading>THERE’S MORE TO COME</Box.Heading>
            <Box.SubHeading>
              <>
                The Limited Test only evaluates a subset of Counter-Strike 2's features, so that major issues can be
                resolved before the summer. But there’s much more to come. In just a few months we’ll reveal all of the
                details of Counter-Strike 2, and we can’t wait to share it with you.
              </>
            </Box.SubHeading>
          </Box>
        </div>
      </section>
    </>
  );
}
