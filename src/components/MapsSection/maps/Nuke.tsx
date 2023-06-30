import { useState } from "preact/hooks";
import maps from "../../../assets/json/maps.json";
import { MapT } from "./Map.type";
import MapsBox from "../../UI/MapsBox/MapsBox";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

export default function Nuke() {
  let nuke = (maps as MapT[]).find((el) => el.name === "nuke") || ({} as MapT);

  const [nukeSlide, setNukeSlide] = useState(nuke.data[0]);

  function returnButtons(map: MapT) {
    return map.data.map((el, i) => (
      <div onClick={() => setNukeSlide(el)} key={i}>
        {el.place}
      </div>
    ));
  }
  return (
    <>
      <MapsBox>
        <MapsBox.Title>Upgrade Maps</MapsBox.Title>
        <MapsBox.Description>
          These are maps that use new Source 2 lighting, including a physically based rendering system that produces
          realistic materials, lighting, and reflections.
        </MapsBox.Description>
        <MapsBox.ExMap>
          <>
            EXAMPLE MAP: <b>NUKE</b>
          </>
        </MapsBox.ExMap>
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage alt="Image one" src={nukeSlide.slides[0]} />}
          itemTwo={<ReactCompareSliderImage alt="Image two" src={nukeSlide.slides[1]} />}
        />
        <MapsBox.Buttons activeSlide={nukeSlide}>{returnButtons(nuke)}</MapsBox.Buttons>
      </MapsBox>
    </>
  );
}
