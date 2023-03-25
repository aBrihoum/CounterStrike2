import { JSXInternal } from "preact/src/jsx";
import { MapDataT } from "../../interfaces/Map.type";
import styles from "./maps-box.module.scss";
export default function MapsBox({ children }: { children: JSXInternal.Element[] }) {
  return (
    <>
      <div className={styles["compare"]}>{children}</div>
    </>
  );
}

MapsBox.Title = ({ children }: { children: string }) => {
  return <div className={styles["compare__title"]}>{children}</div>;
};
MapsBox.ExMap = ({ children }: { children: JSXInternal.Element }) => {
  return <div className={styles["compare__ex-map"]}>{children}</div>;
};
MapsBox.Description = ({ children }: { children: string }) => {
  return <div className={styles["compare__description"]}>{children}</div>;
};
MapsBox.Buttons = ({ children, activeSlide }: { children: JSXInternal.Element[]; activeSlide: MapDataT }) => {
  children.map((el) => {
    return (el.props.className = `${styles["compare__buttons__el"]} ${
      activeSlide.place === el.props.children ? styles["active"] : ""
    }`);
  });
  return <div className={styles["compare__buttons"]}>{children}</div>;
};
