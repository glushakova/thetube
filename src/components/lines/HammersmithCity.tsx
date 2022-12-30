import React, {memo, FC} from 'react';
import classNames from "classnames";
import {LineProps} from "../../interface/line";

const HammersmithCity: FC<LineProps> = memo(({ line, isSelected, onStationClick, onLineClick }) => {
        return (
            <g className={classNames("line", {"disabled": !isSelected})} onClick={() => onLineClick(line)}>
                    <line id="hammersmith-city_940gzzluehm_940gzzlubkg" fill="none" stroke="#F386A1" strokeWidth="2.2709"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="898" y1="365.9" x2="908.2" y2="355.7"/>
                    <line id="hammersmith-city_940gzzluupk_940gzzluehm" fill="none" stroke="#F386A1" strokeWidth="2.2709"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="885.3" y1="378.6" x2="898" y2="365.9"/>
                    <line id="hammersmith-city_940gzzluplw_940gzzluupk" fill="none" stroke="#F386A1" strokeWidth="2.2709"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="872.5" y1="391.5" x2="886.3" y2="377.6"/>
                    <path id="hammersmith-city_940gzzluwhm_940gzzluplw" fill="none" stroke="#F386A1" strokeWidth="2.2709"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" d=" M854.9,396.9l9.9,0h0c1.2,0,3-0.8,3.8-1.6l5-5"/>
                    <line id="hammersmith-city_940gzzlubbb_940gzzluwhm" fill="none" stroke="#F386A1" strokeWidth="2.2709"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="833.4" y1="396.9" x2="854.9" y2="396.9"/>
                    <line id="hammersmith-city_940gzzlubwr_940gzzlubbb" fill="none" stroke="#F386A1" strokeWidth="2.2709"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="804.9" y1="396.9" x2="833.4" y2="396.9"/>
                    <line id="hammersmith-city_940gzzlumed_940gzzlubwr" fill="none" stroke="#F386A1" strokeWidth="2.2709"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="774.9" y1="396.8" x2="804.9" y2="396.9"/>
                    <path id="hammersmith-city_940gzzlusgn_940gzzlumed" fill="none" stroke="#F386A1"
                          strokeWidth="2.2709" strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M739.8,401.4l1.7-1.7c1.7-1.7,4.7-2.9,7-2.9l26.3,0.1"/>
                    <line id="hammersmith-city_940gzzluwpl_940gzzlusgn" fill="none" stroke="#F386A1"
                          strokeWidth="2.2709" strokeLinejoin="round" strokeMiterlimit="3.9938" x1="722.2" y1="419.1"
                          x2="740.9" y2="400.3"/>
                    <line id="hammersmith-city_940gzzluade_940gzzluwpl" fill="none" stroke="#F386A1" strokeWidth="2.2709"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="712.7" y1="428.6" x2="722.2" y2="419.1"/>
                    <path id="hammersmith-city_940gzzlulvt_940gzzluade" fill="none" stroke="#F386A1"
                          strokeWidth="2.2709" strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M645.8,420.7h40.7c2.7,0,5.2,1,7.1,2.9l7.3,7.3c1.3,1.3,2.5,2.2,4.7,2.2c2.3,0,3.3-0.8,4.6-2.2l2.3-2.3"/>
                    <path id="hammersmith-city_940gzzlumgt_940gzzlulvt" fill="none" stroke="#F386A1"
                          strokeWidth="2.2709" strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M628,418.2l0.8,0.8c1,1,2.4,1.6,3.9,1.6h3.9h0.4h8.8"/>
                    <line
                        id="hammersmith-city_940gzzlubbn_940gzzlumgt_00000028324712810843830830000010353571416719605656_"
                        fill="none" stroke="#F386A1" strokeWidth="2.2709" strokeLinejoin="round"
                        strokeMiterlimit="3.9938" x1="615" y1="405.2" x2="628.8" y2="419.1"/>
                    <line id="hammersmith-city_940gzzlufcn_940gzzlubbn" fill="none" stroke="#F386A1" strokeWidth="2.2709"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="601.5" y1="391.7" x2="615" y2="405.2"/>
                    <path id="hammersmith-city_940gzzluksx_940gzzlufcn" fill="none" stroke="#F386A1"
                          strokeWidth="2.2709" strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M577.9,379.1l6.8,0c2.7,0,5.2,1,7.1,2.9l10.3,10.3"/>
                    <line id="hammersmith-city_940gzzluesq_940gzzluksx" fill="none" stroke="#F386A1" strokeWidth="2.2709"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="524.8" y1="379.1" x2="577.9" y2="379.1"/>
                    <line id="hammersmith-city_940gzzlugps_940gzzluesq" fill="none" stroke="#F386A1" strokeWidth="2.2709"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="491.7" y1="379.1" x2="526.3" y2="379.1"/>
                    <line id="hammersmith-city_940gzzlubst_940gzzlugps" fill="none" stroke="#F386A1" strokeWidth="2.2709"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="473.3" y1="379.1" x2="493.2" y2="379.1"/>
                    <line id="hammersmith-city_940gzzluerc_940gzzlubst" fill="none" stroke="#F386A1" strokeWidth="2.2709"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="417.1" y1="379.1" x2="473.3" y2="379.1"/>
                    <line id="hammersmith-city_940gzzlupah_940gzzluerc" fill="none" stroke="#F386A1" strokeWidth="2.2709"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="383.6" y1="379.1" x2="417.1" y2="379.1"/>
                    <path id="hammersmith-city_940gzzluryo_940gzzlupah" fill="none" stroke="#F386A1"
                          strokeWidth="2.2709" strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M346.8,393.4l9.5-9.5c3.1-3.1,7.3-4.9,11.8-4.9l15.5,0"/>
                    <line id="hammersmith-city_940gzzluwsp_940gzzluryo" fill="none" stroke="#F386A1" strokeWidth="2.2709"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="336.8" y1="403.4" x2="347.9" y2="392.3"/>
                    <path id="hammersmith-city_940gzzlulad_940gzzluwsp" fill="none" stroke="#F386A1"
                          strokeWidth="2.2709" strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M332.1,419.8v-8.5c0-0.8,0.2-1.9,0.7-2.9c0.4-1,1-1.9,1.6-2.5l3.6-3.6"/>
                    <line id="hammersmith-city_940gzzlulrd_940gzzlulad" fill="none" stroke="#F386A1" strokeWidth="2.2709"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="332.1" y1="431.1" x2="332.1" y2="418.2"/>
                    <line id="hammersmith-city_940gzzluwla_940gzzlulrd" fill="none" stroke="#F386A1" strokeWidth="2.2709"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="332.1" y1="461" x2="332.1" y2="429.5"/>
                    <line id="hammersmith-city_940gzzlusbm_940gzzluwla" fill="none" stroke="#F386A1" strokeWidth="2.2709"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="332.1" y1="475.7" x2="332.1" y2="461"/>
                    <line id="hammersmith-city_940gzzlughk_940gzzlusbm" fill="none" stroke="#F386A1" strokeWidth="2.2709"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="332.1" y1="486.5" x2="332.1" y2="474.2"/>
                    <line id="hammersmith-city_940gzzluhsc_940gzzlughk" fill="none" stroke="#F386A1" strokeWidth="2.2709"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="332.1" y1="492.8" x2="332.1" y2="485"/>
                    <rect id="hammersmith-city_940gzzluade" x="710.7" y="426.4"
                          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -93.6552 628.1875)" fill="#F386A1" width="1.5"
                          height="1.5"/>
                    <rect id="hammersmith-city_940gzzlusbm" x="329.5" y="474.2" fill="#F386A1" width="1.5" height="1.5"/>
                    <rect id="hammersmith-city_940gzzlughk" x="329.5" y="485" fill="#F386A1" width="1.5" height="1.5"/>
            </g>
        )
    }
);

export default HammersmithCity;
