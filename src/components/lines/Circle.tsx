import React, {memo, FC} from 'react';
import classNames from "classnames";
import {LineProps} from "../../interface/line";

const Circle: FC<LineProps> = memo(({ line, isSelected, onStationClick, onLineClick }) => {
        return (
            <g className={classNames("line", {"disabled": !isSelected})} onClick={() => onLineClick(line)}>
                    <path id="circle_940gzzluerc_940gzzlupac" fill="none"
                          stroke="#FFD200" strokeWidth="2.2707" strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M393.1,389.7c1.5-1.5,3.5-2.3,5.5-2.3c2.1,0,18.7,0,18.7,0"/>
                    <path id="circle_940gzzlupac_940gzzlubwt" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M390.8,423.1l0-27.8c0-2.1,0.9-4.1,2.3-5.5"/>
                    <line id="circle_940gzzlubwt_940gzzlunhg" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="390.8" y1="452.1" x2="390.8"
                          y2="423.1"/>
                    <line id="circle_940gzzlunhg_940gzzluhsk" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="390.8" y1="477.1" x2="390.8" y2="452.1"/>
                    <path id="circle_940gzzluhsk_940gzzlugtr" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M408.2,511.1h-9.7c-2.1,0-4.1-0.9-5.5-2.3c-1.5-1.5-2.3-3.5-2.3-5.5l0-27.7"/>
                    <line id="circle_940gzzlugtr_940gzzlusks" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="421.9" y1="511.1" x2="406.7" y2="511.1"/>
                    <line id="circle_940gzzlusks_940gzzlussq" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="449.7" y1="511.1" x2="421.9" y2="511.1"/>
                    <line id="circle_940gzzlussq_940gzzluvic" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="468.9" y1="511.1" x2="448.2" y2="511.1"/>
                    <line id="circle_940gzzluvic_940gzzlusjp" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="490.5" y1="511.1" x2="468.9" y2="511.1"/>
                    <line id="circle_940gzzlusjp_940gzzluwsm" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="516.3" y1="511.1" x2="489" y2="511.1"/>
                    <line id="circle_940gzzluwsm_940gzzluemb" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="543.8" y1="511.1" x2="516.3" y2="511.1"/>
                    <line id="circle_940gzzluemb_940gzzlutmp" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="575.8" y1="511.1" x2="543.8" y2="511.1"/>
                    <path id="circle_940gzzlutmp_940gzzlubkf" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M597.4,498.1L586,509.5c-1,1-2.4,1.6-3.9,1.6h-7.8"/>
                    <line id="circle_940gzzlubkf_940gzzlumsh" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="608.2" y1="487.3" x2="597.4" y2="498.1"/>
                    <line id="circle_940gzzlumsh_940gzzlucst" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="618.6" y1="476.9" x2="607.2" y2="488.3"/>
                    <path id="circle_940gzzlucst_940gzzlummt" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M643.6,468h-13c-2,0-4,0.8-5.4,2.2l-6.7,6.7"/>
                    <line id="circle_940gzzlummt_940gzzlutwh" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="682.7" y1="468" x2="643.6" y2="468"/>
                    <path id="circle_940gzzluald_940gzzlutwh" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M694.3,445l0,15.3c0,2.1-0.9,4.1-2.3,5.5c-1.4,1.4-3.3,2.3-5.5,2.3h-3.9"/>
                    <path id="circle_940gzzlulvt_940gzzluald" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M645.9,422.9h40.7c2.1,0,4.1,0.9,5.5,2.3c1.4,1.4,2.3,3.3,2.3,5.5l0,15.7"/>
                    <path id="circle_940gzzlumgt_940gzzlulvt" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M625.7,419.1l1.5,1.5c1.4,1.4,3.3,2.3,5.5,2.3h3.4h0.6h9.1"/>
                    <line id="circle_940gzzlubbn_940gzzlumgt_00000164495868776582956570000011683136009290808222_"
                          fill="none" stroke="#FFD200" strokeWidth="2.2707" strokeLinejoin="round"
                          strokeMiterlimit="3.9938" x1="613.3" y1="406.8" x2="627.2" y2="420.7"/>
                    <line id="circle_940gzzlufcn_940gzzlubbn" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="600.4" y1="393.8" x2="613.3"
                          y2="406.8"/>
                    <path id="circle_940gzzluksx_940gzzlufcn" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M577.9,381.3l6.8,0c2.1,0,4.1,0.9,5.5,2.3l10.2,10.2"/>
                    <line id="circle_940gzzluesq_940gzzluksx" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="524.8" y1="381.3" x2="577.9" y2="381.3"/>
                    <line id="circle_940gzzlugps_940gzzluesq" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="491.7" y1="381.3" x2="526.3" y2="381.3"/>
                    <line id="circle_940gzzlubst_940gzzlugps" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="473.2" y1="381.3" x2="493.2" y2="381.3"/>
                    <line id="circle_940gzzluerc_940gzzlubst" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="417" y1="381.3" x2="473.2" y2="381.3"/>
                    <line id="circle_940gzzlupah_940gzzluerc" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="383.6" y1="381.3" x2="417" y2="381.3"/>
                    <path id="circle_940gzzluryo_940gzzlupah" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M348.4,395l9.5-9.5c2.6-2.6,6.2-4.2,10.2-4.2l15.6,0"/>
                    <line id="circle_940gzzluwsp_940gzzluryo" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="338.4" y1="405" x2="349.5"
                          y2="393.9"/>
                    <path id="circle_940gzzlulad_940gzzluwsp" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M334.3,419.8l0-8.5l0,0c0-0.4,0.2-1.2,0.5-2l0,0c0.3-0.8,0.8-1.5,1.1-1.7l3.6-3.6"/>
                    <line id="circle_940gzzlulrd_940gzzlulad" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="334.3" y1="431.1" x2="334.3" y2="418.2"/>
                    <line id="circle_940gzzluwla_940gzzlulrd" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="334.2" y1="461.3" x2="334.3" y2="429.5"/>
                    <line id="circle_940gzzlusbm_940gzzluwla" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="334.3" y1="475.7" x2="334.3" y2="461.3"/>
                    <line id="circle_940gzzlughk_940gzzlusbm" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="334.3" y1="486.5" x2="334.3" y2="474.2"/>
                    <line id="circle_940gzzluhsc_940gzzlughk" fill="none" stroke="#FFD200" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="334.3" y1="493" x2="334.3" y2="485"/>
                    <g id="circle_hammersmith-city_940gzzluryo">
                        <rect id="hammersmith-city_940gzzluryo" x="350.7" y="390.6"
                              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -173.8099 363.1506)" fill="#F386A1"
                              width="1.5" height="1.5"/>
                        <rect id="circle_940gzzluryo" x="352.3" y="392.2"
                              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -174.4734 364.7319)" fill="#FFD200"
                              width="1.5" height="1.5"/>
                    </g>
                    <g id="circle_hammersmith-city_940gzzluwsp">
                        <rect id="hammersmith-city_940gzzluwsp" x="336.8" y="404.6"
                              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -187.7715 357.3489)" fill="#F386A1"
                              width="1.5" height="1.5"/>
                        <rect id="circle_940gzzluwsp" x="338.4" y="406.2"
                              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -188.4385 358.9777)" fill="#FFD200"
                              width="1.5" height="1.5"/>
                    </g>
                    <g id="circle_hammersmith-city_940gzzlulad">
                        <rect id="circle_940gzzlulad" x="335.4" y="418.3" fill="#FFD200" width="1.5" height="1.5"/>
                        <rect id="hammersmith-city_940gzzlulad" x="333.2" y="418.3" fill="#F386A1" width="1.5" height="1.5"/>
                    </g>
                    <g id="circle_hammersmith-city_940gzzlulrd">
                        <rect id="circle_940gzzlulrd" x="335.4" y="429.6" fill="#FFD200" width="1.5" height="1.5"/>
                        <rect id="hammersmith-city_940gzzlulrd" x="333.1" y="429.6" fill="#F386A1" width="1.5" height="1.5"/>
                    </g>
                    <g id="circle_hammersmith-city_940gzzlusbm">
                        <rect id="circle_940gzzlusbm" x="331.7" y="474.2" fill="#FFD200" width="1.5" height="1.5"/>
                    </g>
                    <g id="circle_hammersmith-city_940gzzlughk">
                        <rect id="circle_940gzzlughk" x="331.7" y="485" fill="#FFD200" width="1.5" height="1.5"/>
                    </g>
                    <rect id="circle_940gzzlumsh" x="602.8" y="488.6"
                          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -169.2211 570.1008)" fill="#FFD200" width="1.5" height="1.5"/>
                    <rect id="circle_940gzzluhsk" x="391.9" y="475.6" fill="#FFD200" width="1.5" height="1.5"/>
                    <rect id="circle_940gzzlubwt" x="391.9" y="423.1" fill="#FFD200" width="1.5" height="1.5"/>
            </g>
        )
    }
);

export default Circle;