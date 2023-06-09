import React, { memo, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getIsLineActiveSelector,
  selectSelectedStation,
  selectStation,
} from "../../store/map";
import { Line, Station } from "../../config";
import { StationIcon } from "../StationIcon";
import { STROKE_WIDTH } from "../../constant/main";
import classNames from "classnames";

// const LiverpoolMoorgate = memo(() => {
//   const activeStationsSet = useAppSelector(selectActiveStationsSet);
//
//   console.log({
//     liverpool: activeStationsSet.has(Station.LiverpoolStreet),
//     moorgate: activeStationsSet.has(Station.Moorgate),
//   });
//
//   return (
//     <g
//       id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlumgt_northern_940gmgt_elizabeth_910glivst"
//       data-linestop="elizabeth"
//     >
//       <g
//         className={classNames({
//           disabled: !activeStationsSet.has(Station.LiverpoolStreet),
//         })}
//       >
//         <g
//           id="lul-central_lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlulvt_elizabeth_910glivst"
//           data-linestop="elizabeth"
//           className="disrupted"
//         >
//           <g>
//             <rect x="644.1" y="400.2" width="3.4" height="20.8"></rect>
//           </g>
//           <g>
//             <path
//               fill="#FFFFFF"
//               d="M645.8,425.9c-1.6,0-3-1.3-3-3c0-1.6,1.3-3,3-3c1.6,0,3,1.3,3,3C648.8,424.6,647.5,425.9,645.8,425.9z "
//               className="white-fill"
//             ></path>
//             <path d="M645.8,426.5c-2,0-3.6-1.6-3.6-3.6c0-2,1.6-3.6,3.6-3.6c2,0,3.6,1.6,3.6,3.6C649.4,424.9,647.8,426.5,645.8,426.5z M643.5,422.9c0,1.3,1.1,2.4,2.4,2.4c1.3,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4C644.5,420.5,643.5,421.6,643.5,422.9z"></path>
//           </g>
//           <rect
//             x="645.3"
//             y="398.8"
//             fill="#FFFFFF"
//             width="1.1"
//             height="22.4"
//             className="white-fill"
//           />
//         </g>
//         <g
//           id="railo-overground_910glivst_elizabeth_910glivst"
//           data-linestop="elizabeth"
//           className="disrupted"
//         >
//           <rect
//             x="642.2"
//             y="392"
//             transform="matrix(0.7071 -0.7071 0.7071 0.7071 -87.2055 576.8234)"
//             width="21.1"
//             height="3.4"
//           />
//         </g>
//         <g
//           id="elizabeth_910glivstll"
//           data-linestop="elizabeth"
//           className="disrupted"
//         >
//           <g>
//             <path
//               fill="#1C3F94"
//               d="M645.9,397c2,0,3.6,1.6,3.6,3.6c0,2-1.6,3.6-3.6,3.6c-2,0-3.6-1.6-3.6-3.6 C642.3,398.6,643.9,397,645.9,397z"
//               className="blue-fill"
//             />
//           </g>
//           <g>
//             <path
//               fill="#FFFFFF"
//               d="M644.7,401.6c0.2,0.6,0.7,1,1.3,1c0.8,0,1.4-0.6,1.4-1.4c0-0.4-0.2-0.8-0.4-1l0.1-0.6 c0.5,0.3,0.9,0.9,0.9,1.6c0,1-0.8,1.9-1.9,1.9c-0.7,0-1.3-0.4-1.6-0.9L644.7,401.6z"
//               className="white-fill"
//             />
//             <circle
//               fill="#FFFFFF"
//               cx="646.5"
//               cy="398.2"
//               r="0.5"
//               className="white-fill"
//             />
//             <path
//               fill="#FFFFFF"
//               d="M646.2,399.2l-0.1,0.4H645c0,0-0.2,0-0.2,0.3c0,0.2,0.2,0.3,0.2,0.3h1.1l-0.1,0.4h-1.4 c0,0-0.1,0-0.2,0.1c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.3c0,0,0.1-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C646.3,398.9,646.2,399.2,646.2,399.2z"
//               className="white-fill"
//             />
//           </g>
//         </g>
//         <g
//           id="railo-overground_910glivst_elizabeth_910glivst_00000011006098683345462890000000146479823310626230_"
//           data-linestop="elizabeth"
//           className="disrupted"
//         >
//           <g>
//             <path
//               fill="#1C3F94"
//               d="M660,383c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C656.6,384.5,658.1,383,660,383z"
//               className="blue-fill"
//             ></path>
//             <path
//               fill="#FFFFFF"
//               d="M660,389.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C663,388.1,661.7,389.5,660,389.5L660,389.5z"
//               className="white-fill"
//             />
//           </g>
//           <g>
//             <g>
//               <path
//                 fill="#1C3F94"
//                 d="M658.8,387.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L658.8,387.4z"
//                 className="blue-fill"
//               />
//               <path
//                 fill="#1C3F94"
//                 d="M660,384.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C660.3,383.7,660,383.9,660,384.2z"
//                 className="blue-fill"
//               />
//               <path
//                 fill="#1C3F94"
//                 d="M660.3,385.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C660.4,384.8,660.3,385.1,660.3,385.1z"
//                 className="blue-fill"
//               />
//             </g>
//           </g>
//         </g>
//       </g>
//
//       <g
//         className={classNames({
//           disabled: !activeStationsSet.has(Station.Moorgate),
//         })}
//       >
//         <g
//           id="lul-northern_940gzzlumgt_elizabeth_910glivst"
//           data-linestop="elizabeth"
//           className="disrupted"
//         >
//           <g>
//             <rect
//               x="632.9"
//               y="403.3"
//               transform="matrix(0.7071 -0.7071 0.7071 0.7071 -98.4916 572.1483)"
//               width="17.1"
//               height="3.4"
//             />
//           </g>
//           <rect
//             x="634.9"
//             y="403.5"
//             transform="matrix(0.707 -0.7072 0.7072 0.707 -97.5218 572.6423)"
//             fill="#FFFFFF"
//             width="14.9"
//             height="1.1"
//             className="white-fill"
//           />
//         </g>
//         <g
//           id="lul-circle_lul-hammersmith-city_lul-metropolitan_lul-northern_940gzzlumgt_northern_940glivstll"
//           data-linestop="northern"
//         >
//           <g
//             id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlumgt_northern_940gmgt_00000156588200340893060420000000244149120827571126_"
//             data-linestop="northern"
//           >
//             <g>
//               <rect
//                 x="622.2"
//                 y="413.8"
//                 transform="matrix(0.7071 -0.7071 0.7071 0.7071 -109.0685 567.6752)"
//                 width="17.1"
//                 height="3.4"
//               />
//             </g>
//           </g>
//           <rect
//             x="624.3"
//             y="414"
//             transform="matrix(0.707 -0.7072 0.7072 0.707 -108.1008 568.1691)"
//             fill="#FFFFFF"
//             width="14.9"
//             height="1.1"
//             className="white-fill"
//           />
//         </g>
//         <g
//           id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlumgt"
//           data-linestop="northern"
//         >
//           <g>
//             <path
//               fill="#1C3F94"
//               d="M626.5,416.2c2,0,3.6,1.6,3.6,3.6c0,2-1.6,3.6-3.6,3.6c-2,0-3.6-1.6-3.6-3.6 C622.9,417.8,624.5,416.2,626.5,416.2z"
//               className="blue-fill"
//             />
//           </g>
//           <g>
//             <g>
//               <path
//                 fill="#FFFFFF"
//                 d="M625.3,420.8c0.2,0.6,0.7,1,1.3,1c0.8,0,1.4-0.6,1.4-1.4c0-0.4-0.2-0.8-0.4-1l0.1-0.6 c0.5,0.3,0.9,0.9,0.9,1.6c0,1-0.8,1.9-1.9,1.9c-0.7,0-1.3-0.4-1.6-0.9L625.3,420.8z"
//                 className="white-fill"
//               />
//               <circle
//                 fill="#FFFFFF"
//                 cx="627.1"
//                 cy="417.4"
//                 r="0.5"
//                 className="white-fill"
//               />
//               <path
//                 fill="#FFFFFF"
//                 d="M626.8,418.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.3c0,0.2,0.2,0.3,0.2,0.3h1.1l-0.1,0.4h-1.4 c0,0-0.1,0-0.2,0.1c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.3c0,0,0.1-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C626.9,418.1,626.8,418.4,626.8,418.4z"
//                 className="white-fill"
//               />
//             </g>
//           </g>
//         </g>
//         <g id="northern_940glivstll">
//           <g>
//             <path
//               fill="#1C3F94"
//               d="M636.8,406.2c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C633.4,407.7,634.9,406.2,636.8,406.2z"
//               className="blue-fill"
//             ></path>
//             <path
//               fill="#FFFFFF"
//               d="M636.8,412.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C639.9,411.3,638.5,412.7,636.8,412.7L636.8,412.7z"
//               className="white-fill"
//             />
//           </g>
//           <g>
//             <g>
//               <path
//                 fill="#1C3F94"
//                 d="M635.6,410.6c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L635.6,410.6z"
//                 className="blue-fill"
//               />
//               <path
//                 fill="#1C3F94"
//                 d="M636.9,407.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C637.1,406.8,636.9,407.1,636.9,407.3z"
//                 className="blue-fill"
//               ></path>
//               <path
//                 fill="#1C3F94"
//                 d="M637.1,408.2l-0.1,0.4H636c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C637.2,408,637.1,408.2,637.1,408.2z"
//                 className="blue-fill"
//               ></path>
//             </g>
//           </g>
//         </g>
//       </g>
//     </g>
//   );
// });

const InterchangeCircles: FC = memo(() => {
  const selectedStation = useAppSelector(selectSelectedStation);

  const isJubileeActive = useAppSelector(getIsLineActiveSelector(Line.Jubilee));
  const isOvergroundActive = useAppSelector(
    getIsLineActiveSelector(Line.Overground)
  );
  const isNorthernActive = useAppSelector(
    getIsLineActiveSelector(Line.Northern)
  );
  const isDistrictActive = useAppSelector(
    getIsLineActiveSelector(Line.District)
  );
  const isPiccadillyActive = useAppSelector(
    getIsLineActiveSelector(Line.Piccadilly)
  );
  const isCentralActive = useAppSelector(getIsLineActiveSelector(Line.Central));
  const isBakerlooActive = useAppSelector(
    getIsLineActiveSelector(Line.Bakerloo)
  );
  const isCircleActive = useAppSelector(getIsLineActiveSelector(Line.Circle));
  const isVictoriaActive = useAppSelector(
    getIsLineActiveSelector(Line.Victoria)
  );
  const isMetropolitanActive = useAppSelector(
    getIsLineActiveSelector(Line.Metropolitan)
  );
  const isHammersmithCityActive = useAppSelector(
    getIsLineActiveSelector(Line.HammersmithCity)
  );
  const isDLRActive = useAppSelector(getIsLineActiveSelector(Line.DLR));
  const isTramActive = useAppSelector(getIsLineActiveSelector(Line.Tram));
  const isElizabethActive = useAppSelector(
    getIsLineActiveSelector(Line.Elizabeth)
  );

  const dispatch = useAppDispatch();
  return (
    <g>
      <g
        className={classNames({
          disabled: !(isJubileeActive || isOvergroundActive),
        })}
      >
        <StationIcon
          x={722.75}
          y={536.8}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={225}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.CanadaWater }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.CanadaWater}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !(isJubileeActive || isNorthernActive),
        })}
      >
        <StationIcon
          x={636.75}
          y={513.25}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={135}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.LondonBridge }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.LondonBridge}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !(isJubileeActive || isDistrictActive || isCircleActive),
        })}
      >
        <StationIcon
          x={522.8}
          y={512.1}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={315}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.Westminster }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.Westminster}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !(isVictoriaActive || isDistrictActive || isCircleActive),
        })}
      >
        <StationIcon
          x={475.9}
          y={512.1}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={315}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.Victoria }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.Victoria}
          isInterchange
        />
      </g>
      <g
        className={classNames("line", {
          disabled: !(isDistrictActive || isCircleActive),
        })}
      >
        <StationIcon
          x={680.5}
          y={469.1}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={225}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.TowerHill }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.TowerHill}
          isInterchange
        />
        <StationIcon
          x={613.7}
          y={483.5}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={315}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.CannonStreet }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.CannonStreet}
          isInterchange
        />
        <StationIcon
          x={598.1}
          y={498.9}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={315}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.Blackfriars }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.Blackfriars}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !(
            isVictoriaActive ||
            isJubileeActive ||
            isPiccadillyActive
          ),
        })}
      >
        <StationIcon
          x={475.9}
          y={464.8}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={45}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.GreenPark }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.GreenPark}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !(isBakerlooActive || isPiccadillyActive),
        })}
      >
        <StationIcon
          x={515.5}
          y={464.8}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={180}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.PiccadillyCircus }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.PiccadillyCircus}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !(isBakerlooActive || isNorthernActive),
        })}
      >
        <StationIcon
          x={536.7}
          y={486.1}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={270}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.CharingCross }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.CharingCross}
          isInterchange
        />
        <StationIcon
          x={552.4}
          y={613.6}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={135}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.ElephantCastle }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.ElephantCastle}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !(isVictoriaActive || isPiccadillyActive),
        })}
      >
        <StationIcon
          x={514.5}
          y={644.9}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={90}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.Stockwell }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.Stockwell}
          isInterchange
        />
        <StationIcon
          x={536.7}
          y={391.6}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={90}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.WarrenStreet }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.WarrenStreet}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !(isNorthernActive || isPiccadillyActive),
        })}
      >
        <StationIcon
          x={536.7}
          y={457.3}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={135}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.LeicesterSquare }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.LeicesterSquare}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !(isCentralActive || isPiccadillyActive),
        })}
      >
        <StationIcon
          x={561.3}
          y={432.7}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={135}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.Holborn }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.Holborn}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !(isCentralActive || isBakerlooActive || isVictoriaActive),
        })}
      >
        <StationIcon
          x={496.1}
          y={432.7}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={135}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.OxfordCircus }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.OxfordCircus}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !(
            isMetropolitanActive ||
            isCircleActive ||
            isHammersmithCityActive
          ),
        })}
      >
        <StationIcon
          x={525.6}
          y={381.35}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={180}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.EustonSquare }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.EustonSquare}
          isInterchange
        />
        <StationIcon
          x={613.6}
          y={407}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={225}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.Barbican }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.Barbican}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !(isCentralActive || isCircleActive || isDistrictActive),
        })}
      >
        <StationIcon
          x={389.6}
          y={452.1}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={45}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.NottingHillGate }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.NottingHillGate}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !(isCircleActive || isHammersmithCityActive),
        })}
      >
        <StationIcon
          x={333.15}
          y={461.5}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={270}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.WoodLane }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.WoodLane}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !(isMetropolitanActive || isPiccadillyActive),
        })}
      >
        <StationIcon
          x={111.5}
          y={230.9}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={180}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.Uxbridge }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.Uxbridge}
          isInterchange
        />
        <StationIcon
          x={131.7}
          y={230.9}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={0}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.Hillingdon }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.Hillingdon}
          isInterchange
        />
        <StationIcon
          x={148.1}
          y={230.9}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={180}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.Ickenham }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.Ickenham}
          isInterchange
        />
        <StationIcon
          x={215.15}
          y={257.0}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={225}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.RaynersLane }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.RaynersLane}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !(isBakerlooActive || isOvergroundActive),
        })}
      >
        <StationIcon
          x={320.8}
          y={226.5}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={270}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.HarrowWealdstone }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.HarrowWealdstone}
          isInterchange
        />
        <StationIcon
          x={320.8}
          y={245.9}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={90}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.Kenton }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.Kenton}
          isInterchange
        />
        <StationIcon
          x={320.8}
          y={296.9}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={270}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.WembleyCentral }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.WembleyCentral}
          isInterchange
        />
        <StationIcon
          x={320.8}
          y={323.4}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={270}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.WembleyCentral }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.WembleyCentral}
          isInterchange
        />
        <StationIcon
          x={320.8}
          y={342.2}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={90}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.QueensPark }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.QueensPark}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !(isDistrictActive || isHammersmithCityActive),
        })}
      >
        <StationIcon
          x={898.8}
          y={366.5}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={135}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.EastHam }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.EastHam}
          isInterchange
        />
        <StationIcon
          x={886.2}
          y={379.1}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={135}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.UptonPark }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.UptonPark}
          isInterchange
        />
        <StationIcon
          x={873.5}
          y={392}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={135}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.Plaistow }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.Plaistow}
          isInterchange
        />
        <StationIcon
          x={833.1}
          y={398.1}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={180}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.BromleyByBow }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.BromleyByBow}
          isInterchange
        />
        <StationIcon
          x={805.4}
          y={398.1}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={45}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.BowRoad }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.BowRoad}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !(isVictoriaActive || isPiccadillyActive),
        })}
      >
        <StationIcon
          x={676.3}
          y={277.9}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={270}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.FinsburyPark }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.FinsburyPark}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !isDLRActive,
        })}
      >
        <StationIcon
          x={732.4}
          y={467.4}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={180}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.ShadwellDLR }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.ShadwellDLR}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !isOvergroundActive,
        })}
      >
        <StationIcon
          x={722.82}
          y={477.0}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={90}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.Shadwell }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.Shadwell}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !isTramActive,
        })}
      >
        <StationIcon
          x={732.4}
          y={724.3}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={90}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.WestCroydonTram }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.WestCroydonTram}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !isOvergroundActive,
        })}
      >
        <StationIcon
          x={722.75}
          y={714.6}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={180}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.WestCroydon }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.WestCroydon}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !(isOvergroundActive || isElizabethActive),
        })}
      >
        <StationIcon
          x={954.6}
          y={230.4}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={180}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.Romford }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.Romford}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !isJubileeActive,
        })}
      >
        <StationIcon
          x={428.5}
          y={316.9}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={0}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.WestHampsteadJubilee }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.WestHampsteadJubilee}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !isOvergroundActive,
        })}
      >
        <StationIcon
          x={438.2}
          y={307.3}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={0}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.WestHampstead }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.WestHampstead}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !isOvergroundActive,
        })}
      >
        <StationIcon
          x={357.8}
          y={465.4}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={0}
          onClick={(event) => {
            dispatch(
              selectStation({ station: Station.ShepherdsBushOverground })
            );
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.ShepherdsBushOverground}
          isInterchange
        />
      </g>
      <g
        className={classNames({
          disabled: !isCentralActive,
        })}
      >
        <StationIcon
          x={357.8}
          y={452}
          strokeWidth={STROKE_WIDTH}
          rotationAngle={0}
          onClick={(event) => {
            dispatch(selectStation({ station: Station.ShepherdsBush }));
            event.stopPropagation();
          }}
          isSelected={selectedStation === Station.ShepherdsBush}
          isInterchange
        />
      </g>
      <g id="lul-jubilee_940gzzlucgt_dlr-dlr_940gzzdlcgt" data-linestop="dlr">
        <g id="lul-jubilee_940gzzdlcgt_dlr-dlr_940gzzdlcgt" data-linestop="dlr">
          <rect
            x="844.9"
            y="461.4"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -78.2822 737.1635)"
            width="11.5"
            height="3.4"
          ></rect>
          <rect
            x="845"
            y="462.4"
            transform="matrix(0.7064 -0.7078 0.7078 0.7064 -77.906 738.1476)"
            fill="#FFFFFF"
            width="11.6"
            height="1.1"
            className="white-fill"
          ></rect>
        </g>
        <g id="lul-jubilee_940gzzdlcgt_dlr-dlr_940gzzdlcgt" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M846.5,463.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C843.1,465.5,844.6,463.9,846.5,463.9z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M845.3,468.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L845.3,468.4z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M846.5,465.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C846.8,464.6,846.5,464.8,846.5,465.1z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M846.8,466l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C846.9,465.8,846.8,466,846.8,466z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
        <g id="dlr-dlr_940gzzdlcgt" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M855.1,455.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C851.7,456.8,853.2,455.3,855.1,455.3z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M853.9,459.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L853.9,459.7z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M855.2,456.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C855.4,456,855.2,456.2,855.2,456.5z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M855.4,457.3l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C855.5,457.1,855.4,457.3,855.4,457.3z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="elizabeth_910gcstmhsxr_dlr-dlr_940gzzdlcus_00000168801587651429415470000008915806282378950072_"
        data-linestop="elizabeth"
        className="disrupted"
      >
        <g
          id="elizabeth_910gcstmhsxr_dlr-dlr_940gzzdlcus"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <rect
            x="921.9"
            y="491.6"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -76.074 802.9266)"
            width="18.6"
            height="3.4"
          ></rect>
          <rect
            x="921.8"
            y="493.1"
            transform="matrix(0.7064 -0.7078 0.7078 0.7064 -76.1562 803.7858)"
            fill="#FFFFFF"
            width="17.9"
            height="1.1"
            className="white-fill"
          ></rect>
        </g>
        <g
          id="elizabeth_910gcstmhsxr"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M924.7,496.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C921.3,497.9,922.8,496.4,924.7,496.4z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M923.6,500.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L923.6,500.8z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M924.8,497.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C925,497,924.8,497.3,924.8,497.5z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M925.1,498.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C925.1,498.2,925.1,498.4,925.1,498.4z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
        <g id="dlr-dlr_940gzzdlcus" data-linestop="dlr">
          <g>
            <path
              fill="#1C3F94"
              d="M937.5,483.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C934,485.2,935.6,483.7,937.5,483.7z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M936.3,488.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L936.3,488.1z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M937.5,484.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C937.7,484.3,937.5,484.5,937.5,484.8z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M937.8,485.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C937.9,485.5,937.8,485.7,937.8,485.7z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-piccadilly_940gzzluhr5_elizabeth_910ghtrwtm5_00000149362838546003164910000001842755586547195552_"
        data-linestop="elizabeth"
        className="disrupted"
      >
        <g
          id="lul-piccadilly_940gzzluhr5_elizabeth_910ghtrwtm5_00000078014929324030536680000005873497618727625631_"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <g
            id="lul-piccadilly_940gzzluhr5_elizabeth_910ghtrwtm5_00000014618355497761905610000013602637054459153041_"
            data-linestop="elizabeth"
            className="disrupted"
          >
            <path d="M86.7,621.8l-2.8,0c-0.6-1-1.7-1.7-3-1.7c-1.9,0-3.4,1.5-3.4,3.4c0,1.9,1.5,3.4,3.4,3.4c1.3,0,2.4-0.7,3-1.7h2.8 c0.6,1,1.7,1.7,3,1.7c1.9,0,3.4-1.5,3.4-3.4c0-1.9-1.5-3.4-3.4-3.4C88.4,620.1,87.3,620.8,86.7,621.8z"></path>
          </g>
          <path
            id="lul-piccadilly_940gzzluhr5_elizabeth_910ghtrwtm5_00000173131550721900110730000013613711323293451192_"
            fill="#FFFFFF"
            d=" M89.7,621.2c1.3,0,2.3,1,2.3,2.3c0,1.3-1,2.3-2.3,2.3c-1.1,0-1.9-0.7-2.2-1.7h-4.3c-0.3,1-1.1,1.7-2.2,1.7 c-1.3,0-2.3-1-2.3-2.3c0-1.3,1-2.3,2.3-2.3c1.1,0,1.9,0.7,2.1,1.7l4.4,0C87.8,622,88.6,621.2,89.7,621.2z"
            className="disrupted"
            data-linestop="elizabeth"
          ></path>
        </g>
        <path
          id="elizabeth_910ghtrwtm5_00000150061442222415137120000009733417874523069082_"
          d="M83.4,625.9 c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0C84.7,622.4,84.7,624.6,83.4,625.9z"
          data-linestop="elizabeth"
          className="disrupted"
        ></path>
        <g
          id="910ghtrwtm5_00000037656732878293708780000012499144185061949091_"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M80.9,620.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C77.5,621.6,79.1,620.1,80.9,620.1z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M79.8,624.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L79.8,624.5z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M81,621.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C81.2,620.7,81,621,81,621.2z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M81.3,622.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C81.4,621.9,81.3,622.1,81.3,622.1z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-piccadilly_940gzzluhr4_elizabeth_910ghtrwtm4_00000059309422367344775850000003743545294023787932_"
        data-linestop="elizabeth"
        className="disrupted"
      >
        <path d="M115,620.2l-2.3-2.3c0.3-1.1,0-2.4-0.9-3.3c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8c0.9,0.9,2.2,1.2,3.3,0.9 l2.3,2.3c-0.3,1.1,0,2.4,0.9,3.3c1.3,1.3,3.5,1.3,4.8,0c1.3-1.3,1.3-3.5,0-4.8C117.4,620.2,116.1,619.9,115,620.2z"></path>
      </g>
      <path
        id="lul-piccadilly_940gzzluhr4_elizabeth_910ghtrwtm4_00000158029076919608969160000009269617798270487228_"
        fill="#FFFFFF"
        d=" M117.5,621.9c0.9,0.9,0.9,2.3,0,3.2c-0.9,0.9-2.3,0.9-3.2,0c-0.8-0.8-0.9-1.9-0.3-2.8l-3.3-3.3c-0.9,0.5-2,0.4-2.8-0.3 c-0.9-0.9-0.9-2.3,0-3.2c0.9-0.9,2.3-0.9,3.2,0c0.8,0.8,0.8,1.8,0.3,2.7l3.4,3.4C115.6,621,116.7,621.1,117.5,621.9z"
        className="disrupted"
        data-linestop="elizabeth"
      ></path>
      <path
        id="lul-piccadilly_940gzzluhr4_elizabeth_910ghtrwtm4_00000029027531691661592270000009328999926215414702_"
        d=" M111.8,619.5c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0C113.2,616,113.2,618.1,111.8,619.5z"
        data-linestop="elizabeth"
        className="disrupted"
      ></path>
      <path
        id="lul-piccadilly_940gzzluhr4_elizabeth_910ghtrwtm4_00000036953195358606936150000012859471586082516909_"
        d=" M118.3,625.9c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0C119.6,622.4,119.6,624.6,118.3,625.9z"
        data-linestop="elizabeth"
        className="disrupted"
      ></path>
      <g
        id="940gzzluhr4_00000034775013943526548130000014797609883795056296_"
        data-linestop="piccadilly"
      >
        <g>
          <path
            fill="#1C3F94"
            d="M115.9,620.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C112.4,621.6,114,620.1,115.9,620.1z"
            className="blue-fill"
          />
        </g>
        <g>
          <g>
            <path
              fill="#FFFFFF"
              d="M114.7,624.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L114.7,624.5z"
              className="white-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M115.9,621.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C116.1,620.7,115.9,621,115.9,621.2z"
              className="white-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M116.2,622.1l-0.1,0.4H115c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C116.3,621.9,116.2,622.1,116.2,622.1z"
              className="white-fill"
            ></path>
          </g>
        </g>
      </g>
      <g
        id="910ghtrwtm4_00000126323413272260993400000017929170403298411409_"
        data-linestop="elizabeth"
        className="disrupted"
      >
        <g>
          <path
            fill="#1C3F94"
            d="M109.4,613.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C106,615.2,107.5,613.6,109.4,613.6z"
            className="blue-fill"
          />
        </g>
        <g>
          <g>
            <path
              fill="#FFFFFF"
              d="M108.3,618.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L108.3,618.1z"
              className="white-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M109.5,614.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C109.7,614.3,109.5,614.5,109.5,614.8z"
              className="white-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M109.7,615.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C109.8,615.5,109.7,615.7,109.7,615.7z"
              className="white-fill"
            ></path>
          </g>
        </g>
      </g>
      <g
        id="lul-piccadilly_940gzzluhrc_elizabeth_910ghtrwapt_00000149344300376486089890000002884273455996891070_"
        data-linestop="elizabeth"
        className="disrupted"
      >
        <g
          id="lul-piccadilly_940gzzluhrc_elizabeth_910ghtrwapt_00000120548295675542284920000011875538917579830429_"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <g
            id="lul-piccadilly_940gzzluhrc_elizabeth_910ghtrwapt_00000004537184692355528490000004962433620809017770_"
            data-linestop="elizabeth"
            className="disrupted"
          >
            <path d="M114.7,575.2l-2-2c0.3-1.1,0-2.4-0.9-3.3c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8c0.9,0.9,2.2,1.2,3.3,0.9l2,2 c-0.3,1.1,0,2.4,0.9,3.3c1.3,1.3,3.5,1.3,4.8,0c1.3-1.3,1.3-3.5,0-4.8C117.1,575.2,115.9,574.9,114.7,575.2z"></path>
          </g>
          <path
            id="lul-piccadilly_940gzzluhrc_elizabeth_910ghtrwapt_00000145039495711012629260000006113342584314159801_"
            d=" M118,580.9c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0C119.4,577.4,119.4,579.6,118,580.9z"
            data-linestop="elizabeth"
            className="disrupted"
          ></path>
          <path
            id="lul-piccadilly_940gzzluhrc_elizabeth_910ghtrwapt_00000101063838723100257770000010991752183934185652_"
            d=" M111.9,574.7c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0C113.2,571.3,113.2,573.4,111.9,574.7z"
            data-linestop="elizabeth"
            className="disrupted"
          ></path>
          <path
            id="lul-piccadilly_940gzzluhrc_elizabeth_910ghtrwapt_00000047058929554826077510000015314787307191773063_"
            fill="#FFFFFF"
            d=" M117.2,576.9c0.9,0.9,0.9,2.3,0,3.2c-0.9,0.9-2.3,0.9-3.2,0c-0.8-0.8-0.9-1.9-0.3-2.8l-3-3c-0.9,0.5-2,0.4-2.8-0.3 c-0.9-0.9-0.9-2.3,0-3.2c0.9-0.9,2.3-0.9,3.2,0c0.8,0.8,0.8,1.8,0.3,2.7l3.1,3.1C115.3,576,116.5,576.1,117.2,576.9z"
            className="disrupted"
            data-linestop="elizabeth"
          ></path>
        </g>
        <g
          id="lul-piccadilly_940gzzluhrc_00000013871150955143521600000003715018517597852300_"
          data-linestop="piccadilly"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M115.6,575.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C112.2,576.6,113.7,575.1,115.6,575.1z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M114.5,579.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L114.5,579.5z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M115.7,576.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C115.9,575.7,115.7,575.9,115.7,576.2z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M115.9,577.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C116,576.9,115.9,577.1,115.9,577.1z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
        <g
          id="elizabeth_910ghtrwapt_00000138535925763651629230000014893195903929529479_"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M109.5,568.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C106.1,570.4,107.6,568.9,109.5,568.9z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M108.3,573.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L108.3,573.3z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M109.5,570.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C109.7,569.6,109.5,569.8,109.5,570.1z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M109.8,571l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C109.9,570.7,109.8,571,109.8,571z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-central_lul-district_lul-hammersmith-city_940gzzlumed"
        data-linestop="hammersmith-city"
      >
        <path
          id="lul-central_lul-district_lul-hammersmith-city_940gzzlumed"
          d="M776.6,394.8v-0.9c1-0.6,1.7-1.7,1.7-3 c0-1.9-1.5-3.4-3.4-3.4c-1.9,0-3.4,1.5-3.4,3.4c0,1.3,0.7,2.4,1.7,3v0.9c-1,0.6-1.7,1.7-1.7,3c0,1.9,1.5,3.4,3.4,3.4 c1.9,0,3.4-1.5,3.4-3.4C778.3,396.5,777.6,395.4,776.6,394.8z"
          data-linestop="hammersmith-city"
        ></path>
        <path
          id="lul-central_940gzzlumed"
          d="M774.9,394.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4c1.9,0,3.4,1.5,3.4,3.4 C778.3,392.9,776.7,394.4,774.9,394.4z"
          data-linestop="hammersmith-city"
        ></path>
        <path
          id="lul-district_lul-hammersmith-city_940gzzlumed"
          d="M774.9,401.2c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4c1.9,0,3.4,1.5,3.4,3.4C778.3,399.7,776.7,401.2,774.9,401.2z"
          data-linestop="hammersmith-city"
        ></path>
        <g
          id="lul-central_lul-district_lul-hammersmith-city_940gzzlumed"
          data-linestop="hammersmith-city"
        >
          <path
            fill="#FFFFFF"
            d="M777.1,397.8c0,1.3-1,2.3-2.3,2.3c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.7-1.9,1.7-2.2v-2.4 c-1-0.3-1.7-1.1-1.7-2.2c0-1.3,1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3c0,1.1-0.7,1.9-1.7,2.2v2.4 C776.4,395.8,777.1,396.7,777.1,397.8z"
            className="white-fill"
          ></path>
        </g>
      </g>
      <g
        id="lul-circle_lul-district_lul-hammersmith-city_940gzzluerc"
        data-linestop="hammersmith-city"
      >
        <path
          id="lul-circle_lul-hammersmith-city_940gzzluerc"
          d="M420.4,380.1c0,1.9-1.5,3.4-3.4,3.4 c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C418.9,376.7,420.4,378.2,420.4,380.1z"
          data-linestop="hammersmith-city"
        ></path>
        <path
          id="lul-circle_lul-district_940gzzluerc"
          d="M420.4,386.1c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4C418.9,382.7,420.4,384.2,420.4,386.1z"
          data-linestop="hammersmith-city"
        ></path>
        <path
          id="lul-circle_lul-district_lul-hammersmith-city_940gzzluerc"
          fill="#FFFFFF"
          d="M414.7,380.1 c0-1.3,1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3c0,1.1-0.7,2-1.7,2.2v1.6c1,0.3,1.7,1.1,1.7,2.2c0,1.3-1,2.3-2.3,2.3 c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.7-1.9,1.7-2.2v-1.6C415.4,382.1,414.7,381.2,414.7,380.1z"
          className="white-fill"
          data-linestop="hammersmith-city"
        ></path>
      </g>
      <g
        id="lul-circle_lul-district_lul-piccadilly_940gzzlusks"
        data-linestop="piccadilly"
      >
        <path
          id="lul-circle_lul-district_lul-piccadilly_940gzzlusks"
          d="M420.1,509.2v1.4v0c-0.5,0.3-0.9,0.7-1.2,1.2 c-0.3,0.5-0.5,1.1-0.5,1.7c0,0.9,0.4,1.8,1,2.4c0.6,0.6,1.5,1,2.4,1c0.9,0,1.8-0.4,2.4-1c0.6-0.6,1-1.5,1-2.4 c0-0.6-0.2-1.2-0.5-1.7c-0.3-0.5-0.7-0.9-1.2-1.2v0v-1.4c0.5-0.3,0.9-0.7,1.2-1.2c0.3-0.5,0.5-1.1,0.5-1.7c0-0.9-0.4-1.8-1-2.4 c-0.6-0.6-1.5-1-2.4-1c-0.9,0-1.8,0.4-2.4,1c-0.6,0.6-1,1.5-1,2.4c0,0.6,0.2,1.2,0.5,1.7C419.2,508.5,419.6,508.9,420.1,509.2z"
          data-linestop="piccadilly"
        ></path>
        <path
          id="lul-piccadilly_940gzzlusks"
          d="M425.2,506.2c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4C423.7,502.8,425.2,504.3,425.2,506.2z"
          data-linestop="piccadilly"
        ></path>
        <path
          id="lul-circle_lul-district_940gzzlusks"
          d="M425.2,513.5c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4C423.7,510.1,425.2,511.6,425.2,513.5z"
          data-linestop="piccadilly"
        ></path>
        <path
          id="lul-circle_lul-district_lul-piccadilly_940gzzlusks"
          fill="#FFFFFF"
          d="M419.6,506.2 c0-1.3,1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3c0,1.1-0.7,1.9-1.7,2.2v2.9c1,0.3,1.7,1.1,1.7,2.2c0,1.3-1,2.3-2.3,2.3 c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.7-1.9,1.7-2.2v-2.8C420.3,508.2,419.6,507.3,419.6,506.2z"
          className="white-fill"
          data-linestop="piccadilly"
        ></path>
      </g>
      <g
        id="lul-district_lul-piccadilly_940gzzlubsc"
        data-linestop="piccadilly"
      >
        <path
          id="lul-circle_lul-district_lul-piccadilly_940gzzlusks_00000021824094401893789470000006741712989759740597_"
          d=" M349.6,509.2v1.4v0c-0.5,0.3-0.9,0.7-1.2,1.2c-0.3,0.5-0.5,1.1-0.5,1.7c0,0.9,0.4,1.8,1,2.4c0.6,0.6,1.5,1,2.4,1 c0.9,0,1.8-0.4,2.4-1c0.6-0.6,1-1.5,1-2.4c0-0.6-0.2-1.2-0.5-1.7c-0.3-0.5-0.7-0.9-1.2-1.2v0v-1.4c0.5-0.3,0.9-0.7,1.2-1.2 c0.3-0.5,0.5-1.1,0.5-1.7c0-0.9-0.4-1.8-1-2.4c-0.6-0.6-1.5-1-2.4-1c-0.9,0-1.8,0.4-2.4,1c-0.6,0.6-1,1.5-1,2.4 c0,0.6,0.2,1.2,0.5,1.7C348.7,508.5,349.1,508.9,349.6,509.2z"
          data-linestop="piccadilly"
        ></path>
        <path
          id="lul-piccadilly_940gzzlusks_00000119817672400097234200000005937103026561876915_"
          d="M354.7,506.2 c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C353.2,502.8,354.7,504.3,354.7,506.2z"
          data-linestop="piccadilly"
        ></path>
        <path
          id="lul-circle_lul-district_940gzzlusks_00000144303855607273439550000014895658307228452006_"
          d="M354.7,513.5 c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C353.2,510.1,354.7,511.6,354.7,513.5z"
          data-linestop="piccadilly"
        ></path>
        <path
          id="lul-circle_lul-district_lul-piccadilly_940gzzlusks_00000052106595253777495130000017716480090682722701_"
          fill="#FFFFFF"
          d=" M349.1,506.2c0-1.3,1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3c0,1.1-0.7,1.9-1.7,2.2v2.9c1,0.3,1.7,1.1,1.7,2.2c0,1.3-1,2.3-2.3,2.3 c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.7-1.9,1.7-2.2v-2.8C349.8,508.2,349.1,507.3,349.1,506.2z"
          className="white-fill"
          data-linestop="piccadilly"
        ></path>
      </g>
      <g
        id="lul-district_lul-piccadilly_940gzzlutng_00000009580883716038490490000007757644784361905314_"
        data-linestop="piccadilly"
        className="disrupted"
      >
        <path
          id="lul-district_lul-piccadilly_940gzzlutng"
          d="M269.5,509.2v1.4v0c-0.5,0.3-0.9,0.7-1.2,1.2 c-0.3,0.5-0.5,1.1-0.5,1.7c0,0.9,0.4,1.8,1,2.4c0.6,0.6,1.5,1,2.4,1c0.9,0,1.8-0.4,2.4-1c0.6-0.6,1-1.5,1-2.4 c0-0.6-0.2-1.2-0.5-1.7c-0.3-0.5-0.7-0.9-1.2-1.2v0v-1.4c0.5-0.3,0.9-0.7,1.2-1.2c0.3-0.5,0.5-1.1,0.5-1.7c0-0.9-0.4-1.8-1-2.4 c-0.6-0.6-1.5-1-2.4-1c-0.9,0-1.8,0.4-2.4,1c-0.6,0.6-1,1.5-1,2.4c0,0.6,0.2,1.2,0.5,1.7C268.6,508.5,269,508.9,269.5,509.2z"
          data-linestop="piccadilly"
          className="disrupted"
        ></path>
        <path
          id="lul-piccadilly_940gzzlutng"
          d="M274.6,506.2c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4 C273.1,502.8,274.6,504.3,274.6,506.2z"
          data-linestop="piccadilly"
          className="disrupted"
        ></path>
        <path
          id="lul-district_940gzzlutng"
          d="M274.6,513.5c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4 C273.1,510.1,274.6,511.6,274.6,513.5z"
          data-linestop="piccadilly"
          className="disrupted"
        ></path>
        <path
          id="lul-district_lul-piccadilly_940gzzlutng_00000123437731352120184220000000274602920655343496_"
          fill="#FFFFFF"
          d=" M268.9,506.2c0-1.3,1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3c0,1.1-0.7,1.9-1.7,2.2v2.9c1,0.3,1.7,1.1,1.7,2.2c0,1.3-1,2.3-2.3,2.3 c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.7-1.9,1.7-2.2v-2.8C269.7,508.2,268.9,507.3,268.9,506.2z"
          className="disrupted"
          data-linestop="piccadilly"
        ></path>
      </g>
      <g
        id="lul-jubilee_lul-metropolitan_940gzzluwyp"
        data-linestop="metropolitan"
      >
        <g
          id="lul-jubilee_lul-metropolitan_940gzzluwyp"
          data-linestop="metropolitan"
        >
          <rect
            x="363.2"
            y="266.7"
            transform="matrix(0.7072 -0.707 0.707 0.7072 -81.3474 340.3155)"
            width="13.9"
            height="3.4"
          ></rect>
          <rect
            x="363"
            y="267.8"
            transform="matrix(0.7066 -0.7076 0.7076 0.7066 -81.2822 340.6965)"
            fill="#FFFFFF"
            width="14.4"
            height="1.1"
            className="white-fill"
          ></rect>
        </g>
        <g id="lul-metropolitan_940gzzluwyp" data-linestop="metropolitan">
          <g>
            <path
              fill="#1C3F94"
              d="M365.4,269.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C362,271.3,363.5,269.8,365.4,269.8z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M364.2,274.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L364.2,274.2z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M365.4,270.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C365.6,270.4,365.4,270.6,365.4,270.9z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M365.7,271.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C365.8,271.6,365.7,271.8,365.7,271.8z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
        <g id="lul-jubilee_940gzzluwyp" data-linestop="metropolitan">
          <g>
            <path
              fill="#1C3F94"
              d="M374.9,260.2c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C371.5,261.7,373.1,260.2,374.9,260.2z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M373.8,264.6c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L373.8,264.6z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M375,261.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C375.2,260.8,375,261.1,375,261.3z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M375.3,262.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C375.3,262,375.3,262.2,375.3,262.2z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="910ggosplok"
        data-linestop="london-overground"
        className="disrupted"
      >
        <g
          id="910ggosplok"
          data-linestop="london-overground"
          className="disrupted"
        >
          <rect x="542.6" y="297.4" width="3.4" height="10.1"></rect>
          <rect
            x="543.7"
            y="297.2"
            fill="#FFFFFF"
            width="1.1"
            height="10.5"
            className="white-fill"
          ></rect>
        </g>
        <g
          id="910ggosplok"
          data-linestop="london-overground"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M544.4,293.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C541,295,542.5,293.5,544.4,293.5z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M544.4,299.9c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C547.4,298.6,546.1,299.9,544.4,299.9L544.4,299.9z"
              className="white-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M543.2,297.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L543.2,297.9z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M544.4,294.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C544.6,294.1,544.4,294.3,544.4,294.6z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M544.7,295.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C544.8,295.3,544.7,295.5,544.7,295.5z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
        <g
          id="910ggosplok"
          data-linestop="london-overground"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M544.3,304c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C540.9,305.6,542.4,304,544.3,304z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M544.3,310.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C547.4,309.1,546,310.5,544.3,310.5L544.3,310.5z"
              className="white-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M543.1,308.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L543.1,308.4z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M544.4,305.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C544.6,304.7,544.4,304.9,544.4,305.2z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M544.6,306.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C544.7,305.8,544.6,306.1,544.6,306.1z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-northern-lul-victoria_940gzzlueus_raillo-overground_910geuston"
        data-linestop="london-overground"
        className="disrupted"
      >
        <path
          id="lul-northern_940gzzlueus_00000093896651685022801130000007069435383968267432_"
          d="M545.8,360.2 c0.6,1,1.7,1.7,3,1.7c1.3,0,2.4-0.7,3-1.7h3.5c0.6,1,1.7,1.7,3,1.7c1.9,0,3.4-1.5,3.4-3.4c0-1.9-1.5-3.4-3.4-3.4 c-1.3,0-2.4,0.7-3,1.7l-3.5,0c-0.6-1-1.7-1.7-3-1.7s-2.4,0.7-3,1.7"
          data-linestop="victoria"
        ></path>
        <g
          id="lul-northern_raillo-overground_910geuston_00000026875374970674497940000003072912142307069884_"
          data-linestop="london-overground"
          className="disrupted"
        >
          <path
            id="lul-bakerloo_lul-circle_lul-hammersmith-city_lul-metropolitan_lul-jubilee_940gzzlubst_00000066508291389052434790000005545803040632692411_"
            d=" M549.6,361.8l8.2,8.5c-0.3,1.1,0,2.4,0.9,3.3c1.3,1.3,3.5,1.3,4.8,0c1.3-1.3,1.3-3.5,0-4.8c-0.9-0.9-2.2-1.2-3.3-0.9l-8.2-8.5 c0.3-1.1,0-2.4-0.9-3.3c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8C547.2,361.8,548.5,362.1,549.6,361.8z"
            data-linestop="metropolitan"
          ></path>
          <path
            id="lul-bakerloo_lul-circle_lul-hammersmith-city_lul-metropolitan_lul-jubilee_940gzzlubst_00000080182853723862194130000012339268900788795035_"
            fill="#FFFFFF"
            d=" M547.1,360.1c-0.9-0.9-0.9-2.3,0-3.2c0.9-0.9,2.3-0.9,3.2,0c0.8,0.8,0.9,1.9,0.3,2.8l9.3,9.6c0.9-0.5,2-0.4,2.8,0.3 c0.9,0.9,0.9,2.3,0,3.2c-0.9,0.9-2.3,0.9-3.2,0c-0.8-0.8-0.9-1.9-0.3-2.8l-9.3-9.6C549,360.9,547.9,360.8,547.1,360.1z"
            className="white-fill"
            data-linestop="metropolitan"
          ></path>
        </g>
        <g id="lul-northern_lul-victoria_940gzzlueus" data-linestop="victoria">
          <path
            id="lul-bakerloo_lul-circle_lul-hammersmith-city_lul-metropolitan_lul-jubilee_940gzzlubst_00000093895344159705773860000016119273285633981077_"
            d=" M545.5,359.4l-6.5,6.2c-1.1-0.3-2.4,0-3.3,0.9c-1.3,1.3-1.3,3.5,0,4.8c1.3,1.3,3.5,1.3,4.8,0c0.9-0.9,1.2-2.2,0.9-3.3l6.5-6.3 c1.1,0.3,2.4,0,3.3-0.9c1.3-1.3,1.3-3.5,0-4.8c-1.3-1.3-3.5-1.3-4.8,0C545.4,357,545.2,358.3,545.5,359.4z"
            data-linestop="metropolitan"
          ></path>
          <path
            id="lul-bakerloo_lul-circle_lul-hammersmith-city_lul-metropolitan_lul-jubilee_940gzzlubst_00000106148523383886668380000014840795355178383789_"
            fill="#FFFFFF"
            d=" M547.1,356.9c0.9-0.9,2.3-0.9,3.2,0c0.9,0.9,0.9,2.3,0,3.2c-0.8,0.8-1.9,0.9-2.8,0.3l-7.6,7.3c0.5,0.9,0.4,2-0.3,2.8 c-0.9,0.9-2.3,0.9-3.2,0c-0.9-0.9-0.9-2.3,0-3.2c0.8-0.8,1.9-0.9,2.8-0.3l7.6-7.3C546.3,358.8,546.4,357.7,547.1,356.9z"
            className="white-fill"
            data-linestop="metropolitan"
          ></path>
          <g
            id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzluksx_00000096744491097691544550000006075267222580176042_"
            data-linestop="piccadilly"
          >
            <polygon
              fill="#FFFFFF"
              points="549.8,360.3 550.6,359.5 560.4,369.6 559.6,370.4 "
              className="white-fill"
            ></polygon>
          </g>
        </g>
        <path
          id="lul-northern_940gzzlueus"
          fill="#FFFFFF"
          d="M546.5,357.9c0.3-1,1.1-1.7,2.2-1.7c1.1,0,1.9,0.7,2.2,1.7l5,0 c0.3-1,1.1-1.7,2.2-1.7c1.3,0,2.3,1,2.3,2.3c0,1.3-1,2.3-2.3,2.3c-1.1,0-1.9-0.7-2.2-1.7h-5c-0.3,1-1.1,1.7-2.2,1.7 c-1.1,0-1.9-0.7-2.2-1.7"
          className="white-fill"
          data-linestop="victoria"
        ></path>
        <g
          id="raillo-overground_910geuston"
          data-linestop="london-overground"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M538,365.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C534.6,367,536.2,365.5,538,365.5z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M538,371.9c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C541.1,370.6,539.7,371.9,538,371.9L538,371.9z"
              className="white-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M536.9,369.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L536.9,369.9z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M538.1,366.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C538.3,366.1,538.1,366.3,538.1,366.6z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M538.4,367.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C538.4,367.3,538.4,367.5,538.4,367.5z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-district_940gzzlukwg_raillo-overground_910gkewgrdn_00000054234956178183425730000000217435620776502962_"
        data-linestop="london-overground"
        className="disrupted"
      >
        <path
          id="lul-district_940gzzlukwg_raillo-overground_910gkewgrdn_00000002353800536366605990000014991712117078117522_"
          d=" M202.5,562.8l-1.4-1.4c0.3-1.1,0-2.4-0.9-3.3c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8c0.9,0.9,2.2,1.2,3.3,0.9l1.4,1.3 c-0.3,1.1,0,2.4,0.9,3.3c1.3,1.3,3.5,1.3,4.8,0c1.3-1.3,1.3-3.5,0-4.8C204.9,562.7,203.7,562.5,202.5,562.8z"
          data-linestop="london-overground"
          className="disrupted"
        ></path>
        <path
          id="lul-district_940gzzlukwg_raillo-overground_910gkewgrdn_00000000203356711494767600000007438619129161097631_"
          fill="#FFFFFF"
          d=" M205,564.4c0.9,0.9,0.9,2.3,0,3.2c-0.9,0.9-2.3,0.9-3.2,0c-0.7-0.7-0.9-1.9-0.3-2.8l-2.4-2.4c-0.9,0.5-2,0.4-2.8-0.3 c-0.9-0.9-0.9-2.3,0-3.2c0.9-0.9,2.3-0.9,3.2,0c0.7,0.7,0.9,1.9,0.3,2.8l2.4,2.4C203.1,563.6,204.3,563.7,205,564.4z"
          className="disrupted"
          data-linestop="london-overground"
        ></path>
        <g
          id="raillo-overground_910gkewgrdn_00000057110952314244907590000004864827913412181427_"
          data-linestop="london-overground"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M197.9,557c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C194.5,558.6,196,557,197.9,557z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M197.9,563.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C201,562.1,199.6,563.5,197.9,563.5L197.9,563.5z"
              className="white-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M196.8,561.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L196.8,561.4z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M198,558.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C198.2,557.7,198,557.9,198,558.2z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M198.2,559.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C198.3,558.8,198.2,559.1,198.2,559.1z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
        <g
          id="lul-district_940gzzlukwg_00000021825376879826962170000003775130708366773163_"
          data-linestop="district"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M203.4,562.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C200,564.2,201.5,562.6,203.4,562.6z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M203.4,569.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C206.5,567.7,205.1,569.1,203.4,569.1L203.4,569.1z"
              className="white-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M202.3,567c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L202.3,567z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M203.5,563.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C203.7,563.3,203.5,563.5,203.5,563.8z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M203.8,564.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C203.8,564.4,203.8,564.7,203.8,564.7z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="940gzzluhr5_00000172421999555196979210000009095895067757670539_"
        data-linestop="piccadilly"
      >
        <g>
          <path
            fill="#1C3F94"
            d="M89.7,620.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C86.3,621.6,87.8,620.1,89.7,620.1z"
            className="blue-fill"
          ></path>
          <path
            fill="#FFFFFF"
            d="M89.7,626.6c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C92.8,625.2,91.4,626.6,89.7,626.6L89.7,626.6z"
            className="white-fill"
          ></path>
        </g>
        <g>
          <g>
            <path
              fill="#1C3F94"
              d="M88.5,624.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L88.5,624.5z"
              className="blue-fill"
            ></path>
            <path
              fill="#1C3F94"
              d="M89.8,621.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C90,620.7,89.8,621,89.8,621.2z"
              className="blue-fill"
            ></path>
            <path
              fill="#1C3F94"
              d="M90,622.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C90.1,621.9,90,622.1,90,622.1z"
              className="blue-fill"
            ></path>
          </g>
        </g>
      </g>
      <g
        id="lul-district_940gzzluwbn_raillo-overground_910gwbrmptn"
        data-linestop="london-overground"
        className="disrupted"
      >
        <g
          id="lul-district_940gzzluwbn_raillo-overground_910gwbrmptn"
          data-linestop="london-overground"
          className="disrupted"
        >
          <path d="M373.7,540.9h-1.3c-0.3-0.5-0.7-0.9-1.2-1.2c-0.5-0.3-1.1-0.5-1.7-0.5c-0.9,0-1.8,0.4-2.4,1c-0.6,0.6-1,1.5-1,2.4 c0,0.9,0.4,1.8,1,2.4c0.6,0.6,1.5,1,2.4,1c0.6,0,1.2-0.2,1.7-0.5c0.5-0.3,0.9-0.7,1.2-1.2h1.3c0.3,0.5,0.7,0.9,1.2,1.2 c0.5,0.3,1.1,0.5,1.7,0.5c0.9,0,1.8-0.4,2.4-1c0.6-0.6,1-1.5,1-2.4c0-0.9-0.4-1.8-1-2.4c-0.6-0.6-1.5-1-2.4-1 c-0.6,0-1.2,0.2-1.7,0.5C374.4,540,374,540.4,373.7,540.9z"></path>
        </g>
        <path
          id="lul-district_940gzzluwbn"
          d="M380.1,542.6c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4C378.5,539.2,380.1,540.7,380.1,542.6z"
          data-linestop="district"
        ></path>
        <path
          id="lul-district_940gzzluwbn_raillo-overground_910gwbrmptn"
          fill="#FFFFFF"
          d="M376.7,540.3 c1.3,0,2.3,1,2.3,2.3c0,1.3-1,2.3-2.3,2.3c-1.1,0-1.9-0.7-2.2-1.7h-2.8c-0.3,1-1.1,1.7-2.2,1.7c-1.3,0-2.3-1-2.3-2.3 c0-1.3,1-2.3,2.3-2.3c1.1,0,1.9,0.7,2.2,1.7h2.8C374.7,541.1,375.6,540.3,376.7,540.3z"
          className="disrupted"
          data-linestop="london-overground"
        ></path>
        <g
          id="raillo-overground_910gwbrmptn"
          data-linestop="london-overground"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M369.4,539.2c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C366,540.7,367.5,539.2,369.4,539.2z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M369.4,545.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C372.5,544.3,371.1,545.7,369.4,545.7L369.4,545.7z"
              className="white-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M368.3,543.6c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L368.3,543.6z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M369.5,540.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C369.7,539.8,369.5,540.1,369.5,540.3z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M369.7,541.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C369.8,541,369.7,541.2,369.7,541.2z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-district_lul-piccadilly_940gzzluect"
        data-linestop="piccadilly"
        className="disrupted"
      >
        <g
          id="lul-piccadilly_940gzzluect"
          data-linestop="piccadilly"
          className="disrupted"
        >
          <rect x="380.9" y="505.5" width="3.4" height="8.9"></rect>
          <rect
            x="382"
            y="505.4"
            fill="#FFFFFF"
            width="1.1"
            height="9.3"
            className="white-fill"
          ></rect>
          <g>
            <path
              fill="#1C3F94"
              d="M382.7,502.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C379.2,504.4,380.8,502.8,382.7,502.8z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M381.5,507.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L381.5,507.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M382.7,504c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C382.9,503.5,382.7,503.7,382.7,504z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M383,504.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C383.1,504.7,383,504.9,383,504.9z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g
          id="lul-district_940gzzluect"
          data-linestop="piccadilly"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M382.7,510.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C379.2,511.6,380.8,510.1,382.7,510.1z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M381.5,514.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L381.5,514.5z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M382.7,511.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5 C382.9,510.7,382.7,510.9,382.7,511.2z"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M383,512.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C383.1,511.9,383,512.1,383,512.1z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
      </g>
      <g id="910gclphmjw" className="disrupted">
        <g id="910gclphmjw">
          <rect
            x="419.8"
            y="622.1"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -318.8939 481.2831)"
            width="3.4"
            height="6.9"
          />
          <rect
            x="421"
            y="621.9"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -318.8968 481.2895)"
            fill="#FFFFFF"
            width="1.1"
            height="7.3"
            className="white-fill"
          />
        </g>
        <g id="940gzzluwip" data-linestop="district" className="disrupted">
          <g>
            <path
              fill="#1C3F94"
              d="M425.2,625.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C421.8,627.4,423.3,625.9,425.2,625.9z"
              className="blue-fill"
            />
            <path
              fill="#1C3F94"
              d="M418.1,618.7c1.9,0,3.4,1.5,3.4,3.4s-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4S416.2,618.7,418.1,618.7 z"
              className="blue-fill"
            />
            <path
              fill="#FFFFFF"
              d="M418.1,625.2c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1S419.8,625.2,418.1,625.2 L418.1,625.2z"
              className="white-fill"
            />
          </g>
          <g>
            <path
              fill="#1C3F94"
              d="M416.9,623.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L416.9,623.1z"
              className="blue-fill"
            />
            <path
              fill="#1C3F94"
              d="M418.2,619.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C418.4,619.4,418.2,619.6,418.2,619.9z"
              className="blue-fill"
            />
            <path
              fill="#1C3F94"
              d="M418.4,620.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C418.5,620.5,418.4,620.8,418.4,620.8z"
              className="blue-fill"
            />
          </g>
        </g>
        <g
          id="940gzzluwip_00000149365339838175410630000000945048101779767228_"
          data-linestop="district"
          className="disrupted"
        >
          <g>
            <path
              fill="#FFFFFF"
              d="M425.2,632.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C428.3,631,426.9,632.3,425.2,632.3L425.2,632.3z"
              className="white-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M424.1,630.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L424.1,630.3z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M425.3,627c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C425.5,626.5,425.3,626.7,425.3,627z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M425.6,627.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H424c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C425.6,627.7,425.6,627.9,425.6,627.9z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-district_940gzzlurmd_raillo-overground_910grichmnd_00000146487770565458917670000012582350555309654201_"
        data-linestop="london-overground"
        className="disrupted"
      >
        <g
          id="lul-district_940gzzlurmd_raillo-overground_910grichmnd_00000152257397839772897430000013784180719168858517_"
          data-linestop="london-overground"
          className="disrupted"
        >
          <path
            id="lul-district_940gzzlurmd_raillo-overground_910grichmnd_00000057112127073436437980000017186121718645664438_"
            d=" M190.1,575l-1.4-1.4c0.3-1.1,0-2.4-0.9-3.3c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8c0.9,0.9,2.2,1.2,3.3,0.9l1.4,1.3 c-0.3,1.1,0,2.4,0.9,3.3c1.3,1.3,3.5,1.3,4.8,0c1.3-1.3,1.3-3.5,0-4.8C192.5,575,191.2,574.7,190.1,575z"
            data-linestop="london-overground"
            className="disrupted"
          ></path>
          <path
            id="lul-district_940gzzlurmd_raillo-overground_910grichmnd_00000024706331651687319270000012315637665590759346_"
            fill="#FFFFFF"
            d=" M192.6,576.7c0.9,0.9,0.9,2.3,0,3.2c-0.9,0.9-2.3,0.9-3.2,0c-0.7-0.7-0.9-1.9-0.3-2.8l-2.4-2.4c-0.9,0.5-2,0.4-2.8-0.3 c-0.9-0.9-0.9-2.3,0-3.2c0.9-0.9,2.3-0.9,3.2,0c0.7,0.7,0.9,1.9,0.3,2.8l2.4,2.4C190.7,575.8,191.8,575.9,192.6,576.7z"
            className="disrupted"
            data-linestop="london-overground"
          ></path>
        </g>
        <g
          id="raillo-overground_910grichmnd_00000018954085387178327600000001674712252811897729_"
          data-linestop="london-overground"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M191,574.8c1.9,0,3.4,1.5,3.4,3.4s-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4S189.1,574.8,191,574.8z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M191,581.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C194,579.9,192.6,581.3,191,581.3L191,581.3z"
              className="white-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M189.8,579.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L189.8,579.3z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M191,576c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C191.2,575.5,191,575.7,191,576z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M191.3,576.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C191.4,576.7,191.3,576.9,191.3,576.9z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
        <g
          id="lul-district_940gzzlurmd_00000078758901740854790630000009454739833897690527_"
          data-linestop="district"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M185.3,569.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C181.9,570.8,183.5,569.3,185.3,569.3z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M184.2,573.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L184.2,573.7z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M185.4,570.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C185.6,569.9,185.4,570.1,185.4,570.4z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M185.7,571.3l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C185.7,571.1,185.7,571.3,185.7,571.3z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-district_940gzzluwim_tram-tram_940gzzcrwmb"
        data-linestop="tram-tram"
        className="disrupted"
      >
        <path
          id="lul-district_940gzzluwim_tram-tram_940gzzcrwmb_00000114045825825237223490000006293086949369884809_"
          d=" M382.3,641.8l-2.4-2.4c0.3-1.1,0-2.4-0.9-3.3c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8c0.9,0.9,2.2,1.2,3.3,0.9l2.4,2.4 c-0.3,1.1,0,2.4,0.9,3.3c1.3,1.3,3.5,1.3,4.8,0c1.3-1.3,1.3-3.5,0-4.8C384.7,641.7,383.4,641.5,382.3,641.8z"
          data-linestop="tram-tram"
          className="disrupted"
        ></path>
        <path
          id="lul-district_940gzzluwim_tram-tram_940gzzcrwmb_00000060020277440741540790000014971082340318983816_"
          fill="#FFFFFF"
          d=" M384.8,643.4c0.9,0.9,0.9,2.3,0,3.2c-0.9,0.9-2.3,0.9-3.2,0c-0.7-0.7-0.9-1.9-0.3-2.8l-3.4-3.4c-0.9,0.5-2,0.4-2.8-0.3 c-0.9-0.9-0.9-2.3,0-3.2c0.9-0.9,2.3-0.9,3.2,0c0.7,0.7,0.9,1.9,0.3,2.8l3.4,3.4C382.9,642.6,384,642.7,384.8,643.4z"
          className="disrupted"
          data-linestop="tram-tram"
        ></path>
        <g
          id="940gzzcrwmb_00000075136992179952594260000013844847227741883782_"
          data-linestop="tram-tram"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M383.2,641.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C379.8,643.2,381.3,641.6,383.2,641.6z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M382,646c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L382,646z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M383.2,642.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C383.5,642.3,383.2,642.5,383.2,642.8z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M383.5,643.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C383.6,643.5,383.5,643.7,383.5,643.7z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
        <g
          id="940gzzluwim_00000087411677135273555350000009589945939532765575_"
          data-linestop="district"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M376.6,635.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C373.2,636.6,374.8,635.1,376.6,635.1z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M375.5,639.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L375.5,639.5z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M376.7,636.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C376.9,635.8,376.7,636,376.7,636.3z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M377,637.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C377,636.9,377,637.1,377,637.1z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-district_lul-piccadilly_940gzzluact_00000070115477810542033570000010027886091842632624_"
        data-linestop="piccadilly"
      >
        <rect
          x="225.8"
          y="506.9"
          transform="matrix(0.7072 -0.707 0.707 0.7072 -292.3386 311.3694)"
          width="7.9"
          height="3.4"
        ></rect>
      </g>
      <rect
        x="225.6"
        y="508"
        transform="matrix(0.707 -0.7072 0.7072 0.707 -292.3201 311.5181)"
        fill="#FFFFFF"
        width="8.3"
        height="1.1"
        className="white-fill"
      ></rect>
      <g
        id="lul-piccadilly_940gzzluact_00000109005907067146164180000018322682685949605305_"
        data-linestop="piccadilly"
      >
        <g>
          <path
            fill="#1C3F94"
            d="M232,503c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C228.6,504.5,230.1,503,232,503z"
            className="blue-fill"
          ></path>
          <path
            fill="#FFFFFF"
            d="M232,509.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C235.1,508.1,233.7,509.5,232,509.5L232,509.5z"
            className="white-fill"
          ></path>
        </g>
        <g>
          <g>
            <path
              fill="#1C3F94"
              d="M230.9,507.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L230.9,507.4z"
              className="blue-fill"
            ></path>
            <path
              fill="#1C3F94"
              d="M232.1,504.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C232.3,503.7,232.1,503.9,232.1,504.2z"
              className="blue-fill"
            ></path>
            <path
              fill="#1C3F94"
              d="M232.3,505.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C232.4,504.8,232.3,505.1,232.3,505.1z"
              className="blue-fill"
            ></path>
          </g>
        </g>
      </g>
      <g
        id="lul-district_940gzzluact_00000109724639960220218360000005500408688510189211_"
        data-linestop="piccadilly"
      >
        <g>
          <path
            fill="#1C3F94"
            d="M225.2,509.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C221.8,511.3,223.4,509.8,225.2,509.8z"
            className="blue-fill"
          ></path>
          <path
            fill="#FFFFFF"
            d="M225.2,516.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C228.3,514.9,226.9,516.3,225.2,516.3L225.2,516.3z"
            className="white-fill"
          ></path>
        </g>
        <g>
          <g>
            <path
              fill="#1C3F94"
              d="M224.1,514.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L224.1,514.2z"
              className="blue-fill"
            ></path>
            <path
              fill="#1C3F94"
              d="M225.3,510.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C225.5,510.4,225.3,510.7,225.3,510.9z"
              className="blue-fill"
            ></path>
            <path
              fill="#1C3F94"
              d="M225.6,511.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H224c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C225.6,511.6,225.6,511.8,225.6,511.8z"
              className="blue-fill"
            ></path>
          </g>
        </g>
      </g>
      <g
        id="lul-central_lul-jubilee_940gzzlustd_dlr-dlr_910gstfd_raillo-overground_910gstfd_elizabeth_910gstfd_00000110437161234555297170000006451971415786113684_"
        data-linestop="elizabeth"
        className="disrupted"
      >
        <g
          id="lul-central_940gzzlustd_raillo-overground_910gstfd_elizabeth_910gstfd"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <rect x="837.6" y="338.4" width="7.8" height="3.4"></rect>
          <rect
            x="837.8"
            y="339.5"
            fill="#FFFFFF"
            width="7.3"
            height="1.1"
            className="white-fill"
          ></rect>
        </g>
        <g
          id="lul-jubilee_940gzzlustd_dlr-dlr_910gstfd_elizabeth_910gstfd"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <rect x="845.1" y="338.4" width="11.3" height="3.4"></rect>
          <rect
            x="845.3"
            y="339.5"
            fill="#FFFFFF"
            width="11.4"
            height="1.1"
            className="white-fill"
          ></rect>
        </g>
        <g
          id="lul-jubilee_940gzzlustd_dlr-dlr_910gstfd"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M854.8,336.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C851.4,338.1,852.9,336.6,854.8,336.6z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M853.6,341c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L853.6,341z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M854.8,337.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C855.1,337.2,854.8,337.4,854.8,337.7z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M855.1,338.6L855,339H854c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C855.2,338.4,855.1,338.6,855.1,338.6z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
        <g
          id="elizabeth_910gstfd_00000140702098347651151780000010139197747462926260_"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <g
            id="elizabeth_910gstfd_00000042716378786589182220000005141724028393487502_"
            data-linestop="elizabeth"
            className="disrupted"
          >
            <g>
              <path
                fill="#1C3F94"
                d="M845.1,336.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C841.7,338.1,843.2,336.6,845.1,336.6z"
                className="blue-fill"
              ></path>
            </g>
          </g>
          <g
            id="elizabeth_910gstfd"
            data-linestop="elizabeth"
            className="disrupted"
          >
            <g>
              <path
                fill="#FFFFFF"
                d="M845.1,343c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C848.1,341.7,846.8,343,845.1,343L845.1,343z"
                className="white-fill"
              ></path>
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M843.9,341c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L843.9,341z"
                  className="blue-fill"
                ></path>
                <path
                  fill="#1C3F94"
                  d="M845.1,337.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C845.4,337.2,845.1,337.4,845.1,337.7z"
                  className="blue-fill"
                ></path>
                <path
                  fill="#1C3F94"
                  d="M845.4,338.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4 c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C845.5,338.4,845.4,338.6,845.4,338.6z"
                  className="blue-fill"
                ></path>
              </g>
            </g>
          </g>
        </g>
        <g
          id="lul-central_940gzzlustd_elizabeth_910gstfd_00000127724676784477755770000008912478246052711817_"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <g
            id="lul-central_940gzzlustd_00000045599025173450174750000003059796661648693938_"
            data-linestop="jubilee"
          >
            <g>
              <path
                fill="#1C3F94"
                d="M837.6,336.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C834.2,338.1,835.7,336.6,837.6,336.6z"
                className="blue-fill"
              ></path>
            </g>
          </g>
          <g id="lul-central_940gzzlustd" data-linestop="jubilee">
            <g>
              <path
                fill="#FFFFFF"
                d="M837.6,343c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C840.6,341.7,839.3,343,837.6,343L837.6,343z"
                className="white-fill"
              ></path>
            </g>
            <g>
              <g>
                <path
                  fill="#1C3F94"
                  d="M836.4,341c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L836.4,341z"
                  className="blue-fill"
                ></path>
                <path
                  fill="#1C3F94"
                  d="M837.6,337.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C837.9,337.2,837.6,337.4,837.6,337.7z"
                  className="blue-fill"
                ></path>
                <path
                  fill="#1C3F94"
                  d="M837.9,338.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4 c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C838,338.4,837.9,338.6,837.9,338.6z"
                  className="blue-fill"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-district_940gzzlukoy_raillo-overground_910gkenolym"
        data-linestop="london-overground"
        className="disrupted"
      >
        <g
          id="lul-district_940gzzlukoy_raillo-overground_910gkenolym"
          data-linestop="london-overground"
          className="disrupted"
        >
          <rect x="370.3" y="482.2" width="5.1" height="3.4"></rect>
          <rect
            x="370.1"
            y="483.4"
            fill="#FFFFFF"
            width="5.6"
            height="1.1"
            className="white-fill"
          ></rect>
        </g>
        <g
          id="raillo-overground_910gkenolym"
          data-linestop="london-overground"
          className="disrupted"
        >
          <g
            id="raillo-059_940gzzlukoy"
            data-linestop="district"
            className="disrupted"
          >
            <path
              fill="#1C3F94"
              d="M369.4,480.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C366,482,367.6,480.5,369.4,480.5z"
              className="blue-fill"
            ></path>
          </g>
          <path
            id="raillo-059_940gzzlukoy"
            fill="#FFFFFF"
            d="M369.4,487c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 s3.1,1.4,3.1,3.1C372.5,485.6,371.1,487,369.4,487L369.4,487z"
            className="disrupted"
            data-linestop="district"
          ></path>
          <g
            id="raillo-059_940gzzlukoy"
            data-linestop="district"
            className="disrupted"
          >
            <g>
              <path
                fill="#1C3F94"
                d="M368.3,484.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L368.3,484.9z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M369.5,481.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C369.7,481.2,369.5,481.4,369.5,481.7z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M369.8,482.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C369.8,482.3,369.8,482.6,369.8,482.6z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
        <g
          id="lul-district_940gzzlukoy"
          data-linestop="district"
          className="disrupted"
        >
          <g
            id="lul-district_940gzzlukoy"
            data-linestop="district"
            className="disrupted"
          >
            <path
              fill="#1C3F94"
              d="M376.6,480.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C373.2,482,374.8,480.5,376.6,480.5z"
              className="blue-fill"
            ></path>
          </g>
          <path
            id="lul-district_940gzzlukoy"
            fill="#FFFFFF"
            d="M376.6,487c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 s3.1,1.4,3.1,3.1C379.7,485.6,378.3,487,376.6,487L376.6,487z"
            className="disrupted"
            data-linestop="district"
          ></path>
          <g
            id="lul-district_940gzzlukoy"
            data-linestop="district"
            className="disrupted"
          >
            <g>
              <path
                fill="#1C3F94"
                d="M375.5,484.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L375.5,484.9z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M376.7,481.7c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C376.9,481.2,376.7,481.4,376.7,481.7z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M377,482.6l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C377.1,482.3,377,482.6,377,482.6z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-bakerloo_lul-circle_lul-hammersmith-city_lul-jubilee_lul-metropolitan_940gzzlubst"
        data-linestop="metropolitan"
      >
        <path
          id="lul-bakerloo_lul-circle_lul-hammersmith-city_lul-metropolitan_lul-jubilee_940gzzlubst"
          d=" M469.8,381.7l-5.4,5.4c-1.1-0.3-2.4,0-3.3,0.9c-1.3,1.3-1.3,3.5,0,4.8c1.3,1.3,3.5,1.3,4.8,0c0.9-0.9,1.2-2.2,0.9-3.3l5.4-5.4 c1.1,0.3,2.4,0,3.3-0.9c1.3-1.3,1.3-3.5,0-4.8c-1.3-1.3-3.5-1.3-4.8,0C469.8,379.3,469.5,380.6,469.8,381.7z"
          data-linestop="metropolitan"
        ></path>
        <g
          id="lul-bakerloo_lul-jubilee_940gzzlubst"
          data-linestop="metropolitan"
        >
          <path d="M465.9,392.8c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0 C467.3,389.4,467.3,391.5,465.9,392.8z"></path>
        </g>
        <g
          id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlubst"
          data-linestop="metropolitan"
        >
          <path d="M475.5,383.3c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0 C476.8,379.8,476.8,381.9,475.5,383.3z"></path>
        </g>
        <path
          id="lul-bakerloo_lul-circle_lul-hammersmith-city_lul-metropolitan_lul-jubilee_940gzzlubst"
          fill="#FFFFFF"
          d=" M471.5,379.2c0.9-0.9,2.3-0.9,3.2,0c0.9,0.9,0.9,2.3,0,3.2c-0.8,0.8-1.9,0.9-2.8,0.3l-6.5,6.5c0.5,0.9,0.4,2-0.3,2.8 c-0.9,0.9-2.3,0.9-3.2,0c-0.9-0.9-0.9-2.3,0-3.2c0.8-0.8,1.9-0.9,2.8-0.3l6.5-6.5C470.6,381.1,470.7,380,471.5,379.2z"
          className="white-fill"
          data-linestop="metropolitan"
        ></path>
      </g>
      <g
        id="lul-bakerloo_lul-circle_lul-district_lul-northern_940gzzluemb"
        data-linestop="northern"
      >
        <path
          id="lul-bakerloo_lul-circle_lul-district_lul-northern_l940gzzluemb"
          d="M542.9,508.9L540,506 c0.3-1.1,0-2.4-0.9-3.3c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8c0.9,0.9,2.2,1.2,3.3,0.9l2.9,2.9c-0.3,1.1,0,2.4,0.9,3.3 c1.3,1.3,3.5,1.3,4.8,0c1.3-1.3,1.3-3.5,0-4.8C545.3,508.8,544,508.6,542.9,508.9z"
          data-linestop="northern"
        ></path>
        <g id="lul-northern_l940gzzluemb" data-linestop="northern">
          <path d="M534.3,507.5c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0c1.3,1.3,1.3,3.5,0,4.8 C537.8,508.8,535.6,508.8,534.3,507.5z"></path>
        </g>
        <g
          id="lul-circle_lul_bakerloo_lul_district_l940gzzluemb"
          data-linestop="northern"
        >
          <path d="M541.4,514.6c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0c1.3,1.3,1.3,3.5,0,4.8 C544.9,515.9,542.7,515.9,541.4,514.6z"></path>
        </g>
        <path
          id="lul-bakerloo_lul-circle_lul-district_lul-northern_l940gzzluemb"
          fill="#FFFFFF"
          d="M545.4,510.5 c0.9,0.9,0.9,2.3,0,3.2c-0.9,0.9-2.3,0.9-3.2,0c-0.8-0.8-0.9-1.9-0.3-2.8l-4-4c-0.9,0.5-2,0.4-2.8-0.3c-0.9-0.9-0.9-2.3,0-3.2 c0.9-0.9,2.3-0.9,3.2,0c0.8,0.8,0.9,1.9,0.3,2.8l4,4C543.5,509.7,544.6,509.8,545.4,510.5z"
          className="white-fill"
          data-linestop="northern"
        ></path>
      </g>
      <g
        id="lul-central_lul-circle_lul-district_lul-northern_lul-waterloo-city_dlr-dlr_940gzzdlbnk_940gzzlummt"
        data-linestop="dlr"
        className="disrupted"
      >
        <g
          id="lul-circle_lul-district_lul-central_lul-northern_lul-waterloo-city_940gzzlubnk_dlr-dlr_940gzzdlbnk"
          data-linestop="dlr"
          className="disrupted"
        >
          <path
            id="lul-circle_lul-district_lul-central_lul-northern_lul-waterloo-city_940gzzlubnk"
            d=" M637.9,455.6c-0.7-0.3-1.3-0.8-2-0.6l-7.9-8.2c0.4-1.1,0.1-2.4-0.7-3.3c-1.3-1.4-3.4-1.5-4.8-0.2c-1.4,1.3-1.5,3.4-0.2,4.8 c0.9,0.9,2.1,1.3,3.2,1l7.9,8.2c-0.4,1.1,0.2,2.4,1,3.3c0.9,0.9,1.8,1.3,3,1l6.7,6.6c-0.4,1.1-0.1,2.4,0.7,3.3 c1.3,1.4,3.4,1.5,4.8,0.2c1.4-1.3,1.5-3.4,0.2-4.8c-0.9-0.9-2.1-1.3-3.2-1l-6.7-6.6c0.1-0.6,0.1-1.1,0.1-1.5"
            data-linestop="waterloo-city"
            className="disrupted"
          ></path>
          <path
            id="lul-central_lul-waterloo-city_940gzzlubnk"
            d="M627.1,443.4c1.3,1.3,1.3,3.5,0,4.8c-1.3,1.3-3.5,1.3-4.8,0 c-1.3-1.3-1.3-3.5,0-4.8C623.6,442.1,625.8,442.1,627.1,443.4z"
            data-linestop="waterloo-city"
            className="disrupted"
          ></path>
          <path
            id="lul-circle_lul-district_940gzzlummt"
            d="M649.7,466.8c1.3,1.3,1.3,3.5,0,4.8c-1.3,1.3-3.5,1.3-4.8,0 c-1.3-1.3-1.3-3.5,0-4.8C646.2,465.5,648.4,465.5,649.7,466.8z"
            data-linestop="district"
            className="disrupted"
          ></path>
          <path
            fill="#FFFFFF"
            d="M638,456.5c-0.7-0.6-1.7-0.6-2.5-0.2l-8.9-9.3c0.6-0.8,0.5-2-0.2-2.8c-0.8-0.9-2.3-1-3.2-0.1 c-0.9,0.8-1,2.3-0.1,3.2c0.7,0.8,1.8,0.9,2.7,0.5l8.9,9.3c-0.6,0.8-0.5,2,0.2,2.8c0.7,0.8,1.8,0.9,2.7,0.5l7.7,7.7 c-0.5,0.8-0.5,2,0.2,2.8c0.8,0.9,2.3,1,3.2,0.1c0.9-0.8,1-2.3,0.1-3.2c-0.7-0.8-1.8-0.9-2.7-0.5l-7.7-7.7 c0.1-0.2,0.2-0.6,0.3-0.9c0.1-0.2,0-0.7-0.1-1.1c0-0.1-0.1-0.1-0.1-0.2"
            className="disrupted"
          ></path>
        </g>
        <g
          id="dlr-dlr_lul-northern_940gzzlubnk"
          data-linestop="waterloo-city"
          className="disrupted"
        >
          <g className="disrupted">
            <path
              fill="#1C3F94"
              d="M636.7,455.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C633.3,456.6,634.8,455.1,636.7,455.1z"
              className="blue-fill"
            ></path>
          </g>
          <g className="disrupted">
            <g>
              <path
                fill="#FFFFFF"
                d="M635.5,459.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L635.5,459.5z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M636.7,456.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C637,455.7,636.7,455.9,636.7,456.2z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M637,457.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C637.1,456.9,637,457.1,637,457.1z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g id="lul-northern_940gzzlukng" data-linestop="northern">
        <path
          id="lul-northern_940gzzlukng_00000077316366717730590640000013719364276611043493_"
          d="M543.4,618.5l-3.4-3.4 c0.3-1.1,0-2.4-0.9-3.3c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8c0.9,0.9,2.2,1.2,3.3,0.9l3.4,3.4c-0.3,1.1,0,2.4,0.9,3.3 c1.3,1.3,3.5,1.3,4.8,0c1.3-1.3,1.3-3.5,0-4.8C545.8,618.5,544.6,618.2,543.4,618.5z"
          data-linestop="northern"
        ></path>
        <g id="lul_northern_940gzzlukng" data-linestop="northern">
          <path d="M541.9,624.2c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0c1.3,1.3,1.3,3.5,0,4.8 C545.4,625.5,543.2,625.5,541.9,624.2z"></path>
        </g>
        <path
          id="lul-northern_940gzzlukng_00000147200623474972093110000005761664305642912161_"
          fill="#FFFFFF"
          d="M545.9,620.2 c0.9,0.9,0.9,2.3,0,3.2c-0.9,0.9-2.3,0.9-3.2,0c-0.8-0.8-0.9-1.9-0.3-2.8l-4.4-4.4c-0.9,0.5-2,0.4-2.8-0.3 c-0.9-0.9-0.9-2.3,0-3.2c0.9-0.9,2.3-0.9,3.2,0c0.8,0.8,0.9,1.9,0.3,2.8l4.4,4.4C544,619.3,545.2,619.4,545.9,620.2z"
          className="white-fill"
          data-linestop="northern"
        ></path>
      </g>
      <g
        id="lul-victoria_940gzzluhai_raillo-overground_910ghghi"
        data-linestop="london-overground"
        className="disrupted"
      >
        <g
          id="lul-victoria_940gzzluhai_raillo-overground_910ghghi"
          data-linestop="london-overground"
          className="disrupted"
        >
          <rect
            x="666"
            y="320.6"
            transform="matrix(0.7072 -0.707 0.707 0.7072 -37.0689 568.4313)"
            width="3.4"
            height="16.8"
          ></rect>
        </g>
        <g id="lul-victoria_940gzzluhai" data-linestop="victoria">
          <path
            id="vic_940gzzluhai"
            d="M664.2,325.4c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0 C665.5,321.9,665.5,324.1,664.2,325.4z"
            data-linestop="victoria"
          ></path>
          <path
            id="940gzzluhai"
            fill="#FFFFFF"
            d="M660.1,324.6c0.9,0.9,2.3,0.9,3.2,0c0.9-0.9,0.9-2.3,0-3.2 c-0.9-0.9-2.3-0.9-3.2,0C659.2,322.3,659.2,323.7,660.1,324.6z"
            className="white-fill"
            data-linestop="victoria"
          ></path>
          <rect
            id="940gzzluhai"
            x="667.3"
            y="320.6"
            transform="matrix(0.7065 -0.7077 0.7077 0.7065 -36.8928 569.1758)"
            fill="#FFFFFF"
            width="1.1"
            height="16.9"
            className="white-fill"
            data-linestop="victoria"
          ></rect>
        </g>
        <g
          id="raillo-overground(gospel_oak-new_cross)_910ghghi"
          data-linestop="london-overground"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M673.8,331.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C670.4,333.2,671.9,331.6,673.8,331.6z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M673.8,338.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1 C676.9,336.7,675.5,338.1,673.8,338.1L673.8,338.1z"
              className="white-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M672.7,336.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L672.7,336.1z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M673.9,332.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C674.1,332.3,673.9,332.5,673.9,332.8z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M674.1,333.7l-0.1,0.4H673c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C674.2,333.5,674.1,333.7,674.1,333.7z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
        <g
          id="raillo-overground(richmond-stratford)_910ghghi"
          data-linestop="london-overground"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M667,324.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C663.6,326.4,665.1,324.8,667,324.8z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M667,331.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1 C670.1,329.9,668.7,331.3,667,331.3L667,331.3z"
              className="white-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M665.9,329.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L665.9,329.2z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M667.1,326c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C667.3,325.5,667.1,325.7,667.1,326z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M667.3,326.9l0,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C667.4,326.6,667.3,326.9,667.3,326.9z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-bakerloo_lul-jubilee_lul-northern_lul-waterloo-city_940gzzluwlo"
        data-linestop="waterloo-city"
        className="disrupted"
      >
        <g
          id="lul-bakerloo_lul-northern_lul-waterloo-city_940gzzluwlo"
          data-linestop="waterloo-city"
          className="disrupted"
        >
          <g
            id="lul-bakerloo_lul-jubilee_lul-northern_lul-waterloo-city_940gzzluwlo"
            data-linestop="waterloo-city"
            className="disrupted"
          >
            <path
              id="lul-bakerloo_lul-jubilee_lul-northern_lul-waterloo-city_940gzzluwlo"
              d="M543.6,540.7 c-1.3,0-2.4,0.7-3,1.7h-0.9c-0.6-1-1.7-1.7-3-1.7c-1.3,0-2.4,0.7-3,1.7h-1.2c-0.6-1-1.7-1.7-3-1.7c-1.9,0-3.4,1.5-3.4,3.4 c0,1.9,1.5,3.4,3.4,3.4c1.3,0,2.4-0.7,3-1.7h1.2c0.6,1,1.7,1.7,3,1.7c1.3,0,2.4-0.7,3-1.7h0.9c0.6,1,1.7,1.7,3,1.7 c1.9,0,3.4-1.5,3.4-3.4C547,542.2,545.5,540.7,543.6,540.7z"
              data-linestop="waterloo-city"
              className="disrupted"
            ></path>
            <path
              id="lul-bakerloo_lul-waterloo-city_940gzzluwlo"
              d="M547,544.1c0,1.9-1.5,3.4-3.4,3.4 c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C545.5,540.7,547,542.2,547,544.1z"
              data-linestop="waterloo-city"
              className="disrupted"
            ></path>
            <path
              id="lul-northern_940gzzluwlo"
              d="M540.2,544.1c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4C538.6,540.7,540.2,542.2,540.2,544.1z"
              data-linestop="waterloo-city"
              className="disrupted"
            ></path>
            <path
              id="lul-jubilee_940gzzluwlo"
              d="M533.1,544.1c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4C531.5,540.7,533.1,542.2,533.1,544.1z"
              data-linestop="waterloo-city"
              className="disrupted"
            ></path>
            <path
              id="lul-bakerloo_lul-jubilee_lul-northern_lul-waterloo-city_940gzzluwlo"
              fill="#FFFFFF"
              d=" M545.8,544.1c0,1.3-1,2.3-2.3,2.3c-1.1,0-2-0.7-2.2-1.7h-2.4c-0.3,1-1.1,1.7-2.2,1.7c-1.1,0-1.9-0.7-2.2-1.7h-2.7 c-0.3,1-1.1,1.7-2.2,1.7c-1.3,0-2.3-1-2.3-2.3c0-1.3,1-2.3,2.3-2.3c1.1,0,1.9,0.7,2.2,1.7h2.7c0.3-1,1.1-1.7,2.2-1.7 c1.1,0,1.9,0.7,2.2,1.7h2.4c0.3-1,1.1-1.7,2.2-1.7C544.8,541.9,545.8,542.9,545.8,544.1z"
              className="disrupted"
              data-linestop="waterloo-city"
            ></path>
          </g>
        </g>
        <g
          id="lul-jubilee_940gzzluwlo"
          data-linestop="waterloo-city"
          className="disrupted"
        >
          <g className="disrupted">
            <path
              fill="#1C3F94"
              d="M529.7,540.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C526.2,542.2,527.8,540.7,529.7,540.7z"
              className="blue-fill"
            ></path>
          </g>
          <g className="disrupted">
            <g>
              <path
                fill="#FFFFFF"
                d="M528.5,545.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L528.5,545.1z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M529.7,541.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C529.9,541.4,529.7,541.6,529.7,541.9z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M530,542.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C530.1,542.5,530,542.8,530,542.8z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlumgt_northern_940gmgt_elizabeth_910glivst"
        data-linestop="elizabeth"
      >
        <g
          id="lul-central_lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlulvt_elizabeth_910glivst"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <g>
            <rect x="644.1" y="400.2" width="3.4" height="20.8"></rect>
          </g>
          <g>
            <path
              fill="#FFFFFF"
              d="M645.8,425.9c-1.6,0-3-1.3-3-3c0-1.6,1.3-3,3-3c1.6,0,3,1.3,3,3C648.8,424.6,647.5,425.9,645.8,425.9z "
              className="white-fill"
            ></path>
            <path d="M645.8,426.5c-2,0-3.6-1.6-3.6-3.6c0-2,1.6-3.6,3.6-3.6c2,0,3.6,1.6,3.6,3.6C649.4,424.9,647.8,426.5,645.8,426.5z M643.5,422.9c0,1.3,1.1,2.4,2.4,2.4c1.3,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4C644.5,420.5,643.5,421.6,643.5,422.9z"></path>
          </g>
          <rect
            x="645.3"
            y="398.8"
            fill="#FFFFFF"
            width="1.1"
            height="22.4"
            className="white-fill"
          />
        </g>
        <g
          id="railo-overground_910glivst_elizabeth_910glivst"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <rect
            x="642.2"
            y="392"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -87.2055 576.8234)"
            width="21.1"
            height="3.4"
          />
        </g>
        <g
          id="elizabeth_910glivst_00000063597325529369761170000012875433193416412062_"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <rect
            x="644.2"
            y="392.2"
            transform="matrix(0.707 -0.7072 0.7072 0.707 -86.2335 577.3174)"
            fill="#FFFFFF"
            width="18.9"
            height="1.1"
            className="white-fill"
          />
        </g>
        <g
          id="lul-northern_940gzzlumgt_elizabeth_910glivst"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <g>
            <rect
              x="632.9"
              y="403.3"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -98.4916 572.1483)"
              width="17.1"
              height="3.4"
            />
          </g>
          <rect
            x="634.9"
            y="403.5"
            transform="matrix(0.707 -0.7072 0.7072 0.707 -97.5218 572.6423)"
            fill="#FFFFFF"
            width="14.9"
            height="1.1"
            className="white-fill"
          />
        </g>
        <g
          id="elizabeth_910glivstll"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M645.9,397c2,0,3.6,1.6,3.6,3.6c0,2-1.6,3.6-3.6,3.6c-2,0-3.6-1.6-3.6-3.6 C642.3,398.6,643.9,397,645.9,397z"
              className="blue-fill"
            />
          </g>
          <g>
            <path
              fill="#FFFFFF"
              d="M644.7,401.6c0.2,0.6,0.7,1,1.3,1c0.8,0,1.4-0.6,1.4-1.4c0-0.4-0.2-0.8-0.4-1l0.1-0.6 c0.5,0.3,0.9,0.9,0.9,1.6c0,1-0.8,1.9-1.9,1.9c-0.7,0-1.3-0.4-1.6-0.9L644.7,401.6z"
              className="white-fill"
            />
            <circle
              fill="#FFFFFF"
              cx="646.5"
              cy="398.2"
              r="0.5"
              className="white-fill"
            />
            <path
              fill="#FFFFFF"
              d="M646.2,399.2l-0.1,0.4H645c0,0-0.2,0-0.2,0.3c0,0.2,0.2,0.3,0.2,0.3h1.1l-0.1,0.4h-1.4 c0,0-0.1,0-0.2,0.1c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.3c0,0,0.1-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C646.3,398.9,646.2,399.2,646.2,399.2z"
              className="white-fill"
            />
          </g>
        </g>
        <g
          id="railo-overground_910glivst_elizabeth_910glivst_00000011006098683345462890000000146479823310626230_"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M660,383c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C656.6,384.5,658.1,383,660,383z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M660,389.5c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C663,388.1,661.7,389.5,660,389.5L660,389.5z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M658.8,387.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L658.8,387.4z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M660,384.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C660.3,383.7,660,383.9,660,384.2z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M660.3,385.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C660.4,384.8,660.3,385.1,660.3,385.1z"
                className="blue-fill"
              />
            </g>
          </g>
        </g>
        <g
          id="lul-circle_lul-hammersmith-city_lul-metropolitan_lul-northern_940gzzlumgt_northern_940glivstll"
          data-linestop="northern"
        >
          <g
            id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlumgt_northern_940gmgt_00000156588200340893060420000000244149120827571126_"
            data-linestop="northern"
          >
            <g>
              <rect
                x="622.2"
                y="413.8"
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -109.0685 567.6752)"
                width="17.1"
                height="3.4"
              />
            </g>
          </g>
          <rect
            x="624.3"
            y="414"
            transform="matrix(0.707 -0.7072 0.7072 0.707 -108.1008 568.1691)"
            fill="#FFFFFF"
            width="14.9"
            height="1.1"
            className="white-fill"
          />
        </g>
        <g
          id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlumgt"
          data-linestop="northern"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M626.5,416.2c2,0,3.6,1.6,3.6,3.6c0,2-1.6,3.6-3.6,3.6c-2,0-3.6-1.6-3.6-3.6 C622.9,417.8,624.5,416.2,626.5,416.2z"
              className="blue-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M625.3,420.8c0.2,0.6,0.7,1,1.3,1c0.8,0,1.4-0.6,1.4-1.4c0-0.4-0.2-0.8-0.4-1l0.1-0.6 c0.5,0.3,0.9,0.9,0.9,1.6c0,1-0.8,1.9-1.9,1.9c-0.7,0-1.3-0.4-1.6-0.9L625.3,420.8z"
                className="white-fill"
              />
              <circle
                fill="#FFFFFF"
                cx="627.1"
                cy="417.4"
                r="0.5"
                className="white-fill"
              />
              <path
                fill="#FFFFFF"
                d="M626.8,418.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.3c0,0.2,0.2,0.3,0.2,0.3h1.1l-0.1,0.4h-1.4 c0,0-0.1,0-0.2,0.1c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.3c0,0,0.1-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C626.9,418.1,626.8,418.4,626.8,418.4z"
                className="white-fill"
              />
            </g>
          </g>
        </g>
        <g id="northern_940glivstll">
          <g>
            <path
              fill="#1C3F94"
              d="M636.8,406.2c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C633.4,407.7,634.9,406.2,636.8,406.2z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M636.8,412.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C639.9,411.3,638.5,412.7,636.8,412.7L636.8,412.7z"
              className="white-fill"
            />
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M635.6,410.6c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L635.6,410.6z"
                className="blue-fill"
              />
              <path
                fill="#1C3F94"
                d="M636.9,407.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C637.1,406.8,636.9,407.1,636.9,407.3z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M637.1,408.2l-0.1,0.4H636c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C637.2,408,637.1,408.2,637.1,408.2z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      {/*<LiverpoolMoorgate />*/}
      <g
        id="elizabeth_910gwchapxr_raillo-overground_910gwchapel_lul-hammersmith-city_940gwpl_lul-district_940gwpl"
        data-linestop="elizabeth"
        className="disrupted"
      >
        <rect
          x="715.5"
          y="407.2"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -83.174 628.5897)"
          width="3.4"
          height="15.1"
        ></rect>
        <rect
          x="716.8"
          y="407.3"
          transform="matrix(0.707 -0.7072 0.7072 0.707 -83.2002 628.8339)"
          fill="#FFFFFF"
          width="1.1"
          height="15.1"
          className="white-fill"
        ></rect>
      </g>
      <g
        id="raillo-overground_910gwchapel_lul-hammersmith-city_lul-district_940gwpl"
        data-linestop="london-overground"
        className="disrupted"
      >
        <g>
          <path
            fill="#1C3F94"
            d="M722.8,416.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C719.4,418.1,721,416.6,722.8,416.6z"
            className="blue-fill"
          ></path>
          <path
            fill="#FFFFFF"
            d="M722.8,423.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C725.9,421.7,724.5,423.1,722.8,423.1L722.8,423.1z"
            className="white-fill"
          ></path>
        </g>
        <g>
          <g>
            <path
              fill="#1C3F94"
              d="M721.7,421c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L721.7,421z"
              className="blue-fill"
            ></path>
            <path
              fill="#1C3F94"
              d="M722.9,417.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C723.1,417.3,722.9,417.5,722.9,417.8z"
              className="blue-fill"
            ></path>
            <path
              fill="#1C3F94"
              d="M723.2,418.6l-0.1,0.4H722c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C723.2,418.4,723.2,418.6,723.2,418.6z"
              className="blue-fill"
            ></path>
          </g>
        </g>
      </g>
      <g
        id="elizabeth_910gwchapxr"
        data-linestop="elizabeth"
        className="disrupted"
      >
        <g id="910gwchapxr" data-linestop="elizabeth" className="disrupted">
          <g>
            <path
              fill="#1C3F94"
              d="M711.9,405.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C708.5,407.4,710,405.9,711.9,405.9z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M710.7,410.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L710.7,410.3z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M711.9,407.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C712.2,406.6,711.9,406.8,711.9,407.1z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M712.2,408l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C712.3,407.7,712.2,408,712.2,408z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-district_lul-hammersmith-city_lul-jubilee_940gzzluwhm_dlr-dlr_940gzzdlwhm"
        data-linestop="dlr"
      >
        <rect
          x="849.3"
          y="388.5"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -29.4543 717.1841)"
          width="3.4"
          height="11.4"
        ></rect>
        <rect
          x="850.3"
          y="388.5"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -29.4007 717.0554)"
          fill="#FFFFFF"
          width="1.1"
          height="11"
          className="white-fill"
        ></rect>
        <g id="lul-jubilee_940gzzluwhm" data-linestop="jubilee">
          <g>
            <path
              fill="#1C3F94"
              d="M846.4,386.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C843,387.6,844.5,386.1,846.4,386.1z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M845.2,390.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L845.2,390.5z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M846.4,387.3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C846.6,386.8,846.4,387,846.4,387.3z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M846.7,388.2l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C846.8,387.9,846.7,388.2,846.7,388.2z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
        <g
          id="lul-district_lul-hammersmith-city_940gzzluwhm_dlr-dlr_940gzzdlwhm"
          data-linestop="dlr"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M854.9,394.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C851.5,396.2,853,394.6,854.9,394.6z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M853.7,399c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L853.7,399z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M854.9,395.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C855.1,395.3,854.9,395.5,854.9,395.8z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M855.2,396.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C855.3,396.4,855.2,396.7,855.2,396.7z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul_victoria_940gzzluwwl_raillo-overground_910gwltwcen_raillo-overground_910gwlthqrd"
        data-linestop="london-overground"
        className="disrupted"
      >
        <g
          id="lul_victoria_940gzzluwwl_raillo-overground_910wltwcen_raillo-overground_910wlthqrd"
          data-linestop="victoria"
        >
          <rect
            x="784.1"
            y="262.1"
            transform="matrix(0.7072 -0.707 0.707 0.7072 44.4457 634.9692)"
            width="9.4"
            height="3.4"
          ></rect>
        </g>
        <g id="lul-victoria_940gzzluwwl" data-linestop="victoria">
          <path
            fill="#FFFFFF"
            d="M794.3,261.5c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C793.1,258.7,794.3,259.9,794.3,261.5z"
            className="white-fill"
          ></path>
          <path d="M794.9,261.5c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4 C793.4,258.1,794.9,259.6,794.9,261.5z M791.5,263.8c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3 C789.2,262.8,790.2,263.8,791.5,263.8z"></path>
        </g>
        <rect
          id="lul_victoria_9100wltwcen_raillo-overground_910wltwcen_raillo-overground_910wlthqrd"
          x="784.3"
          y="263.8"
          transform="matrix(0.707 -0.7072 0.7072 0.707 44.0306 634.9293)"
          fill="#FFFFFF"
          width="8"
          height="1.1"
          className="white-fill"
        ></rect>
        <g
          id="910gwltwcen"
          data-linestop="london-overground"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M785.4,263.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C782,265.3,783.5,263.8,785.4,263.8z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M785.4,270.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C788.5,268.9,787.1,270.3,785.4,270.3L785.4,270.3z"
              className="white-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M784.3,268.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L784.3,268.2z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M785.5,264.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C785.7,264.4,785.5,264.7,785.5,264.9z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M785.8,265.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C785.8,265.6,785.8,265.8,785.8,265.8z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="raillo-overground_910ghaknynm_raillo-overground_910ghacknyc"
        data-linestop="london-overground"
        className="disrupted"
      >
        <g
          id="raillo-overground_910ghaknynm_raillo-overground_910ghacknyc"
          data-linestop="london-overground"
          className="disrupted"
        >
          <rect
            x="750.9"
            y="328.8"
            transform="matrix(0.7072 -0.707 0.707 0.7072 -16.7535 630.3555)"
            width="3.4"
            height="13.2"
          ></rect>
        </g>
        <g
          id="910ghaknynm"
          data-linestop="london-overground"
          className="disrupted"
        >
          <path
            id="vic_940gzzluhai"
            d="M750.3,333.1c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0 C751.6,329.6,751.6,331.7,750.3,333.1z"
            data-linestop="victoria"
          ></path>
          <path
            id="940gzzluhai"
            fill="#FFFFFF"
            d="M746.3,332.3c0.9,0.9,2.3,0.9,3.2,0c0.9-0.9,0.9-2.3,0-3.2 c-0.9-0.9-2.3-0.9-3.2,0C745.4,329.9,745.4,331.4,746.3,332.3z"
            className="white-fill"
            data-linestop="victoria"
          ></path>
        </g>
        <rect
          id="raillo-overground_910ghaknynm_raillo-overground_910ghacknyc"
          x="752.2"
          y="328.8"
          transform="matrix(0.7065 -0.7077 0.7077 0.7065 -16.5167 631.1343)"
          fill="#FFFFFF"
          width="1.1"
          height="13.3"
          className="disrupted"
          data-linestop="london-overground"
        ></rect>
        <g
          id="910ghacknyc"
          data-linestop="london-overground"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M757.1,336.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C753.7,338,755.3,336.5,757.1,336.5z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M757.1,342.9c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C760.2,341.6,758.8,342.9,757.1,342.9L757.1,342.9z"
              className="white-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M756,340.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L756,340.9z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M757.2,337.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C757.4,337.1,757.2,337.3,757.2,337.6z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M757.5,338.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C757.5,338.3,757.5,338.5,757.5,338.5z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-district_940gzzluupm_railo-overground_910gupmnstr"
        data-linestop="london-overground"
        className="disrupted"
      >
        <g
          id="lul-district_940gzzluupm_railo-overground_910gupmnstr"
          data-linestop="london-overground"
          className="disrupted"
        >
          <rect x="994.9" y="262.9" width="3.4" height="9.8"></rect>
        </g>
        <g
          id="railo-overground_910gupmnstr"
          data-linestop="london-overground"
          className="disrupted"
        >
          <path
            fill="#FFFFFF"
            d="M996.6,266.1c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8c1.6,0,2.8,1.3,2.8,2.8 C999.5,264.8,998.2,266.1,996.6,266.1z"
            className="white-fill"
          ></path>
          <path d="M996.6,266.7c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4c1.9,0,3.4,1.5,3.4,3.4C1000,265.1,998.5,266.7,996.6,266.7 z M994.3,263.3c0,1.3,1,2.3,2.3,2.3c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3C995.4,261,994.3,262,994.3,263.3z"></path>
        </g>
        <rect
          id="lul-district_940gzzluupm_railo-overground_910gupmnstr"
          x="996"
          y="264.3"
          fill="#FFFFFF"
          width="1.1"
          height="7.9"
          className="disrupted"
          data-linestop="london-overground"
        ></rect>
        <g id="lul-district_940gzzluupm" data-linestop="district">
          <g id="lul_district_940gzzluupm" data-linestop="district">
            <g>
              <path
                fill="#1C3F94"
                d="M996.6,267.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C993.2,268.6,994.7,267.1,996.6,267.1z"
                className="blue-fill"
              ></path>
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M995.5,271.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L995.5,271.5z"
                  className="white-fill"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M996.7,268.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C996.9,267.7,996.7,268,996.7,268.2z"
                  className="white-fill"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M996.9,269.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4 c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C997,268.9,996.9,269.1,996.9,269.1z"
                  className="white-fill"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
      <g id="lul-jubilee_940gzzlucyf" data-linestop="jubilee">
        <g>
          <path
            fill="#1C3F94"
            d="M786.1,510c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C782.7,511.5,784.2,510,786.1,510z"
            className="blue-fill"
          ></path>
        </g>
        <g>
          <g>
            <path
              fill="#FFFFFF"
              d="M785,514.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L785,514.4z"
              className="white-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M786.2,511.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C786.4,510.7,786.2,510.9,786.2,511.2z"
              className="white-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M786.5,512.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C786.5,511.8,786.5,512.1,786.5,512.1z"
              className="white-fill"
            ></path>
          </g>
        </g>
      </g>
      <g id="dlr-dlr_940gzzdlcan" data-linestop="dlr">
        <g>
          <path
            fill="#1C3F94"
            d="M795.5,500.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C792.1,502.1,793.6,500.6,795.5,500.6z"
            className="blue-fill"
          ></path>
        </g>
        <g>
          <g>
            <path
              fill="#FFFFFF"
              d="M794.4,505c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L794.4,505z"
              className="white-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M795.6,501.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C795.8,501.3,795.6,501.5,795.6,501.8z"
              className="white-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M795.9,502.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C795.9,502.4,795.9,502.7,795.9,502.7z"
              className="white-fill"
            ></path>
          </g>
        </g>
      </g>
      <g
        id="elizabeth_910gcanwhrf"
        data-linestop="elizabeth"
        className="disrupted"
      >
        <g>
          <path
            fill="#1C3F94"
            d="M804.8,491.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C801.4,492.8,802.9,491.3,804.8,491.3z"
            className="blue-fill"
          ></path>
        </g>
        <g>
          <g>
            <path
              fill="#FFFFFF"
              d="M803.7,495.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L803.7,495.7z"
              className="white-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M804.9,492.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C805.1,492,804.9,492.2,804.9,492.5z"
              className="white-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M805.1,493.4l-0.1,0.4H804c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C805.2,493.1,805.1,493.4,805.1,493.4z"
              className="white-fill"
            ></path>
          </g>
        </g>
      </g>
      <g id="910gcnnb" data-linestop="london-overground" className="disrupted">
        <g>
          <path
            fill="#FFFFFF"
            d="M690.3,330.5l0,2c-1,0.4-1.7,1.4-1.7,2.6c0,1.6,1.3,2.8,2.8,2.8c1.6,0,2.8-1.3,2.8-2.8 c0-1.2-0.7-2.2-1.7-2.6v-2c1-0.4,1.7-1.4,1.7-2.6c0-1.6-1.3-2.8-2.8-2.8c-1.6,0-2.8,1.3-2.8,2.8 C688.6,329,689.3,330,690.3,330.5z"
            className="white-fill"
          ></path>
          <path d="M689.1,327.9c0-1.3,1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3c0,1.1-0.7,1.9-1.7,2.2v2.8c1,0.3,1.7,1.1,1.7,2.2 c0,1.3-1,2.3-2.3,2.3c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.7-1.9,1.7-2.2l0-2.8C689.9,329.8,689.1,328.9,689.1,327.9z M689.7,330.8 l0,1.3c-1,0.6-1.7,1.7-1.7,3c0,1.9,1.5,3.4,3.4,3.4c1.9,0,3.4-1.5,3.4-3.4c0-1.3-0.7-2.4-1.7-3v-1.3c1-0.6,1.7-1.7,1.7-3 c0-1.9-1.5-3.4-3.4-3.4c-1.9,0-3.4,1.5-3.4,3.4C688,329.1,688.7,330.2,689.7,330.8z"></path>
        </g>
        <g>
          <g>
            <path
              fill="#1C3F94"
              d="M691.4,331.7c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C688,333.2,689.5,331.7,691.4,331.7z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M690.2,336.1c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L690.2,336.1z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M691.5,332.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C691.7,332.4,691.5,332.6,691.5,332.9z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M691.7,333.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C691.8,333.5,691.7,333.7,691.7,333.7z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
        <g>
          <g>
            <path
              fill="#1C3F94"
              d="M691.4,324.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C688,326,689.5,324.5,691.4,324.5z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M691.4,330.9c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C694.5,329.6,693.1,330.9,691.4,330.9L691.4,330.9z"
              className="white-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M690.2,328.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L690.2,328.9z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M691.5,325.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C691.7,325.1,691.5,325.3,691.5,325.6z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M691.7,326.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C691.8,326.3,691.7,326.5,691.7,326.5z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-jubilee_lul-metropolitan_940gzzlufyr"
        data-linestop="metropolitan"
      >
        <path
          id="lul-jubilee_lul-metropolitan_940gzzlufyr"
          d="M435.4,328l-5.5,5.5c-1.1-0.3-2.4,0-3.3,0.9 c-1.3,1.3-1.3,3.5,0,4.8c1.3,1.3,3.5,1.3,4.8,0c0.9-0.9,1.2-2.2,0.9-3.3l5.5-5.5c1.1,0.3,2.4,0,3.3-0.9c1.3-1.3,1.3-3.5,0-4.8 c-1.3-1.3-3.5-1.3-4.8,0C435.3,325.6,435.1,326.9,435.4,328z"
          data-linestop="metropolitan"
        ></path>
        <g id="lul-metropolitan_940gzzlufyr" data-linestop="metropolitan">
          <path d="M431.4,339.2c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0 C432.7,335.7,432.7,337.9,431.4,339.2z"></path>
        </g>
        <g id="lul-jubilee_940gzzlufyr" data-linestop="metropolitan">
          <path d="M441.1,329.5c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0 C442.4,326.1,442.4,328.2,441.1,329.5z"></path>
        </g>
        <path
          id="lul-jubilee_lul-metropolitan_940gzzlufyr"
          fill="#FFFFFF"
          d="M437,325.5c0.9-0.9,2.3-0.9,3.2,0 c0.9,0.9,0.9,2.3,0,3.2c-0.8,0.8-1.9,0.9-2.8,0.3l-6.6,6.6c0.5,0.9,0.4,2-0.3,2.8c-0.9,0.9-2.3,0.9-3.2,0 c-0.9-0.9-0.9-2.3,0-3.2c0.8-0.8,1.9-0.9,2.8-0.3l6.6-6.6C436.2,327.4,436.3,326.3,437,325.5z"
          className="white-fill"
          data-linestop="metropolitan"
        ></path>
      </g>
      <g
        id="lul-circle_lul-hammersmith-city_lul-metropolitan_lul-northern_lul-piccadilly_lul-victoria_940gzzluksx"
        data-linestop="piccadilly"
      >
        <g
          id="lul-circle_lul-hammersmith-city_lul-metropolitan_lul-northern_lul-piccadilly_lul-victoria_940gzzluksx"
          data-linestop="piccadilly"
        >
          <rect
            x="576.3"
            y="374.5"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -95.4358 522.0688)"
            width="12.3"
            height="3.4"
          ></rect>
        </g>
        <g
          id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzluksx"
          data-linestop="piccadilly"
        >
          <rect
            x="577"
            y="376"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -95.7425 521.9417)"
            fill="#FFFFFF"
            width="10.3"
            height="1.1"
            className="white-fill"
          ></rect>
        </g>
        <g
          id="lul-northern_lul-piccadilly_940gzzluksx"
          data-linestop="piccadilly"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M587.3,367.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C583.9,369.5,585.4,367.9,587.3,367.9z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M586.1,372.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L586.1,372.3z"
                className="white-fill"
              ></path>
              <circle
                fill="#FFFFFF"
                cx="587.8"
                cy="369.1"
                r="0.5"
                className="white-fill"
              ></circle>
              <path
                fill="#FFFFFF"
                d="M587.6,370l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l-0.1,0.3h-1.4 c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C587.7,369.7,587.6,370,587.6,370z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
        <g
          id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzluksx"
          data-linestop="piccadilly"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M577.3,377.8c2,0,3.6,1.6,3.6,3.6c0,2-1.6,3.6-3.6,3.6c-2,0-3.6-1.6-3.6-3.6 C573.7,379.4,575.3,377.8,577.3,377.8z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M576.1,382.4c0.2,0.6,0.7,1,1.3,1c0.8,0,1.4-0.6,1.4-1.4c0-0.4-0.2-0.8-0.4-1l0.1-0.6 c0.5,0.3,0.9,0.9,0.9,1.6c0,1-0.8,1.9-1.9,1.9c-0.7,0-1.3-0.4-1.6-0.9L576.1,382.4z"
                className="white-fill"
              ></path>
              <circle
                fill="#FFFFFF"
                cx="577.9"
                cy="379"
                r="0.5"
                className="white-fill"
              ></circle>
              <path
                fill="#FFFFFF"
                d="M577.6,379.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.3c0,0.2,0.2,0.3,0.2,0.3h1.1l-0.1,0.4H576 c0,0-0.1,0-0.2,0.1c0,0-0.1,0.1-0.1,0.1L575,383c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.3c0,0,0.1-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C577.7,379.7,577.6,379.9,577.6,379.9z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-district_lul-hammersmith-city_940gzzlubkg_raillo-overground_910gbkg_00000039123673506928057340000004530741264967992714_"
        data-linestop="hammersmith-city"
        className="disrupted"
      >
        <g
          id="lul-district_lul-hammersmith-city_940gzzlubkg_raillo-overground_910gbkg"
          data-linestop="hammersmith-city"
        >
          <g
            id="lul-district_lul-hammersmith-city_940gzzlubkg"
            data-linestop="hammersmith-city"
          >
            <rect x="907.7" y="345.5" width="3.4" height="11.7"></rect>
          </g>
          <rect
            id="lul-district_lul-hammersmith-city_940gzzlubkg_raillo-overground_910gbarking"
            x="908.9"
            y="346.9"
            fill="#FFFFFF"
            width="1.1"
            height="10"
            className="disrupted"
            data-linestop="london-overground"
          ></rect>
        </g>
        <g id="raillo-overground_910gbkg">
          <g>
            <path
              fill="#1C3F94"
              d="M909.4,341.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C906,343.4,907.5,341.8,909.4,341.8z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M909.4,348.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C912.4,346.9,911.1,348.3,909.4,348.3L909.4,348.3z"
              className="white-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M908.2,346.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L908.2,346.3z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M909.4,343c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C909.7,342.5,909.4,342.7,909.4,343z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M909.7,343.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C909.8,343.7,909.7,343.9,909.7,343.9z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
        <g
          id="lul-district_lul-hammersmith-city_940gzzlubkg"
          data-linestop="hammersmith-city"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M909.4,353c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C906,354.6,907.5,353,909.4,353z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M908.2,357.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L908.2,357.4z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M909.4,354.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C909.7,353.7,909.4,353.9,909.4,354.2z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M909.7,355.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C909.8,354.8,909.7,355.1,909.7,355.1z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-central_lul-jubilee_940gzzlubnd_elizabeth_910gbondst"
        data-linestop="elizabeth"
        className="disrupted"
      >
        <rect
          x="464.7"
          y="425"
          transform="matrix(0.7072 -0.707 0.707 0.7072 -167.0944 455.5341)"
          width="3.4"
          height="8.9"
        ></rect>
        <rect
          x="465.8"
          y="424.8"
          transform="matrix(0.707 -0.7072 0.7072 0.707 -167.0776 455.6561)"
          fill="#FFFFFF"
          width="1.1"
          height="9.3"
          className="white-fill"
        ></rect>
      </g>
      <g
        id="lul-jubilee_940gzzlubnd_elizabeth_910gbondst"
        data-linestop="elizabeth"
        className="disrupted"
      >
        <g>
          <path
            fill="#1C3F94"
            d="M463.6,422.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C460.2,424.4,461.7,422.9,463.6,422.9z"
            className="blue-fill"
          ></path>
        </g>
        <g>
          <g>
            <path
              fill="#FFFFFF"
              d="M462.5,427.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L462.5,427.3z"
              className="white-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M463.7,424c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C463.9,423.5,463.7,423.8,463.7,424z"
              className="white-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M463.9,424.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C464,424.7,463.9,424.9,463.9,424.9z"
              className="white-fill"
            ></path>
          </g>
        </g>
      </g>
      <g id="lul-central_940gzzlubnd" data-linestop="jubilee">
        <g>
          <path
            fill="#1C3F94"
            d="M469.8,429.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C466.4,430.9,467.9,429.4,469.8,429.4z"
            className="blue-fill"
          ></path>
          <path
            fill="#FFFFFF"
            d="M469.8,435.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C472.9,434.5,471.5,435.8,469.8,435.8L469.8,435.8z"
            className="white-fill"
          ></path>
        </g>
        <g>
          <g>
            <path
              fill="#1C3F94"
              d="M468.7,433.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L468.7,433.8z"
              className="blue-fill"
            ></path>
            <path
              fill="#1C3F94"
              d="M469.9,430.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C470.1,430,469.9,430.2,469.9,430.5z"
              className="blue-fill"
            ></path>
            <path
              fill="#1C3F94"
              d="M470.1,431.4l-0.1,0.4H469c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C470.2,431.2,470.1,431.4,470.1,431.4z"
              className="blue-fill"
            ></path>
          </g>
        </g>
      </g>
      <g
        id="lul-central_lul-northern_940gzzlutcr_elizabeth_910gtotctrd"
        data-linestop="elizabeth"
        className="disrupted"
      >
        <g
          id="lul-central_lul-northern_940gzzlutcr_elizabeth_910gtotctrd_00000038415332280050737210000006462599619202088852_"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <rect
            x="529.2"
            y="428"
            transform="matrix(0.7072 -0.707 0.707 0.7072 -147.5685 503.1928)"
            width="8.9"
            height="3.4"
          ></rect>
          <rect
            x="529"
            y="429.2"
            transform="matrix(0.707 -0.7072 0.7072 0.707 -147.5774 503.3413)"
            fill="#FFFFFF"
            width="9.3"
            height="1.1"
            className="white-fill"
          ></rect>
        </g>
        <g
          id="lul-northern_940gzzlutcr_elizabeth_910gtotctrd"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M536.8,422.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C533.4,424.4,534.9,422.9,536.8,422.9z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M535.6,427.3c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L535.6,427.3z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M536.8,424.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C537.1,423.6,536.8,423.8,536.8,424.1z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M537.1,424.9l-0.1,0.4H536c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C537.2,424.7,537.1,424.9,537.1,424.9z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
        <g id="lul-central_940gzzlutcr" data-linestop="northern">
          <g>
            <path
              fill="#1C3F94"
              d="M530.7,429.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C527.3,430.8,528.8,429.3,530.7,429.3z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M530.7,435.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C533.8,434.4,532.4,435.8,530.7,435.8L530.7,435.8z"
              className="white-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M529.6,433.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L529.6,433.7z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M530.8,430.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C531,430,530.8,430.2,530.8,430.5z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M531.1,431.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C531.1,431.1,531.1,431.4,531.1,431.4z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-bakerloo_lul-circle_lul-district_lul-hammersmith-city_940gzzlupac_elizabeth_910gpadtll_910gpadton"
        data-linestop="elizabeth"
        className="disrupted"
      >
        <g
          id="lul-bakerloo_lul-circle_lul-district_940gzzlupac_elizabeth_910gpadton"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <g
            id="lul-bakerloo_lul-circle_lul-district_940gzzlupac_lul-hammersmith-city_940gzzlupah"
            data-linestop="hammersmith-city"
          >
            <path
              id="lul-circle_lul-district_940gzzlupac_elizabeth_910gpadtll"
              d="M393.2,392.4l8.6,8.6 c-0.3,1.1,0,2.4,0.9,3.3c1.3,1.3,3.5,1.3,4.8,0c1.3-1.3,1.3-3.5,0-4.8c-0.9-0.9-2.2-1.2-3.3-0.9l-8.6-8.6 c0.3-1.1,0-2.4-0.9-3.3c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8C390.8,392.4,392.1,392.7,393.2,392.4z"
              data-linestop="elizabeth"
              className="disrupted"
            ></path>
            <path
              id="lul-circle_lul-district_lul_940gzzlupac_elizabeth_910gpadtll"
              fill="#FFFFFF"
              d="M390.7,390.7 c-0.9-0.9-0.9-2.3,0-3.2c0.9-0.9,2.3-0.9,3.2,0c0.8,0.8,0.9,1.9,0.3,2.8l9.6,9.6c0.9-0.5,2-0.4,2.8,0.3c0.9,0.9,0.9,2.3,0,3.2 c-0.9,0.9-2.3,0.9-3.2,0c-0.8-0.8-0.9-1.9-0.3-2.8l-9.6-9.6C392.6,391.5,391.5,391.4,390.7,390.7z"
              className="disrupted"
              data-linestop="elizabeth"
            ></path>
            <path
              id="lul-bakerloo_lul-circle_lul-district_lul-hammersmith_940gzzlupac"
              d="M394.8,386.7 c-0.9-0.9-2.2-1.2-3.3-0.9l-4.7-4.7c0.3-1.1,0-2.4-0.9-3.3c-0.9-0.9-2.2-1.2-3.3-0.9l-2.2-2.2c0.3-1.1,0-2.4-0.9-3.3 c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8c0.9,0.9,2.2,1.2,3.3,0.9l2.2,2.2c-0.3,1.1,0,2.4,0.9,3.3 c0.9,0.9,2.2,1.2,3.3,0.9l4.7,4.7c-0.3,1.1,0,2.4,0.9,3.3c1.3,1.3,3.5,1.3,4.8,0C396.1,390.2,396.1,388,394.8,386.7z"
              data-linestop="district"
            ></path>
            <path
              id="lul-circle_lul-district_940gzzlupac"
              d="M394.8,386.7c1.3,1.3,1.3,3.5,0,4.8c-1.3,1.3-3.5,1.3-4.8,0 c-1.3-1.3-1.3-3.5,0-4.8C391.3,385.3,393.4,385.3,394.8,386.7z"
              data-linestop="district"
            ></path>
            <rect
              x="395.2"
              y="387.8"
              transform="matrix(0.707 -0.7072 0.7072 0.707 -161.5967 394.8654)"
              fill="#FFFFFF"
              width="1.1"
              height="9.3"
              className="white-fill"
            ></rect>
            <path
              id="lul-circle_940gzzlupah_lul-hammersmith-city_940gzzlupah"
              d="M385.9,377.8c1.3,1.3,1.3,3.5,0,4.8 c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8C382.4,376.4,384.5,376.4,385.9,377.8z"
              data-linestop="hammersmith-city"
            ></path>
            <path
              id="lul-bakerloo_lul-circle_lul-district_940gzzlupac_lul-hammersmith-city_940gzzlupah"
              fill="#FFFFFF"
              d=" M394,390.7c-0.9,0.9-2.3,0.9-3.2,0c-0.8-0.8-0.9-1.9-0.3-2.8l-5.8-5.8c-0.9,0.5-2,0.4-2.8-0.3c-0.8-0.8-0.9-1.9-0.4-2.8 l-3.3-3.3c-0.9,0.5-2,0.4-2.8-0.3c-0.9-0.9-0.9-2.3,0-3.2c0.9-0.9,2.3-0.9,3.2,0c0.7,0.8,0.9,1.9,0.3,2.8l3.3,3.3 c0.9-0.5,2-0.4,2.8,0.3c0.8,0.8,0.9,1.9,0.3,2.8l5.8,5.8c0.9-0.5,2-0.4,2.8,0.4C394.9,388.4,394.9,389.8,394,390.7z"
              className="white-fill"
              data-linestop="hammersmith-city"
            ></path>
          </g>
        </g>
        <g
          id="elizabeth_910gpadtll"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M405.1,398.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C401.7,399.9,403.2,398.4,405.1,398.4z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M403.9,402.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L403.9,402.8z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M405.2,399.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C405.4,399,405.2,399.3,405.2,399.5z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M405.4,400.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C405.5,400.2,405.4,400.4,405.4,400.4z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
        <g
          id="lul-circle_lul-hammersmith-city_940gzzlupah"
          data-linestop="hammersmith-city"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M383.5,376.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C380.1,378.3,381.6,376.8,383.5,376.8z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M383.5,383.2c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C386.5,381.9,385.2,383.2,383.5,383.2L383.5,383.2z"
              className="white-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M382.3,381.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L382.3,381.2z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M383.5,377.9c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C383.8,377.4,383.5,377.6,383.5,377.9z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M383.8,378.8l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C383.9,378.6,383.8,378.8,383.8,378.8z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
        <g id="lul-bakerloo_940gzzlupah" data-linestop="hammersmith-city">
          <g>
            <path
              fill="#1C3F94"
              d="M377.1,370.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C373.7,371.9,375.2,370.4,377.1,370.4z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M377.1,376.9c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C380.2,375.5,378.8,376.9,377.1,376.9L377.1,376.9z"
              className="white-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M375.9,374.8c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L375.9,374.8z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M377.1,371.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C377.4,371,377.1,371.3,377.1,371.5z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M377.4,372.4l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C377.5,372.2,377.4,372.4,377.4,372.4z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-district_940gzzlugnrsbry_raillo-overground_910ggnrsbry_00000042735563556994696540000012890801831263343523_"
        data-linestop="london-overground"
        className="disrupted"
      >
        <g
          id="lul-district_940gzzlugnrsbry_raillo-overground_910ggnrsbry_00000171706316249744160560000008952645355875970743_"
          data-linestop="london-overground"
          className="disrupted"
        >
          <path d="M228.1,537.1l-1.4-1.4c0.3-1.1,0-2.4-0.9-3.3c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8c0.9,0.9,2.2,1.2,3.3,0.9 l1.4,1.4c-0.3,1.1,0,2.4,0.9,3.3c1.3,1.3,3.5,1.3,4.8,0c1.3-1.3,1.3-3.5,0-4.8C230.5,537.1,229.2,536.8,228.1,537.1z"></path>
        </g>
        <path
          id="lul-district_940gzzlugnrsbry_00000013892721934962241590000003620973473241152416_"
          d="M231.4,542.9 c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0C232.7,539.4,232.7,541.5,231.4,542.9z"
        ></path>
        <path
          id="raillo-overground_910ggnrsbry_00000002372083130136611630000008197781136579939975_"
          d="M225.8,537.3 c-1.3,1.3-3.5,1.3-4.8,0c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0C227.1,533.8,227.1,536,225.8,537.3z"
          data-linestop="london-overground"
          className="disrupted"
        ></path>
        <path
          id="lul-district_940gzzlugnrsbry_raillo-overground_910ggnrsbry_00000044153952330719400120000012882196509667164296_"
          fill="#FFFFFF"
          d=" M230.6,538.8c0.9,0.9,0.9,2.3,0,3.2c-0.9,0.9-2.3,0.9-3.2,0c-0.8-0.8-0.9-1.9-0.3-2.8l-2.4-2.4c-0.9,0.5-2,0.4-2.8-0.3 c-0.9-0.9-0.9-2.3,0-3.2c0.9-0.9,2.3-0.9,3.2,0c0.8,0.8,0.8,1.8,0.3,2.7l2.5,2.5C228.7,538,229.8,538.1,230.6,538.8z"
          className="disrupted"
          data-linestop="london-overground"
        ></path>
      </g>
      <g
        id="lul-victoria_940gzzlublr_raillo-overground_910gblchsrd"
        data-linestop="london-overground"
        className="disrupted"
      >
        <g
          id="lul-victoria_940gzzlublr_raillo-overground_910gblchsrd"
          data-linestop="london-overground"
          className="disrupted"
        >
          <g
            id="lul-victoria_940gzzlublr_raillo-overground_910gblchsrd"
            data-linestop="london-overground"
            className="disrupted"
          >
            <path d="M752.9,257.6l-0.7,0.7c-1.1-0.3-2.4,0-3.3,0.9c-1.3,1.3-1.3,3.5,0,4.8c1.3,1.3,3.5,1.3,4.8,0c0.9-0.9,1.2-2.2,0.9-3.3 l0.7-0.7c1.1,0.3,2.4,0,3.3-0.9c1.3-1.3,1.3-3.5,0-4.8c-1.3-1.3-3.5-1.3-4.8,0C752.9,255.2,752.6,256.4,752.9,257.6z"></path>
          </g>
          <path
            id="lul-victoria_940gzzlublr"
            d="M749,264c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0c1.3,1.3,1.3,3.5,0,4.8 C752.4,265.3,750.3,265.3,749,264z"
            data-linestop="victoria"
          ></path>
          <path
            id="lul-victoria_940gzzlublr_raillo-overground_910gblchsrd"
            fill="#FFFFFF"
            d="M754.6,255.1 c0.9-0.9,2.3-0.9,3.2,0c0.9,0.9,0.9,2.3,0,3.2c-0.8,0.8-1.9,0.9-2.8,0.3l-1.7,1.7c0.5,0.9,0.4,2-0.3,2.8 c-0.9,0.9-2.3,0.9-3.2,0c-0.9-0.9-0.9-2.3,0-3.2c0.8-0.8,1.9-0.9,2.8-0.3l1.7-1.7C753.7,257,753.9,255.8,754.6,255.1z"
            className="disrupted"
            data-linestop="london-overground"
          ></path>
        </g>
        <g
          id="910gblchsrd"
          data-linestop="london-overground"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M756.2,253.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C752.8,254.8,754.3,253.3,756.2,253.3z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M756.2,259.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1 C759.3,258.4,757.9,259.8,756.2,259.8L756.2,259.8z"
              className="white-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M755.1,257.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L755.1,257.7z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M756.3,254.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C756.5,253.9,756.3,254.2,756.3,254.4z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M756.5,255.3l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H755c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C756.6,255.1,756.5,255.3,756.5,255.3z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-circle_lul-district_lul-hammersmith-city_lul-piccadilly_940gzzluhsd"
        data-linestop="piccadilly"
      >
        <g
          id="lul-circle_lul-hammersmith-city_lul_piccadilly_940gzzluhsc"
          data-linestop="hammersmith-city"
        >
          <path
            fill="#FFFFFF"
            d="M332.1,508.8l0,2c-1,0.4-1.7,1.4-1.7,2.6c0,1.6,1.3,2.8,2.8,2.8c1.6,0,2.8-1.3,2.8-2.8 c0-1.2-0.7-2.2-1.7-2.6v-2c1-0.4,1.7-1.4,1.7-2.6c0-1.6-1.3-2.8-2.8-2.8c-1.6,0-2.8,1.3-2.8,2.8 C330.4,507.4,331.1,508.4,332.1,508.8z"
            className="white-fill"
          ></path>
          <path d="M331,506.2c0-1.3,1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3c0,1.1-0.7,1.9-1.7,2.2v2.8c1,0.3,1.7,1.1,1.7,2.2 c0,1.3-1,2.3-2.3,2.3c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.7-1.9,1.7-2.2l0-2.8C331.7,508.2,331,507.3,331,506.2z M331.5,509.2l0,1.3 c-1,0.6-1.7,1.7-1.7,3c0,1.9,1.5,3.4,3.4,3.4c1.9,0,3.4-1.5,3.4-3.4c0-1.3-0.7-2.4-1.7-3v-1.3c1-0.6,1.7-1.7,1.7-3 c0-1.9-1.5-3.4-3.4-3.4c-1.9,0-3.4,1.5-3.4,3.4C329.8,507.5,330.5,508.6,331.5,509.2z"></path>
        </g>
        <g
          id="lul-circle_lul-hammersmith-city_940gzzluhsc"
          data-linestop="hammersmith-city"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M333.3,489.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C329.8,491,331.4,489.5,333.3,489.5z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M332.1,493.9c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L332.1,493.9z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M333.3,490.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C333.5,490.1,333.3,490.3,333.3,490.6z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M333.6,491.5l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H332c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C333.7,491.3,333.6,491.5,333.6,491.5z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
        <g id="lul-district_940gzzluhsd" data-linestop="piccadilly">
          <g>
            <path
              fill="#1C3F94"
              d="M333.3,510.1c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C329.8,511.6,331.4,510.1,333.3,510.1z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M332.1,514.5c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L332.1,514.5z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M333.3,511.2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C333.5,510.7,333.3,510.9,333.3,511.2z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M333.6,512.1l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H332c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1L331,515c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C333.7,511.9,333.6,512.1,333.6,512.1z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
        <g id="lul-piccadilly_940gzzluhsd" data-linestop="piccadilly">
          <g>
            <path
              fill="#1C3F94"
              d="M333.3,502.8c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C329.8,504.3,331.4,502.8,333.3,502.8z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M333.3,509.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C336.3,507.9,334.9,509.3,333.3,509.3L333.3,509.3z"
              className="white-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M332.1,507.2c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L332.1,507.2z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M333.3,504c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5 C333.5,503.5,333.3,503.7,333.3,504z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M333.6,504.9l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3H332c0,0-0.1,0-0.1,0 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 h1.3c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C333.7,504.6,333.6,504.9,333.6,504.9z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-central_940gzzlueby_00000105426395279441705050000009476980305159908786_"
        data-linestop="district"
        className="disrupted"
      >
        <g
          id="elizabeth_lul-central_940gzzlueby_910gealingb_00000073717820275732280610000012563425487182463666_"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <rect x="207.4" y="443.9" width="3.4" height="7.9"></rect>
          <rect
            x="208.6"
            y="443.6"
            fill="#FFFFFF"
            width="1.1"
            height="8.3"
            className="white-fill"
          ></rect>
        </g>
        <g
          id="lul-central_lul-district_940gzzlueby_00000054242244034688295520000006572788171041463714_"
          data-linestop="district"
        >
          <rect x="207.4" y="452.3" width="3.4" height="7.2"></rect>
          <rect
            x="208.6"
            y="452.2"
            fill="#FFFFFF"
            width="1.1"
            height="7.6"
            className="white-fill"
          ></rect>
        </g>
        <g
          id="lul-district_940gzzlueby_00000026847304393593898770000005472615176077566630_"
          data-linestop="district"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M209.1,456c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C205.7,457.5,207.2,456,209.1,456z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M207.9,460.4c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.8L207.9,460.4z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M209.1,457.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C209.3,456.6,209.1,456.9,209.1,457.1z"
                className="white-fill"
              ></path>
              <path
                fill="#FFFFFF"
                d="M209.4,458l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C209.5,457.8,209.4,458,209.4,458z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
        <g
          id="elizabeth_910gealingb_00000011724001545878592320000005777456800628840857_"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M209.1,441.3c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C205.7,442.8,207.2,441.3,209.1,441.3z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M209.1,447.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C212.1,446.4,210.8,447.8,209.1,447.8L209.1,447.8z"
              className="white-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M207.9,445.7c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L207.9,445.7z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M209.1,442.4c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C209.3,441.9,209.1,442.2,209.1,442.4z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M209.4,443.3l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C209.5,443.1,209.4,443.3,209.4,443.3z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
        <g
          id="lul-central_940gzzlueby_00000070817777486065090000000007521347258680284058_"
          data-linestop="district"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M209.1,448.6c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4 C205.7,450.1,207.2,448.6,209.1,448.6z"
              className="blue-fill"
            ></path>
            <path
              fill="#FFFFFF"
              d="M209.1,455.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1 C212.1,453.7,210.8,455.1,209.1,455.1L209.1,455.1z"
              className="white-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M207.9,453c0.2,0.5,0.7,0.9,1.2,0.9c0.7,0,1.3-0.6,1.3-1.3c0-0.4-0.2-0.7-0.4-1l0.1-0.6 c0.5,0.3,0.8,0.9,0.8,1.5c0,1-0.8,1.8-1.8,1.8c-0.6,0-1.2-0.3-1.5-0.9L207.9,453z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M209.1,449.8c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C209.3,449.3,209.1,449.5,209.1,449.8z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M209.4,450.7l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.2c0,0.2,0.2,0.2,0.2,0.2h1l0,0.3h-1.4c0,0-0.1,0-0.1,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.2c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C209.5,450.4,209.4,450.7,209.4,450.7z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlufcn_elizabeth_910gfrndxr_00000042697332689855333620000013730532412025396396_"
        data-linestop="elizabeth"
        className="disrupted"
      >
        <g
          id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlufcn"
          data-linestop="metropolitan"
        >
          <g
            id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlufcn_elizabeth_910gfrndxr_00000072982801762858711110000006529130501516822415_"
            data-linestop="elizabeth"
            className="disrupted"
          >
            <rect
              x="590"
              y="395.3"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -105.9138 538.2193)"
              width="13.5"
              height="3.4"
            ></rect>
            <g
              id="lul-circle_lul-hammersmith-city_lul-metropolitan_940gzzlufcn_elizabeth_910gfrndxr"
              data-linestop="elizabeth"
              className="disrupted"
            >
              <rect
                x="589.8"
                y="396.4"
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -105.9077 538.2217)"
                fill="#FFFFFF"
                width="13.9"
                height="1.1"
                className="white-fill"
              ></rect>
            </g>
          </g>
          <path
            fill="#1C3F94"
            d="M600,389.8c2,0,3.6,1.6,3.6,3.6c0,2-1.6,3.6-3.6,3.6c-2,0-3.6-1.6-3.6-3.6 C596.5,391.4,598.1,389.8,600,389.8z"
            className="blue-fill"
          ></path>
          <path
            fill="#FFFFFF"
            d="M600,396.6c-1.8,0-3.2-1.4-3.2-3.2c0-1.8,1.4-3.2,3.2-3.2c1.8,0,3.2,1.4,3.2,3.2 C603.3,395.2,601.8,396.6,600,396.6L600,396.6z"
            className="white-fill"
          ></path>
          <g>
            <g>
              <path
                fill="#1C3F94"
                d="M598.8,394.5c0.2,0.6,0.7,1,1.3,1c0.8,0,1.4-0.6,1.4-1.4c0-0.4-0.2-0.8-0.4-1l0.1-0.6 c0.5,0.3,0.9,0.9,0.9,1.6c0,1-0.8,1.9-1.9,1.9c-0.7,0-1.3-0.4-1.6-0.9L598.8,394.5z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M600.1,391c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C600.3,390.5,600.1,390.7,600.1,391z"
                className="blue-fill"
              ></path>
              <path
                fill="#1C3F94"
                d="M600.4,392l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.3c0,0.2,0.2,0.3,0.2,0.3h1.1l0,0.4h-1.5c0,0-0.1,0-0.2,0.1 c0,0-0.1,0.1-0.1,0.1l-0.8,1.6c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.3c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0 l1.3,0c0,0,0.1,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3C600.5,391.7,600.4,392,600.4,392z"
                className="blue-fill"
              ></path>
            </g>
          </g>
        </g>
        <g
          id="elizabeth_910gfrndxr"
          data-linestop="elizabeth"
          className="disrupted"
        >
          <g>
            <path
              fill="#1C3F94"
              d="M593.3,396.8c2,0,3.6,1.6,3.6,3.6c0,2-1.6,3.6-3.6,3.6c-2,0-3.6-1.6-3.6-3.6 C589.7,398.4,591.3,396.8,593.3,396.8z"
              className="blue-fill"
            ></path>
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M592.1,401.4c0.2,0.6,0.7,1,1.3,1c0.8,0,1.4-0.6,1.4-1.4c0-0.4-0.2-0.8-0.4-1l0.1-0.6 c0.5,0.3,0.9,0.9,0.9,1.6c0,1-0.8,1.9-1.9,1.9c-0.7,0-1.3-0.4-1.6-0.9L592.1,401.4z"
                className="white-fill"
              ></path>
              <circle
                fill="#FFFFFF"
                cx="593.9"
                cy="398"
                r="0.5"
                className="white-fill"
              ></circle>
              <path
                fill="#FFFFFF"
                d="M593.6,399l-0.1,0.4h-1.1c0,0-0.2,0-0.2,0.3c0,0.2,0.2,0.3,0.2,0.3h1.1l-0.1,0.4H592 c0,0-0.1,0-0.2,0.1c0,0-0.1,0.1-0.1,0.1L591,402c0,0-0.1,0.2,0.1,0.3c0.2,0.1,0.4-0.1,0.4-0.1l0.6-1.3c0,0,0.1-0.1,0.1-0.1 c0.1,0,0.1,0,0.1,0l1.3,0c0,0,0.1,0,0.3-0.1c0.1-0.1,0.1-0.2,0.1-0.2l0.2-1.4c0,0,0-0.3-0.3-0.3 C593.7,398.7,593.6,399,593.6,399z"
                className="white-fill"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g
        id="lul-district_lul-piccadilly_940gzzluecm_00000167395694646168036510000016966636783057114810_"
        data-linestop="piccadilly"
      >
        <rect x="217.5" y="480.4" width="7.9" height="3.4"></rect>
      </g>
      <g
        id="lul-piccadilly_940gzzluecm_00000090266257774017428620000015224950294717591472_"
        data-linestop="piccadilly"
      >
        <path
          fill="#FFFFFF"
          d="M227.8,482.1c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C226.5,479.2,227.8,480.5,227.8,482.1z"
          className="white-fill"
        ></path>
        <path d="M228.3,482.1c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C226.8,478.7,228.3,480.2,228.3,482.1 z M224.9,484.4c1.3,0,2.3-1,2.3-2.3s-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3S223.6,484.4,224.9,484.4z"></path>
      </g>
      <g
        id="lul-district_940gzzluecm_00000075137264118515928920000003335470980246467754_"
        data-linestop="piccadilly"
      >
        <path
          fill="#FFFFFF"
          d="M220.8,482.1c0,1.6-1.3,2.8-2.8,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.8,2.8-2.8 C219.5,479.2,220.8,480.5,220.8,482.1z"
          className="white-fill"
        />
        <path d="M221.4,482.1c0,1.9-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4C219.8,478.7,221.4,480.2,221.4,482.1 z M218,484.4c1.3,0,2.3-1,2.3-2.3s-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3S216.7,484.4,218,484.4z"></path>
      </g>
      <rect
        x="217.3"
        y="481.5"
        fill="#FFFFFF"
        width="8.3"
        height="1.1"
        className="white-fill"
      />
    </g>
  );
});

export default InterchangeCircles;
