import React, {useCallback, useState, useMemo} from 'react';
import {
    Bakerloo,
    Central,
    Circle,
    District,
    DLR,
    Elizabeth, HammersmithCity,
    Jubilee, Metropolitan,
    Northern, Overground,
    Piccadilly,
    Victoria,
    Waterloo,
    CloudCableCar, Tram
} from './lines';


import {Line, Station} from '../config';
import InterchangeCircles from "./symbol/InterchangeCircles";
import StationNames from "./symbol/StationNames";
import River from "./details/River";
import RiverBus from "./details/RiverBus";
import OSIs from "./OSIs";
import KeyToLines from "./KeyToLines";

import './Map.css';

function Map() {
    const [selectedItem, setSelectedLines] = useState<Line | Station | undefined>();

    // const [selectedLines, setSelectedLines] = useState<Line[]>(Object.values(Line));
    // const [selectedStation, setSelectedStation] = useState<Station[]>(Object.values(Station));

    const onLineClick = useCallback((line: Line) => {
        if (selectedLines.length === 1 && selectedLines[0] === line) {
            setSelectedLines(Object.values(Line))
        } else {
            setSelectedLines([line])
        }
    }, [selectedLines, setSelectedLines])

    // const [selectedLines] = useMemo(() => {
    //
    // });

    return (
        <div className="Map">
                <svg id="status-map" version="1.1"
                     x="0px" y="0px" width="1247.244px" height="907.087px"
                     viewBox="64.094 122.25 985.889 657.072" enableBackground="new 0 0 1247.244 907.087"
                     className="grey-disruptions" data-margin-width="7.5" data-margin-height="44.99946842628523">
                    <River/>
                    <Tram
                        isSelected={selectedLines.includes(Line.Tram)}
                        line={Line.Tram}
                        onStationClick={onLineClick}
                        onLineClick={onLineClick}/>
                    <Overground
                        isSelected={selectedLines.includes(Line.Overground)}
                        line={Line.Overground}
                        onStationClick={onLineClick}
                        onLineClick={onLineClick}/>
                    <DLR
                        isSelected={selectedLines.includes(Line.DLR)}
                        line={Line.DLR}
                        onStationClick={onLineClick}
                        onLineClick={onLineClick}/>
                    <Elizabeth
                        isSelected={selectedLines.includes(Line.Elizabeth)}
                        line={Line.Elizabeth}
                        onStationClick={onLineClick}
                        onLineClick={onLineClick}/>
                    <Waterloo
                        isSelected={selectedLines.includes(Line.Waterloo)}
                        line={Line.Waterloo}
                        onStationClick={onLineClick}
                        onLineClick={onLineClick}/>
                    <Bakerloo
                        isSelected={selectedLines.includes(Line.Bakerloo)}
                        line={Line.Bakerloo}
                        onStationClick={onLineClick}
                        onLineClick={onLineClick}/>
                    <Jubilee
                        isSelected={selectedLines.includes(Line.Jubilee)}
                        line={Line.Jubilee}
                        onStationClick={onLineClick}
                        onLineClick={onLineClick}/>
                    <Victoria
                        isSelected={selectedLines.includes(Line.Victoria)}
                        line={Line.Victoria}
                        onStationClick={onLineClick}
                        onLineClick={onLineClick}/>
                    <Northern
                        isSelected={selectedLines.includes(Line.Northern)}
                        line={Line.Northern}
                        onStationClick={onLineClick}
                        onLineClick={onLineClick}/>
                    <Piccadilly
                        isSelected={selectedLines.includes(Line.Piccadilly)}
                        line={Line.Piccadilly}
                        onStationClick={onLineClick}
                        onLineClick={onLineClick}/>
                    <Central
                        isSelected={selectedLines.includes(Line.Central)}
                        line={Line.Central}
                        onStationClick={onLineClick}
                        onLineClick={onLineClick}/>
                    <HammersmithCity
                        isSelected={selectedLines.includes(Line.HammersmithCity)}
                        line={Line.HammersmithCity}
                        onStationClick={onLineClick}
                        onLineClick={onLineClick}/>
                    <Circle
                        isSelected={selectedLines.includes(Line.Circle)}
                        line={Line.Circle}
                        onStationClick={onLineClick}
                        onLineClick={onLineClick}/>
                    <District
                        isSelected={selectedLines.includes(Line.District)}
                        line={Line.District}
                        onStationClick={onLineClick}
                        onLineClick={onLineClick}/>
                    <Metropolitan
                        isSelected={selectedLines.includes(Line.Metropolitan)}
                        line={Line.Metropolitan}
                        onStationClick={onLineClick}
                        onLineClick={onLineClick}/>
                    <StationNames/>
                    <CloudCableCar
                        isSelected={selectedLines.includes(Line.CloudCableCar)}
                        line={Line.CloudCableCar}
                        onStationClick={onLineClick}
                        onLineClick={onLineClick}/>
                    <RiverBus/>
                    <InterchangeCircles/>
                    <OSIs/>
                    <KeyToLines/>
                </svg>
        </div>
    );
}

export default Map;