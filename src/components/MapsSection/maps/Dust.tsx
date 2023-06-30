import { useState } from "preact/hooks";
import maps from "../../../assets/json/maps.json";
import { MapT } from "./Map.type";
import MapsBox from "../../UI/MapsBox/MapsBox";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

export default function Dust() {
  let dust = (maps as MapT[]).find((el) => el.name === "dust") || ({} as MapT);

  const [dustSlide, setDustSlide] = useState(dust.data[0]);

  function returnButtons(map: MapT) {
    return map.data.map((el, i) => (
      <div onClick={() => setDustSlide(el)} key={i}>
        {el.place}
      </div>
    ));
  }
  return (
    <>
      <MapsBox>
        <MapsBox.Title>Touchstone Maps</MapsBox.Title>
        <MapsBox.Description>
          Classic maps with solid foundations that players can use to evaluate gameplay changes from CS:GO to
          Counter-Strike 2. These have improvements to lighting and character read, but otherwise haven't been changed.
        </MapsBox.Description>
        <MapsBox.ExMap>
          <>
            EXAMPLE MAP: <b>DUST II</b>
          </>
        </MapsBox.ExMap>
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage alt="Image one" src={dustSlide.slides[0]} />}
          itemTwo={<ReactCompareSliderImage alt="Image two" src={dustSlide.slides[1]} />}
        />
        <MapsBox.Buttons activeSlide={dustSlide}>{returnButtons(dust)}</MapsBox.Buttons>
      </MapsBox>
    </>
  );
}
