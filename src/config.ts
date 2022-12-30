export enum Line {
    Elizabeth = 'Elizabeth',
    DLR = 'DLR',
    Central = 'Central',
    Northern = 'Northern',
    Piccadilly = 'Piccadilly',
    Waterloo ='Waterloo',
    Victoria ='Victoria',
    Bakerloo = 'Bakerloo',
    Jubilee = 'Jubilee',
    District = 'District',
    Circle = 'Circle',
    Metropolitan ='Metropolitan',
    Overground = 'Overground',
    HammersmithCity = 'Hammersmith-city',
    Tram = 'Tram',
    CloudCableCar = 'CloudCableCar'
}

export enum Station {
    Shenfield = 'Shenfield',
    Bank = 'Bank',
    Leyton = 'Leyton',
}

// export const StationsByLine: Record<Line, Set<Station>> = {
//     [Line.Elizabeth]: new Set([Station.Shenfield]),
//     [Line.DLR]: new Set([Station.Bank]),
//     [Line.Central]: new Set([Station.Leyton]),
// }

export const LinesByStation: Record<Station, Set<Line>> = {
    [Station.Shenfield]: new Set([Line.Elizabeth]),
    [Station.Bank]: new Set([Line.DLR]),
    [Station.Leyton]: new Set([Line.Central]),
}
