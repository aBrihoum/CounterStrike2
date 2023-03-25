export type MapT = {
  name: MapsListT;
  data: MapDataT[];
};

export type MapDataT = {
  place: string;
  slides: string[];
};

export type MapsListT = "overpass" | "nuke" | "dust";
