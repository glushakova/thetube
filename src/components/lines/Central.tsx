import React, {memo, FC} from 'react';
import classNames from "classnames";
import {LineProps} from "../../interface/line";

const Central: FC<LineProps> = memo(({ line, isSelected, onStationClick, onLineClick }) => {
    return (
        <g className={classNames("line", {"disabled": !isSelected})} onClick={() => onLineClick(line)}>
            <path id="central_940gzzlulys_940gzzluwsd" fill="none" stroke="#EE3124" strokeWidth="2.2707" strokeLinejoin="round"
                  strokeMiterlimit="3.9938" d=" M859.1,266.2h-9.5c-2.7,0-5,2.2-5,5c0,2.6,0,11.1,0,11.1"/>
            <path id="central_940gzzluwof_940gzzlurvy" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" d=" M858.3,206.8h-8.7c-2.7,0-5,2.2-5,5c0,2.7,0,10.1,0,10.1"/>
            <line id="central_940gzzlurvy_940gzzlucwl" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="874.7" y1="206.8" x2="858.3" y2="206.8"/>
            <line id="central_940gzzlucwl_940gzzluggh" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="886.7" y1="206.8" x2="873.2" y2="206.8"/>
            <path id="central_940gzzluggh_940gzzluhlt" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" d=" M892.4,220v-8.2c0-2.7-2.2-5-5-5h-2.3"/>
            <line id="central_940gzzluflp_940gzzluhlt" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="892.4" y1="232" x2="892.4" y2="220"/>
            <line id="central_940gzzlubke_940gzzluflp" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="892.4" y1="243.1" x2="892.4" y2="230.5"/>
            <line id="central_940gzzlunbp_940gzzlubke" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="892.4" y1="255.3" x2="892.4" y2="241.6"/>
            <path id="central_940gzzlugth_940gzzlunbp" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" d=" M885.2,266.2h2.3c2.7,0,5-2.2,5-5v-6"/>
            <line id="central_940gzzlurbg_940gzzlugth" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="871.4" y1="266.2" x2="886.7" y2="266.2"/>
            <line id="central_940gzzluwsd_940gzzlurbg" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="859.1" y1="266.2" x2="872.9" y2="266.2"/>
            <path id="central_940gzzlueby_940gzzluwta" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" d=" M249.5,452c-21,0-40.3,0-40.3,0"/>
            <path id="central_940gzzluwta_940gzzlunan" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" d=" M286.1,452c-12.8,0-27.8,0-38.1,0"/>
            <line id="central_940gzzlunan_940gzzluean" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="302.7" y1="452" x2="284.6" y2="452"/>
            <line id="central_940gzzluean_940gzzluwcy" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="324.1" y1="452" x2="301.2" y2="452"/>
            <line id="central_940gzzluwcy_940gzzlusbc" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="357.8" y1="452" x2="324.1" y2="452"/>
            <line id="central_940gzzlusbc_940gzzluhpk" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="374.2" y1="452" x2="357.8" y2="452"/>
            <line id="central_940gzzluhpk_940gzzlunhg" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="389.6" y1="452" x2="372.7" y2="452"/>
            <line id="central_940gzzlunhg_940gzzluqwy" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="416.4" y1="452" x2="389.6" y2="452"/>
            <path id="central_940gzzluqwy_940gzzlulgt" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938"
                  d=" M435.3,448.1l-1.6,1.6c-1.2,1.2-3.7,2.3-5.4,2.3c-0.3,0-13.4,0-13.4,0"/>
            <line id="central_940gzzlulgt_940gzzlumba" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="443.9" y1="439.6" x2="434.3" y2="449.2"/>
            <path id="central_940gzzlumba_940gzzlubnd" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" d=" M469.6,432.7h-15.7c-1.7,0-4.2,1-5.4,2.3l-5.6,5.6"/>
            <line id="central_940gzzlubnd_940gzzluoxc" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="496.2" y1="432.7" x2="469.6" y2="432.7"/>
            <line id="central_940gzzluoxc_940gzzlutcr" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="530.7" y1="432.7" x2="496.2" y2="432.7"/>
            <line id="central_940gzzlutcr_940gzzluhbn" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="561.5" y1="432.7" x2="530.7" y2="432.7"/>
            <path id="central_940gzzluhbn_940gzzluchl" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938"
                  d=" M588.5,440.2l-5.2-5.2c-1.2-1.2-3.7-2.3-5.4-2.3h-16.3"/>
            <path id="central_940gzzluchl_940gzzluspu" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" d=" M607.7,452l-4.3,0c-1.8,0-4.2-1-5.4-2.3l-10.6-10.6"/>
            <path id="central_940gzzluspu_940gzzlubnk_00000176764022514739352870000018002035759050192049_"
                  fill="none" stroke="#EE3124" strokeWidth="2.2707" strokeLinejoin="round"
                  strokeMiterlimit="3.9938" d=" M623.7,445l-4.7,4.7c-1.2,1.2-3.7,2.3-5.4,2.3h-6"/>
            <line id="central_940gzzlubnk_940gzzlulvt_00000035519402162317154880000009443941136700249243_"
                  fill="none" stroke="#EE3124" strokeWidth="2.2707" strokeLinejoin="round"
                  strokeMiterlimit="3.9938" x1="645.9" y1="422.9" x2="624.1" y2="444.6"/>
            <path id="central_940gzzlulvt_940gzzlublg_00000158733742848028158320000002030426704615487679_"
                  fill="none" stroke="#EE3124" strokeWidth="2.2707" strokeLinejoin="round" strokeMiterlimit="3.9938"
                  d=" M739.4,390.9c0,0-1.7,0-2.9,0c-1.8,0-4.2,1-5.4,2.3l-2.4,2.4l-0.4,0.4l-4,4c-1.2,1.2-3.7,2.3-5.4,2.3l-20.7,0l-0.3,0 c0,0-26.9,0-28.1,0c-1.8,0-4.2,1-5.4,2.3l-18.3,18.3"></path>
            <line id="central_940gzzlublg_940gzzlumed" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="775" y1="390.9" x2="739.4" y2="390.9"/>
            <path id="central_940gzzlumed_940gzzlustd" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938"
                  d=" M837.4,340.1l-48.5,48.6c-1.2,1.2-3.7,2.3-5.4,2.3l-8.4,0"/>
            <path id="central_940gzzlustd_940gzzlulyn" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" d=" M844.6,311.1v17.4c0,2-0.8,5.2-2.3,6.7l-5,5"/>
            <line id="central_940gzzlulyn_940gzzlulys" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="844.6" y1="280.8" x2="844.6" y2="312.6"/>
            <line id="central_940gzzlulys_940gzzlusnb" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="844.6" y1="244.8" x2="844.6" y2="282.3"/>
            <line id="central_940gzzlusnb_940gzzluswf" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="844.6" y1="233" x2="844.6" y2="246.3"/>
            <line id="central_940gzzluswf_940gzzluwof" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="844.6" y1="221.9" x2="844.6" y2="234.5"/>
            <polyline id="central_940gzzluwof_940gzzlubkh_00000160870469807457390860000010061329260088583585_"
                      fill="none" stroke="#EE3124" strokeWidth="2.2707" strokeLinejoin="round" strokeMiterlimit="3.9938"
                      points=" 844.6,221.9 844.6,194.5 844.6,192.6 844.6,181.5 "/>
            <path id="central_940gzzlubkh_940gzzlulgn_00000154384199413100179430000018203036598357009078_"
                  fill="none" stroke="#EE3124" strokeWidth="2.2707" strokeLinejoin="round"
                  strokeMiterlimit="3.9938" d=" M863.2,160.4l-7.9,7.9l-8.4,8.8c-0.9,0.9-1.5,2.4-1.9,3.9"/>
            <line id="central_940gzzlulgn_940gzzludbn" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="871.1" y1="152.4" x2="862.1" y2="161.4"/>
            <line id="central_940gzzludbn_940gzzluthb" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="877.9" y1="145.7" x2="871.1" y2="152.4"/>
            <line id="central_940gzzluthb_940gzzluepg" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="886.2" y1="137.4" x2="876.8" y2="146.8"/>
            <path id="central_940gzzluhgr_940gzzlunan" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938"
                  d=" M236,417.6l32.1,32.1c1.2,1.2,3.7,2.3,5.4,2.3c1.7,0,12.6,0,12.6,0"/>
            <line id="central_940gzzlupvl_940gzzluhgr" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="197.1" y1="378.8" x2="236" y2="417.6"/>
            <line id="central_940gzzlugfd_940gzzlupvl" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="174.4" y1="356" x2="198.2" y2="379.8"/>
            <path id="central_940gzzlunht_940gzzlugfd" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" d=" M161.9,315.9v24.6c0,1.8,1,4.2,2.3,5.4l10.2,10.2"/>
            <line id="central_940gzzlusrp_940gzzlunht" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="161.9" y1="291.5" x2="161.9" y2="317.4"/>
            <line id="central_940gzzlursg_940gzzlusrp" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="161.9" y1="265.3" x2="161.9" y2="291.5"/>
            <rect id="central_940gzzlursg" x="159.3" y="265.3" fill="#EE3124" width="1.5" height="1.5"/>
            <rect id="central_940gzzlunht" x="159.3" y="315.9" fill="#EE3124" width="1.5" height="1.5"/>
            <rect id="central_940gzzlupvl" x="195.5" y="379.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -211.6485 250.2835)"
                  fill="#EE3124" width="1.5" height="1.5"/>
            <rect id="central_940gzzluwta" x="248" y="453.1" fill="#EE3124" width="1.5" height="1.5"/>
            <rect id="central_940gzzlunan" x="284.6" y="453.1" fill="#EE3124" width="1.5" height="1.5"/>
            <rect id="central_940gzzluean" x="301.2" y="449.3" fill="#EE3124" width="1.5" height="1.5"/>
            <rect id="central_940gzzluhpk" x="372.7" y="453.1" fill="#EE3124" width="1.5" height="1.5"/>
            <rect id="central_940gzzluqwy" x="414.9" y="453.1" fill="#EE3124" width="1.5" height="1.5"/>
            <rect id="central_940gzzlumba" x="441.3" y="438" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -180.7923 441.0696)"
                  fill="#EE3124" width="1.5" height="1.5"/>
            <rect id="central_940gzzlulgt" x="435.4" y="449.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -190.4279 440.1746)"
                  fill="#EE3124" width="1.5" height="1.5"/>
            <rect id="central_940gzzluchl" x="588.5" y="437.6"
                  transform="matrix(0.7071 -0.7071 0.7071 0.7071 -137.3808 545.0524)" fill="#EE3124" width="1.5"
                  height="1.5" className="disrupted closed"/>
            <rect id="central_940gzzlublg" x="738.7" y="388.3" fill="#EE3124" width="1.5" height="1.5"></rect>
            <rect id="central_940gzzlulyn" x="845.7" y="311.1" fill="#EE3124" width="1.5" height="1.5"></rect>
            <rect id="central_940gzzlulys" x="845.7" y="280.8" fill="#EE3124" width="1.5" height="1.5"></rect>
            <rect id="central_940gzzluwsd" x="857.6" y="267.3" fill="#EE3124" width="1.5" height="1.5"></rect>
            <rect id="central_940gzzlugth" x="885.2" y="267.3" fill="#EE3124" width="1.5" height="1.5"></rect>
            <rect id="central_940gzzlurbg" x="871.4" y="263.6" fill="#EE3124" width="1.5" height="1.5"></rect>
            <rect id="central_940gzzlusnb" x="845.8" y="244.9" fill="#EE3124" width="1.5" height="1.5"></rect>
            <rect id="central_940gzzlubke" x="893.6" y="241.6" fill="#EE3124" width="1.5" height="1.5"></rect>
            <rect id="central_940gzzluflp" x="893.6" y="230.5" fill="#EE3124" width="1.5" height="1.5"></rect>
            <rect id="central_940gzzlucwl" x="873.2" y="207.9" fill="#EE3124" width="1.5" height="1.5"></rect>
            <rect id="central_940gzzluggh" x="885.2" y="204.2" fill="#EE3124" width="1.5" height="1.5"></rect>
            <rect id="central_940gzzlulgn" x="863.2" y="161.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 138.3348 658.437)"
                  fill="#EE3124" width="1.5" height="1.5"/>
            <rect id="central_940gzzluthb" x="877.9" y="146.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 153.0232 664.5211)"
                  fill="#EE3124" width="1.5" height="1.5"/>
            <line fill="none" stroke="#F1F2F2" strokeWidth="2.9476" strokeLinejoin="round"
                  strokeMiterlimit="3.9938" x1="161.9" y1="234.4" x2="161.9" y2="231.1"/>
            <line id="central_940gzzluwrp_940gzzlursg" fill="none" stroke="#EE3124" strokeWidth="2.2707"
                  strokeLinejoin="round" strokeMiterlimit="3.9938" x1="161.9" y1="214.1" x2="161.9" y2="266.8"/>
    </g>
    )
})

export default Central;