export enum Line {
    Elizabeth = 'Elizabeth',
    DLR = 'DLR'
    // Central = 'central'
}

export enum Station {
    Shenfield = 'Shenfield',
    Bank = 'Bank',
}

export const StationsByLine: Record<Line, Set<Station>> = {
    [Line.Elizabeth]: new Set([Station.Shenfield]),
    [Line.DLR]: new Set([Station.Bank]),
}