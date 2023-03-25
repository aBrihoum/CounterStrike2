import { useState } from "preact/hooks";
import maps from "../../../assets/json/maps.json";
import { MapT } from "../../shared/interfaces/Map.type";
import ReactCompareImage from "react-compare-image";
import MapsBox from "../../shared/components/MapsBox/MapsBox";

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
        <ReactCompareImage
          leftImage={nukeSlide.slides[0]}
          rightImage={nukeSlide.slides[1]}
          rightImageLabel="CS 2"
          leftImageLabel="CS:GO"
        />
        <MapsBox.Buttons activeSlide={nukeSlide}>{returnButtons(nuke)}</MapsBox.Buttons>
      </MapsBox>
    </>
  );
}
