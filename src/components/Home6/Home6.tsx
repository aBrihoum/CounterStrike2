import Box from "../shared/components/Box";
import styles from "./Home6.module.scss";
export default function Home6() {
  return (
    <>
      <section className={styles["main-block"]}>
        <div className={styles["animation"]} data-scroll>
          <Box bgColor="#5a5f76" textColor="#ffffffee">
            <Box.Heading>YOUR ITEMS IN A WHOLE NEW LIGHT</Box.Heading>
            <Box.SubHeading>
              <>
                Bring your entire CS:GO inventory with you to Counter-Strike 2. Not only will you keep every item you’ve
                collected over the years, but they’ll all benefit from Source 2 lighting and materials.
                <br />
                <br />
                In addition to supporting legacy models and finishes, all stock weapons have been upgraded with
                high-resolution models, and some weapon finishes take advantage of these new models.
              </>
            </Box.SubHeading>

            <div className={styles["video-container"]}>
              <video autoPlay muted loop className={styles["video-tag"]}>
                <source
                  type="video/webm"
                  src="https://cdn.cloudflare.steamstatic.com/apps/csgo/images/csgo_react/cs2/thumbnails/weapons.webm"
                />
                <source
                  type="video/mp4"
                  src="https://cdn.cloudflare.steamstatic.com/apps/csgo/images/csgo_react/cs2/thumbnails/weapons.mp4"
                />
              </video>
            </div>
          </Box>
        </div>
      </section>
    </>
  );
}
