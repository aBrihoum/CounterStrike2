import Box from "../UI/Box/Box";
import YoutubeCard from "../UI/YoutubeCard/YoutubeCard";
import styles from "./mapsSection.module.scss";
import Overpass from "./maps/Overpass";
import Nuke from "./maps/Nuke";
import Dust from "./maps/Dust";
import MainBlock from "../UI/MainBlock/MainBlock";
export default function MapsSection() {
  return (
    <>
      <MainBlock styles={{ bg: "bgGray.svg", color: "#d9d9d9", animation: "fade-in-right" }}>
        <Box bgColor="#eee">
          <YoutubeCard text="Leveling Up The World" videoName="video_maps" />
          <Box.Heading>CLEANER, BRIGHTER, BETTER</Box.Heading>
          <Box.SubHeadingBold>From upgrades to overhauls, maps are cleaner, brighter, better.</Box.SubHeadingBold>
          <Overpass />
          <Nuke />
          <Dust />
          <div className={styles["texts"]}>
            <div className={styles["heading"]}>Source 2 Tools</div>
            <div className={styles["paragraph"]}>
              The Source 2 tools and rendering features will be available for community map makers to make it easier to
              build, experiment and iterate. And stay tuned for the Source 2 Item Workshop, which will be available
              later on in the limited test.
            </div>
            <video autoPlay muted loop>
              <source
                type="video/webm"
                src="https://cdn.cloudflare.steamstatic.com/apps/csgo/images/csgo_react/cs2/map_s2tools.webm"
              />
              <source
                type="video/mp4"
                src="https://cdn.cloudflare.steamstatic.com/apps/csgo/images/csgo_react/cs2/map_s2tools.mp4"
              />
            </video>
          </div>
        </Box>
      </MainBlock>
    </>
  );
}
