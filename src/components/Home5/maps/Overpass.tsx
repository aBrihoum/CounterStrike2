import { useState } from "preact/hooks";
import maps from "../../../assets/json/maps.json";
import { MapT } from "../../shared/interfaces/Map.type";
import ReactCompareImage from "react-compare-image";
import MapsBox from "../../shared/components/MapsBox/MapsBox";

export default function Overpass() {
  let overpass = (maps as MapT[]).find((el) => el.name === "overpass") || ({} as MapT);

  const [overpassSlide, setOverpassSlide] = useState(overpass.data[0]);

  function returnButtons(map: MapT) {
    return map.data.map((el, i) => (
      <div onClick={() => setOverpassSlide(el)} key={i}>
        {el.place}
      </div>
    ));
  }
  return (
    <>
      <MapsBox>
        <MapsBox.Title>Full Overhaul Maps</MapsBox.Title>
        <MapsBox.Description>
          The overhauled maps have been fully rebuilt from the ground up, leveraging all of the new Source 2 tools and
          rendering features.
        </MapsBox.Description>
        <MapsBox.ExMap>
          <>
            EXAMPLE MAP: <b>OVERPASS</b>
          </>
        </MapsBox.ExMap>
        <ReactCompareImage
          leftImage={overpassSlide.slides[0]}
          rightImage={overpassSlide.slides[1]}
          rightImageLabel="CS 2"
          leftImageLabel="CS:GO"
        />
        <MapsBox.Buttons activeSlide={overpassSlide}>{returnButtons(overpass)}</MapsBox.Buttons>
      </MapsBox>
    </>
  );
}
