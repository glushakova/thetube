export enum Line {
  Elizabeth = "Elizabeth",
  DLR = "DLR",
  Central = "Central",
  Northern = "Northern",
  Piccadilly = "Piccadilly",
  Waterloo = "Waterloo",
  Victoria = "Victoria",
  Bakerloo = "Bakerloo",
  Jubilee = "Jubilee",
  District = "District",
  Circle = "Circle",
  Metropolitan = "Metropolitan",
  Overground = "Overground",
  HammersmithCity = "HammersmithСity",
  Tram = "Tram",
  CloudCableCar = "CloudCableCar",
}

export enum Station {
  Shenfield = "Shenfield",
  Bank = "Bank",
  Leyton = "Leyton",
  Aldgate = "Aldgate",
  Rotherhithe = "Rotherhithe",
  Epping = "Epping",
  Debden = "Debden",
  Loughton = "Loughton",
  LimeHouse = "LimeHouse",
  Westferry = "Westferry",
  Poplar = "Poplar",
  Blackwall = "Blackwall",
  MansionHouse = "MansionHouse",
  Knightsbridge = "Knightsbridge",
  HydeParkCorner = "HydeParkCorner",
  BaronsCourt = "BaronsCourt",
  CoventGarden = "CoventGarden",
  Vauxhall = "Vauxhall",
  Pimlico = "Pimlico",
  EdgwareRoud = "EdgwareRoud",
  Marylebone = "Marylebone",
  Upminster = "Upminster",
  UpminsterBridge = "UpminsterBridge",
  Hornchurch = "Hornchurch",
  ElmPark = "ElmPark",
  DagenhamEast = "DagenhamEast",
  DagenhamHeathway = "DagenhamHeathway",
  Becontree = "Becontree",
  Upney = "Upney",
  Chingford = "Chingford",
  HighamsPark = "HighamsPark",
  WoodStreet = "WoodStreet",
  Bermondsey = "Bermondsey",
  Stanmore = "Stanmore",
  CanonsPark = "CanonsPark",
  Queensbury = "Queensbury",
  Borough = "Borough",
  Edgware = "Edgware",
  BurntOak = "BurntOak",
  Colindale = "Colindale",
  Chesham = "Chesham",
  Amersham = "Amersham",
  ChalfontLatimer = "ChalfontLatimer",
  Chorleywood = "Chorleywood",
  Watford = "Watford",
  Rickmansworth = "Rickmansworth",
  Croxley = "Croxley",
  MoorPark = "MoorPark",
  Northwood = "Northwood",
  NorthwoodHills = "Northwood Hills",
  Pinner = "Pinner",
  NorthHarrow = "NorthHarrow",
  BeckenhamJunction = "BeckenhamJunction",
  BeckenhamRoad = "BeckenhamRoad",
  AvenueRoad = "AvenueRoad",
  Birkbeck = "Birkbeck",
  HarringtonRoad = "HarringtonRoad",
  ElmersEnd = "ElmersEnd",
  Arena = "Arena",
  IFSCloudRoyalDocks = "IFSCloudRoyalDocks",
  GantsHill = "GantsHill",
  Redbridge = "Redbridge",
  Leytonstone = "Leytonstone",
  TheydonBois = "TheydonBois",
  KingsCrossStPancras = "KingsCrossStPancras",
  Moorgate = "Moorgate",
  StPauls = "StPauls",
  Holborn = "Holborn",
  EustonSquare = "EustonSquare",
}

// export const StationsByLine: Record<Line, Set<Station>> = {
//     [Line.Elizabeth]: new Set([Station.Shenfield]),
//     [Line.DLR]: new Set([Station.Bank]),
//     [Line.Central]: new Set([Station.Leyton]),
// }

export const LinesByStation: Record<Station, Set<Line>> = {
  [Station.Shenfield]: new Set([Line.Elizabeth]),

  [Station.Rotherhithe]: new Set([Line.Overground]),
  [Station.Chingford]: new Set([Line.Overground]),
  [Station.HighamsPark]: new Set([Line.Overground]),
  [Station.WoodStreet]: new Set([Line.Overground]),

  [Station.Bermondsey]: new Set([Line.Jubilee]),
  [Station.Stanmore]: new Set([Line.Jubilee]),
  [Station.CanonsPark]: new Set([Line.Jubilee]),
  [Station.Queensbury]: new Set([Line.Jubilee]),

  [Station.Borough]: new Set([Line.Northern]),
  [Station.Edgware]: new Set([Line.Northern]),
  [Station.BurntOak]: new Set([Line.Northern]),
  [Station.Colindale]: new Set([Line.Northern]),

  [Station.Knightsbridge]: new Set([Line.Piccadilly]),
  [Station.HydeParkCorner]: new Set([Line.Piccadilly]),
  [Station.BaronsCourt]: new Set([Line.Piccadilly]),
  [Station.CoventGarden]: new Set([Line.Piccadilly]),

  [Station.Vauxhall]: new Set([Line.Victoria]),
  [Station.Pimlico]: new Set([Line.Victoria]),

  [Station.Marylebone]: new Set([Line.Bakerloo]),
  [Station.EdgwareRoud]: new Set([Line.Bakerloo]),

  [Station.Leyton]: new Set([Line.Central]),
  [Station.Epping]: new Set([Line.Central]),
  [Station.Debden]: new Set([Line.Central]),
  [Station.Loughton]: new Set([Line.Central]),
  [Station.GantsHill]: new Set([Line.Central]),
  [Station.Redbridge]: new Set([Line.Central]),
  [Station.Leytonstone]: new Set([Line.Central]),
  [Station.TheydonBois]: new Set([Line.Central]),
  [Station.StPauls]: new Set([Line.Central]),

  [Station.LimeHouse]: new Set([Line.DLR]),
  [Station.Westferry]: new Set([Line.DLR]),
  [Station.Poplar]: new Set([Line.DLR]),
  [Station.Blackwall]: new Set([Line.DLR]),

  [Station.Upminster]: new Set([Line.District]),
  [Station.UpminsterBridge]: new Set([Line.District]),
  [Station.Hornchurch]: new Set([Line.District]),
  [Station.ElmPark]: new Set([Line.District]),
  [Station.DagenhamEast]: new Set([Line.District]),
  [Station.DagenhamHeathway]: new Set([Line.District]),
  [Station.Becontree]: new Set([Line.District]),
  [Station.Upney]: new Set([Line.District]),

  [Station.Chesham]: new Set([Line.Metropolitan]),
  [Station.Amersham]: new Set([Line.Metropolitan]),
  [Station.ChalfontLatimer]: new Set([Line.Metropolitan]),
  [Station.Chorleywood]: new Set([Line.Metropolitan]),
  [Station.Watford]: new Set([Line.Metropolitan]),
  [Station.Rickmansworth]: new Set([Line.Metropolitan]),
  [Station.Croxley]: new Set([Line.Metropolitan]),
  [Station.MoorPark]: new Set([Line.Metropolitan]),
  [Station.Northwood]: new Set([Line.Metropolitan]),
  [Station.NorthwoodHills]: new Set([Line.Metropolitan]),
  [Station.Pinner]: new Set([Line.Metropolitan]),
  [Station.NorthHarrow]: new Set([Line.Metropolitan]),

  [Station.BeckenhamJunction]: new Set([Line.Tram]),
  [Station.BeckenhamRoad]: new Set([Line.Tram]),
  [Station.AvenueRoad]: new Set([Line.Tram]),
  [Station.Birkbeck]: new Set([Line.Tram]),
  [Station.HarringtonRoad]: new Set([Line.Tram]),
  [Station.ElmersEnd]: new Set([Line.Tram]),
  [Station.Arena]: new Set([Line.Tram]),

  [Station.IFSCloudRoyalDocks]: new Set([Line.CloudCableCar]),

  [Station.Bank]: new Set([Line.DLR, Line.Central, Line.Northern]),
  [Station.MansionHouse]: new Set([Line.Circle, Line.District]),
  [Station.Aldgate]: new Set([Line.Circle, Line.Metropolitan]),
  [Station.Holborn]: new Set([Line.Central, Line.Piccadilly]),
  [Station.KingsCrossStPancras]: new Set([
    Line.Circle,
    Line.HammersmithCity,
    Line.Metropolitan,
    Line.Northern,
    Line.Piccadilly,
    Line.Victoria,
  ]),
  [Station.Moorgate]: new Set([
    Line.Circle,
    Line.HammersmithCity,
    Line.Metropolitan,
    Line.Northern,
  ]),
  [Station.EustonSquare]: new Set([
    Line.Circle,
    Line.HammersmithCity,
    Line.Metropolitan,
  ]),
};

// needed for the search functionality later
export const multiWordStationNames: Partial<Record<Station, string>> = {
  [Station.StPauls]: "St Paul’s",
};
