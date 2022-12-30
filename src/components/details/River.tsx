import React, {memo, FC} from 'react';
import {COLORS} from "../../constant/colors";


const River: FC = memo(() => {
        return (
            <g id="river">
                <path fill={COLORS.aqua}
                      d="M147.7,635.4l0-35.4c0-2.9,1.2-5.5,3.1-7.4c1.9-1.9,15.7-15.8,16.7-16.7l3.7,3.7 c-1.9,1.9-15.7,15.7-16.7,16.7c-1,1-1.6,2.3-1.6,3.8l0,35.2"/>
                <path fill={COLORS.aqua}
                      d="M167.4,576.1c0.6-0.6,20.7-20.6,23.6-23.6c1.9-1.9,4.5-3,7.4-3l46,0l1.7,0l44.8,0c2.9,0,5.5,1.2,7.4,3 c1.9,1.9,38.2,38.1,39.2,39.1c1,1,2.3,1.6,3.8,1.6l134.4,0c2.2,0,3.9-1.8,3.9-3.9V536c0-5.8,4.7-10.4,10.4-10.4l88.6,0 c1.1,0,2.1-0.5,2.8-1.2l27.9-27.2l1-1c2-2,4.7-3.2,7.6-3.2l121.5,0c6,0,10.9,4.9,10.9,10.9l0,69.6c0,1.8,1.4,3.2,3.2,3.2l48.5,0 c1.8,0,3.3-1.5,3.3-3.3l0-64.9c0-6.3,5.1-11.5,11.5-11.5l51.9,0c7,0,12.6,5.7,12.6,12.6v53.8c0,1.6,1.3,2.8,2.8,2.8l66,0v9.1 l-64,0c-7.3,0-13.3-5.9-13.3-13.3l0-53.7c0-2-1.6-3.7-3.7-3.7h-52.9c-1.8,0-3.3,1.5-3.3,3.3l0,64.9c0,6.3-5.1,11.5-11.5,11.5 l-48.1,0c-6,0-10.9-4.9-10.9-10.9v-69.9c0-2.3-1.9-4.2-4.1-4.2l-120.6,0c-1.1,0-2.1,0.5-2.8,1.2L586,528.8c-2,2-4.7,3.2-7.6,3.2 l-88.3,0.1c-2.3,0-4.2,1.9-4.2,4.2l0,51.7c0,5.8-4.7,10.4-10.4,10.4l-134.6,0c-2.9,0-5.5-1.2-7.4-3.1 c-1.9-1.9-38.2-38.2-39.2-39.1c-1-1-2.3-1.6-3.8-1.6l-44.5,0.1l-1.9,0l-45.7-0.1c-1.5,0-2.8,0.6-3.8,1.6 c-1,1-21.8,21.8-23.7,23.6"/>
                <path fill="none" stroke={COLORS.aquaBorder} strokeWidth="0.26"
                      d="M188.6,562.2c1.9-1.9,5-5.1,6-6.1c1-1,2.3-1.6,3.8-1.6l43.8,0l3.9,0 l44.5-0.1c1.5,0,2.8,0.6,3.8,1.6c1,1,37.3,37.3,39.2,39.1c1.9,1.9,4.5,3.1,7.4,3.1l134.6,0c5.7,0,10.4-4.7,10.4-10.4l0-51.7 c0-2.3,1.9-4.2,4.2-4.2l88.3-0.1c2.9,0,5.6-1.2,7.6-3.2l28.9-28.2c0.7-0.7,1.8-1.2,2.8-1.2l120.6,0c2.3,0,4.1,1.9,4.1,4.2v69.9 c0,6,4.9,10.9,10.9,10.9l48.1,0c6.3,0,11.5-5.2,11.5-11.5l0-64.9c0-1.8,1.5-3.3,3.3-3.3h52.9c2,0,3.7,1.6,3.7,3.7l0,53.7 c0,7.3,6,13.3,13.3,13.3l63.9,0"/>
                <path fill="none" stroke={COLORS.aquaBorder} strokeWidth="0.26"
                      d="M184,559.5c1-1,5.1-5.1,7-7c1.9-1.9,4.5-3,7.4-3l44.9,0l2.9,0l44.8,0 c2.9,0,5.5,1.2,7.4,3c1.9,1.9,38.2,38.1,39.1,39.1c1,1,2.3,1.6,3.8,1.6l134.4,0c2.2,0,3.9-1.8,3.9-3.9V536 c0-5.8,4.7-10.4,10.4-10.4l88.6,0c1.1,0,2.1-0.5,2.8-1.2l27.9-27.2l1-1c2-2,4.7-3.2,7.6-3.2l121.5,0c6,0,10.9,4.9,10.9,10.9 l0,69.6c0,1.8,1.4,3.2,3.2,3.2l48.5,0c1.8,0,3.3-1.5,3.3-3.3l0-64.9c0-6.3,5.1-11.5,11.5-11.5l51.9,0c7,0,12.6,5.7,12.6,12.6 v53.8c0,1.6,1.3,2.8,2.8,2.8l66,0"/>
                <path fill="none" stroke={COLORS.aquaBorder} strokeWidth="0.26"
                      d="M184,559.5c-1,1-31.3,31.4-33.2,33.2c-1.9,1.9-3.1,4.5-3.1,7.4 l0,35.4"/>
                <path fill="none" stroke={COLORS.aquaBorder} strokeWidth="0.26"
                      d="M188.6,562.2c-1.9,1.9-33.2,33.2-34.2,34.2c-1,1-1.6,2.3-1.6,3.8 l0,28.1"/>
                <path fill={COLORS.aqua}
                      d="M147.7,624.9l0,9.7c0,2.2-1.8,3.9-3.9,3.9H64.3l0,5.1l78.1,0c5.8,0,10.4-3.2,10.4-9l0-9.8L147.7,624.9z"/>
                <path fill="none" stroke={COLORS.aquaBorder} strokeWidth="0.26" d="M152.9,624.7l0,10c0,5.7-4.7,9-10.4,9l-78.4,0"/>
                <path fill="none" stroke={COLORS.aquaBorder} strokeWidth="0.26" d="M147.7,624.8l0,9.8c0,2.2-1.8,3.9-3.9,3.9H64.1"/>
                <path fill={COLORS.aqua}
                      d="M1049.7,401.1l-39.6,0c-7,0-12.6,5.7-12.6,12.6v149.6c0,1.6-1.3,2.8-2.8,2.8l-51.9,0v9.1l50.9,0 c7.3,0,13.3-5.9,13.3-13.3l0-147.2c0-2,1.6-3.7,3.7-3.7h39.1L1049.7,401.1z"/>
                <path fill="none" stroke={COLORS.aquaBorder} strokeWidth="0.26"
                      d="M942.8,575.2l50.8,0c7.3,0,13.3-5.9,13.3-13.3l0-147.2 c0-2,1.6-3.7,3.7-3.7h39.3"/>
                <path fill="none" stroke={COLORS.aquaBorder} strokeWidth="0.26"
                      d="M1049.7,401.1l-39.7,0c-7,0-12.6,5.7-12.6,12.6v149.6 c0,1.6-1.3,2.8-2.8,2.8l-51.8,0"/>
                <text transform="matrix(0.9995 0 0 1 688.6232 497.4649)">
                    <tspan x="0" y="0" fill="#00B3F0">River Thames</tspan>
                </text>
            </g>
        )
    }
);

export default River;