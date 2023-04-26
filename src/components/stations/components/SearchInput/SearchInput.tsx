import React, {
  FC,
  memo,
  useEffect,
  useMemo,
  useState,
  useRef,
  KeyboardEvent,
} from "react";
import classNames from "classnames";
import "./style.css";
import UpDownSvg from "./Svg/upDownSvg";
import { multiWordStationNames, Station } from "../../../../config";
import { useAppDispatch } from "../../../../store/hooks";
import { selectStation } from "../../../../store/map";

const allStation = Object.values(Station);

const SearchInput: FC = memo(() => {
  const [value, setValue] = useState<string>("");
  const [active, setActive] = useState<number | undefined>();
  const listRef = useRef<HTMLDivElement>(null);
  const [isListOpen, setIsListOpen] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const filteredSuggestions = useMemo(() => {
    if (!(value || value?.length > 0)) return [];
    return allStation.filter((suggestion: string) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
  }, [value]);

  useEffect(() => {
    if (filteredSuggestions.length > 0) {
      setIsListOpen(true);
    } else {
      setIsListOpen(false);
    }
  }, [filteredSuggestions]);

  useEffect(() => {
    setActive(undefined);
  }, [filteredSuggestions]);

  const onKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "ArrowUp": {
        setActive((prevActive) => {
          if (prevActive === undefined || prevActive === 0) {
            return filteredSuggestions.length - 1;
          }
          return prevActive - 1;
        });
        break;
      }
      case "ArrowDown": {
        setActive((prevActive) => {
          if (
            prevActive === undefined ||
            prevActive === filteredSuggestions.length
          ) {
            return 0;
          }
          return prevActive + 1;
        });
        break;
      }

      case "Enter": {
        if (active !== undefined) {
          dispatch(selectStation({ station: filteredSuggestions[active] }));
        }
      }
    }
  };

  return (
    <div className="search" onKeyDown={onKeyDown}>
      <div className="search-textField">
        <div className="search-inputBase">
          <input
            className={classNames("search-input", {
              "search-input-border": !(isListOpen || value),
            })}
            placeholder="Where to?"
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />

          <button
            className={classNames("search-button", {
              "search-buttonRotate": isListOpen,
            })}
            onClick={() => setIsListOpen((prevState) => !prevState)}
          >
            <UpDownSvg />
          </button>

          {isListOpen && (
            <div className="suggestions" ref={listRef}>
              {filteredSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className={classNames("suggestion", {
                    active: index === active,
                  })}
                  onClick={() => {
                    dispatch(selectStation({ station: suggestion }));
                    setValue("");
                  }}
                >
                  {(suggestion && multiWordStationNames[suggestion]) ||
                    suggestion}
                </div>
              ))}
            </div>
          )}

          {value && !isListOpen && (
            <div className="suggestions-notFound">
              <span>Nothing found</span>
              <p>Try using a different spelling or name</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default SearchInput;
