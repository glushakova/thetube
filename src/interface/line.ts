import {Line, Station} from "../config";

export interface LineProps {
    line: Line;
    isSelected: boolean;
    onLineClick: (line: Line) => void;
    onStationClick?: (station: Station) => void;
}