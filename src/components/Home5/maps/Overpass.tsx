import { useState } from "preact/hooks";
import maps from "../../../assets/json/maps.json";
import { MapT } from "../../shared/interfaces/Map.type";
import MapsBox from "../../shared/components/MapsBox/MapsBox";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

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
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage alt="Image one" src={overpassSlide.slides[0]} />}
          itemTwo={<ReactCompareSliderImage alt="Image two" src={overpassSlide.slides[1]} />}
        />
        <MapsBox.Buttons activeSlide={overpassSlide}>{returnButtons(overpass)}</MapsBox.Buttons>
      </MapsBox>
    </>
  );
}
