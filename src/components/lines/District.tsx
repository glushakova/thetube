import React, {memo, FC} from 'react';
import classNames from "classnames";
import {LineProps} from "../../interface/line";

const District: FC<LineProps> = memo(({ line, isSelected, onStationClick, onLineClick }) => {
        return (
            <g className={classNames("line", {"disabled": !isSelected})} onClick={() => onLineClick(line)}>
                    <path id="district_940gzzlupac_940gzzluerc" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" d=" M391.5,388.1c1.9-1.9,4.4-2.9,7.1-2.9c2.6,0,18.6,0,18.6,0"/>
                    <path id="district_940gzzlupac_940gzzlubwt" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" d=" M388.5,423.1v-27.8c0-2.7,1-5.2,2.9-7.1"/>
                    <line id="district_940gzzlubwt_940gzzlunhg" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="388.5" y1="452.2" x2="388.5" y2="423.1"/>
                    <line id="district_940gzzlunhg_940gzzluhsk" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="388.5" y1="477.1" x2="388.5" y2="452.2"/>
                    <path id="district_940gzzluhsk_940gzzluect" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M380.7,513.3c2.1,0,4.3-1,5.5-2.3c1.2-1.2,2.3-3.3,2.3-5.5v-30"/>
                    <g id="district_940gzzluect_940gzzlukoy" className="disrupted">
                        <path fill="none" stroke="#00853F" strokeWidth="2.2707" strokeLinejoin="round" strokeMiterlimit="3.9938"
                              d="M384.4,513.3 c-2.1,0-4.1-0.9-5.5-2.3c-1.4-1.4-2.3-3.3-2.3-5.5c0-2.1,0-21.2,0-21.2"
                              className="disrupted"/>
                        <path fill="none" stroke="#FFFFFF" strokeWidth="1.4993" strokeLinejoin="round"
                              strokeMiterlimit="3.9938"
                              d="M384.4,513.3 c-2.1,0-4.1-0.9-5.5-2.3c-1.4-1.4-2.3-3.3-2.3-5.5c0-2.1,0-21.2,0-21.2"
                              className="disrupted"/>
                        <path id="district_940gzzluect_940gzzlukoy" fill="none" stroke="#00853F" strokeWidth="2.1706"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" strokeDasharray="1.5133,1.5133"
                              d=" M384.4,513.3c-2.1,0-4.1-0.9-5.5-2.3c-1.4-1.4-2.3-3.3-2.3-5.5c0-2.1,0-21.2,0-21.2"
                              className="disrupted"/>
                    </g>
                    <path id="district_940gzzluwim_940gzzluwip" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" d=" M376.6,626.5c0,0,0,11.5,0,11.5"
                          className="disrupted"/>
                    <line id="district_940gzzluwip_940gzzlusfs" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="376.6" y1="616" x2="376.6" y2="627.9"
                          className="disrupted"/>
                    <line id="district_940gzzlusfs_940gzzluepy" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="376.6" y1="604.2" x2="376.6" y2="616"
                          className="disrupted"/>
                    <line id="district_940gzzluepy_940gzzlupyb" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="376.6" y1="586.1" x2="376.6" y2="605.7"
                          className="disrupted"/>
                    <line id="district_940gzzlupyb_940gzzlupsg" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="376.6" y1="576.5" x2="376.6" y2="586.1"
                          className="disrupted"/>
                    <line id="district_940gzzlupsg_940gzzlufby" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="376.6" y1="567.2" x2="376.6" y2="578"/>
                    <line id="district_940gzzlufby_940gzzluwbn" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="376.6" y1="542.6" x2="376.6" y2="567.2"/>
                    <path id="district_940gzzluwbn_940gzzluect" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M384.4,513.3c-2.1,0-4.1,0.9-5.5,2.3c-1.4,1.4-2.3,3.3-2.3,5.5c0,0.3,0,21.5,0,21.5"/>
                    <line id="district_940gzzluect_940gzzlugtr" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="408.2" y1="513.3" x2="382.7" y2="513.3"/>
                    <line id="district_940gzzlugtr_940gzzlusks" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="421.8" y1="513.3" x2="406.7" y2="513.3"/>
                    <line id="district_940gzzlusks_940gzzlussq" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="449.7" y1="513.3" x2="421.8" y2="513.3"/>
                    <line id="district_940gzzlussq_940gzzluvic" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="468.7" y1="513.3" x2="448.2" y2="513.3"/>
                    <line id="district_940gzzluvic_940gzzlusjp" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="490.5" y1="513.3" x2="468.7" y2="513.3"/>
                    <line id="district_940gzzlusjp_940gzzluwsm" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="516.3" y1="513.3" x2="489.1" y2="513.3"/>
                    <line id="district_940gzzluwsm_940gzzluemb" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="543.8" y1="513.3" x2="516.3" y2="513.3"/>
                    <line id="district_940gzzluemb_940gzzlutmp" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="575.8" y1="513.3" x2="543.8" y2="513.3"/>
                    <path id="district_940gzzlutmp_940gzzlubkf" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M599,499.7l-11.3,11.3c-1.4,1.4-3.3,2.3-5.5,2.3h-7.8"/>
                    <line id="district_940gzzlubkf_940gzzlumsh" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="609.8" y1="488.9" x2="599" y2="499.7"/>
                    <line id="district_940gzzlumsh_940gzzlucst" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="620.1" y1="478.6" x2="608.8" y2="489.9"/>
                    <path id="district_940gzzlucst_940gzzlummt" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M643.6,470.3h-12.9c-1.4,0-2.8,0.6-3.8,1.6l-6.7,6.7"/>
                    <line id="district_940gzzlummt_940gzzlutwh" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="682.7" y1="470.3" x2="643.6" y2="470.3"/>
                    <path id="district_940gzzlutwh_940gzzluade" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M714.4,430.1l-15.5,15.5c-1.5,1.5-2.3,3.5-2.3,5.5v9.2c0,2.7-1,5.2-2.9,7.1c-1.9,1.9-4.4,2.9-7.1,2.9h-3.9"/>
                    <line id="district_940gzzluade_940gzzluwpl" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="723.6" y1="420.9" x2="714.4" y2="430.1"/>
                    <line id="district_940gzzluwpl_940gzzlusgn" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="742.5" y1="401.9" x2="723.6" y2="420.9"/>
                    <path id="district_940gzzlusgn_940gzzlumed" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M775,399.1l-26.4-0.1c-1.8,0-4.2,1-5.4,2.3l-1.7,1.7"/>
                    <line id="district_940gzzlumed_940gzzlubwr" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="804.9" y1="399.2" x2="775" y2="399.1"/>
                    <line id="district_940gzzlubwr_940gzzlubbb" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="833.3" y1="399.2" x2="804.9" y2="399.2"/>
                    <line id="district_940gzzlubbb_940gzzluwhm" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="854.9" y1="399.2" x2="833.3" y2="399.2"/>
                    <path id="district_940gzzluwhm_940gzzluplw" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" d=" M875.1,392l-5,5c-1.2,1.2-3.7,2.3-5.4,2.3l-9.9,0"/>
                    <line id="district_940gzzluplw_940gzzluupk" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="887.9" y1="379.2" x2="874.1" y2="393.1"/>
                    <line id="district_940gzzluupk_940gzzluehm" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="899.8" y1="367.3" x2="886.9" y2="380.2"/>
                    <line id="district_940gzzluehm_940gzzlubkg" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="909.2" y1="357.9" x2="899.8" y2="367.3"/>
                    <line id="district_940gzzlubkg_940gzzluupy" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="920.7" y1="346.4" x2="909.2" y2="357.9"/>
                    <line id="district_940gzzluupy_940gzzlubec" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="929.9" y1="337.2" x2="920.7" y2="346.4"/>
                    <line id="district_940gzzlubec_940gzzludgy" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="939.8" y1="327.3" x2="929.9" y2="337.2"/>
                    <line id="district_940gzzludgy_940gzzludge" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="952.1" y1="315.1" x2="939.8" y2="327.3"/>
                    <line id="district_940gzzludge_940gzzluepk" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="967.3" y1="299.9" x2="951" y2="316.1"/>
                    <line id="district_940gzzluepk_940gzzluhch" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="976.3" y1="290.8" x2="967.3" y2="299.9"/>
                    <line id="district_940gzzluhch_940gzzluupb" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="986.3" y1="280.8" x2="975.3" y2="291.9"/>
                    <line id="district_940gzzluupb_940gzzluupm" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="996.5" y1="270.6" x2="985.2" y2="281.9"/>
                    <line id="district_940gzzlurmd_940gzzlukwg_00000128454572624279790910000014337562877895783317_"
                          fill="none" stroke="#00853F" strokeWidth="2.2707" strokeLinejoin="round"
                          strokeMiterlimit="3.9938" x1="197.8" y1="560.6" x2="185" y2="573.3" className="disrupted"/>
                    <line id="district_940gzzlukwg_940gzzlugby" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="223.2" y1="535.1" x2="198.2" y2="560.1"
                          className="disrupted"/>
                    <path id="district_940gzzlueby_940gzzluecm" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M217.9,482l0-14.9c0-2.1-0.9-4.1-2.3-5.5c-1.4-1.4-3.3-2.3-5.5-2.3c-2,0-1.8,0-1.8,0"/>
                    <path id="district_940gzzluecm_940gzzluact" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M217.9,482l0,23.5c0,2.1,0.9,4.1,2.3,5.5c1.4,1.4,3.3,2.3,5.5,2.3c2,0,1.5,0,1.5,0"/>
                    <path id="district_940gzzlugby_940gzzlutng" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M271.2,513.3l-23,0c-2,0-4,0.8-5.5,2.3l-19.9,19.9" className="disrupted"/>
                    <line id="district_940gzzluact_940gzzlucwp_00000163771594138079080120000011688727153452876971_"
                          fill="none" stroke="#00853F" strokeWidth="2.2707" strokeLinejoin="round"
                          strokeMiterlimit="3.9938" x1="235.6" y1="513.3" x2="225.6" y2="513.3"/>
                    <line id="district_940gzzlucwp_940gzzlutng" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="271.6" y1="513.3" x2="234.2" y2="513.3"/>
                    <line id="district_940gzzlutng_940gzzlusfb" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="293.3" y1="513.3" x2="270.1" y2="513.3"/>
                    <line id="district_940gzzlusfb_940gzzlurvp" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="318.8" y1="513.3" x2="291.9" y2="513.3"/>
                    <line id="district_940gzzlurvp_940gzzluhsd" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="333.3" y1="513.3" x2="317.2" y2="513.3"/>
                    <line id="district_940gzzluhsd_940gzzlubsc" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="352.1" y1="513.3" x2="333.3" y2="513.3"/>
                    <line id="district_940gzzlubsc_940gzzluwkn" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="365.2" y1="513.3" x2="350.6" y2="513.3"/>
                    <line id="district_940gzzluwkn_940gzzluect" fill="none" stroke="#00853F" strokeWidth="2.2707"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="382.7" y1="513.3" x2="363.7" y2="513.3"/>
                    <g id="district_940gzzlumsh_00000005244124238829388810000017098486000515369400_">
                        <rect
                            id="district_940gzzlumsh_00000155868519717687606290000017830628049848129670_" x="604.4"
                            y="490.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -169.8823 571.7409)" fill="#00853F"
                            width="1.5" height="1.5"/>
                    </g>
                    <g id="lul-circle_district_940gzzlutmp">
                        <rect id="lul-circle_940gzzlutmp" x="574.3" y="512.2" fill="#FFD200" width="1.5" height="1.5"/>
                        <rect id="district_940gzzlutmp" x="574.3" y="514.5" fill="#00853F" width="1.5" height="1.5"/>
                    </g>
                    <g id="lul-circle_district_940gzzlusjp">
                        <rect id="lul-circle_940gzzlusjp" x="489" y="512.2" fill="#FFD200" width="1.5" height="1.5"/>
                        <rect id="district_940gzzlusjp" x="489" y="514.5" fill="#00853F" width="1.5" height="1.5"/>
                    </g>
                    <g id="lul-circle_district_940gzzlussq">
                        <rect id="district_940gzzlussq" x="448.2" y="514.5" fill="#00853F" width="1.5" height="1.5"/>
                        <rect id="lul-circle_940gzzlussq" x="448.2" y="512.2" fill="#FFD200" width="1.5" height="1.5"/>
                    </g>
                    <g id="lul-circle_district_lul-piccadilly_940gzzlugtr">
                        <rect id="lul-circle_940gzzlugtr" x="406.7" y="508.5" fill="#FFD200" width="1.5" height="1.5"/>
                        <rect id="district_940gzzlugtr" x="406.7" y="510.7" fill="#00853F" width="1.5" height="1.5"/>
                    </g>
                    <g id="lul-circle_district_940gzzluhsk">
                        <rect id="district_940gzzluhsk" x="389.6" y="475.6" fill="#00853F" width="1.5" height="1.5"/>
                    </g>
                    <g id="lul-circle_district_940gzzlubwt">
                        <rect id="district_940gzzlubwt" x="389.6" y="423.1" fill="#00853F" width="1.5" height="1.5"/>
                    </g>
                    <g id="district_lul-hammersmith-city_940gzzlusgn">
                        <rect id="district_940gzzlusgn" x="742.5" y="403"
                              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -67.8256 643.8471)" fill="#00853F" width="1.5" height="1.5"/>
                    </g>
                    <g id="district_940gzzluade_00000053531637110557932720000000913193970813946283_">
                        <rect id="district_940gzzluade" x="712.3" y="428"
                              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -94.3275 629.7523)" fill="#00853F" width="1.5" height="1.5"/>
                    </g>
                    <g id="district_lul-hammersmith-city_940gzzluplw">
                        <rect id="district_940gzzluplw" x="875.2" y="393.1"
                              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -21.9474 734.7179)" fill="#00853F" width="1.5" height="1.5"/>
                        <rect id="lul-hammersmith-city_940gzzluplw" x="873.6" y="391.5"
                              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -21.2688 733.1571)" fill="#F386A1"
                              width="1.5" height="1.5"/>
                    </g>
                    <g id="district_lul-hammersmith-city_940gzzluupk">
                        <rect id="district_940gzzluupk" x="888" y="380.3"
                              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -9.1234 740.0315)" fill="#00853F" width="1.5" height="1.5"/>
                        <rect id="lul-hammersmith-city_940gzzluupk" x="886.4" y="378.7"
                              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -8.4602 738.4303)" fill="#F386A1" width="1.5"
                              height="1.5"/>
                    </g>
                    <rect id="district_940gzzlubec" x="930.4" y="337.8"
                          transform="matrix(0.7071 -0.7071 0.7071 0.7071 33.3146 757.5812)" fill="#00853F" width="1.5" height="1.5"/>
                    <rect id="district_940gzzludge" x="952.1" y="316.1"
                          transform="matrix(0.7071 -0.7071 0.7071 0.7071 55.0048 766.5839)" fill="#00853F" width="1.5" height="1.5"/>
                    <rect id="district_940gzzluhch" x="976.4" y="291.9"
                          transform="matrix(0.7071 -0.7071 0.7071 0.7071 79.2346 776.6049)" fill="#00853F" width="1.5" height="1.5"/>
                    <rect id="district_940gzzluupb" x="986.3" y="281.9"
                          transform="matrix(0.7071 -0.7071 0.7071 0.7071 89.2015 780.7336)" fill="#00853F" width="1.5" height="1.5"/>
                    <rect id="district_940gzzlupsg" x="374" y="576.5" fill="#00853F" width="1.5" height="1.5"
                          className="disrupted"/>
                    <rect id="district_940gzzluepy" x="374" y="604.2" fill="#00853F" width="1.5" height="1.5"
                          className="disrupted"/>
                    <rect id="district_940gzzlucwp" x="234.1" y="514.5" fill="#00853F" width="1.5" height="1.5"/>
                    <rect id="district_940gzzluwkn" x="363.7" y="514.5" fill="#00853F" width="1.5" height="1.5"/>
                    <rect id="district_940gzzlusfb" x="291.9" y="514.5" fill="#00853F" width="1.5" height="1.5"/>
                    <rect id="district_940gzzlurvp" x="317.2" y="514.5" fill="#00853F" width="1.5" height="1.5"/>
                    <rect id="lul-hammersmith-city_940gzzlusgn" x="740.9" y="401.4"
                          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -67.1516 642.2825)" fill="#F386A1" width="1.5" height="1.5"/>
            </g>

        )
    }
);

export default District;