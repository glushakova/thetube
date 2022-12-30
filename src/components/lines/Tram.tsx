import React, {memo, FC} from 'react';
import classNames from "classnames";
import {LineProps} from "../../interface/line";

const Waterloo: FC<LineProps> = memo(({ line, isSelected, onStationClick, onLineClick }) => {
        return (
            <g className={classNames("line", {"disabled": !isSelected})} onClick={() => onLineClick(line)}>
                    <path id="tram-tram_940gzzcrwel_940gzzcrecr" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M749.7,724.3h3.2c5.7,0,10.4,4.6,10.4,10.4c0,5.7,4.6,10.4,10.4,10.4c1.2,0,3.2,0,3.2,0"/>
                    <path id="tram-tram_940gzzcrwan_940gzzcrrvc" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M687.6,735.4c0,0-6.7,6.7-7.2,7.3c-1.2,1.2-3.7,2.3-5.5,2.3c-1.6,0-8.6,0-8.6,0"/>
                    <line id="tram-tram_940gzzcrkgh_940gzzcrnwa" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="867.3" y1="794" x2="875.6" y2="802.3"/>
                    <line id="tram-tram_940gzzcrfld_940gzzcrkgh" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="858.9" y1="785.7" x2="867.3" y2="794"/>
                    <line id="tram-tram_940gzzcradv_940gzzcrfld" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="850.8" y1="777.6" x2="858.9" y2="785.7"/>
                    <line id="tram-tram_940gzzcrgra_940gzzcradv" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="842.4" y1="769.1" x2="850.6" y2="777.4"/>
                    <line id="tram-tram_940gzzcrcoo_940gzzcrgra" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="834.1" y1="760.8" x2="842.4" y2="769.1"/>
                    <line id="tram-tram_940gzzcrloy_940gzzcrcoo" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="825.8" y1="752.6" x2="834.1" y2="760.8"/>
                    <path id="tram-tram_940gzzcrsan_940gzzcrloy" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M825.8,752.6l-5.3-5.3c-1.4-1.4-3.3-2.3-5.5-2.3c-1.8,0-6.8,0-6.8,0"/>
                    <line id="tram-tram_940gzzcrwmb_940gzzcrddr" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="383.1" y1="671.5" x2="383.1" y2="645"
                          className="disrupted"/>
                    <path id="tram-tram_940gzzcrddr_940gzzcrmtp" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M394.4,714.1l-9-9c-1.2-1.2-2.3-3.7-2.3-5.5v-28.2"/>
                    <path id="tram-tram_940gzzcrmtp_940gzzcrmdn" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M434.3,745h-5.5c-2.1,0-4.6-1-5.8-2.3l-28.6-28.6"/>
                    <line id="tram-tram_940gzzcrmdn_940gzzcrphi" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="456.2" y1="745" x2="434.3" y2="745"/>
                    <line id="tram-tram_940gzzcrphi_940gzzcrbgv" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="480.3" y1="745" x2="456.2" y2="745"/>
                    <line id="tram-tram_940gzzcrbgv_940gzzcrmch" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="506.5" y1="745" x2="480.3" y2="745"/>
                    <line id="tram-tram_940gzzcrmch_940gzzcrmjt" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="532.6" y1="745" x2="506.5" y2="745"/>
                    <line id="tram-tram_940gzzcrmjt_940gzzcrbed" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="565.8" y1="745" x2="532.6" y2="745"/>
                    <line id="tram-tram_940gzzcrbed_940gzzcrtpa" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="593.2" y1="745" x2="565.6" y2="745"/>
                    <line id="tram-tram_940gzzcrtpa_940gzzcramp" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="617.6" y1="745" x2="593.2" y2="745"/>
                    <line id="tram-tram_940gzzcramp_940gzzcrwad" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="642.2" y1="745" x2="617.6" y2="745"/>
                    <line id="tram-tram_940gzzcrwad_940gzzcrwan" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="666.2" y1="745" x2="642.2" y2="745"/>
                    <line id="tram-tram_940gzzcrwan_940gzzcrchr" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="715.1" y1="745" x2="666.2" y2="745"/>
                    <path id="tram-tram_940gzzcrara_940gzzcrelm" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M893.1,695.9c0,0-20.9,0-22.5,0c-2.1,0-4.1,0.9-5.5,2.3c-0.9,0.9-5.9,5.9-5.9,5.9"/>
                    <line id="tram-tram_940gzzcrbrd_940gzzcrbek" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="973.8" y1="675.2" x2="998.1" y2="675.2"/>
                    <line id="tram-tram_940gzzcrave_940gzzcrbrd" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="949" y1="675.2" x2="973.8" y2="675.2"/>
                    <line id="tram-tram_940gzzcrbir_940gzzcrave" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="924.2" y1="675.2" x2="949" y2="675.2"/>
                    <path id="tram-tram_940gzzcrhar_940gzzcrbir" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" d=" M899.9,675.2c9.8,0,24.3,0,24.3,0"/>
                    <path id="tram-tram_940gzzcrara_940gzzcrhar" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M859.2,703.9l26.5-26.5c1.4-1.4,3.3-2.3,5.5-2.3c0.3,0,3.9,0,8.7,0"/>
                    <line id="tram-tram_940gzzcrwod_940gzzcrara" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="848.7" y1="714.5" x2="859.2" y2="704"/>
                    <line id="tram-tram_940gzzcrbla_940gzzcrwod" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="838.2" y1="725" x2="848.7" y2="714.5"/>
                    <line id="tram-tram_940gzzcradd_940gzzcrbla" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="827.6" y1="735.5" x2="838.2" y2="725"/>
                    <path id="tram-tram_940gzzcrsan_940gzzcradd" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M808.3,745h6.7c2.1,0,4.1-0.9,5.5-2.3c1.3-1.3,7.2-7.2,7.2-7.2"/>
                    <line id="tram-tram_940gzzcrleb_940gzzcrsan" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="792.2" y1="745" x2="808.3" y2="745"/>
                    <line id="tram-tram_940gzzcrecr_940gzzcrleb" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="776.8" y1="745" x2="792.2" y2="745"/>
                    <line id="tram-tram_940gzzcrcen_940gzzcrecr" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="745.7" y1="745" x2="776.8" y2="745"/>
                    <line id="tram-tram_940gzzcrchr_940gzzcrcen" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="714.4" y1="745" x2="745.7" y2="745"/>
                    <path id="tram-tram_940gzzcrrvc_940gzzcrctr" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M708.1,724.3h-3.5H703c-2.9,0-5.5,1.2-7.3,3l-8.1,8.1"/>
                    <line id="tram-tram_940gzzcrctr_940gzzcrwcr" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="732.3" y1="724.3" x2="707.4" y2="724.3"/>
                    <line id="tram-tram_940gzzcrwcr_940gzzcrwel" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938" x1="749.7" y1="724.3" x2="732.3" y2="724.3"/>
                    <path id="tram-tram_940gzzcrctr_940gzzcrchr" fill="none" stroke="#7AC143" strokeWidth="2.3737"
                          strokeLinejoin="round" strokeMiterlimit="3.9938"
                          d=" M707.4,724.3H703c-5.7,0-10.4,4.6-10.4,10.4c0,5.7,4.6,10.4,10.4,10.4c0.6,0,11.4,0,11.4,0"/>
                    <g id="tram-tram_white_line">
                        <path id="tram-tram_white_line" fill="none" stroke="#FFFFFF" strokeWidth="0.7795" strokeLinejoin="round"
                              strokeMiterlimit="3.9938"
                              d=" M666.2,745c0,0,7,0,8.6,0c1.8,0,4.2-1,5.5-2.3c0.6-0.6,15.4-15.4,15.4-15.4c1.9-1.9,4.5-3,7.3-3h3.5h2.8h43.6 c5.7,0,10.4,4.6,10.4,10.4c0,5.7,4.6,10.4,10.4,10.4c1.2,0,3.2,0,3.2,0"/>
                        <line id="tram-tram_940gzzcrkgh_940gzzcrnwa" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="867.3" y1="794" x2="875.6" y2="802.3"/>
                        <line id="tram-tram_940gzzcrfld_940gzzcrkgh" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="858.9" y1="785.7" x2="867.3" y2="794"/>
                        <line id="tram-tram_940gzzcradv_940gzzcrfld" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="850.8" y1="777.6" x2="858.9" y2="785.7"/>
                        <line id="tram-tram_940gzzcrgra_940gzzcradv" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="842.4" y1="769.1" x2="850.6" y2="777.4"/>
                        <line id="tram-tram_940gzzcrcoo_940gzzcrgra" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="834.1" y1="760.8" x2="842.4" y2="769.1"/>
                        <line id="tram-tram_940gzzcrloy_940gzzcrcoo" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="825.8" y1="752.6" x2="834.1" y2="760.8"/>
                        <path id="tram-tram_940gzzcrsan_940gzzcrloy" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938"
                              d=" M825.8,752.6l-5.3-5.3c-1.4-1.4-3.3-2.3-5.5-2.3c-1.8,0-6.8,0-6.8,0"/>
                        <line id="tram-tram_940gzzcrwmb_940gzzcrddr" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="383.1" y1="671.5" x2="383.1" y2="645"/>
                        <path id="tram-tram_940gzzcrddr_940gzzcrmtp" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938"
                              d=" M394.4,714.1l-9-9c-1.2-1.2-2.3-3.7-2.3-5.5v-28.2"/>
                        <path id="tram-tram_940gzzcrmtp_940gzzcrmdn" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938"
                              d=" M434.3,745h-5.5c-2.1,0-4.6-1-5.8-2.3l-28.6-28.6"/>
                        <line id="tram-tram_940gzzcrmdn_940gzzcrphi" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="456.2" y1="745" x2="434.3" y2="745"/>
                        <line id="tram-tram_940gzzcrphi_940gzzcrbgv" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="480.3" y1="745" x2="456.2" y2="745"/>
                        <line id="tram-tram_940gzzcrbgv_940gzzcrmch" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="506.5" y1="745" x2="480.3" y2="745"/>
                        <line id="tram-tram_940gzzcrmch_940gzzcrmjt" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="532.6" y1="745" x2="506.5" y2="745"/>
                        <line id="tram-tram_940gzzcrmjt_940gzzcrbed" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="565.8" y1="745" x2="532.6" y2="745"/>
                        <line id="tram-tram_940gzzcrbed_940gzzcrtpa" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="593.2" y1="745" x2="565.6" y2="745"/>
                        <line id="tram-tram_940gzzcrtpa_940gzzcramp" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="617.6" y1="745" x2="593.2" y2="745"/>
                        <line id="tram-tram_940gzzcramp_940gzzcrwad" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="642.2" y1="745" x2="617.6" y2="745"/>
                        <line id="tram-tram_940gzzcrwad_940gzzcrwan" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="666.2" y1="745" x2="642.2" y2="745"/>
                        <line id="tram-tram_940gzzcrwan_940gzzcrchr" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="715.1" y1="745" x2="666.2" y2="745"/>
                        <path id="tram-tram_940gzzcrara_940gzzcrelm" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938"
                              d=" M893.1,695.9c0,0-20.9,0-22.5,0c-2.1,0-4.1,0.9-5.5,2.3c-0.9,0.9-5.9,5.9-5.9,5.9"/>
                        <line id="tram-tram_940gzzcrbrd_940gzzcrbek" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="973.8" y1="675.2" x2="998.1" y2="675.2"/>
                        <line id="tram-tram_940gzzcrave_940gzzcrbrd" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="949" y1="675.2" x2="973.8" y2="675.2"/>
                        <line id="tram-tram_940gzzcrbir_940gzzcrave" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="924.2" y1="675.2" x2="949" y2="675.2"/>
                        <path id="tram-tram_940gzzcrhar_940gzzcrbir" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" d=" M899.9,675.2c9.8,0,24.3,0,24.3,0"/>
                        <path id="tram-tram_940gzzcrara_940gzzcrhar" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938"
                              d=" M859.2,703.9l26.5-26.5c1.4-1.4,3.3-2.3,5.5-2.3c0.3,0,3.9,0,8.7,0"/>
                        <line id="tram-tram_940gzzcrwod_940gzzcrara" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="848.7" y1="714.5" x2="859.2" y2="704"/>
                        <line id="tram-tram_940gzzcrbla_940gzzcrwod" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="838.2" y1="725" x2="848.7" y2="714.5"/>
                        <line id="tram-tram_940gzzcradd_940gzzcrbla" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="827.6" y1="735.5" x2="838.2" y2="725"/>
                        <path id="tram-tram_940gzzcrsan_940gzzcradd" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938"
                              d=" M808.3,745h6.7c2.1,0,4.1-0.9,5.5-2.3c1.3-1.3,7.2-7.2,7.2-7.2"/>
                        <line id="tram-tram_940gzzcrleb_940gzzcrsan" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="792.2" y1="745" x2="808.3" y2="745"/>
                        <line id="tram-tram_940gzzcrecr_940gzzcrleb" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="776.8" y1="745" x2="792.2" y2="745"/>
                        <line id="tram-tram_940gzzcrcen_940gzzcrecr" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="745.7" y1="745" x2="776.8" y2="745"/>
                        <line id="tram-tram_940gzzcrchr_940gzzcrcen" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938" x1="714.4" y1="745" x2="745.7" y2="745"/>
                        <path id="tram-tram_white_line" fill="none" stroke="#FFFFFF" strokeWidth="0.7795"
                              strokeLinejoin="round" strokeMiterlimit="3.9938"
                              d=" M703,724.3c-5.7,0-10.4,4.6-10.4,10.4c0,5.7,4.6,10.4,10.4,10.4"/>
                    </g>
                    <g>
                        <polygon fill="#F1F2F2" points="729.9,748 727.7,745 729.9,741.9 733.2,741.9 731.1,745 733.2,748 "/>
                        <polygon fill="#7AC143" points="731.8,742.7 730.2,742.7 728.6,745 730.2,747.2 731.8,747.2 730.2,745 "/>
                    </g>
                    <g>
                        <polygon fill="#F1F2F2" points="766.4,735.4 763.5,737.9 760.3,735.8 760.1,732.5 763.3,734.5 766.2,732.1 "/>
                        <polygon fill="#7AC143" points="760.9,733.9 761,735.5 763.4,737 765.6,735.2 765.5,733.6 763.3,735.3 "/>
                    </g>
                    <g>
                        <polygon fill="#F1F2F2" points="687.8,748 685.5,745 687.8,741.9 691.1,741.9 689,745 691.1,748 "/>
                        <polygon fill="#7AC143" points="689.7,742.7 688.1,742.7 686.4,745 688.1,747.2 689.7,747.2 688.1,745 "/>
                    </g>
                    <g> <polygon fill="#F1F2F2" points="690.8,740 692.9,736.8 696.6,737.8 697.8,740.8 694.1,740 692.1,743.1 "/>
                        <polygon fill="#7AC143" points="696.5,739.8 695.9,738.3 693.2,737.6 691.7,740 692.3,741.5 693.8,739.1 "/>
                    </g>
                    <g>
                        <polygon fill="#F1F2F2" points="680.8,737.9 684.5,738.4 685.1,742.2 683.8,743.5 682.6,743.5 682.1,740.9 678.4,740.2 "/>
                        <polygon fill="#7AC143" points="683.2,743 684.3,741.9 683.9,739.1 681.1,738.6 680,739.7 682.7,740.2 "/>
                    </g>
                    <g>
                        <polygon fill="#F1F2F2" points="719.8,721.2 722.1,724.2 719.8,727.3 716.5,727.3 718.7,724.2 716.5,721.2 "/>
                        <polygon fill="#7AC143" points="717.9,726.5 719.5,726.5 721.2,724.2 719.5,722 717.9,722 719.5,724.2 "/>
                    </g>
                </g>
        )
    }
);

export default Waterloo;