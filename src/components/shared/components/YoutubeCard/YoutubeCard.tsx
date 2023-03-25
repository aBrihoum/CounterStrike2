import playBtn from "../../../../assets/svg/play_button.svg";
import styles from "./youtube-card.module.scss";
export default function YoutubeCard({
  text,
  videoName,
}: {
  text: string;
  videoName: "video_smokes" | "video_ticks" | "video_maps";
}) {
  return (
    <>
      <div className={styles["trailer-block"]}>
        <video preload="auto" autoPlay muted loop>
          <source
            type="video/webm"
            src={`https://cdn.cloudflare.steamstatic.com/apps/csgo/videos/csgo_react/cs2/${videoName}.webm`}
          />
          <source
            type="video/mp4"
            src={`https://cdn.cloudflare.steamstatic.com/apps/csgo/videos/csgo_react/cs2/${videoName}.mp4`}
          />
        </video>
        <div className={styles["trailer-block__overlay"]}>
          <div className={styles["trailer-block__overlay__texts"]}>
            <div className={styles["sub-heading"]}>Counter-Strike 2:</div>
            <div className={styles["heading"]}>{text}</div>
          </div>
          <div className={styles["trailer-block__overlay__play-btn-block"]}>
            <img src={playBtn} alt="play-btn" />
            <span>Play Video</span>
          </div>
        </div>
      </div>
    </>
  );
}
