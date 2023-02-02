import React, { memo, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getIsLineActiveSelector,
  selectLine,
  selectSelectedStation,
  selectStation,
} from "../../store/map";
import { Line, Station } from "../../config";
import classNames from "classnames";
import { StationIcon } from "../StationIcon";
import { STROKE_WIDTH } from "../../constant/main";

const Overground: FC = memo(() => {
  const isActive = useAppSelector(getIsLineActiveSelector(Line.Overground));
  const selectedStation = useAppSelector(selectSelectedStation);

  const dispatch = useAppDispatch();
  return (
    <g
      className={classNames("line", { disabled: !isActive })}
      onClick={() => dispatch(selectLine({ line: Line.Overground }))}
      fill="#F58025"
    >
      <path
        id="overground_910ggosplok_910guprhlwy"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M595,272.4h-16.3c-1.8,0-4.2,1-5.4,2.3l-19.9,19.9c-1.2,1.2-3.7,2.3-5.4,2.3c-1.3,0-3.7,0-3.7,0"
        className="disrupted"
      />
      <path
        id="overground_910guprhlwy_910gcrouchh"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M638,253.7l-15,15l-1.5,1.5c-1.2,1.2-3.7,2.3-5.4,2.3H595"
        className="disrupted"
      />
      <path
        id="overground_910gcrouchh_910ghrgygl"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d="M695.2,244.7l-45.1,0c-1.8,0-4.2,1-5.4,2.3l-7.8,7.8"
        className="disrupted"
      />
      <line
        id="overground_910ghrgygl_910gstotnhm"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="731"
        y1="244.7"
        x2="695.4"
        y2="244.7"
        className="disrupted"
      />
      <path
        id="overground_910gstotnhm_910gblchsrd"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M756.2,256.7l-9.8-9.8c-1.2-1.2-3.7-2.3-5.4-2.3l-10,0"
        className="disrupted"
      />
      <line
        id="overground_910gblchsrd_910gwlthqrd"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="776.7"
        y1="277.2"
        x2="756.2"
        y2="256.7"
        className="disrupted"
      />
      <path
        id="overground_910gwlthqrd_910gleytnmr"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M807.4,294.5h-10.3c-1.7,0-4.2-1-5.4-2.3l-14.9-15"
        className="disrupted"
      />
      <line
        id="overground_910gleytnmr_910glytnshr"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="827.9"
        y1="294.5"
        x2="805.9"
        y2="294.5"
        className="disrupted"
      />
      <line
        id="overground_910glytnshr_910gwnstdpk"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="870.2"
        y1="294.5"
        x2="826.4"
        y2="294.5"
        className="disrupted"
      />
      <path
        id="overground_910gwnstdpk_910gwdgrnpk"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M899.6,313.6l-16.8-16.8c-1.2-1.2-3.7-2.3-5.4-2.3h-7.2"
        className="disrupted"
      />
      <path
        id="overground_910gwdgrnpk_910gbkg"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d="M909.1,345l-3.1-3.1c-1.2-1.2-2.3-3.7-2.3-5.4l0-6.9l0-1l0-7.8c0-1.8-1-4.2-2.3-5.4l-3.1-3.1"
      />
      <path
        id="overground_910gdalskld_910ghacknyc"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M753.1,339.9h-22.2c-1.8,0-4.2-1-5.4-2.3l-6.9-7c-1.7-1.7-4.1-2.8-6.8-2.8h-4.2"
        className="disrupted"
      />
      <path
        id="overground_910gshmpstd_910geuston"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M472.6,350l43.5,0c1.8,0,4.2,1,5.4,2.3c1.2,1.2,16.6,16.7,16.6,16.7"
        className="disrupted"
      />
      <line
        id="overground_910gklbrnhr_910gshmpstd"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="374.7"
        y1="350"
        x2="474.1"
        y2="350"
        className="disrupted"
      />
      <path
        id="overground_910gqprk_910gklbrnhr"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M322.5,341.6l0,3.1c0,1.3,0.6,2.9,1.6,3.7l0,0l0,0c0.9,0.9,2.5,1.6,3.7,1.6l48.3,0"
        className="disrupted"
      />
      <line
        id="overground_910gkenslg_910gqprk"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="322.5"
        y1="332.5"
        x2="322.5"
        y2="341.6"
        className="disrupted"
      />
      <line
        id="overground_910gwlsdjhl_910gkenslg"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="322.5"
        y1="324.1"
        x2="322.5"
        y2="334"
        className="disrupted"
      />
      <line
        id="overground_910gharlsdn_910gwlsdjhl"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="322.5"
        y1="314.6"
        x2="322.5"
        y2="324.1"
        className="disrupted"
      />
      <line
        id="overground_910gstnbgpk_910gharlsdn"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="322.5"
        y1="305.5"
        x2="322.5"
        y2="316.1"
        className="disrupted"
      />
      <line
        id="overground_910gwmby_910gstnbgpk"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="322.5"
        y1="297"
        x2="322.5"
        y2="307"
        className="disrupted"
      />
      <line
        id="overground_910gnwembly_910gwmby"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="322.5"
        y1="287.2"
        x2="322.5"
        y2="297"
        className="disrupted"
      />
      <line
        id="overground_910gskenton_910gnwembly"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="322.5"
        y1="277.7"
        x2="322.5"
        y2="288.7"
        className="disrupted"
      />
      <line
        id="overground_910gkton_910gskenton"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="322.5"
        y1="245.7"
        x2="322.5"
        y2="279.2"
        className="disrupted"
      />
      <line
        id="overground_910ghrow_910gkton"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="322.5"
        y1="226.4"
        x2="322.5"
        y2="245.7"
        className="disrupted"
      />
      <line
        id="overground_910ghedstnl_910ghrow"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="322.5"
        y1="214.7"
        x2="322.5"
        y2="226.4"
        className="disrupted"
      />
      <line
        id="overground_910ghtchend_910ghedstnl"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="322.5"
        y1="201.5"
        x2="322.5"
        y2="216.2"
        className="disrupted"
      />
      <line
        id="overground_910gcrpndpk_910ghtchend"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="322.5"
        y1="189.1"
        x2="322.5"
        y2="203"
        className="disrupted"
      />
      <line
        id="overground_910gbushydc_910gcrpndpk"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="322.5"
        y1="175.8"
        x2="322.5"
        y2="189.2"
        className="disrupted"
      />
      <line
        id="overground_910gwatfdhs_910gbushydc"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="322.5"
        y1="160.3"
        x2="322.5"
        y2="175.8"
        className="disrupted"
      />
      <line
        id="overground_910gwatfjdc_910gwatfdhs"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="322.5"
        y1="147.7"
        x2="322.5"
        y2="161.8"
        className="disrupted"
      />
      <line
        id="overground_910gcnnb_910gdalskld"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="709.1"
        y1="327.8"
        x2="691.7"
        y2="327.8"
        className="disrupted"
      />
      <line
        id="overground_910grichmnd_910gkewgrdn"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="203.2"
        y1="566.3"
        x2="191.2"
        y2="578.2"
        className="disrupted"
      />
      <line
        id="overground_910gkewgrdn_910ggnrsbry"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="229"
        y1="540.5"
        x2="203.7"
        y2="565.7"
        className="disrupted"
      />
      <path
        id="overground_910ggnrsbry_910gsacton_00000061429662627198764800000010400389789070440606_"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M271.4,488.1v6.8c0,1.8-1,4.2-2.3,5.4l-30.6,30.6l-9.6,9.6"
        className="disrupted"
      />
      <line
        id="overground_910gsacton_910gactnctl"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="271.4"
        y1="474.9"
        x2="271.4"
        y2="488.2"
        className="disrupted"
      />
      <path
        id="overground_910gactnctl_910gwlsdjhl_00000107572231721596735410000011096577582436266136_"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2706"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M321.1,323.8l-47.4,47.4c-1.2,1.2-2.3,3.7-2.3,5.4V475"
        className="disrupted"
      />
      <line
        id="overground_910gkenr_910gbrbypk"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="377.4"
        y1="319.3"
        x2="349.3"
        y2="319.3"
        className="disrupted"
      />
      <line
        id="overground_910gbrbypk_910gbrby"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="397.1"
        y1="319.3"
        x2="376"
        y2="319.3"
        className="disrupted"
      />
      <path
        id="overground_910gbrby_910gwhmdstd"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d="M438.2,307.2h-18.5c-1.8,0-4.2,1-5.4,2.3l0,0l-7.5,7.5c-1.2,1.2-3.7,2.3-5.4,2.3h-0.8h-4.8"
        className="disrupted"
      />
      <line
        id="overground_910gwhmdstd_910gfnchlyr"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="458.5"
        y1="307.2"
        x2="438.2"
        y2="307.2"
        className="disrupted"
      />
      <line
        id="overground_910gfnchlyr_910ghmpstdh"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="496.9"
        y1="307.2"
        x2="458.5"
        y2="307.2"
        className="disrupted"
      />
      <line
        id="overground_910ghmpstdh_910ggosplok"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="544.9"
        y1="307.2"
        x2="496.8"
        y2="307.2"
        className="disrupted"
      />
      <path
        id="overground_910ggosplok_910gkntshtw"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M555.2,311.1l-1.5-1.5c-1.2-1.2-3.7-2.3-5.4-2.3c-0.9,0-3.2,0-3.2,0"
        className="disrupted"
      />
      <line
        id="overground_910gkntshtw_910gcmdnrd"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="566"
        y1="321.9"
        x2="554.2"
        y2="310.1"
        className="disrupted"
      />
      <path
        id="overground_910gcmdnrd_910gcldnnrb"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M643.1,327.9h-68c-1.8,0-4.2-1-5.4-2.3l-3.7-3.7"
        className="disrupted"
      />
      <line
        id="overground_910gcldnnrb_910ghghi"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="667.1"
        y1="327.9"
        x2="643.1"
        y2="327.9"
        className="disrupted"
      />
      <line
        id="overground_910ghghi_910gcnnb"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="691.7"
        y1="327.9"
        x2="667.1"
        y2="327.9"
        className="disrupted"
      />
      <line
        id="overground_910ghacknyc_910ghomrton"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="783.5"
        y1="339.9"
        x2="753.1"
        y2="339.9"
        className="disrupted"
      />
      <line
        id="overground_910ghomrton_910ghacknyw"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="810.5"
        y1="339.9"
        x2="783.4"
        y2="339.9"
        className="disrupted"
      />
      <line
        id="overground_910ghacknyw_910gstfd"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="837.4"
        y1="339.9"
        x2="810.4"
        y2="339.9"
        className="disrupted"
      />
      <line
        id="overground_910gpckhmqd_910gpckhmry"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="641"
        y1="629.2"
        x2="662.7"
        y2="607.5"
      />
      <path
        id="overground_910gpckhmry_910gdenmrkh"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M579.8,655.9c0,0,29.7,0,31.2,0c2.1,0,4.1-0.9,5.5-2.3l24.5-24.5"
      />
      <path
        id="overground_910gdenmrkh_910gclphhs"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M500.5,648.4l5.3,5.3c1.5,1.5,3.5,2.3,5.5,2.3l68.5,0"
      />
      <path
        id="overground_910gclphhs_910gwndswrd"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M462,629.2l16.2,0c2,0,4,0.8,5.5,2.3c1.8,1.8,10.9,10.9,16.8,16.8"
      />
      <path
        id="overground_910gwndswrd_910gclphmj1"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M424.9,629.2c2.6,0,38.5,0,38.5,0"
      />
      <path
        id="overground_910gclphmjc_910gcseah"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d="M402.8,583.6l13,13c1.2,1.2,2.3,4.5,2.3,6.3c0,2.7,0,18.2,0,18.2"
        className="disrupted"
      />
      <path
        id="overground_910gcseah_910gwbrmptn"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M369.4,542.7v4.4c0,1.8,1,4.2,2.3,5.4l31.1,31.1"
        className="disrupted"
      />
      <line
        id="overground_910gwbrmptn_910gkenolym"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="369.4"
        y1="483.8"
        x2="369.4"
        y2="542.7"
        className="disrupted"
      />
      <path
        id="overground_910gkenolym_910gshpdsb"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d="M354.8,462.9l12.2,12.2c1.2,1.2,2.2,3.6,2.2,5.3v3.2"
        className="disrupted"
      />
      <path
        id="overground_910gshpdsb_910gwlsdjhl_00000147207102146365207910000006439579314516934059_"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M321.1,323.8l-33.6,33.6c-1.2,1.2-2.3,3.7-2.3,5.4l-0.1,26.1c0,2.3,0.6,4.9,2.2,6.5l67.6,67.6"
        className="disrupted"
      />
      <path
        id="overground_910gkenr_910gwlsdjhl"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d="M349.3,319.3h-18.2h-1h-1.7c-1.8,0-4.2,1-5.3,2.3"
        className="disrupted"
      />
      <path
        id="overground_910gemrspkh_910gupmnstr"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M974.6,250.2l10.8,10.8c1.2,1.2,3.7,2.3,5.4,2.3c2.5,0,5.7,0,5.7,0"
        className="disrupted"
      />
      <line
        id="overground_910gromford_910gemrspkh"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="954.9"
        y1="230.5"
        x2="974.6"
        y2="250.2"
        className="disrupted"
      />
      <rect
        id="raillo-overground_910gkenslg"
        x="323.7"
        y="332.5"
        fill="#F58025"
        width="1.5"
        height="1.5"
      />
      <rect
        id="raillo-overground_910gskenton"
        x="319.9"
        y="277.8"
        fill="#F58025"
        width="1.5"
        height="1.5"
        className="disrupted"
      />
      <rect
        id="raillo-overground_910gnwembly"
        x="319.9"
        y="287.2"
        fill="#F58025"
        width="1.5"
        height="1.5"
        className="disrupted"
      />
      <rect
        id="raillo-overground_910gstnbgpk"
        x="319.9"
        y="305.5"
        fill="#F58025"
        width="1.5"
        height="1.5"
        className="disrupted"
      />
      <rect
        id="raillo-overground_910gharlsdn"
        x="319.9"
        y="314.6"
        fill="#F58025"
        width="1.5"
        height="1.5"
        className="disrupted"
      />
      <path
        id="overground_910gsurreyq_910gpckhmqd"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2706"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M722.8,557.4c0,0,0,8.9,0,10.9c0,2-0.8,4-2.3,5.5c-1.4,1.4-12,12-14.9,14.9c-1.4,1.4-3.3,2.3-5.5,2.3h-17.6 c-2.1,0-4.1,0.9-5.5,2.3c-1,1-14.4,14.4-14.4,14.4"
      />
      <path
        id="overground_910gsurreyq_910gnwcrell"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M722.8,560.5c0,0,0,5.7,0,7.7c0,2,0.8,4,2.3,5.5c1.4,1.4,6.4,6.4,6.4,6.4c1.5,1.5,2.3,3.5,2.3,5.5v1.1v9.7"
        className="disrupted"
      />
      <path
        id="overground_910gbarking_910gbkrvs_00000029020383429301200320000015285000965090029742_"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M909,345l9.7,9.7c1.2,1.2,3.7,2.3,5.4,2.3l6.4,0l1.6,0l3.4,0c1.8,0,4.2,1,5.4,2.3l46.6,46.6"
        className="disrupted"
      />
      <path
        id="overground_910gsbury_910gedmngrn"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M724.5,174.1l-8.1,8.1c-1.2,1.2-2.3,3.7-2.3,5.4c0,1.6,0,4.6,0,4.6"
        className="disrupted"
      />
      <line
        id="overground_910gturkyst_910gsbury"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="737.5"
        y1="161.1"
        x2="723.5"
        y2="175.1"
        className="disrupted"
      />
      <line
        id="overground_910gthbldsg_910gturkyst"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="749.9"
        y1="148.7"
        x2="736.4"
        y2="162.2"
        className="disrupted"
      />
      <line
        id="overground_910gcheshnt_910gthbldsg"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="760.9"
        y1="137.6"
        x2="748.9"
        y2="149.7"
        className="disrupted"
      />
      <path
        id="overground_910genfldtn_910gbhillpk"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M714.1,163.3c0-9.6,0-16,0-16"
        className="disrupted"
      />
      <path
        id="overground_910gbhillpk_910gedmngrn"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d="M714.1,192.4c0-12,0-20.9,0-29.2"
        className="disrupted"
      />
      <path
        id="overground_910gedmngrn_910gsivrst"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M714.1,204.6c0,0,0-7.9,0-12.1"
        className="disrupted"
      />
      <line
        id="overground_910gsivrst_910gwhhrtla"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="714.1"
        y1="215.5"
        x2="714.1"
        y2="203.1"
        className="disrupted"
      />
      <line
        id="overground_910gwhhrtla_910gbrucgrv"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="714.1"
        y1="226.3"
        x2="714.1"
        y2="215.4"
        className="disrupted"
      />
      <path
        id="overground_910gbrucgrv_910gsevnsis"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M714.1,261.6c0-15.8,0-36.8,0-36.8"
        className="disrupted"
      />
      <path
        id="overground_910gsevnsis_910gstmfdhl"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d="M714,282c0,0,0-13.1,0-20.4"
        className="disrupted"
      />
      <path
        id="overground_910gstmfdhl_910gstknwng"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M726.5,299.8l-10.2-10.2c-1.2-1.2-2.3-3.7-2.3-5.4c0-0.2,0-3.7,0-3.7"
        className="disrupted"
      />
      <line
        id="overground_910gstknwng_910grctryrd"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="740.5"
        y1="313.9"
        x2="725.4"
        y2="298.7"
        className="disrupted"
      />
      <path
        id="overground_910grctryrd_910ghaknynm"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M747.9,328.6c0-2.6,0-4.2,0-4.2c0-1.8-1-4.2-2.3-5.4l-6.1-6.1"
        className="disrupted"
      />
      <line
        id="overground_910ghaknynm_910glonflds"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="748"
        y1="355.8"
        x2="747.9"
        y2="330.6"
        className="disrupted"
      />
      <path
        id="overground_910glonflds_910gcamhth"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M744.2,362.7l1.5-1.5c1.2-1.2,2.3-3.7,2.3-5.4c0-0.3,0-1.5,0-1.5"
        className="disrupted"
      />
      <line
        id="overground_910gcamhth_910gbthnlgr"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="734.8"
        y1="372.1"
        x2="745.2"
        y2="361.7"
        className="disrupted"
      />
      <path
        id="overground_910gbthnlgr_910glivst_00000054266296952207365130000012265618881419884427_"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M657.2,386.5h60.1c1.8,0,4.2-1,5.4-2.3l13.2-13.2"
        className="disrupted"
      />
      <path
        id="overground_910gchingfd_910ghghmspk"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M785.4,206.1c0-13.9,0-26.6,0-26.6"
        className="disrupted"
      />
      <line
        id="overground_910ghghmspk_910gwdst"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="785.4"
        y1="232.4"
        x2="785.4"
        y2="206.1"
        className="disrupted"
      />
      <line
        id="overground_910gwdst_910gwltwcen"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="785.4"
        y1="267.2"
        x2="785.4"
        y2="230.9"
        className="disrupted"
      />
      <path
        id="overground_910gwltwcen_910gstjmsst"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M772,297.2l11.2-11.2c1.2-1.2,2.3-3.7,2.3-5.4c0-0.5,0-13.3,0-13.3"
        className="disrupted"
      />
      <line
        id="overground_910gstjmsst_910gclapton"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="762.7"
        y1="306.4"
        x2="773.2"
        y2="296"
        className="disrupted"
      />
      <path
        id="overground_910gclapton_910ghaknynm"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M763.8,305.3l-13.5,13.5c-1.4,1.4-2.4,3.8-2.4,5.6c0,1.5,0,6.2,0,6.2"
        className="disrupted"
      />
      <path
        id="overground_910gsydenhm_910gcrystlp"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M699.7,689.1c0,0,13.2-13.2,20.8-20.8c1.5-1.5,2.3-3.5,2.3-5.5c0-1.6,0-4.1,0-4.1"
        className="disrupted"
      />
      <line
        id="overground_910gnorwdj_910gwcroydn"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="722.8"
        y1="694"
        x2="722.8"
        y2="714.8"
        className="disrupted"
      />
      <line
        id="overground_910ganerley_910gnorwdj"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="722.8"
        y1="682.3"
        x2="722.8"
        y2="694"
        className="disrupted"
      />
      <line
        id="overground_910gpenew_910ganerley"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="722.8"
        y1="670.1"
        x2="722.8"
        y2="682.4"
        className="disrupted"
      />
      <line
        id="overground_910gsydenhm_910gpenew"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="722.8"
        y1="658.2"
        x2="722.8"
        y2="671.6"
        className="disrupted"
      />
      <line
        id="overground_910gforesth_910gsydenhm"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="722.8"
        y1="646.5"
        x2="722.8"
        y2="658.2"
        className="disrupted"
      />
      <line
        id="overground_910ghonropk_910gforesth"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="722.8"
        y1="633.7"
        x2="722.8"
        y2="646.5"
        className="disrupted"
      />
      <line
        id="overground_910gbrockly_910ghonropk"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="722.8"
        y1="621.7"
        x2="722.8"
        y2="633.8"
        className="disrupted"
      />
      <line
        id="overground_910gnewxgte_910gbrockly"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="722.8"
        y1="607.2"
        x2="722.8"
        y2="621.8"
        className="disrupted"
      />
      <line
        id="overground_910ghghi_910gcnnb"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="691.4"
        y1="334.9"
        x2="673.2"
        y2="334.9"
      />
      <path
        id="overground_910gcnnb_910gdals"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d="M717,346.3l-10.1-10.1c-0.8-0.8-1.9-1.3-3.1-1.3c-1,0-6,0-12.3,0"
        className="disrupted"
      />
      <path
        id="overground_910gdals_910ghaggers"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M722.8,362.8c0,0,0-4.9,0-7.6c0-1.8-1-4.2-2.3-5.4l-3.6-3.6"
        className="disrupted"
      />
      <path
        id="overground_910ghaggers_910ghoxton"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M722.8,375.4c0-4.9,0-7.5,0-12.6"
        className="disrupted"
      />
      <path
        id="overground_910ghoxton_910gshrdhst"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M722.8,393.5c0-8.1,0-9.3,0-18.1"
        className="disrupted"
      />
      <path
        id="overground_910gshrdhst_910gwchapel"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M722.8,420c0-5.5,0-20.6,0-26.5"
        className="disrupted"
      />
      <path
        id="overground_910gwchapel_910gshadwel"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M722.8,477c0-13.1,0-41.1,0-56.8"
        className="disrupted"
      />
      <line
        id="overground_910gshadwel_910gwapping"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="722.8"
        y1="487.5"
        x2="722.8"
        y2="477"
        className="disrupted"
      />
      <path
        id="overground_910gwapping_910grtherhi"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M722.8,515.7c0,0,0-29.6,0-29.6"
        className="disrupted"
      />
      <path
        id="overground_910grtherhi_910gcndaw"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d="M722.8,536.5c0,0,0-10.2,0-20.9"
        className="disrupted"
      />
      <path
        id="overground_910gcndaw_910gsurreyq"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        d=" M722.8,557.7c0-7.5,0-11.6,0-21.1"
        className="disrupted"
      />
      <line
        id="overground_910gsurreyq_910gnewxgte"
        fill="none"
        stroke="#F58025"
        strokeWidth="2.2707"
        strokeLinejoin="round"
        strokeMiterlimit="3.9938"
        x1="722.8"
        y1="556.2"
        x2="722.7"
        y2="607.2"
        className="disrupted"
      />
      <g className="white_line">
        <path
          strokeWidth="0.7795"
          strokeMiterlimit="3.9938"
          d=" M837.4,339.9H730.9c-1.8,0-4.2-1-5.4-2.3l-6.9-7c-1.7-1.7-4.1-2.8-6.8-2.8H575.1c-1.8,0-4.2-1-5.4-2.3l-16-16 c-1.2-1.2-3.7-2.3-5.4-2.3l-128.6,0c-1.8,0-4.2,1-5.4,2.3l-7.5,7.5c-1.2,1.2-3.7,2.3-5.4,2.3h-72.6c-1.8,0-4.2,1-5.4,2.3 l-49.6,49.6c-1.2,1.2-2.3,3.7-2.3,5.4v118.2c0,1.8-1,4.2-2.3,5.4l-22.1,22.1l-56,56"
        />
        <path
          strokeWidth="0.7795"
          strokeMiterlimit="3.9938"
          d="M287.6,357.4c-1.2,1.2-2.3,3.7-2.3,5.4l-0.1,26.1c0,2.3,0.6,4.9,2.2,6.5l79.8,79.8c1.2,1.2,2.2,3.6,2.2,5.3v62.2v4.4 c0,1.8,1,4.2,2.3,5.4l44.2,44.2c1.2,1.2,2.3,4.5,2.3,6.3c0,2.7,0,18.2,0,18.2"
        />
        <path
          strokeWidth="0.7795"
          strokeMiterlimit="3.9938"
          d=" M322.5,141.7l0,203c0,1.2,0.6,2.9,1.6,3.7l0,0l0,0c0.9,0.9,2.5,1.6,3.7,1.6l188.2,0c1.8,0,4.2,1,5.4,2.3 c1.2,1.2,16.6,16.7,16.6,16.7"
        />
        <path
          strokeWidth="0.7795"
          strokeMiterlimit="3.9938"
          d=" M699.7,689.1c0,0,19.1-19.1,20.8-20.8c1.5-1.5,2.3-3.5,2.3-5.5c0-1.6,0-4.1,0-4.1"
        />
        <path
          strokeWidth="0.7795"
          strokeMiterlimit="3.9938"
          d=" M722.8,714.8c0,0,0-356.9,0-359.6c0-1.8-1-4.2-2.3-5.4l-13.7-13.6c-0.8-0.8-1.9-1.3-3.1-1.3c-1,0-30.5,0-30.5,0"
        />
        <path
          strokeWidth="0.7795"
          strokeMiterlimit="3.9938"
          d=" M722.8,568.2c0,2-0.8,4-2.3,5.5c-1.4,1.4-13.1,13.1-14.9,14.9c-1.4,1.4-3.3,2.3-5.5,2.3h-17.6c-2.1,0-4.1,0.9-5.5,2.3 c-1,1-60.5,60.5-60.5,60.5c-1.4,1.4-3.3,2.3-5.5,2.3c-1.5,0-99.8,0-99.8,0c-2,0-4-0.8-5.5-2.3c0,0-20.3-20.3-22.1-22.1 c-1.5-1.5-3.5-2.3-5.5-2.3l-53.3,0"
        />
        <path
          strokeWidth="0.7795"
          strokeMiterlimit="3.9938"
          d=" M722.8,568.2c0,2,0.8,4,2.3,5.5c1.4,1.4,6.4,6.4,6.4,6.4c1.5,1.5,2.3,3.5,2.3,5.5v1.1v9.7"
        />
        <path
          strokeWidth="0.7795"
          strokeMiterlimit="3.9938"
          d=" M954.9,230.5l30.5,30.5c1.2,1.2,3.7,2.3,5.4,2.3c2.5,0,5.7,0,5.7,0"
        />
        <path
          strokeWidth="0.7795"
          strokeMiterlimit="3.9938"
          d="M544.35,297c0,0,2.4,0,3.7,0c1.8,0,4.2-1,5.4-2.3l19.9-19.9c1.2-1.2,3.7-2.3,5.4-2.3h37.4c1.8,0,4.2-1,5.4-2.3l23.3-23.3 c1.2-1.2,3.7-2.3,5.4-2.3c2.3,0,90.7,0,90.7,0c1.9,0,4.2,1,5.4,2.3l45.2,45.3c1.2,1.2,3.7,2.3,6.5,2.3l79.4,0c1.5,0,4,1,5.2,2.3 l18.7,18.7c1.2,1.2,2.3,3.7,2.3,5.4l0,7.8l0,1l0,6.9c0,1.8,1,4.2,2.3,5.4l3.1,3.1l0.5,0.5l9.2,9.2c1.2,1.2,3.7,2.3,5.4,2.3l5.2,0 l2.1,0l4.1,0c1.8,0,4.2,1,5.4,2.3l46.6,46.6"
        />
        <g>
          <path
            strokeWidth="0.7795"
            strokeMiterlimit="3.9938"
            d="M761.0,137.6l-44.6,44.6c-1.2,1.2-2.3,3.7-2.3,5.4"
          />
          <path
            strokeWidth="0.7795"
            strokeMiterlimit="3.9938"
            d=" M657.2,386.5h60.1c1.8,0,4.2-1,5.4-2.3l23-23c1.2-1.2,2.3-3.7,2.3-5.4c0-0.3,0,0,0,0v-31.4c0-1.8-1-4.2-2.3-5.4l-29.3-29.3 c-1.2-1.2-2.3-3.7-2.3-5.4c0,0.2,0,0.2,0-136.9"
          />
          <path
            strokeWidth="0.7795"
            strokeMiterlimit="3.9938"
            d="M748.0,324.4c0-1.8,1-4.2,2.3-5.5l32.8-32.8c1.3-1.3,2.4-3.8,2.4-5.5c0-0.5,0-101,0-101"
          />
        </g>
      </g>
      <StationIcon
        x={724.1}
        y={174.55}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Southbury }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Southbury}
        isWithWhiteLine
      />
      <StationIcon
        x={737.05}
        y={161.6}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.TurkeyStreet }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.TurkeyStreet}
        isWithWhiteLine
      />
      <StationIcon
        x={749.55}
        y={149.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.TheobaldsGrove }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.TheobaldsGrove}
        isWithWhiteLine
      />
      <StationIcon
        x={375.45}
        y={350}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={0}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.KilburnHighRoad }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.KilburnHighRoad}
        isWithWhiteLine
      />
      <StationIcon
        x={763.4}
        y={305.8}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Clapton }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Clapton}
        isWithWhiteLine
      />
      <StationIcon
        x={772.75}
        y={296.5}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.StJamesStreet }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.StJamesStreet}
        isWithWhiteLine
      />
      <StationIcon
        x={740.2}
        y={313.5}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={45}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.RectoryRoad }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.RectoryRoad}
        isWithWhiteLine
      />
      <StationIcon
        x={726}
        y={299.25}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={45}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.StokeNewington }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.StokeNewington}
        isWithWhiteLine
      />
      <StationIcon
        x={637.4}
        y={254.3}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={315}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.CrouchHill }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.CrouchHill}
        isWithWhiteLine
      />
      <StationIcon
        x={271.5}
        y={488.4}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.SouthActon }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.SouthActon}
        isWithWhiteLine
      />
      <StationIcon
        x={271.5}
        y={475.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.ActonCentral }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.ActonCentral}
        isWithWhiteLine
      />
      <StationIcon
        x={462.75}
        y={629.35}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={180}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.WandsworthRoad }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.WandsworthRoad}
        isWithWhiteLine
      />
      <StationIcon
        x={716.4}
        y={345.75}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={225}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.DalstonJunction }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.DalstonJunction}
        isWithWhiteLine
      />
      <StationIcon
        x={737.2}
        y={369.75}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.BethnalGreenOverground }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.BethnalGreenOverground}
        isWithWhiteLine
      />
      <StationIcon
        x={744.65}
        y={362.3}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={135}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.CambridgeHeath }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.CambridgeHeath}
        isWithWhiteLine
      />
      <StationIcon
        x={748.05}
        y={355}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.LondonFields }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.LondonFields}
        isWithWhiteLine
      />
      <StationIcon
        x={806.65}
        y={294.38}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={0}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.LeytonMidlandRoad }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.LeytonMidlandRoad}
        isWithWhiteLine
      />
      <StationIcon
        x={827.1}
        y={294.45}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={180}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.LeytonstoneHighRoad }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.LeytonstoneHighRoad}
        isWithWhiteLine
      />
      <StationIcon
        x={783.5}
        y={339.9}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={180}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Homerton }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Homerton}
        isWithWhiteLine
      />
      <StationIcon
        x={810.5}
        y={339.9}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={180}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.HackneyWick }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.HackneyWick}
        isWithWhiteLine
      />
      <StationIcon
        x={898.8}
        y={312.95}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={45}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.WoodgrangePark }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.WoodgrangePark}
        isWithWhiteLine
      />
      <StationIcon
        x={974.25}
        y={249.8}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={45}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.EmersonPark }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.EmersonPark}
        isWithWhiteLine
      />
      <StationIcon
        x={722.82}
        y={682.6}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Anerley }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Anerley}
        isWithWhiteLine
      />
      <StationIcon
        x={722.82}
        y={670.8}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.PengeWest }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.PengeWest}
        isWithWhiteLine
      />
      <StationIcon
        x={722.77}
        y={646.2}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.ForestHill }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.ForestHill}
        isWithWhiteLine
      />
      <StationIcon
        x={722.77}
        y={634.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.HonorOakPark }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.HonorOakPark}
        isWithWhiteLine
      />
      <StationIcon
        x={722.77}
        y={622.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Brockley }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Brockley}
        isWithWhiteLine
      />
      <StationIcon
        x={722.77}
        y={557}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.SurreyQuays }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.SurreyQuays}
        isWithWhiteLine
      />
      <StationIcon
        x={722.77}
        y={515.7}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Rotherhithe }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Rotherhithe}
        isWithWhiteLine
      />
      <StationIcon
        x={722.82}
        y={486.75}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Wapping }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Wapping}
        isWithWhiteLine
      />
      <StationIcon
        x={722.77}
        y={394}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.ShoreditchHighStreet }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.ShoreditchHighStreet}
        isWithWhiteLine
      />
      <StationIcon
        x={722.77}
        y={374.95}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Hoxton }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Hoxton}
        isWithWhiteLine
      />
      <StationIcon
        x={722.77}
        y={363.15}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Haggerston }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Haggerston}
        isWithWhiteLine
      />
      <StationIcon
        x={785.55}
        y={206.35}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.HighamsPark }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.HighamsPark}
        isWithWhiteLine
      />
      <StationIcon
        x={785.55}
        y={231.65}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.WoodStreet }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.WoodStreet}
        isWithWhiteLine
      />
      <StationIcon
        x={714.15}
        y={281.2}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.StamfordHill }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.StamfordHill}
        isWithWhiteLine
      />
      <StationIcon
        x={714.15}
        y={225.6}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.BruceGrove }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.BruceGrove}
        isWithWhiteLine
      />
      <StationIcon
        x={714.15}
        y={215.4}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.WhiteHartLane }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.WhiteHartLane}
        isWithWhiteLine
      />
      <StationIcon
        x={714.15}
        y={203.8}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.SilverStreet }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.SilverStreet}
        isWithWhiteLine
      />
      <StationIcon
        x={714.1}
        y={163.7}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.BushHillPark }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.BushHillPark}
        isWithWhiteLine
      />
      <StationIcon
        x={708.25}
        y={327.77}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={0}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.DalstonKingsland }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.DalstonKingsland}
        isWithWhiteLine
      />
      <StationIcon
        x={554.75}
        y={310.49}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={45}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.KentishTownWest }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.KentishTownWest}
        isWithWhiteLine
      />
      <StationIcon
        x={497.4}
        y={307.18}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={0}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.HampsteadHeath }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.HampsteadHeath}
        isWithWhiteLine
      />
      <StationIcon
        x={396.4}
        y={319.3}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={180}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Brondesbury }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Brondesbury}
        isWithWhiteLine
      />
      <StationIcon
        x={376.8}
        y={319.27}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={0}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.BrondesburyPark }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.BrondesburyPark}
        isWithWhiteLine
      />
      <StationIcon
        x={349.4}
        y={319.27}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={0}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.KensalRise }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.KensalRise}
        isWithWhiteLine
      />
      <StationIcon
        x={322.55}
        y={215.5}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.HeadstoneLane }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.HeadstoneLane}
        isWithWhiteLine
      />
      <StationIcon
        x={322.55}
        y={202.2}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.HatchEnd }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.HatchEnd}
        isWithWhiteLine
      />
      <StationIcon
        x={322.55}
        y={189.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.CarpendersPark }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.CarpendersPark}
        isWithWhiteLine
      />
      <StationIcon
        x={322.55}
        y={161.05}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.WatfordHighStreet }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.WatfordHighStreet}
        isWithWhiteLine
      />
      <StationIcon
        x={594.6}
        y={272.34}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={180}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.UpperHolloway }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.UpperHolloway}
        isInterchange
      />
      <StationIcon
        x={695.1}
        y={244.5}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={0}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.HarringayGreenLanes }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.HarringayGreenLanes}
        isInterchange
      />
      <StationIcon
        x={731}
        y={244.5}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={0}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.SouthTottenham }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.SouthTottenham}
        isInterchange
      />
      <StationIcon
        x={714.1}
        y={192.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.EdmontonGreen }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.EdmontonGreen}
        isInterchange
      />
      <StationIcon
        x={759.9}
        y={138.8}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Cheshunt }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Cheshunt}
        isInterchange
      />
      <StationIcon
        x={776}
        y={276.5}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={225}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.WalthamstowQueensRoad }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.WalthamstowQueensRoad}
        isInterchange
      />
      <StationIcon
        x={872}
        y={294.4}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={180}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.WansteadPark }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.WansteadPark}
        isInterchange
      />
      <StationIcon
        x={643}
        y={328.0}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={180}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.CaledonianRoadBarnsbury }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.CaledonianRoadBarnsbury}
        isInterchange
      />
      <StationIcon
        x={458.4}
        y={307.3}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={180}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.FinchleyRoadFrognal }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.FinchleyRoadFrognal}
        isInterchange
      />
      <StationIcon
        x={399.9}
        y={580.8}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={45}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.ImperialWharf }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.ImperialWharf}
        isInterchange
      />
      <StationIcon
        x={579.9}
        y={655.8}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={0}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.DenmarkHill }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.DenmarkHill}
        isInterchange
      />
      <StationIcon
        x={641}
        y={629.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={315}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.PeckhamRye }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.PeckhamRye}
        isInterchange
      />
      <StationIcon
        x={662.9}
        y={607.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={315}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.QueensRoadPeckham }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.QueensRoadPeckham}
        isInterchange
      />
      <StationIcon
        x={733.8}
        y={596.3}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.NewCross }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.NewCross}
        isInterchange
      />
      <StationIcon
        x={722.75}
        y={607.4}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.NewCrossGate }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.NewCrossGate}
        isInterchange
      />
      <StationIcon
        x={722.75}
        y={658.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Sydenham }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Sydenham}
        isInterchange
      />
      <StationIcon
        x={722.75}
        y={694.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.NorwoodJunction }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.NorwoodJunction}
        isInterchange
      />
      <StationIcon
        x={701.75}
        y={687.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={225}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.CrystalPalace }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.CrystalPalace}
        isInterchange
      />
      <StationIcon
        x={322.55}
        y={146.8}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.WatfordJunction }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.WatfordJunction}
        isInterchange
      />
      <StationIcon
        x={322.55}
        y={175.8}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Bushey }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Bushey}
        isInterchange
      />
      <StationIcon
        x={565.9}
        y={322.2}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={90}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.CamdenRoad }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.CamdenRoad}
        isInterchange
      />
      <StationIcon
        x={499.2}
        y={647.1}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.ClaphamHighStreet }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.ClaphamHighStreet}
        isInterchange
      />
      <StationIcon
        x={474.5}
        y={350.0}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={0}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.SouthHampstead }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.SouthHampstead}
        isInterchange
      />
      <StationIcon
        x={714.15}
        y={148}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.EnfieldTown }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.EnfieldTown}
        isEndingStation
      />
      <StationIcon
        x={785.35}
        y={180}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={270}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.Chingford }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.Chingford}
        isEndingStation
      />
      <StationIcon
        x={987.8}
        y={406.2}
        strokeWidth={STROKE_WIDTH}
        rotationAngle={225}
        onClick={(event) => {
          dispatch(selectStation({ station: Station.BarkingRiverside }));
          event.stopPropagation();
        }}
        isSelected={selectedStation === Station.BarkingRiverside}
        isEndingStation
      />
    </g>
  );
});

export default Overground;
