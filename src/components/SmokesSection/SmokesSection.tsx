import Box from "../UI/Box/Box";
import YoutubeCard from "../UI/YoutubeCard/YoutubeCard";
import Rows from "../UI/Rows/Rows";
import MainBlock from "../UI/MainBlock/MainBlock";
export default function SmokesSection() {
  return (
    <>
      <MainBlock styles={{ bg: "bgGray.svg", color: "#d9d9d9", animation: "fade-in-right" }}>
        <Box bgColor="#eee">
          <YoutubeCard text="Responsive Smokes" videoName="video_smokes" />
          <Box.Heading>Game Changer</Box.Heading>
          <Box.SubHeading>
            <>
              Smoke Grenades are now dynamic volumetric objects that interact with the environment, and react to
              lighting, gunfire, and explosions.
            </>
          </Box.SubHeading>

          <Rows videoName="smokes_vid2">
            <Rows.title>Gameplay</Rows.title>
            <Rows.body>
              Smoke now has the ability to interact with other gameplay events, creating new opportunities. Bullets and
              HE grenades can push smoke to briefly clear sightlines or expand occlusion.
            </Rows.body>
          </Rows>

          <Rows videoName="smokes_vid1" inversed>
            <Rows.title>Expands to fill spaces naturally</Rows.title>
            <Rows.body>
              Now the smoke will seep out of opened doorways and broken windows, go down and up stairs, as well as
              expand in long corridors and combine with other smokes.
            </Rows.body>
          </Rows>

          <Rows videoName="smokes_vid3">
            <Rows.title>Reacts to Lighting</Rows.title>
            <Rows.body>
              In Counter-Strike 2 smoke particles work with the unified lighting system allowing for more realistic
              light and color.
            </Rows.body>
          </Rows>
        </Box>
      </MainBlock>
    </>
  );
}
