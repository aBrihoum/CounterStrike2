type MapsListT = "overpass" | "nuke" | "dust";

export type MapDataT = {
  place: string;
  slides: string[];
};

export type MapT = {
  name: MapsListT;
  data: MapDataT[];
};
