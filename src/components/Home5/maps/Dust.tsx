import { useState } from "preact/hooks";
import maps from "../../../assets/json/maps.json";
import { MapT } from "../../shared/interfaces/Map.type";
import ReactCompareImage from "react-compare-image";
import MapsBox from "../../shared/components/MapsBox/MapsBox";

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
        <ReactCompareImage
          leftImage={dustSlide.slides[0]}
          rightImage={dustSlide.slides[1]}
          rightImageLabel="CS 2"
          leftImageLabel="CS:GO"
        />
        <MapsBox.Buttons activeSlide={dustSlide}>{returnButtons(dust)}</MapsBox.Buttons>
      </MapsBox>
    </>
  );
}
