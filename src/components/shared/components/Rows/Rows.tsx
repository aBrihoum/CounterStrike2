import { JSXInternal } from "preact/src/jsx";
import styles from "./rows.module.scss";

export default function Rows({
  children,
  videoName,
  inversed,
  vfx,
}: {
  children: JSXInternal.Element[];
  videoName: "blood_hit_fx" | "explosions" | "UI" | "smokes_vid2" | "smokes_vid1" | "smokes_vid3";
  inversed?: boolean;
  vfx?: boolean;
}) {
  return (
    <>
      <div className={`${styles["row"]} ${inversed ? styles["inversed"] : ""}`}>
        <video preload="auto" autoPlay muted loop>
          <source
            type="video/webm"
            src={`https://cdn.cloudflare.steamstatic.com/apps/csgo/images/csgo_react/cs2${
              vfx ? "/vfx/" : "/"
            }${videoName}.webm`}
          />
          <source
            type="video/mp4"
            src={`https://cdn.cloudflare.steamstatic.com/apps/csgo/images/csgo_react/cs2${
              vfx ? "/vfx/" : "/"
            }${videoName}.mp4`}
          />
        </video>
        <div className={styles["paragraph"]}>{children}</div>
      </div>
    </>
  );
}

Rows.title = ({ children }: { children: string }) => {
  return <div className={styles["paragraph__title"]}>{children}</div>;
};
Rows.body = ({ children }: { children: string }) => {
  return <div className={styles["paragraph__body"]}>{children}</div>;
};
