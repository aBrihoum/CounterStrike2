import { JSXInternal } from "preact/src/jsx";
import styles from "./box.module.scss";
const Box = ({
  children,
  bgColor,
  textColor,
}: {
  children: JSXInternal.Element[];
  bgColor: string;
  textColor?: string;
}) => {
  return (
    <>
      <div className={styles["center-box"]} style={{ backgroundColor: bgColor, color: textColor }}>
        <div className={styles["info-block"]}>{children}</div>
      </div>
    </>
  );
};
Box.Heading = ({ children }: { children: string }) => {
  return <div className={styles["heading"]}>{children}</div>;
};
Box.SubHeading = ({ children }: { children: JSXInternal.Element }) => {
  return <div className={styles["sub-heading"]}>{children}</div>;
};
Box.SubHeadingBold = ({ children }: { children: string }) => {
  return <div className={styles["sub-heading--large"]}>{children}</div>;
};

export default Box;
