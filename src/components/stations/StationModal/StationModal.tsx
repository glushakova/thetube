import React, { FC, memo, useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  selectSelectedLine,
  selectSelectedStation,
  unselect,
} from "../../../store/map";
import { multiWordLineNames, multiWordStationNames } from "../../../config";
import { SearchInput } from "../components/SearchInput";
import CloseSvg from "../components/SearchInput/Svg/CloseSvg";

const StationModal: FC = memo(() => {
  const [messageIsOpen, setMessageIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const selectedStation = useAppSelector(selectSelectedStation);
  const selectedLine = useAppSelector(selectSelectedLine);

  useEffect(() => {
    if (selectedStation || selectedLine) {
      setMessageIsOpen(true);
    } else {
      setMessageIsOpen(false);
    }
  }, [selectedStation, selectedLine]);

  const onCloseClick = useCallback(() => {
    dispatch(unselect());
  }, []);

  return (
    <div className="modal">
      {messageIsOpen && (
        <div
          className={classNames("modal-message", {
            [`message${selectedLine}`]: selectedLine,
            messageStation: selectedStation,
            messageClose: !messageIsOpen,
          })}
        >
          {(selectedStation && multiWordStationNames[selectedStation]) ||
            selectedStation}
          {(selectedLine && multiWordLineNames[selectedLine]) || selectedLine}

          <button
            className={classNames("modal-button", {
              displayNone: !(selectedStation || selectedLine),
            })}
            onClick={onCloseClick}
          >
            <CloseSvg />
          </button>
        </div>
      )}
      <SearchInput />
    </div>
  );
});

export default StationModal;
