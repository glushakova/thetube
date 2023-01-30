import React, { FC, memo } from "react";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getIsLineActiveSelector,
  selectLine,
  selectSelectedStation,
  selectStation,
} from "../../store/map";
import { Line, Station } from "../../config";
import { StationIcon } from "../StationIcon";
import { STROKE_WIDTH } from "../../constant/main";

const Elizabeth: FC = memo(() => {
  const isActive = useAppSelector(getIsLineActiveSelector(Line.Elizabeth));
  const selectedStation = useAppSelector(selectSelectedStation);
  const dispatch = useAppDispatch();

  return (
    <g
      className={classNames("line", {
        disabled: !isActive,
      })}
      onClick={() => dispatch(selectLine({ line: Line.Elizabeth }))}
      data-testid="elizabeth-line-path"
      fill="#634EA0"
    >
      <path
        id="elizabeth_910ghtrwapt_910ghtrwtm5"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3443"
        strokeLinejoin="round"
        strokeMiterlimit="3.994"
        d=" M109.4,570.6l0,3.7c0,2.3-0.9,4.4-2.5,6l-8.3,8.3l-2.5,2.5l-12.7,12.7c-1.5,1.5-2.5,3.6-2.5,6v14"
        className="disrupted"
      />
      <line
        id="elizabeth_910gmryland_910gstfd"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="863.7"
        y1="321.3"
        x2="845"
        y2="340"
        className="disrupted"
      />
      <path
        id="elizabeth_910gfrstgt_910gmryland"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M881.2,303.8c-6.5,6.5-17.6,17.6-17.6,17.6"
        className="disrupted"
      />
      <line
        id="elizabeth_910gmanrpk_910gfrstgt"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="895.9"
        y1="289.1"
        x2="881.2"
        y2="303.8"
        className="disrupted"
      />
      <line
        id="elizabeth_910gilford_910gmanrpk"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="904.8"
        y1="280.2"
        x2="895.8"
        y2="289.2"
        className="disrupted"
      />
      <line
        id="elizabeth_910gsvnkngs_910gilford"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="913.9"
        y1="271.1"
        x2="903.7"
        y2="281.3"
        className="disrupted"
      />
      <line
        id="elizabeth_910ggodmays_910gsvnkngs"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="923.1"
        y1="261.9"
        x2="913.8"
        y2="271.2"
        className="disrupted"
      />
      <path
        id="elizabeth_910gchdwlht_910ggodmays"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d="M939.5,245.5C932.9,252.1,922,263,922,263"
        className="disrupted"
      />
      <path
        id="elizabeth_910gromford_910gchdwlht"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M954.6,230.4c-4.9,4.9-15.2,15.2-15.2,15.2"
        className="disrupted"
      />
      <line
        id="elizabeth_910ggideapk_910gromford"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="966.9"
        y1="218.1"
        x2="954.6"
        y2="230.4"
        className="disrupted"
      />
      <path
        id="elizabeth_910ghrldwod_910ggideapk"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M976.1,208.9c-3.2,3.2-9.3,9.3-9.3,9.3"
        className="disrupted"
      />
      <line
        id="elizabeth_910gbrtwood_910ghrldwod"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="1002.1"
        y1="182.9"
        x2="976"
        y2="209"
        className="disrupted"
      />
      <line
        id="elizabeth_910gshenfld_910gbrtwood"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="1019.7"
        y1="165.3"
        x2="1002"
        y2="183"
        className="disrupted"
      />
      <line
        id="elizabeth_910ghtrwapt_910ghtrwtm4"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3442"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="109.5"
        y1="572.3"
        x2="109.5"
        y2="617.1"
        className="disrupted"
      />
      <line
        fill="none"
        stroke="#F1F2F2"
        strokeWidth="2.9476"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="107.1"
        y1="587"
        x2="112"
        y2="582.2"
      />
      <line
        id="elizabeth_910gsthall_910ghayesah"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3442"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="157.6"
        y1="444.8"
        x2="123.9"
        y2="444.8"
        className="disrupted"
      />
      <line
        id="elizabeth_910ghanwell_910gsthall"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3442"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="172.7"
        y1="444.8"
        x2="156.1"
        y2="444.8"
        className="disrupted"
      />
      <line
        id="elizabeth_910gwealing_910ghanwell"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3442"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="194.1"
        y1="444.8"
        x2="172.6"
        y2="444.8"
      />
      <path
        id="elizabeth_910gealingb_910gwealing"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3442"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M208.9,444.8c-9,0-14.8,0-14.8,0"
        className="disrupted"
      />
      <path
        id="elizabeth_910gactonml_910gealingb"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3442"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d="M259,423.1c-13,13-19.1,19.1-19.1,19.1c-1.2,1.2-3.7,2.3-5.4,2.3c-0.4,0-15.8,0-25.1,0"
        className="disrupted"
      />
      <path
        id="elizabeth_910gpadtll_910gactonml"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3442"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M405.4,401.9l-122.1,0c-1.8,0-4.2,1-5.4,2.3c-0.6,0.6-19,19-19,19"
        className="disrupted"
      />
      <path
        id="elizabeth_910gcstmhsxr_910gwolwxr"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3443"
        strokeLinejoin="round"
        strokeMiterlimit="3.994"
        d=" M924.8,500.1c1.7,1.7-1.8-1.8-1.4-1.4l0.7,0.7c2.2,2.2,2.8,2.8,2.8,2.8c1.1,1.1,2,3.3,2,4.9v33.8l0,40.1c0,20.7,0-70.7,0-38.5"
        className="disrupted"
      />
      <path
        id="elizabeth_910gcanwhrf_910gcstmhsxr"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3443"
        strokeLinejoin="round"
        strokeMiterlimit="3.994"
        d=" M805.6,494.8h96.3h0.9h10.3h3.6c1.6,0,3.8,0.9,4.9,2c0.1,0.1,0.5,0.5,3,3"
        className="disrupted"
      />
      <path
        id="elizabeth_910gwchapxr_910gcanwhrf"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3443"
        strokeLinejoin="round"
        strokeMiterlimit="3.994"
        d=" M712.4,409.3h25.7c1.6,0,3.8,0.9,4.9,2l7.4,7.4l0.5,0.5l18.4,18.4l0.7,0.7l5.3,5.3c1.1,1.1,2,3.3,2,4.9V467l0,0.9v8.7 c0,1.6,0.9,3.8,2,4.9l11.3,11.3c1.1,1.1,3.3,2,4.9,2h9.5"
        className="disrupted"
      />
      <path
        id="elizabeth_910glivstll_910gwchapxr"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3443"
        strokeLinejoin="round"
        strokeMiterlimit="3.994"
        d=" M646.1,400.4h8.3c1.6,0,3.8,0.9,4.9,2l1.2,1.2l2.2,2.2l1.3,1.3c1.1,1.1,3.3,2,4.9,2h7.5l35.2,0.1"
        className="disrupted"
      />
      <line
        id="elizabeth_910gfrndxr_910glivstll"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3443"
        strokeLinejoin="round"
        strokeMiterlimit="3.994"
        x1="593.5"
        y1="400.4"
        x2="646.1"
        y2="400.4"
        className="disrupted"
      />
      <path
        id="elizabeth_910gtotctrd_910gfrndxr"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3443"
        strokeLinejoin="round"
        strokeMiterlimit="3.994"
        d=" M537.1,426.3l8.8,0l6,0c1.6,0,3.8-0.9,4.9-2l16.9-16.9l1.6-1.6l3.4-3.4c1.1-1.1,3.3-2,4.9-2h9.3"
        className="disrupted"
      />
      <path
        id="elizabeth_910gpadtll_910gbondst"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3443"
        strokeLinejoin="round"
        strokeMiterlimit="3.994"
        d=" M405.4,401.9h18.9c1.6,0,3.8,0.9,4.9,2l20.3,20.3c1.1,1.1,3.3,2,4.9,2h9.3"
        className="disrupted"
      />
      <line
        id="elizabeth_910gwolwxr_910gabwdxr"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3443"
        strokeLinejoin="round"
        strokeMiterlimit="3.994"
        x1="928.9"
        y1="597.6"
        x2="928.9"
        y2="584.2"
        className="disrupted"
      />
      <path
        id="elizabeth_910ghayesah_910ghtrwapt"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3442"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M109.5,572.3c0,0,0-117.9,0-119.8h0c0-1.8,1-4.2,2.3-5.4c1.2-1.2,3.7-2.3,5.4-2.3c1.4,0,6.8,0,6.8,0"
        className="disrupted"
      />
      <line
        id="elizabeth_910gbondst_910gtotctrd"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3443"
        strokeLinejoin="round"
        strokeMiterlimit="3.994"
        x1="463.7"
        y1="426.3"
        x2="536.9"
        y2="426.3"
        className="disrupted"
      />
      <path
        id="elizabeth_910gwchapxr_910gstfd_00000020385279513728893800000000140386616179057851_"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3443"
        strokeLinejoin="round"
        strokeMiterlimit="3.994"
        d=" M712.4,409.3l6.3,0l3.1,0h1.9c1.6,0,3.8-0.9,4.9-2l1.8-1.8l2.4-2.4l1.2-1.3l1.6-1.6l17.5-17.5c1.1-1.1,3.3-2,4.9-2h12l0.4,0 c0,0,27.8,0,30.7,0c1.8,0,4.2-1,5.4-2.3c0.7-0.7,0.3-0.3,38.5-38.5"
        className="disrupted"
      />
      <path
        id="elizabeth_910gwdryton_910ghayesah_00000132774001044820814150000005695959201617703318_"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3442"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M106.1,427.4c0,0,0,8.4,0,9.8c0,1.8,1,4.2,2.3,5.4c1.2,1.2,3.7,2.3,5.4,2.3c1.4,0,10.2,0,10.2,0"
        className="disrupted"
      />
      <path
        id="elizabeth_910giver_910gwdryton_00000140001451481008340680000015732718977250120620_"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3442"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M106.1,407.5c0,0,0,20,0,21.4"
        className="disrupted"
      />
      <line
        id="elizabeth_910glangley_910giver_00000124848403095324430380000001364877283025305790_"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3442"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="106.1"
        y1="396.7"
        x2="106.1"
        y2="409"
        className="disrupted"
      />
      <line
        id="elizabeth_910gslough_910glangley_00000016047706179230852750000009046388448231857080_"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3442"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="106.1"
        y1="385.9"
        x2="106.1"
        y2="398.2"
        className="disrupted"
      />
      <line
        id="elizabeth_910gbnham_910gslough_00000042694366815337828250000003687481102787902631_"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3442"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="106.1"
        y1="374.2"
        x2="106.1"
        y2="385.9"
        className="disrupted"
      />
      <line
        id="elizabeth_910gtaplow_910gbnham_00000140010049591419073620000008955448700302362522_"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3442"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="106.1"
        y1="361.8"
        x2="106.1"
        y2="374.3"
        className="disrupted"
      />
      <line
        id="elizabeth_910gmdnhead_910gtaplow_00000034775338315664415060000012728883715723241887_"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3442"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="106.1"
        y1="350.9"
        x2="106.1"
        y2="363.3"
        className="disrupted"
      />
      <line
        id="elizabeth_910gtwyford_910gmdnhead_00000058578470085773439620000017674948932121879428_"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3442"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="106.1"
        y1="339.3"
        x2="106.1"
        y2="350.9"
        className="disrupted"
      />
      <line
        id="elizabeth_910grdngstn_910gtwyford"
        fill="none"
        stroke="#634EA0"
        strokeWidth="2.3442"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="106.1"
        y1="327.7"
        x2="106.1"
        y2="339.3"
        className="disrupted"
      />
      <g className="white_line">
        <path
          strokeWidth="0.805"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          d=" M109.5,571.1l0,0.6l0,0.5v2.1c0,2.3-0.9,4.4-2.5,6L85.2,602l-0.7,0.7l-1,1c-1.5,1.5-2.5,3.6-2.5,6v13.6"
        />
        <path
          strokeWidth="0.805"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M1019.5,165.5c-236.1,236.1-206.2,206.2-213,213c-1.2,1.2-3.7,2.2-5.4,2.2c-2.9,0-28.4,0-28.4,0l-0.6,0h-14c-1.6,0-3.8,0.9-4.9,2 l-17.5,17.5l-2.8,2.8l-0.1,0.1l-4.1,4.1c-1.1,1.1-3.3,2-4.9,2h-1.9l-2.9,0l-6.9,0"
        />
        <line
          strokeWidth="0.805"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          x1="723.3"
          y1="409.3"
          x2="731.2"
          y2="409.3"
        />
        <path
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M106.1,427.4c0,0,0,8.4,0,9.8c0,1.8,1,4.2,2.3,5.4c1.2,1.2,3.7,2.3,5.4,2.3c1.4,0,10.2,0,10.2,0"
        />
        <path
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M106.1,407.5c0,0,0,20,0,21.4"
        />
        <line
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="106.1"
          y1="396.7"
          x2="106.1"
          y2="409"
        />
        <line
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="106.1"
          y1="385.9"
          x2="106.1"
          y2="398.2"
        />
        <line
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="106.1"
          y1="374.2"
          x2="106.1"
          y2="385.9"
        />
        <line
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="106.1"
          y1="361.8"
          x2="106.1"
          y2="374.3"
        />
        <line
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="106.1"
          y1="350.9"
          x2="106.1"
          y2="363.3"
        />
        <line
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="106.1"
          y1="339.3"
          x2="106.1"
          y2="350.9"
        />
        <line
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="106.1"
          y1="327.7"
          x2="106.1"
          y2="339.3"
        />
        <path
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d=" M109.5,572.3c0,0,0-117.9,0-119.8h0c0-1.8,1-4.2,2.3-5.4c1.2-1.2,3.7-2.3,5.4-2.3c1.7,0,6.8,0,6.8,0"
        />
        <line
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="109.5"
          y1="572.3"
          x2="109.5"
          y2="617.1"
        />
        <path
          strokeWidth="0.805"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          d="M109.4,570.9 v3.3c0,2.3-0.9,4.4-2.5,6"
        />
        <line
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="156.8"
          y1="444.8"
          x2="123.9"
          y2="444.8"
        />
        <line
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="172.7"
          y1="444.8"
          x2="156.1"
          y2="444.8"
        />
        <line
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          x1="194.1"
          y1="444.8"
          x2="172.6"
          y2="444.8"
        />
        <path
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d="M208.9,444.8 c-9,0-14.8,0-14.8,0"
        />
        <path
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d="M260,422.1 c-13,13-20.5,20.5-20.5,20.5c-1.2,1.2-3.7,2.3-5.4,2.3c-0.4,0-15.8,0-25.1,0"
        />
        <path
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.8042"
          strokeLinejoin="round"
          strokeMiterlimit="3.9938"
          d="M405.3,401.9 l-122,0c-1.8,0-4.2,1-5.4,2.3c-0.6,0.6-19,19-19,19"
        />
        <path
          strokeWidth="0.805"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          d="M805.6,494.8 h95.3h2.3h13.5c1.6,0,3.8,0.9,4.9,2c0.5,0.5,1.6,1.6,2.3,2.3l0.9,0.9c2.2,2.2,2.1,2.1,2.1,2.1c1.1,1.1,2,3.3,2,4.9v46.2l0,3.6 c0,2.8,0,22.5,0,40.6"
        />
        <path
          strokeWidth="0.805"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          d="M712.4,409.3 h25.7c1.6,0,3.8,0.9,4.9,2l7.4,7.4l0.9,0.9l18.7,18.7l1.8,1.8l3.5,3.5c1.1,1.1,2,3.3,2,4.9v23.6l0,1.4v3c0,1.6,0.9,3.8,2,4.9 l11.3,11.3c1.1,1.1,3.3,2,4.9,2h9.5"
        />
        <path
          strokeWidth="0.805"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          d="M646.1,400.4 h8.3c1.6,0,3.8,0.9,4.9,2l1.3,1.3l2.1,2.1l1.4,1.4c1.1,1.1,3.3,2,4.9,2l42.7,0"
        />
        <line
          strokeWidth="0.805"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          x1="592.8"
          y1="400.4"
          x2="645"
          y2="400.4"
        />
        <path
          strokeWidth="0.805"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          d="M537.1,426.3 l14.8,0c1.6,0,3.8-0.9,4.9-2l16-16l2.5-2.5l3.4-3.4c1.1-1.1,3.3-2,4.9-2h9.3"
        />
        <path
          strokeWidth="0.805"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          d="M406.2,401.9 h18.2c1.6,0,3.8,0.9,4.9,2l20.3,20.3c1.1,1.1,3.3,2,4.9,2h9.4"
        />
        <polyline
          strokeWidth="0.805"
          strokeLinejoin="round"
          strokeMiterlimit="3.994"
          points=" 463.7,426.3 500.5,426.3 536.7,426.3 "
        />
      </g>
      <StationIcon
        x={1019.85}
        y={165.25}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={315}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Shenfield }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Shenfield}
        isInterchange
      />
      <StationIcon
        x={1001.85}
        y={183.25}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Brentwood }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Brentwood}
        isWithWhiteLine
      />
      <StationIcon
        x={976.05}
        y={209.05}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.HaroldWood }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.HaroldWood}
        isWithWhiteLine
      />
      <StationIcon
        x={966.25}
        y={218.85}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.GideaPark }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.GideaPark}
        isWithWhiteLine
      />
      <StationIcon
        x={938.75}
        y={246.35}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.ChadwellHeath }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.ChadwellHeath}
        isWithWhiteLine
      />
      <StationIcon
        x={921.45}
        y={263.65}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Goodmayes }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Goodmayes}
        isWithWhiteLine
      />
      <StationIcon
        x={913.25}
        y={271.85}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.SevenKings }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.SevenKings}
        isWithWhiteLine
      />
      <StationIcon
        x={903.85}
        y={281.25}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Ilford }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Ilford}
        isWithWhiteLine
      />
      <StationIcon
        x={896.2}
        y={288.85}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.ManorPark }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.ManorPark}
        isWithWhiteLine
      />
      <StationIcon
        x={881.2}
        y={303.9}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.ForestGate }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.ForestGate}
        isInterchange
      />
      <StationIcon
        x={863.2}
        y={321.9}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Maryland }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Maryland}
        isWithWhiteLine
      />
      <StationIcon
        x={259.9}
        y={422.25}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.ActonMainLine }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.ActonMainLine}
        isWithWhiteLine
      />
      <StationIcon
        x={193.9}
        y={444.85}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={180}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.WestEaling }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.WestEaling}
        isInterchange
      />
      <StationIcon
        x={172.9}
        y={444.75}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={0}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Hanwell }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Hanwell}
        isWithWhiteLine
      />
      <StationIcon
        x={156.2}
        y={444.85}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={180}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Southall }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Southall}
        isWithWhiteLine
      />
      <StationIcon
        x={123.9}
        y={444.85}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={0}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.HayesHarlington }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.HayesHarlington}
        isInterchange
      />
      <StationIcon
        x={106.05}
        y={429}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.WestDrayton }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.WestDrayton}
        isWithWhiteLine
      />
      <StationIcon
        x={106.05}
        y={408.5}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Iver }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Iver}
        isWithWhiteLine
      />
      <StationIcon
        x={106.05}
        y={397.8}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Langley }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Langley}
        isWithWhiteLine
      />
      <StationIcon
        x={106.05}
        y={386}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Slough }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Slough}
        isInterchange
      />
      <StationIcon
        x={106.05}
        y={374.4}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Burnham }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Burnham}
        isWithWhiteLine
      />
      <StationIcon
        x={106.05}
        y={362.7}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Taplow }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Taplow}
        isWithWhiteLine
      />
      <StationIcon
        x={106.05}
        y={351}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Maidenhead }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Maidenhead}
        isInterchange
      />
      <StationIcon
        x={106.05}
        y={339.4}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Twyford }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Twyford}
        isInterchange
      />
      <StationIcon
        x={106.05}
        y={327.5}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Reading }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Reading}
        isInterchange
      />
      <StationIcon
        x={928.9}
        y={585.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Woolwich }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Woolwich}
        isInterchange
      />
      <StationIcon
        x={928.9}
        y={597.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.AbbeyWood }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.AbbeyWood}
        isInterchange
      />
    </g>
  );
});

export default Elizabeth;
