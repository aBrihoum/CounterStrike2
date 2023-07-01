import { JSXInternal } from "preact/src/jsx";
import styles from "./main-block.module.scss";
interface PropsI {
  children: JSXInternal.Element;
  styles: {
    bg: string;
    color: string;
    animation?: string;
  };
}
export default function MainBlock({ children, styles: styling }: PropsI) {
  const mainBlockCss = {
    backgroundImage: `url(src/assets/svg/${styling.bg})`,
    backgroundColor: styling.color,
  };
  return (
    <>
      <section className={styles.main} style={mainBlockCss}>
        <div
          style={{ width: "100%" }}
          {...(styling.animation ? { "data-scroll": "", "data-animation": styling.animation } : {})}
        >
          {children}
        </div>
      </section>
    </>
  );
}
