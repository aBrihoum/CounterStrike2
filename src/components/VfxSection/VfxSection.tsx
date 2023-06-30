import Box from "../UI/Box/Box";
import Rows from "../UI/Rows/Rows";
import styles from "./vfxSection.module.scss";
export default function VfxSection() {
  return (
    <>
      <section className={styles["main-block"]}>
        <div className={styles["animation"]} data-scroll>
          <Box bgColor="#eee">
            <Box.Heading>HI-DEF VFX</Box.Heading>
            <Box.SubHeadingBold>From UI to gameplay, all visual effects have been reimagined.</Box.SubHeadingBold>
            <Box.SubHeading>
              <>
                All of the visual effects have been updated in Counter-Strike 2. With Source 2 lighting and particle
                systems, there’s an all-new look and behavior for water, explosions, fire, smoke, muzzle flashes, bullet
                tracers, impact effects, and more.
              </>
            </Box.SubHeading>

            <Rows videoName="blood_hit_fx" vfx>
              <Rows.title>Gameplay Visuals</Rows.title>
              <Rows.body>
                In Counter-Strike 2 the most critical gameplay visuals have been redesigned with readability in mind.
                Bullet impacts can be easily viewed at a distance, and directional blood impacts (that fade over time)
                give you more information as you move through the world.
              </Rows.body>
            </Rows>

            <Rows videoName="explosions" vfx inversed>
              <Rows.title>Environment Effects</Rows.title>
              <Rows.body>
                Experience completely reauthored explosions, fire, C4 lighting, and more. Leveraging the Source 2 Engine
                and modern hardware, environmental effects in Counter-Strike 2 feature improved visual fidelity and
                greater consistency.
              </Rows.body>
            </Rows>

            <Rows videoName="UI" vfx>
              <Rows.title>UI Enhancements</Rows.title>
              <Rows.body>
                The UI in Counter-Strike 2 has gotten a complete overhaul, including fresh visual effects throughout the
                HUD. Not only do these improvements look nice, they also communicate important game state.
              </Rows.body>
            </Rows>
          </Box>
        </div>
      </section>
    </>
  );
}
