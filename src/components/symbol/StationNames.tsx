import React, { FC, memo } from "react";
import { multiWordStationNames, Station } from "../../config";
import StationTextName from "./StationTextName";

const StationNames: FC = memo(() => {
  return (
    <g>
      <StationTextName
        station={Station.BethnalGreenOverground}
        transform="matrix(1 0 0 1 739.5474 375.0828)"
      />
      <StationTextName
        station={Station.CambridgeHeath}
        transform="matrix(1 0 0 1 746.8243 367.0745)"
      />
      <StationTextName
        station={Station.LondonFields}
        transform="matrix(1 0 0 1 751.6514 356.5692)"
      />
      <StationTextName
        station={Station.RectoryRoad}
        transform="matrix(1 0 0 1 742.4007 306.2911)"
      >
        <tspan x="0" y="0">
          Rectory
        </tspan>
        <tspan x="0" y="4.5">
          Road
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.WoodStreet}
        transform="matrix(1 0 0 1 789.1305 232.9279)"
      />
      <StationTextName
        station={Station.BruceGrove}
        transform="matrix(1 0 0 1 717.8124 226.8038)"
      />
      <StationTextName
        station={Station.WhiteHartLane}
        transform="matrix(1 0 0 1 718.9723 216.7298)"
      />
      <StationTextName
        station={Station.SilverStreet}
        transform="matrix(1 0 0 1 717.8124 205.1583)"
      />
      <StationTextName
        station={Station.Southbury}
        transform="matrix(1 0 0 1 726.2225 179.9966)"
      />
      <StationTextName
        station={Station.TurkeyStreet}
        transform="matrix(1 0 0 1 739.4305 166.9815)"
      />
      <StationTextName
        station={Station.TheobaldsGrove}
        transform="matrix(1 0 0 1 752.0477 154.5357)"
      />
      <StationTextName
        station={Station.EnfieldTown}
        transform="matrix(1 0 0 1 680.3973 149.3)"
      />
      <StationTextName
        station={Station.StamfordHill}
        transform="matrix(1 0 0 1 717.8124 280.4867)"
      >
        <tspan x="0" y="0">
          Stamford
        </tspan>
        <tspan x="0" y="4.5">
          Hill
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.BushHillPark}
        transform="matrix(1 0 0 1 689.9598 162.7379)"
      >
        <tspan x="0" y="0">
          Bush Hill
        </tspan>
        <tspan x="10.1" y="4.5">
          Park
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.HighamsPark}
        transform="matrix(1 0 0 1 789.6979 207.6988)"
      />
      <StationTextName
        station={Station.Chingford}
        transform="matrix(1 0 0 1 789.776 180.9871)"
      />
      <StationTextName
        station={Station.Clapton}
        transform="matrix(1 0 0 1 765.4576 311.5362)"
      />
      <StationTextName
        station={Station.StJamesStreet}
        transform="matrix(1 0 0 1 774.7269 302.2621)"
      />
      <StationTextName
        station={Station.StokeNewington}
        transform="matrix(1 0 0 1 728.4773 292.2455)"
      >
        <tspan x="0" y="0">
          Stoke
        </tspan>
        <tspan x="0" y="4.5">
          Park
        </tspan>
      </StationTextName>
      <StationTextName station={Station.HackneyDowns} tag={"g"}>
        <text transform="matrix(1 0 0 1 724.8032 327.7218)">
          <tspan x="0" y="0">
            Hackney
          </tspan>
          <tspan x="3.4" y="4.5">
            Downs
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="742.7,324.3 741,323.5 743.5,323.5 743.5,323 740.9,323 742.2,322.4 743.5,322.4 743.5,321.9 742.2,321.9 740.7,321.2 739.5,321.2 741.1,321.9 738.6,321.9 738.6,322.4 741.1,322.4 739.8,323 738.6,323 738.6,323.5 739.9,323.5 741.6,324.3 "
        />
      </StationTextName>
      <StationTextName station={Station.EdmontonGreen} tag={"g"}>
        <text transform="matrix(1 0 0 1 718.8446 193.8356)">
          {Station.EdmontonGreen}
        </text>
        <polygon
          fill="#EE3124"
          points="761.7,193.8 760,193 762.5,193 762.5,192.5 759.9,192.5 761.2,191.9 762.5,191.9 762.5,191.4 761.2,191.4 759.7,190.6 758.5,190.6 760.1,191.4 757.6,191.4 757.6,191.9 760.1,191.9 758.8,192.5 757.6,192.5 757.6,193 758.9,193 760.6,193.8 "
        />
      </StationTextName>
      <StationTextName station={Station.Cheshunt} tag={"g"}>
        <text transform="matrix(1 0 0 1 764.6307 140.6885)">
          {Station.Cheshunt}
        </text>
        <polygon
          fill="#EE3124"
          points="791,140.7 789.3,139.9 791.7,139.9 791.7,139.4 789.2,139.4 790.5,138.7 791.7,138.7 791.7,138.2 790.5,138.2 788.9,137.5 787.8,137.5 789.4,138.2 786.9,138.2 786.9,138.7 789.4,138.7 788.1,139.4 786.9,139.4 786.9,139.9 788.2,139.9 789.9,140.7 "
        />
      </StationTextName>
      <StationTextName
        station={Station.Ilford}
        transform="matrix(1 0 0 1 907.1184 287.0277)"
      />
      <StationTextName
        station={Station.Goodmayes}
        transform="matrix(1 0 0 1 923.9969 269.1395)"
      />
      <StationTextName
        station={Station.ChadwellHeath}
        transform="matrix(1 0 0 1 941.3464 251.9344)"
      >
        <tspan x="0" y="0">
          Chadwell
        </tspan>
        <tspan x="0" y="4.5">
          Heath
        </tspan>
      </StationTextName>
      <StationTextName station={Station.Romford} tag={"g"}>
        <text transform="matrix(1 0 0 1 959.7061 231.7549)">
          {Station.Romford}
        </text>
        <polygon
          fill="#EE3124"
          points="984.3,231.7 982.5,231 985,231 985,230.4 982.5,230.4 983.8,229.8 985,229.8 985,229.3 983.8,229.3 982.2,228.6 981,228.6 982.7,229.3 980.1,229.3 980.1,229.8 982.7,229.8 981.3,230.4 980.1,230.4 980.1,231 981.4,231 983.1,231.7 "
        />
      </StationTextName>
      <StationTextName
        station={Station.GideaPark}
        transform="matrix(1 0 0 1 969.2869 224.3816)"
      />
      <StationTextName
        station={Station.HaroldWood}
        transform="matrix(1 0 0 1 979.3634 214.9132)"
      />
      <StationTextName station={Station.Shenfield} tag={"g"}>
        <text transform="matrix(1 0 0 1 1001.6055 160.4576)">
          {Station.Shenfield}
        </text>
        <polygon
          fill="#EE3124"
          points="999.7,160.5 998,159.7 1000.4,159.7 1000.4,159.2 997.9,159.2 999.2,158.6 1000.4,158.6 1000.4,158.1 999.2,158.1 997.6,157.3 996.4,157.3 998.1,158.1 995.6,158.1 995.6,158.6 998.1,158.6 996.8,159.2 995.6,159.2 995.6,159.7 996.9,159.7 998.5,160.5 "
        />
      </StationTextName>
      <StationTextName
        station={Station.Brentwood}
        transform="matrix(1 0 0 1 1004.8018 189.0142)"
      />
      <StationTextName
        station={Station.SevenKings}
        transform="matrix(1 0 0 1 916.7372 276.9848)"
      />
      <StationTextName
        station={Station.EmersonPark}
        transform="matrix(1 0 0 1 977.2217 247.1133)"
      />
      <StationTextName
        station={Station.Maryland}
        transform="matrix(1 0 0 1 866.7809 327.8037)"
      />
      <StationTextName
        station={Station.ManorPark}
        transform="matrix(1 0 0 1 898.8948 295.336)"
      />
      <StationTextName
        station={Station.ForestGate}
        transform="matrix(1 0 0 1 879.0323 311.8677)"
      >
        <tspan x="0" y="0">
          Forest
        </tspan>
        <tspan x="0" y="4.5">
          Gate
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.Chorleywood}
        transform="matrix(1 0 0 1 144.3916 177.1592)"
      />
      <StationTextName
        station={Station.Rickmansworth}
        transform="matrix(1 0 0 1 153.4023 190.1495)"
      />
      <StationTextName
        station={Station.Chesham}
        transform="matrix(1 0 0 1 84.1634 146)"
      />
      <StationTextName station={Station.Amersham} tag={"g"}>
        <text transform="matrix(1 0 0 1 86.6807 168.92)">
          {Station.Amersham}
        </text>
        <polygon
          fill="#EE3124"
          points="91.2,173.1 89.5,172.4 91.9,172.4 91.9,171.8 89.4,171.8 90.7,171.2 91.9,171.2 91.9,170.7 90.7,170.7 89.1,170 87.9,170 89.6,170.7 87.1,170.7 87.1,171.2 89.6,171.2 88.3,171.8 87.1,171.8 87.1,172.4 88.4,172.4 90,173.1 "
        />
      </StationTextName>
      <StationTextName station={Station.ChalfontLatimer} tag={"g"}>
        <text transform="matrix(1 0 0 1 132.4688 151.2554)">
          <tspan x="0" y="0">
            Chalfont &amp;
          </tspan>
          <tspan x="3.5" y="4.5">
            Latimer
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="157.7,155.7 155.9,154.9 158.4,154.9 158.4,154.4 155.9,154.4 157.1,153.8 158.4,153.8 158.4,153.3 157.1,153.3 155.6,152.5 154.4,152.5 156,153.3 153.5,153.3 153.5,153.8 156,153.8 154.7,154.4 153.5,154.4 153.5,154.9 154.8,154.9 156.5,155.7 "
        />
      </StationTextName>
      <StationTextName
        station={Station.MoorPark}
        transform="matrix(1 0 0 1 209.4 198.1207)"
      />
      <StationTextName
        station={Station.Watford}
        transform="matrix(1 0 0 1 204.6 166.0284)"
      />
      <StationTextName
        station={Station.Croxley}
        transform="matrix(1 0 0 1 204.6 180.7535)"
      />
      <StationTextName
        station={Station.Northwood}
        transform="matrix(1 0 0 1 220.2 208.917)"
      />
      <StationTextName
        station={Station.NorthwoodHills}
        transform="matrix(1 0 0 1 231 219.7388)"
      />
      <StationTextName
        station={Station.Pinner}
        transform="matrix(1 0 0 1 242.1 230.5799)"
      />
      <StationTextName
        station={Station.NorthHarrow}
        transform="matrix(1 0 0 1 252.1 240.8555)"
      />
      <StationTextName
        station={Station.NorthwickPark}
        transform="matrix(1 0 0 1 293.8163 268.7574)"
      >
        <tspan x="0" y="0">
          Northwick
        </tspan>
        <tspan x="6.9" y="4.5">
          Park
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.WestHarrow}
        transform="matrix(1 0 0 1 245.3423 267.8955)"
      >
        <tspan x="0" y="0">
          West
        </tspan>
        <tspan x="-2.6" y="4.5">
          Harrow
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.Ickenham}
        transform="matrix(1 0 0 1 137.3481 238.3123)"
      />
      <StationTextName
        station={Station.Uxbridge}
        transform="matrix(1 0 0 1 101.2875 238.3125)"
      />
      <StationTextName
        station={Station.Hillingdon}
        transform="matrix(1 0 0 1 120.2625 225.8597)"
      />
      <StationTextName
        station={Station.Ruislip}
        transform="matrix(1 0 0 1 167.4644 225.1822)"
      />
      <StationTextName
        station={Station.RuislipManor}
        transform="matrix(1 0 0 1 196.8789 231.8189)"
      />
      <StationTextName
        station={Station.Eastcote}
        transform="matrix(1 0 0 1 208.6021 243.5435)"
      />
      <StationTextName station={Station.HarrowOnTheHill} tag={"g"}>
        <text transform="matrix(1 0 0 1 269.2989 251.8374)">
          <tspan x="0" y="0">
            Harrow-
          </tspan>
          <tspan x="-3" y="4.5">
            on-the-Hill
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="267.6,251.9 265.9,251.1 268.3,251.1 268.3,250.6 265.8,250.6 267.1,250 268.3,250 268.3,249.5 267.1,249.5 265.5,248.8 264.3,248.8 266,249.5 263.5,249.5 263.5,250 266,250 264.7,250.6 263.5,250.6 263.5,251.1 264.8,251.1 266.4,251.9 "
        />
      </StationTextName>
      <StationTextName
        station={Station.PrestonRoad}
        transform="matrix(1 0 0 1 325.8085 256.9566)"
      />
      <StationTextName
        station={Station.WembleyPark}
        transform="matrix(1 0 0 1 331.315 279.6885)"
      />
      <StationTextName
        station={Station.Stanmore}
        transform="matrix(1 0 0 1 374.2 215.4)"
      />
      <StationTextName
        station={Station.CanonsPark}
        transform="matrix(1 0 0 1 374.2 226.4571)"
      />
      <StationTextName
        station={Station.Queensbury}
        transform="matrix(1 0 0 1 374.2 237.8569)"
      />
      <StationTextName
        station={Station.Kingsbury}
        transform="matrix(1 0 0 1 374.2 249.2638)"
      />
      <StationTextName
        station={Station.Neasden}
        transform="matrix(1 0 0 1 383.5 267.3)"
      />
      <StationTextName
        station={Station.DollisHill}
        transform="matrix(1 0 0 1 392.3 275.9)"
      />
      <StationTextName
        station={Station.WillesdenGreen}
        transform="matrix(1 0 0 1 400.1 284.25)"
      />
      <StationTextName
        station={Station.Kilburn}
        transform="matrix(1 0 0 1 410.3 293.7)"
      />
      <StationTextName
        station={Station.BakerStreet}
        transform="matrix(1 0 0 1 447.395 395.1018)"
      >
        <tspan x="0" y="0">
          Baker
        </tspan>
        <tspan x="-1.2" y="4.5">
          Street
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.Aldgate}
        transform="matrix(1 0 0 1 671.5918 446.9772)"
      />
      <StationTextName
        station={Station.Barbican}
        transform="matrix(1 0 0 1 591.5282 412.1575)"
      />
      <StationTextName
        station={Station.GreatPortlandStreet}
        transform="matrix(1 0 0 1 476.081 390.1348)"
      >
        <tspan x="0" y="0">
          Great Portland
        </tspan>
        <tspan x="9.6" y="4.5">
          Street
        </tspan>
      </StationTextName>
      <StationTextName station={Station.Farringdon} tag={"g"}>
        <text transform="matrix(1 0 0 1 603.2601 390.5073)">
          {Station.Farringdon}
        </text>
        <polygon
          fill="#EE3124"
          points="625.6,395 623.9,394.2 626.3,394.2 626.3,393.7 623.8,393.7 625.1,393.1 626.3,393.1 626.3,392.6 625.1,392.6 623.5,391.8 622.3,391.8 624,392.6 621.4,392.6 621.4,393.1 624,393.1 622.6,393.7 621.4,393.7 621.4,394.2 622.7,394.2 624.4,395 "
        />
      </StationTextName>
      <StationTextName station={Station.LiverpoolStreet} tag={"g"}>
        <text transform="matrix(1 0 0 1 660 393.67)">
          <tspan x="0" y="0">
            Liverpool
          </tspan>
          <tspan x="0" y="4.5">
            Street
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="678.8,398.2 677,397.4 679.5,397.4 679.5,396.9 677,396.9 678.2,396.3 679.5,396.3 679.5,395.8 678.2,395.8 676.7,395 675.5,395 677.1,395.8 674.6,395.8 674.6,396.3 677.1,396.3 675.8,396.9 674.6,396.9 674.6,397.4 675.9,397.4 677.6,398.2 "
        />
      </StationTextName>
      <StationTextName station={Station.Moorgate} tag={"g"}>
        <text transform="matrix(1 0 0 1 603.4033 425.4646)">
          {Station.Moorgate}
        </text>
        <polygon
          fill="#EE3124"
          points="601.7,425.5 600,424.7 602.4,424.7 602.4,424.2 599.9,424.2 601.2,423.6 602.4,423.6 602.4,423.1 601.2,423.1 599.6,422.3 598.4,422.3 600.1,423.1 597.5,423.1 597.5,423.6 600.1,423.6 598.7,424.2 597.5,424.2 597.5,424.7 598.8,424.7 600.5,425.5 "
        />
      </StationTextName>
      <StationTextName station={Station.KingsCrossStPancras} tag={"g"}>
        <text transform="matrix(1 0 0 1 598.285 359.6533)">
          <tspan x="0" y="0">
            King’s Cross
          </tspan>
          <tspan x="0" y="4.5">
            &amp; St Pancras
          </tspan>
          <tspan x="0" y="9.1">
            International
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="632.5,369 630.8,368.3 633.2,368.3 633.2,367.7 630.7,367.7 632,367.1 633.2,367.1 633.2,366.6 632,366.6 630.4,365.9 629.3,365.9 630.9,366.6 628.4,366.6 628.4,367.1 630.9,367.1 629.6,367.7 628.4,367.7 628.4,368.3 629.7,368.3 631.3,369 "
        />
      </StationTextName>
      <StationTextName tag={"g"} station={Station.EustonSquare}>
        <text transform="matrix(1 0 0 1 513.0743 388.9251)">
          <tspan x="0" y="0">
            Euston
          </tspan>
          <tspan x="0.1" y="4.5">
            Square
          </tspan>
        </text>
      </StationTextName>
      <StationTextName
        station={Station.MansionHouse}
        transform="matrix(1 0 0 1 568.6135 487.5446)"
      />
      <StationTextName
        station={Station.Monument}
        transform="matrix(1 0 0 1 638.7191 476.9512)"
      />
      <StationTextName
        station={Station.SouthKensington}
        transform="matrix(1 0 0 1 414.957 521.0352)"
      >
        <tspan x="0" y="0">
          South
        </tspan>
        <tspan x="-5.9" y="4.5">
          Kensington
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.SloaneSquare}
        transform="matrix(1 0 0 1 441.1669 520.0626)"
      >
        <tspan x="0" y="0">
          Sloane
        </tspan>
        <tspan x="-0.2" y="4.5">
          Square
        </tspan>
      </StationTextName>
      <StationTextName station={Station.CannonStreet} tag={"g"}>
        <text transform="matrix(1 0 0 1 579.0484 479.9398)">
          {Station.CannonStreet}
        </text>
        <polygon
          fill="#EE3124"
          points="577.5,479.9 575.8,479.2 578.2,479.2 578.2,478.6 575.7,478.6 577,478 578.2,478 578.2,477.5 577,477.5 575.4,476.8 574.2,476.8 575.9,477.5 573.4,477.5 573.4,478 575.9,478 574.6,478.6 573.4,478.6 573.4,479.2 574.7,479.2 576.3,479.9 "
        />
      </StationTextName>
      <StationTextName
        station={Station.Westminster}
        transform="matrix(1 0 0 1 483.1724 505.8081)"
      />
      <StationTextName
        station={Station.GloucesterRoad}
        transform="matrix(1 0 0 1 395.3994 497.8389)"
      >
        <tspan x="0" y="0">
          Gloucester
        </tspan>
        <tspan x="6.6" y="4.5">
          Road
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.StJamessPark}
        transform="matrix(1 0 0 1 478.5209 519.7138)"
      >
        <tspan x="0" y="0">
          St James's
        </tspan>
        <tspan x="6.4" y="4.5">
          Park
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.Temple}
        transform="matrix(1 0 0 1 566.819 520.0397)"
      />
      <StationTextName
        station={Station.Embankment}
        transform="matrix(1 0 0 1 546.2826 508.0914)"
      />
      <StationTextName station={Station.Blackfriars} tag={"g"}>
        <text transform="matrix(1 0 0 1 571.912 495.4815)">
          {Station.Blackfriars}
        </text>
        <polygon
          fill="#EE3124"
          points="570.2,495.5 568.4,494.7 570.9,494.7 570.9,494.2 568.3,494.2 569.6,493.6 570.9,493.6 570.9,493.1 569.6,493.1 568.1,492.3 566.9,492.3 568.5,493.1 566,493.1 566,493.6 568.5,493.6 567.2,494.2 566,494.2 566,494.7 567.3,494.7 569,495.5 "
        />
      </StationTextName>
      <StationTextName
        station={Station.Bayswater}
        transform="matrix(1 0 0 1 394.5918 425.3695)"
      />
      <StationTextName
        station={Station.HighStreetKensington}
        transform="matrix(1 0 0 1 394.4595 477.6826)"
      />
      <StationTextName
        station={Station.NottingHillGate}
        transform="matrix(1 0 0 1 393.1865 444.0772)"
      >
        <tspan x="0" y="0">
          Notting
        </tspan>
        <tspan x="0" y="4.5">
          Hill Gate
        </tspan>
      </StationTextName>
      <StationTextName station={Station.Paddington} tag={"g"}>
        <text transform="matrix(1 0 0 1 392.5645 409.9308)">
          {Station.Paddington}
        </text>
        <polygon
          fill="#EE3124"
          points=" 402.7,414.8 400.9,414 403.4,414 403.4,413.5 400.9,413.5 402.1,412.9 403.4,412.9 403.4,412.4 402.1,412.4 400.6,411.7 399.4,411.7 401,412.4 398.5,412.4 398.5,412.9 401,412.9 399.7,413.5 398.5,413.5 398.5,414 399.8,414 401.5,414.8 "
        />
      </StationTextName>
      <StationTextName
        transform="matrix(1 0 0 1 421.4268 388.0985)"
        station={Station.EdgwareRoad}
      />
      <StationTextName
        transform="matrix(1 0 0 1 325.9344 162.2295)"
        station={Station.WatfordHighStreet}
      />
      <StationTextName
        transform="matrix(1 0 0 1 327.0379 190.5625)"
        station={Station.CarpendersPark}
      />
      <StationTextName
        transform="matrix(1 0 0 1 326.4075 203.4351)"
        station={Station.HatchEnd}
      />
      <StationTextName
        transform="matrix(1 0 0 1 325.4317 247.4185)"
        station={Station.Kenton}
      />
      <StationTextName
        transform="matrix(1 0 0 1 326.4075 216.6788)"
        station={Station.HeadstoneLane}
      />
      <StationTextName station={Station.HarrowWealdstone} tag={"g"}>
        <text transform="matrix(1 0 0 1 294.8853 225.0679)">
          <tspan x="0" y="0">
            Harrow &amp;
          </tspan>
          <tspan x="-5.4" y="4.5">
            Wealdstone
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="293.3,225.1 291.5,224.3 294,224.3 294,223.8 291.5,223.8 292.7,223.2 294,223.2 294,222.7 292.7,222.7 291.2,221.9 290,221.9 291.6,222.7 289.1,222.7 289.1,223.2 291.6,223.2 290.3,223.8 289.1,223.8 289.1,224.3 290.4,224.3 292.1,225.1 "
        />
      </StationTextName>
      <StationTextName station={Station.Bushey} tag={"g"}>
        <text transform="matrix(1 0 0 1 327.2308 176.9883)">
          {Station.Bushey}
        </text>
        <polygon
          fill="#EE3124"
          points="348.5,177 346.8,176.2 349.2,176.2 349.2,175.7 346.7,175.7 348,175.1 349.2,175.1 349.2,174.6 348,174.6 346.4,173.9 345.3,173.9 346.9,174.6 344.4,174.6 344.4,175.1 346.9,175.1 345.6,175.7 344.4,175.7 344.4,176.2 345.7,176.2 347.3,177 "
        />
      </StationTextName>
      <StationTextName station={Station.WatfordJunction} tag={"g"}>
        <text transform="matrix(1 0 0 1 326.6713 147.7915)">
          {multiWordStationNames[Station.WatfordJunction]}
        </text>
        <polygon
          fill="#EE3124"
          points="370,147.8 368.3,147 370.7,147 370.7,146.5 368.2,146.5 369.5,145.9 370.7,145.9 370.7,145.4 369.5,145.4 367.9,144.7 366.7,144.7 368.4,145.4 365.9,145.4 365.9,145.9 368.4,145.9 367.1,146.5 365.9,146.5 365.9,147 367.2,147 368.8,147.8 "
        />
      </StationTextName>
      <StationTextName
        transform="matrix(1 0 0 1 281 289.1079)"
        station={Station.NorthWembley}
      />
      <StationTextName
        transform="matrix(1 0 0 1 285.1128 279.9156)"
        station={Station.SouthKenton}
      />
      <StationTextName
        transform="matrix(1 0 0 1 325.5396 334.6352)"
        station={Station.KensalGreen}
      />
      <StationTextName
        transform="matrix(1 0 0 1 325.7194 343.4492)"
        station={Station.QueensPark}
      />
      <StationTextName
        transform="matrix(1 0 0 1 277 307.4702)"
        station={Station.StonebridgePark}
      />
      <StationTextName
        transform="matrix(1 0 0 1 292.8 316.6612)"
        station={Station.Harlesden}
      />
      <StationTextName
        transform="matrix(1 0 0 1 273.5 325.4339)"
        station={Station.WillesdenJunction}
      />
      <StationTextName station={Station.WembleyCentral} tag={"g"}>
        <text transform="matrix(1 0 0 1 277.6 298.2886)">
          {multiWordStationNames[Station.WembleyCentral]}
        </text>
        <polygon
          fill="#EE3124"
          points="275.9,298.3 274.2,297.5 276.6,297.5 276.6,297 274.1,297 275.4,296.4 276.6,296.4 276.6,295.9 275.4,295.9 273.8,295.1 272.6,295.1 274.3,295.9 271.7,295.9 271.7,296.4 274.3,296.4 272.9,297 271.7,297 271.7,297.5 273,297.5 274.7,298.3 "
        />
      </StationTextName>
      <StationTextName
        transform="matrix(1 0 0 1 292.2905 367.9502)"
        station={Station.KilburnPark}
      />
      <StationTextName station={Station.Marylebone} tag={"g"}>
        <text transform="matrix(1 0 0 1 420.9531 368.9326)">
          {Station.Marylebone}
        </text>
        <polygon
          fill="#EE3124"
          points="452.3,368.9 450.6,368.2 453,368.2 453,367.6 450.5,367.6 451.8,367 453,367 453,366.5 451.8,366.5 450.2,365.8 449,365.8 450.7,366.5 448.1,366.5 448.1,367 450.7,367 449.4,367.6 448.1,367.6 448.1,368.2 449.4,368.2 451.1,368.9 "
        />
      </StationTextName>
      <StationTextName
        transform="matrix(1 0 0 1 332.7734 380.2793)"
        station={Station.WarwickAvenue}
      >
        <tspan x="0" y="0">
          Warwick
        </tspan>
        <tspan x="1.3" y="4.5">
          Avenue
        </tspan>
      </StationTextName>
      <StationTextName
        transform="matrix(1 0 0 1 303.7798 376.1397)"
        station={Station.MaidaVale}
      />
      <StationTextName
        transform="matrix(1 0 0 1 384.9407 369.7022)"
        station={Station.EdgwareRoadBakerloo}
      />
      <StationTextName station={Station.ElephantCastle} tag={"g"}>
        <text transform="matrix(1 0 0 1 560 619)">
          {Station.ElephantCastle}
        </text>
        <polygon
          fill="#EE3124"
          points="600.2,619.6 598.5,618.8 601,618.8 601,618.3 598.4,618.3 599.7,617.7 601,617.7 601,617.2 599.7,617.2 598.2,616.4 597,616.4 598.6,617.2 596.1,617.2 596.1,617.7 598.6,617.7 597.3,618.3 596.1,618.3 596.1,618.8 597.4,618.8 599.1,619.6 "
        />
      </StationTextName>
      <StationTextName
        transform="matrix(1 0 0 1 484.71 407.131)"
        station={Station.RegentsPark}
      />
      <StationTextName
        transform="matrix(1 0 0 1 498.8727 438.7169)"
        station={Station.OxfordCircus}
      >
        <tspan x="0" y="0">
          Oxford
        </tspan>
        <tspan x="0" y="4.5">
          Circus
        </tspan>
      </StationTextName>
      <StationTextName
        transform="matrix(1 0 0 1 494.9609 472.5049)"
        station={Station.PiccadillyCircus}
      >
        <tspan x="0" y="0">
          Piccadilly
        </tspan>
        <tspan x="7.2" y="4.5">
          Circus
        </tspan>
      </StationTextName>
      <StationTextName station={Station.CharingCross} tag={"g"}>
        <text transform="matrix(1 0 0 1 514.9346 487.6963)">
          <tspan x="0" y="0">
            Charing
          </tspan>
          <tspan x="4.5" y="4.5">
            Cross
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="513.2,487.7 511.5,486.9 513.9,486.9 513.9,486.4 511.4,486.4 512.7,485.8 513.9,485.8 513.9,485.3 512.7,485.3 511.1,484.6 509.9,484.6 511.6,485.3 509,485.3 509,485.8 511.6,485.8 510.2,486.4 509,486.4 509,486.9 510.3,486.9 512,487.7 "
        />
      </StationTextName>
      <StationTextName station={Station.Euston} tag={"g"}>
        <text transform="matrix(1 0 0 1 517.741 370.5218)">
          {Station.Euston}
        </text>
        <polygon
          fill="#EE3124"
          points="516.8,370.5 515.1,369.7 517.6,369.7 517.6,369.2 515,369.2 516.3,368.6 517.6,368.6 517.6,368.1 516.3,368.1 514.8,367.4 513.6,367.4 515.2,368.1 512.7,368.1 512.7,368.6 515.2,368.6 513.9,369.2 512.7,369.2 512.7,369.7 514,369.7 515.7,370.5 "
        />
      </StationTextName>
      <StationTextName
        transform="matrix(1 0 0 1 177.5811 384.086)"
        station={Station.Perivale}
      />
      <StationTextName
        transform="matrix(1 0 0 1 238.7823 409.6912)"
        station={Station.HangerLane}
      >
        <tspan x="0" y="0">
          Hanger
        </tspan>
        <tspan x="0" y="4.5">
          Lane
        </tspan>
      </StationTextName>
      <StationTextName
        transform="matrix(1 0 0 1 143 264.7813)"
        station={Station.RuislipGardens}
      >
        <tspan x="0" y="0">
          Ruislip
        </tspan>
        <tspan x="-3.4" y="4.5">
          Gardens
        </tspan>
      </StationTextName>
      <StationTextName station={Station.SouthRuislip} tag={"g"}>
        <text transform="matrix(1 0 0 1 128.5 292.8112)">
          {multiWordStationNames[Station.SouthRuislip]}
        </text>
        <polygon
          fill="#EE3124"
          points="156.1,297.6 154.4,296.8 156.8,296.8 156.8,296.3 154.3,296.3 155.6,295.7 156.8,295.7 156.8,295.2 155.6,295.2 154,294.5 152.8,294.5 154.5,295.2 152,295.2 152,295.7 154.5,295.7 153.2,296.3 152,296.3 152,296.8 153.3,296.8 154.9,297.6 "
        />
      </StationTextName>
      <StationTextName station={Station.Greenford} tag={"g"}>
        <text transform="matrix(1 0 0 1 175.8243 352.7943)">
          {Station.Greenford}
        </text>
        <polygon
          fill="#EE3124"
          points="197.5,357 195.7,356.2 198.2,356.2 198.2,355.7 195.7,355.7 197,355.1 198.2,355.1 198.2,354.6 197,354.6 195.4,353.9 194.2,353.9 195.9,354.6 193.3,354.6 193.3,355.1 195.9,355.1 194.5,355.7 193.3,355.7 193.3,356.2 194.6,356.2 196.3,357 "
        />
      </StationTextName>
      <StationTextName
        transform="matrix(1 0 0 1 139.3 317.822)"
        station={Station.Northolt}
      />
      <StationTextName station={Station.WestRuislip} tag={"g"}>
        <text transform="matrix(1 0 0 1 129.9106 215.1539)">
          {multiWordStationNames[Station.WestRuislip]}
        </text>
        <polygon
          fill="#EE3124"
          points="128.2,215.2 126.5,214.5 129,214.5 129,213.9 126.4,213.9 127.7,213.3 129,213.3 129,212.8 127.7,212.8 126.2,212.1 125,212.1 126.6,212.8 124.1,212.8 124.1,213.3 126.6,213.3 125.3,213.9 124.1,213.9 124.1,214.5 125.4,214.5 127.1,215.2 "
        />
      </StationTextName>
      <StationTextName station={Station.EalingBroadway} tag={"g"}>
        <text transform="matrix(1 0 0 1 196.8934 467.01)">
          <tspan x="0" y="0">
            Ealing
          </tspan>
          <tspan x="-8.8" y="4.5">
            Broadway
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="209.2,476 207.4,475.2 209.9,475.2 209.9,474.7 207.4,474.7 208.6,474.1 209.9,474.1 209.9,473.6 208.6,473.6 207.1,472.8 205.9,472.8 207.5,473.6 205,473.6 205,474.1 207.5,474.1 206.2,474.7 205,474.7 205,475.2 206.3,475.2 208,476 "
        />
      </StationTextName>
      <StationTextName
        transform="matrix(1 0 0 1 243.0518 458.9366)"
        station={Station.WestActon}
      >
        <tspan x="0" y="0">
          West
        </tspan>
        <tspan x="-0.9" y="4.5">
          Acton
        </tspan>
      </StationTextName>
      <StationTextName
        transform="matrix(1 0 0 1 466.5535 418.2907)"
        station={Station.BondStreet}
      >
        <tspan x="0" y="0">
          Bond
        </tspan>
        <tspan x="0" y="4.5">
          Acton
        </tspan>
      </StationTextName>
      <StationTextName
        transform="matrix(1 0 0 1 278.7842 458.7862)"
        station={Station.NorthActon}
      >
        <tspan x="0" y="0">
          North
        </tspan>
        <tspan x="0" y="4.5">
          Acton
        </tspan>
      </StationTextName>
      <StationTextName
        transform="matrix(1 0 0 1 402.6401 458.4678)"
        station={Station.Queensway}
      />
      <StationTextName
        transform="matrix(1 0 0 1 414.2127 437.7537)"
        station={Station.MarbleArch}
      />
      <StationTextName
        transform="matrix(1 0 0 1 297.3672 443.1123)"
        station={Station.EastCity}
      >
        <tspan x="0" y="0">
          East
        </tspan>
        <tspan x="0.5" y="4.5">
          City
        </tspan>
      </StationTextName>
      <StationTextName
        transform="matrix(1 0 0 1 316.5615 442.416)"
        station={Station.WhiteCity}
      >
        <tspan x="0" y="0">
          White
        </tspan>
        <tspan x="2.1" y="4.5">
          City
        </tspan>
      </StationTextName>
      <StationTextName station={Station.ShepherdsBush} tag={"g"}>
        <text transform="matrix(1 0 0 1 345.6039 442.8057)">
          <tspan x="0" y="0">
            Shepherd’s
          </tspan>
          <tspan x="6.8" y="4.5">
            Bush
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="367.9,447.3 366.2,446.6 368.6,446.6 368.6,446.1 366.1,446.1 367.4,445.4 368.6,445.4 368.6,444.9 367.4,444.9 365.8,444.2 364.6,444.2 366.3,444.9 363.8,444.9 363.8,445.4 366.3,445.4 365,446.1 363.8,446.1 363.8,446.6 365.1,446.6 366.7,447.3 "
        />
      </StationTextName>
      <StationTextName
        transform="matrix(1 0 0 1 540.4 413.9)"
        station={Station.TottenhamCourtRoad}
      >
        <tspan x="0" y="0">
          Tottenham
        </tspan>
        <tspan x="0" y="4.5">
          Court
        </tspan>
        <tspan x="0" y="9.1">
          Road
        </tspan>
      </StationTextName>
      <StationTextName
        transform="matrix(1 0 0 1 729.27 382.396)"
        station={Station.BethnalGreenCentral}
      >
        <tspan x="0" y="0">
          Bethnal
        </tspan>
        <tspan x="1.9" y="4.5">
          Green
        </tspan>
      </StationTextName>
      <StationTextName
        transform="matrix(1 0 0 1 765.3398 386.4014)"
        station={Station.MileEnd}
      />
      <StationTextName
        transform="matrix(1 0 0 1 563.0166 439.3994)"
        station={Station.Holborn}
      />
      <StationTextName
        transform="matrix(1 0 0 1 598.1855 459.6808)"
        station={Station.StPauls}
      />
      <StationTextName
        transform="matrix(1 0 0 1 639.7977 455.3154)"
        station={Station.Bank}
      />
      <StationTextName
        station={Station.ChanceryLane}
        transform="matrix(1 0 0 1 590.0864 437.487)"
      />
      <StationTextName
        station={Station.Leytonstone}
        transform="matrix(1 0 0 1 848.4 283.0747)"
      />
      <StationTextName
        station={Station.Leyton}
        transform="matrix(1 0 0 1 848.3216 313.1919)"
      />
      <StationTextName
        station={Station.Redbridge}
        transform="matrix(1 0 0 1 861.0394 262.1783)"
      />
      <StationTextName
        station={Station.GantsHill}
        transform="matrix(1 0 0 1 879.514 272.8526)"
      >
        <tspan x="0" y="0">
          Gants
        </tspan>
        <tspan x="2.6" y="4.5">
          Hill
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.Wanstead}
        transform="matrix(1 0 0 1 847.3265 272.8526)"
      />
      <StationTextName station={Station.Stratford} tag={"g"}>
        <text transform="matrix(1 0 0 1 859.3545 341.5674)">
          {Station.Stratford}
        </text>
        <polygon
          fill="#EE3124"
          points="884.1,341.5 882.4,340.8 884.9,340.8 884.9,340.3 882.3,340.3 883.6,339.6 884.9,339.6 884.9,339.1 883.6,339.1 882.1,338.4 880.9,338.4 882.5,339.1 880,339.1 880,339.6 882.5,339.6 881.2,340.3 880,340.3 880,340.8 881.3,340.8 883,341.5 "
        />
      </StationTextName>
      <StationTextName
        station={Station.Woodford}
        transform="matrix(1 0 0 1 848.4 223.6998)"
      />
      <StationTextName
        station={Station.SouthWoodford}
        transform="matrix(1 0 0 1 848.4 235.2007)"
      />
      <StationTextName
        station={Station.Snaresbrook}
        transform="matrix(1 0 0 1 848.4 247.024)"
      />
      <StationTextName
        station={Station.Hainault}
        transform="matrix(1 0 0 1 896 221.7066)"
      />
      <StationTextName
        station={Station.Fairlop}
        transform="matrix(1 0 0 1 896.1556 232.8008)"
      />
      <StationTextName
        station={Station.Barkingside}
        transform="matrix(1 0 0 1 896.1556 243.8946)"
      />
      <StationTextName
        station={Station.NewburyPark}
        transform="matrix(1 0 0 1 896 255.0098)"
      >
        <tspan x="0" y="0">
          Newbury
        </tspan>
        <tspan x="0" y="4.5">
          Park
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.RodingValley}
        transform="matrix(1 0 0 1 850.7503 198)"
      >
        <tspan x="0" y="0">
          Roding
        </tspan>
        <tspan x="0.7" y="4.5">
          Valley
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.GrangeHill}
        transform="matrix(1 0 0 1 878.1409 198)"
      >
        <tspan x="0" y="0">
          Grange
        </tspan>
        <tspan x="3.9" y="4.5">
          Hill
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.Chigwell}
        transform="matrix(1 0 0 1 864.2464 213.4068)"
      />
      <StationTextName
        station={Station.TheydonBois}
        transform="matrix(1 0 0 1 881 151.6)"
      />
      <StationTextName
        station={Station.Epping}
        transform="matrix(1 0 0 1 890.3 141.9)"
      />
      <StationTextName
        station={Station.Debden}
        transform="matrix(1 0 0 1 873.1 159.4)"
      />
      <StationTextName
        station={Station.Loughton}
        transform="matrix(1 0 0 1 864.5 168)"
      />
      <StationTextName
        station={Station.BuckhurstHill}
        transform="matrix(1 0 0 1 848.4 183.6)"
      />
      <StationTextName
        station={Station.BowRoad}
        transform="matrix(1 0 0 1 304.127 474.1543)"
      >
        <tspan x="0" y="0">
          Shepherd’s
        </tspan>
        <tspan x="-3.1" y="4.5">
          Bush Market
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.GoldhawkRoad}
        transform="matrix(1 0 0 1 293.6108 487.0052)"
      />
      <StationTextName
        station={Station.LatimerRoad}
        transform="matrix(1 0 0 1 338.3589 431.7432)"
      />
      <StationTextName
        station={Station.LadbrokeGrove}
        transform="matrix(1 0 0 1 338.2783 420.4483)"
      />
      <StationTextName
        station={Station.RoyalOak}
        transform="matrix(1 0 0 1 354.021 397.1713)"
      />
      <StationTextName
        station={Station.WestbournePark}
        transform="matrix(1 0 0 1 340.2546 411.1788)"
      />
      <StationTextName
        station={Station.WoodLane}
        transform="matrix(1 0 0 1 304.3044 465.3506)"
      />
      <StationTextName
        station={Station.Hammersmith}
        transform="matrix(1 0 0 1 299.2287 500.7586)"
      />
      <StationTextName
        station={Station.BowRoad}
        transform="matrix(1 0 0 1 808.4551 390.1797)"
      >
        <tspan x="0" y="0">
          Bow
        </tspan>
        <tspan x="0" y="4.5">
          Road
        </tspan>
      </StationTextName>
      <StationTextName station={Station.WestHam} tag={"g"}>
        <text transform="matrix(1 0 0 1 858.0725 406.183)">
          <tspan x="0" y="0">
            West
          </tspan>
          <tspan x="0" y="4.5">
            Ham
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="872.8,410.7 871.1,409.9 873.6,409.9 873.6,409.4 871,409.4 872.3,408.8 873.6,408.8 873.6,408.3 872.3,408.3 870.8,407.6 869.6,407.6 871.2,408.3 868.7,408.3 868.7,408.8 871.2,408.8 869.9,409.4 868.7,409.4 868.7,409.9 870,409.9 871.7,410.7 "
        />
      </StationTextName>
      <StationTextName
        station={Station.Whitechapel}
        transform="matrix(1 0 0 1 725.1417 426.7307)"
      />
      <StationTextName
        station={Station.AldgateEast}
        transform="matrix(1 0 0 1 693.8809 421.3047)"
      >
        <tspan x="0" y="0">
          Aldgate
        </tspan>
        <tspan x="7.7" y="4.5">
          East
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.StepneyGreen}
        transform="matrix(1 0 0 1 744.1897 407.6277)"
      />
      <StationTextName
        station={Station.BromleyByBow}
        transform="matrix(1 0 0 1 822.9323 405.4617)"
      >
        <tspan x="0" y="0">
          Bromley-
        </tspan>
        <tspan x="1.7" y="4.5">
          by-Bow
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.EastHam}
        transform="matrix(1 0 0 1 901.2741 373.3636)"
      />
      <StationTextName
        station={Station.Plaistow}
        transform="matrix(1 0 0 1 877.0867 398.2395)"
      />
      <StationTextName
        station={Station.UptonPark}
        transform="matrix(1 0 0 1 889.9039 385.4252)"
      >
        <tspan x="0" y="0">
          Upton
        </tspan>
        <tspan x="0" y="4.5">
          Park
        </tspan>
      </StationTextName>
      <StationTextName station={Station.Barking} tag={"g"}>
        <text transform="matrix(1 0 0 1 911.7695 363.3457)">
          {Station.Barking}
        </text>
        <polygon
          fill="#EE3124"
          points="933.3,363.3 931.6,362.6 934,362.6 934,362.1 931.5,362.1 932.8,361.4 934,361.4 934,360.9 932.8,360.9 931.2,360.2 930,360.2 931.7,360.9 929.1,360.9 929.1,361.4 931.7,361.4 930.3,362.1 929.1,362.1 929.1,362.6 930.4,362.6 932.1,363.3 "
        />
      </StationTextName>
      <StationTextName
        station={Station.BarkingRiverside}
        transform="matrix(1 0 0 1 968.7126 412.1367)"
      >
        <tspan x="0" y="0">
          Barking
        </tspan>
        <tspan x="-3.9" y="4.5">
          Riverside
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.ElmPark}
        transform="matrix(1 0 0 1 967.8 308.2)"
      />
      <StationTextName
        station={Station.DagenhamEast}
        transform="matrix(1 0 0 1 954.6 320.9927)"
      >
        <tspan x="0" y="0">
          Dagenham
        </tspan>
        <tspan x="0" y="4.5">
          East
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.DagenhamHeathway}
        transform="matrix(1 0 0 1 940.8 334.8)"
      />
      <StationTextName
        station={Station.Becontree}
        transform="matrix(1 0 0 1 932.4449 342.64)"
      />
      <StationTextName
        station={Station.Upney}
        transform="matrix(1 0 0 1 922.8 352.3467)"
      />
      <StationTextName
        station={Station.UpminsterBridge}
        transform="matrix(1 0 0 1 988.9 286.5596)"
      />
      <StationTextName
        station={Station.Hornchurch}
        transform="matrix(1 0 0 1 978.8 296.7222)"
      />
      <StationTextName station={Station.Upminster} tag={"g"}>
        <text transform="matrix(1 0 0 1 999.6113 276.2032)">
          {Station.Upminster}
        </text>
        <polygon
          fill="#EE3124"
          points="1028.2,276.2 1026.5,275.5 1028.9,275.5 1028.9,274.9 1026.4,274.9 1027.7,274.3 1028.9,274.3 1028.9,273.8 1027.7,273.8 1026.1,273.1 1024.9,273.1 1026.6,273.8 1024.1,273.8 1024.1,274.3 1026.6,274.3 1025.3,274.9 1024.1,274.9 1024.1,275.5 1025.4,275.5 1027,276.2 "
        />
      </StationTextName>
      <StationTextName
        station={Station.FulhamBroadway}
        transform="matrix(1 0 0 1 333 568.5635)"
      />
      <StationTextName
        station={Station.ParsonsGreen}
        transform="matrix(1 0 0 1 339.8 578.4304)"
      />
      <StationTextName
        station={Station.EastPutney}
        transform="matrix(1 0 0 1 345.7 606.1768)"
      />
      <StationTextName
        station={Station.Southfields}
        transform="matrix(1 0 0 1 346.2 617.3594)"
      />
      <StationTextName
        station={Station.WimbledonPark}
        transform="matrix(1 0 0 1 336 628.4)"
      />
      <StationTextName station={Station.WestBrompton} tag={"g"}>
        <text transform="matrix(1 0 0 1 331 543.9073)">
          {multiWordStationNames[Station.WestBrompton]}
        </text>
        <polygon
          fill="#EE3124"
          points="328.5,543.9 326.7,543.1 329.2,543.1 329.2,542.6 326.7,542.6 327.9,542 329.2,542 329.2,541.5 327.9,541.5 326.4,540.8 325.2,540.8 326.8,541.5 324.3,541.5 324.3,542 326.8,542 325.5,542.6 324.3,542.6 324.3,543.1 325.6,543.1 327.3,543.9 "
        />
      </StationTextName>
      <StationTextName station={Station.Wimbledon} tag={"g"}>
        <text transform="matrix(1 0 0 1 347 639.5206)">
          {Station.Wimbledon}
        </text>
        <polygon
          fill="#EE3124"
          points="344.7,639.5 343,638.8 345.4,638.8 345.4,638.2 342.9,638.2 344.2,637.6 345.4,637.6 345.4,637.1 344.2,637.1 342.6,636.4 341.4,636.4 343.1,637.1 340.5,637.1 340.5,637.6 343.1,637.6 341.8,638.2 340.5,638.2 340.5,638.8 341.8,638.8 343.5,639.5 "
        />
      </StationTextName>
      <StationTextName
        station={Station.EarlsCourt}
        transform="matrix(1 0 0 1 379.7295 521.043)"
      >
        <tspan x="0" y="0">
          Earl’s
        </tspan>
        <tspan x="0" y="4.5">
          Court
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.ChiswickPark}
        transform="matrix(1 0 0 1 215.6736 520.7617)"
      >
        <tspan x="0" y="0">
          Chiswick
        </tspan>
        <tspan x="0" y="4.5">
          Park
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.TurnhamGreen}
        transform="matrix(1 0 0 1 260.9138 521.2543)"
      >
        <tspan x="0" y="0">
          Turnham
        </tspan>
        <tspan x="3.3" y="4.5">
          Green
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.StamfordBrook}
        transform="matrix(1 0 0 1 282.343 519.7745)"
      >
        <tspan x="0" y="0">
          Stamford
        </tspan>
        <tspan x="3.8" y="4.5">
          Brook
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.RavenscourtPark}
        transform="matrix(1 0 0 1 304.2829 519.7696)"
      >
        <tspan x="0" y="0">
          Ravenscourt
        </tspan>
        <tspan x="8.9" y="4.5">
          Park
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.WestKensington}
        transform="matrix(1 0 0 1 355 520.0518)"
      >
        <tspan x="0" y="0">
          West
        </tspan>
        <tspan x="-13.4" y="4.5">
          Kensington
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.BaronsCourt}
        transform="matrix(1 0 0 1 343.8001 497.0796)"
      >
        <tspan x="0" y="0">
          Barons
        </tspan>
        <tspan x="1.2" y="4.5">
          Court
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.EalingCommon}
        transform="matrix(1 0 0 1 200.3741 483.2966)"
      >
        <tspan x="0" y="0">
          Ealing
        </tspan>
        <tspan x="-6" y="4.5">
          Common
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.Gunnersbury}
        transform="matrix(1 0 0 1 233.6751 542.7182)"
      />
      <StationTextName
        station={Station.KewGardens}
        transform="matrix(1 0 0 1 204.5973 572.6741)"
      />
      <StationTextName station={Station.Richmond} tag={"g"}>
        <text transform="matrix(1 0 0 1 193.218 585.704)">
          {Station.Richmond}
        </text>
        <polygon
          fill="#EE3124"
          points="220.6,585.7 218.8,584.9 221.3,584.9 221.3,584.4 218.8,584.4 220,583.8 221.3,583.8 221.3,583.3 220,583.3 218.5,582.6 217.3,582.6 218.9,583.3 216.4,583.3 216.4,583.8 218.9,583.8 217.6,584.4 216.4,584.4 216.4,584.9 217.7,584.9 219.4,585.7 "
        />
      </StationTextName>
      <StationTextName
        station={Station.IFSCloudRoyalDocks}
        transform="matrix(1 0 0 1 898.1535 482.3464)"
      >
        <tspan x="0" y="0">
          IFS Cloud
        </tspan>
        <tspan x="0" y="4.4">
          Royal
        </tspan>
        <tspan x="0" y="8.8">
          Docks
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.IFSCloudGreenwichPeninsula}
        transform="matrix(1 0 0 1 844.9306 518.9301)"
      >
        <tspan x="0" y="0">
          IFS Cloud
        </tspan>
        <tspan x="0" y="4.4">
          Greenwich
        </tspan>
        <tspan x="0" y="8.8">
          Peninsula
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.CanadaWater}
        transform="matrix(1 0 0 1 703.9748 542.6545)"
      >
        <tspan x="0" y="0">
          Canada
        </tspan>
        <tspan x="2.7" y="4.5">
          Water
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.GreenPark}
        transform="matrix(1 0 0 1 478.9248 461.5342)"
      />
      <StationTextName station={Station.LondonBridge} tag={"g"}>
        <text transform="matrix(1 0 0 1 639.7979 519.7413)">
          <tspan x="0" y="0">
            London
          </tspan>
          <tspan x="0" y="4.5">
            Bridge
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="644.2,529.4 642.5,528.6 645,528.6 645,528.1 642.4,528.1 643.7,527.5 645,527.5 645,527 643.7,527 642.2,526.3 641,526.3 642.6,527 640.1,527 640.1,527.5 642.6,527.5 641.3,528.1 640.1,528.1 640.1,528.6 641.4,528.6 643.1,529.4 "
        />
      </StationTextName>
      <StationTextName
        station={Station.Bermondsey}
        transform="matrix(1 0 0 1 676.8 528.6)"
      />
      <StationTextName
        station={Station.Southwark}
        transform="matrix(1 0 0 1 553.7783 563.6)"
      />
      <StationTextName station={Station.Waterloo} tag={"g"}>
        <text transform="matrix(1 0 0 1 504.2974 545.4026)">
          {Station.Waterloo}
        </text>
        <polygon
          fill="#EE3124"
          points="523.9,549.8 522.1,549 524.6,549 524.6,548.5 522.1,548.5 523.4,547.8 524.6,547.8 524.6,547.3 523.4,547.3 521.8,546.6 520.6,546.6 522.3,547.3 519.7,547.3 519.7,547.8 522.3,547.8 520.9,548.5 519.7,548.5 519.7,549 521,549 522.7,549.8 "
        />
      </StationTextName>
      <StationTextName
        station={Station.NorthGreenwich}
        transform="matrix(1 0 0 1 825.2872 518.9883)"
      >
        <tspan x="0" y="0">
          North
        </tspan>
        <tspan x="-10.7" y="4.5">
          Greenwich
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.MillHillEast}
        transform="matrix(1 0 0 1 537.3718 202.7545)"
      />
      <StationTextName
        station={Station.HighBarnet}
        transform="matrix(1 0 0 1 589.65 168.2129)"
      />
      <StationTextName
        station={Station.TotteridgeWhetstone}
        transform="matrix(1 0 0 1 589.65 181.0464)"
      />
      <StationTextName
        station={Station.WoodsidePark}
        transform="matrix(1 0 0 1 589.65 192.9063)"
      />
      <StationTextName
        station={Station.WestFinchley}
        transform="matrix(1 0 0 1 589.65 204.7076)"
      />
      <StationTextName
        station={Station.FinchleyCentral}
        transform="matrix(1 0 0 1 589.65 224.0541)"
      />
      <StationTextName
        station={Station.EastFinchley}
        transform="matrix(1 0 0 1 589.65 236.2514)"
      />
      <StationTextName
        station={Station.Highgate}
        transform="matrix(1 0 0 1 589.65 248.3443)"
      />
      <StationTextName
        station={Station.Archway}
        transform="matrix(1 0 0 1 589.65 260.3068)"
      />
      <StationTextName station={Station.KentishTown} tag={"g"}>
        <text transform="matrix(1 0 0 1 583.7312 303.7052)">
          {multiWordStationNames[Station.KentishTown]}
        </text>
        <polygon
          fill="#EE3124"
          points="588.3,308.2 586.6,307.4 589.1,307.4 589.1,306.9 586.5,306.9 587.8,306.3 589.1,306.3 589.1,305.8 587.8,305.8 586.3,305.1 585.1,305.1 586.7,305.8 584.2,305.8 584.2,306.3 586.7,306.3 585.4,306.9 584.2,306.9 584.2,307.4 585.5,307.4 587.2,308.2 "
        />
      </StationTextName>
      <StationTextName
        station={Station.TufnellPark}
        transform="matrix(1 0 0 1 589.65 290.7417)"
      />
      <StationTextName
        station={Station.Edgware}
        transform="matrix(1 0 0 1 411.2397 210.1685)"
      />
      <StationTextName
        station={Station.BurntOak}
        transform="matrix(1 0 0 1 423.2921 225.4519)"
      />
      <StationTextName
        station={Station.Colindale}
        transform="matrix(1 0 0 1 436.2765 237.0548)"
      />
      <StationTextName
        station={Station.HendonCentral}
        transform="matrix(1 0 0 1 433.6 248.5626)"
      />
      <StationTextName
        station={Station.BrentCross}
        transform="matrix(1 0 0 1 455.4767 260.9855)"
      />
      <StationTextName
        station={Station.GoldersGreen}
        transform="matrix(1 0 0 1 461.8 273.4087)"
      />
      <StationTextName
        station={Station.Hampstead}
        transform="matrix(1 0 0 1 479.5 285.0793)"
      />
      <StationTextName
        station={Station.BelsizePark}
        transform="matrix(1 0 0 1 511.6 318)"
      />
      <StationTextName
        station={Station.ChalkFarm}
        transform="matrix(1 0 0 1 522.6 326.7)"
      />
      <StationTextName
        station={Station.CamdenTown}
        transform="matrix(1 0 0 1 516.5774 335.9116)"
      />
      <StationTextName
        station={Station.MorningtonCrescent}
        transform="matrix(1 0 0 1 519.4922 348.3104)"
      >
        <tspan x="0" y="0">
          Mornington
        </tspan>
        <tspan x="5.4" y="4.5">
          Crescent
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.GoodgeStreet}
        transform="matrix(1 0 0 1 516.1 416.7274)"
      >
        <tspan x="0" y="0">
          Goodge
        </tspan>
        <tspan x="3" y="4.5">
          Street
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.WarrenStreet}
        transform="matrix(1 0 0 1 541.0989 393.056)"
      >
        <tspan x="0" y="0">
          Warren
        </tspan>
        <tspan x="0" y="4.5">
          Street
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.LeicesterSquare}
        transform="matrix(1 0 0 1 540.5107 462.9912)"
      />
      <StationTextName
        station={Station.Borough}
        transform="matrix(1 0 0 1 603.8345 570.1442)"
      />
      <StationTextName
        station={Station.Angel}
        transform="matrix(1 0 0 1 604.8154 383.2585)"
      />
      <StationTextName
        station={Station.NineElms}
        transform="matrix(1 0 0 1 452.7015 611.5)"
      />
      <StationTextName
        station={Station.BatterseaPowerStation}
        transform="matrix(1 0 0 1 425.1 611.5)"
      >
        <tspan x="0" y="0">
          Battersea
        </tspan>
        <tspan x="6.7" y="4.5">
          Power
        </tspan>
        <tspan x="5.2" y="9.1">
          Station
        </tspan>
      </StationTextName>
      <StationTextName station={Station.OldStreet} tag={"g"}>
        <text transform="matrix(1 0 0 1 639.7898 376.1506)">
          <tspan x="0" y="0">
            Old
          </tspan>
          <tspan x="0" y="4.5">
            Street
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="644.1,371.9 642.4,371.1 644.8,371.1 644.8,370.6 642.3,370.6 643.6,370 644.8,370 644.8,369.5 643.6,369.5 642,368.7 640.8,368.7 642.5,369.5 640,369.5 640,370 642.5,370 641.2,370.6 640,370.6 640,371.1 641.3,371.1 642.9,371.9 "
        />
      </StationTextName>
      <StationTextName
        station={Station.Kennington}
        transform="matrix(1 0 0 1 507.3153 612.836)"
      />
      <StationTextName
        station={Station.ClaphamNorth}
        transform="matrix(1 0 0 1 460.1666 660.7785)"
      />
      <StationTextName
        station={Station.ClaphamHighStreet}
        transform="matrix(1 0 0 1 448.5531 648.8156)"
      />
      <StationTextName
        station={Station.Oval}
        transform="matrix(1 0 0 1 510.5453 632.8904)"
      />
      <StationTextName
        station={Station.ClaphamCommon}
        transform="matrix(1 0 0 1 445.2223 668.1854)"
      />
      <StationTextName
        station={Station.ClaphamSouth}
        transform="matrix(1 0 0 1 444.1051 676.8129)"
      />
      <StationTextName
        station={Station.TootingBec}
        transform="matrix(1 0 0 1 466.5534 700.8143)"
      />
      <StationTextName
        station={Station.TootingBroadway}
        transform="matrix(1 0 0 1 457.8398 709.5274)"
      />
      <StationTextName
        station={Station.ColliersWood}
        transform="matrix(1 0 0 1 448.4025 718.4955)"
      />
      <StationTextName
        station={Station.SouthWimbledon}
        transform="matrix(1 0 0 1 438.2034 727.0908)"
      />
      <StationTextName
        station={Station.Morden}
        transform="matrix(1 0 0 1 406.7735 761.8661)"
      />
      <StationTextName station={Station.Balham} tag={"g"}>
        <text transform="matrix(1 0 0 1 450.9135 686.0406)">
          {Station.Balham}
        </text>
        <polygon
          fill="#EE3124"
          points="448.8,686 447.1,685.3 449.5,685.3 449.5,684.7 447,684.7 448.3,684.1 449.5,684.1 449.5,683.6 448.3,683.6 446.7,682.9 445.5,682.9 447.2,683.6 444.7,683.6 444.7,684.1 447.2,684.1 445.9,684.7 444.7,684.7 444.7,685.3 446,685.3 447.6,686 "
        />
      </StationTextName>
      <StationTextName
        station={Station.RaynersLane}
        transform="matrix(1 0 0 1 183.2716 262.7036)"
      />
      <StationTextName
        station={Station.SouthHarrow}
        transform="matrix(1 0 0 1 190.75 284.4829)"
      />
      <StationTextName
        station={Station.SudburyHill}
        transform="matrix(1 0 0 1 193.7 306.042)"
      />
      <StationTextName
        station={Station.SudburyTown}
        transform="matrix(1 0 0 1 189.7 327.5528)"
      />
      <StationTextName
        station={Station.Alperton}
        transform="matrix(1 0 0 1 201.6647 349.0157)"
      />
      <StationTextName
        station={Station.ParkRoyal}
        transform="matrix(1 0 0 1 198.376 425.4648)"
      />
      <StationTextName
        station={Station.NorthEaling}
        transform="matrix(1 0 0 1 193.7379 437.6872)"
      />
      <StationTextName
        station={Station.HeathrowTerminal4}
        transform="matrix(1 0 0 1 104.8791 631.3719)"
      >
        <tspan x="0" y="0">
          Heathrow
        </tspan>
        <tspan x="-0.8" y="4.5">
          Terminal 4
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.HeathrowTerminal5}
        transform="matrix(1 0 0 1 74.5677 631.3724)"
      >
        <tspan x="0" y="0">
          Heathrow
        </tspan>
        <tspan x="-0.7" y="4.5">
          Terminal 5
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.Northfields}
        transform="matrix(1 0 0 1 187.6244 513.3064)"
      />
      <StationTextName
        station={Station.BostonManor}
        transform="matrix(1 0 0 1 178.6 524.0193)"
      >
        <tspan x="0" y="0">
          Boston
        </tspan>
        <tspan x="0" y="4.5">
          Manor
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.SouthEaling}
        transform="matrix(1 0 0 1 200.78 497.6436)"
      >
        <tspan x="0" y="0">
          South
        </tspan>
        <tspan x="0" y="4.5">
          Ealing
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.Osterley}
        transform="matrix(1 0 0 1 166.8 535.3)"
      />
      <StationTextName
        station={Station.HounslowCentral}
        transform="matrix(1 0 0 1 150.1485 552.3395)"
      />
      <StationTextName
        station={Station.HounslowEast}
        transform="matrix(1 0 0 1 158.9 543.75)"
      />
      <StationTextName
        station={Station.HounslowWest}
        transform="matrix(1 0 0 1 140.9 561.5)"
      >
        <tspan x="0" y="0">
          Hounslow
        </tspan>
        <tspan x="0" y="4.5">
          West
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.HattonCross}
        transform="matrix(1 0 0 1 127.0797 575.0977)"
      />
      <StationTextName
        station={Station.HeathrowTerminals23}
        transform="matrix(1 0 0 1 82.96 571.35)"
      >
        <tspan x="0" y="0">
          Heathrow
        </tspan>
        <tspan x="-12.5" y="4.5">
          Terminals 2 &amp; 3
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.RussellSquare}
        transform="matrix(1 0 0 1 567.5333 391.823)"
      >
        <tspan x="0" y="0">
          Russell
        </tspan>
        <tspan x="0.7" y="4.5">
          Square
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.HydeParkCorner}
        transform="matrix(1 0 0 1 422.6 467.8985)"
      />
      <StationTextName
        station={Station.Knightsbridge}
        transform="matrix(1 0 0 1 409.8 488.2129)"
      />
      <StationTextName
        station={Station.CoventGarden}
        transform="matrix(1 0 0 1 550.9121 450.8623)"
      />
      <StationTextName
        station={Station.Oakwood}
        transform="matrix(1 0 0 1 658.24 176.96)"
      />
      <StationTextName
        station={Station.Cockfosters}
        transform="matrix(1 0 0 1 650.8818 164.8114)"
      />
      <StationTextName
        station={Station.Southgate}
        transform="matrix(1 0 0 1 655.68 189.239)"
      />
      <StationTextName
        station={Station.ArnosGrove}
        transform="matrix(1 0 0 1 651.35 201.5022)"
      />
      <StationTextName
        station={Station.BoundsGreen}
        transform="matrix(1 0 0 1 647.708 213.7793)"
      />
      <StationTextName
        station={Station.WoodGreen}
        transform="matrix(1 0 0 1 651.9336 226.0647)"
      />
      <StationTextName
        station={Station.TurnpikeLane}
        transform="matrix(1 0 0 1 647.3 238.3374)"
      />
      <StationTextName
        station={Station.ManorHouse}
        transform="matrix(1 0 0 1 649.4113 258.2836)"
      />
      <StationTextName
        station={Station.Arsenal}
        transform="matrix(1 0 0 1 639.3 291.2278)"
      />
      <StationTextName
        station={Station.HollowayRoad}
        transform="matrix(1 0 0 1 622.6916 298.8438)"
      >
        <tspan x="0" y="0">
          Holloway
        </tspan>
        <tspan x="10.3" y="4.5">
          Road
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.BlackhorseRoad}
        transform="matrix(1 0 0 1 758.8127 248.6091)"
      >
        <tspan x="0" y="0">
          Blackhorse
        </tspan>
        <tspan x="0" y="4.5">
          Road
        </tspan>
      </StationTextName>
      <StationTextName station={Station.HighburyIslington} tag={"g"}>
        <text transform="matrix(1 0 0 1 666.3233 317.8708)">
          <tspan x="0" y="0">
            Highbury &amp;
          </tspan>
          <tspan x="0" y="4.5">
            Islington
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="690.8,322.4 689.1,321.6 691.5,321.6 691.5,321.1 689,321.1 690.3,320.5 691.5,320.5 691.5,320 690.3,320 688.7,319.3 687.5,319.3 689.2,320 686.7,320 686.7,320.5 689.2,320.5 687.9,321.1 686.7,321.1 686.7,321.6 688,321.6 689.6,322.4 "
        />
      </StationTextName>
      <StationTextName station={Station.FinsburyPark} tag={"g"}>
        <text transform="matrix(1 0 0 1 678.8333 284.2267)">
          <tspan x="0" y="0">
            Finsbury
          </tspan>
          <tspan x="0" y="4.5">
            Park
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="697.2,253.6 695.5,252.8 698,252.8 698,252.3 695.4,252.3 696.7,251.7 698,251.7 698,251.2 696.7,251.2 695.2,250.5 694,250.5 695.6,251.2 693.1,251.2 693.1,251.7 695.6,251.7 694.3,252.3 693.1,252.3 693.1,252.8 694.4,252.8 696.1,253.6 "
        />
      </StationTextName>
      <StationTextName station={Station.SevenSisters} tag={"g"}>
        <text transform="matrix(1 0 0 1 698.4442 253.6152)">
          <tspan x="0" y="0">
            Seven
          </tspan>
          <tspan x="-2.3" y="4.5">
            Sisters
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="697.2,253.6 695.5,252.8 698,252.8 698,252.3 695.4,252.3 696.7,251.7 698,251.7 698,251.2 696.7,251.2 695.2,250.5 694,250.5 695.6,251.2 693.1,251.2 693.1,251.7 695.6,251.7 694.3,252.3 693.1,252.3 693.1,252.8 694.4,252.8 696.1,253.6 "
        />
      </StationTextName>
      <StationTextName station={Station.TottenhamHale} tag={"g"}>
        <text transform="matrix(1 0 0 1 720.3927 269.2832)">
          <tspan x="0" y="0">
            Tottenham
          </tspan>
          <tspan x="7.3" y="4.5">
            Hale
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="742.5,273.8 740.8,273.1 743.2,273.1 743.2,272.5 740.7,272.5 742,271.9 743.2,271.9 743.2,271.4 742,271.4 740.4,270.7 739.2,270.7 740.9,271.4 738.4,271.4 738.4,271.9 740.9,271.9 739.6,272.5 738.4,272.5 738.4,273.1 739.7,273.1 741.3,273.8 "
        />
      </StationTextName>
      <StationTextName
        station={Station.WalthamstowCentral}
        transform="matrix(1 0 0 1 795.8745 260.9099)"
      >
        <tspan x="0" y="0">
          Walthamstow
        </tspan>
        <tspan x="0" y="4.5">
          Central
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.Pimlico}
        transform="matrix(1 0 0 1 455.7627 555.3077)"
      />
      <StationTextName station={Station.Vauxhall} tag={"g"}>
        <text transform="matrix(1 0 0 1 459.1848 622.1716)">
          {Station.Vauxhall}
        </text>
        <polygon
          fill="#EE3124"
          points="482.6,622.2 480.9,621.4 483.3,621.4 483.3,620.9 480.8,620.9 482.1,620.3 483.3,620.3 483.3,619.8 482.1,619.8 480.5,619 479.3,619 481,619.8 478.5,619.8 478.5,620.3 481,620.3 479.7,620.9 478.5,620.9 478.5,621.4 479.8,621.4 481.4,622.2 "
        />
      </StationTextName>
      <StationTextName
        station={Station.Stockwell}
        transform="matrix(1 0 0 1 519.3076 646.4)"
      />
      <StationTextName station={Station.Brixton} tag={"g"}>
        <text transform="matrix(1 0 0 1 541.7598 673.6)">
          {Station.Brixton}
        </text>
        <polygon
          fill="#EE3124"
          points="563,674.3 561.3,673.5 563.7,673.5 563.7,673 561.2,673 562.5,672.4 563.7,672.4 563.7,671.9 562.5,671.9 560.9,671.2 559.7,671.2 561.4,671.9 558.9,671.9 558.9,672.4 561.4,672.4 560.1,673 558.9,673 558.9,673.5 560.2,673.5 561.8,674.3 "
        />
      </StationTextName>
      <StationTextName
        station={Station.WestSilvertown}
        transform="matrix(1 0 0 1 894.7065 513.515)"
      >
        <tspan x="0" y="0">
          West
        </tspan>
        <tspan x="-12.7" y="4.4">
          Silvertown
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.PontoonDock}
        transform="matrix(1 0 0 1 883.8154 526.5579)"
      >
        <tspan x="1" y="0">
          Pontoon
        </tspan>
        <tspan x="8" y="4.4">
          Dock
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.KingGeorgeV}
        transform="matrix(1 0 0 1 894.0841 556.9661)"
      >
        <tspan x="0" y="0">
          King
        </tspan>
        <tspan x="-10.6" y="4.4">
          George V
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.PrinceRegent}
        transform="matrix(1 0 0 1 949.3324 492.5805)"
      />
      <StationTextName
        station={Station.RoyalAlbert}
        transform="matrix(1 0 0 1 959.1375 513.726)"
      />
      <StationTextName
        station={Station.BecktonPark}
        transform="matrix(1 0 0 1 959.0289 524.2914)"
      />
      <StationTextName
        station={Station.Cyprus}
        transform="matrix(1 0 0 1 959.1378 534.4178)"
      />
      <StationTextName
        station={Station.GallionsReach}
        transform="matrix(1 0 0 1 958.8894 545.8425)"
      />
      <StationTextName
        station={Station.Beckton}
        transform="matrix(1 0 0 1 959.0297 556.8019)"
      />
      <StationTextName
        station={Station.Blackwall}
        transform="matrix(1 0 0 1 799.6306 474.6104)"
      />
      <StationTextName
        station={Station.RoyalVictoria}
        transform="matrix(1 0 0 1 887.5356 457.7119)"
      >
        <tspan x="0" y="0">
          Royal
        </tspan>
        <tspan x="-2.4" y="4.5">
          Victoria
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.BowChurch}
        transform="matrix(1 0 0 1 800.379 409.1649)"
      >
        <tspan x="0" y="0">
          Bow
        </tspan>
        <tspan x="0" y="4.5">
          Church
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.IslandGardens}
        transform="matrix(1 0 0 1 757.3604 571.5528)"
      />
      <StationTextName
        station={Station.DeptfordBridge}
        transform="matrix(1 0 0 1 800.1992 616.5753)"
      />
      <StationTextName
        station={Station.SouthQuay}
        transform="matrix(1 0 0 1 764.2148 536.4673)"
      />
      <StationTextName
        station={Station.Crossharbour}
        transform="matrix(1 0 0 1 760.2109 548.1621)"
      />
      <StationTextName
        station={Station.Mudchute}
        transform="matrix(1 0 0 1 767.877 559.858)"
      />
      <StationTextName
        station={Station.HeronQuays}
        transform="matrix(1 0 0 1 761.3691 524.7725)"
      />
      <StationTextName
        station={Station.WestIndiaQuay}
        transform="matrix(1 0 0 1 799.6346 482.8608)"
      >
        <tspan x="0" y="0">
          West India
        </tspan>
        <tspan x="0" y="4.5">
          Quay
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.ElversonRoad}
        transform="matrix(1 0 0 1 800.2549 628.0928)"
      />
      <StationTextName
        station={Station.DevonsRoad}
        transform="matrix(1 0 0 1 762.1582 418.2907)"
      />
      <StationTextName
        station={Station.LangdonPark}
        transform="matrix(1 0 0 1 772.2471 428.9059)"
      >
        <tspan x="0" y="0">
          Langdon
        </tspan>
        <tspan x="9.1" y="4.5">
          Park
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.AllSaints}
        transform="matrix(1 0 0 1 784.6592 439.522)"
      >
        <tspan x="0" y="0">
          All
        </tspan>
        <tspan x="-6.9" y="4.5">
          Saints
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.CanningTown}
        transform="matrix(1 0 0 1 857.937 450.8135)"
      >
        <tspan x="0" y="0">
          Canning
        </tspan>
        <tspan x="0" y="4.5">
          Town
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.Poplar}
        transform="matrix(1 0 0 1 779.1746 463.58)"
      />
      <StationTextName
        station={Station.PuddingMillLane}
        transform="matrix(1 0 0 1 823.6797 375.917)"
      >
        <tspan x="0" y="0">
          Pudding
        </tspan>
        <tspan x="0" y="4.5">
          Mill Lane
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.EastIndia}
        transform="matrix(1 0 0 1 827.115 475.1387)"
      >
        <tspan x="0" y="0">
          East
        </tspan>
        <tspan x="-0.8" y="4.5">
          India
        </tspan>
      </StationTextName>
      <StationTextName station={Station.LondonCityAirport} tag={"g"}>
        <text transform="matrix(1 0 0 1 887.2384 539.1827)">
          <tspan x="0" y="0">
            London
          </tspan>
          <tspan x="7" y="4.4">
            City
          </tspan>
          <tspan x="0" y="8.8">
            Airport
          </tspan>
        </text>
        <path
          fill="#1C3F94"
          d="M884.4,535.5c0.2,0,0.2,0.3,0.2,0.5l0,1.2l1.6,1.2 c0.1,0,0.3,0.2,0.3,0.2c0.1,0.1,0,0.2,0,0.3v0.1l-1.6-0.6c-0.1,0-0.2,0-0.2,0c-0.2,0-0.2,0.2-0.2,0.4l0,0.6l0.5,0.4l0.1,0.3 l-0.7-0.2h-0.1l-0.7,0.2l0.1-0.3l0.5-0.4l0-0.6c0-0.1,0-0.4-0.2-0.4c-0.1,0-0.2,0-0.2,0l-1.6,0.6v-0.1c0-0.1,0-0.2,0-0.3 c0,0,0.2-0.2,0.3-0.2l1.7-1.2l0-1.2C884.2,535.8,884.3,535.5,884.4,535.5L884.4,535.5z"
        />
      </StationTextName>
      <StationTextName station={Station.Limehouse} tag={"g"}>
        <text transform="matrix(1 0 0 1 736.2912 462.4893)">
          {Station.Limehouse}
        </text>
        <polygon
          fill="#EE3124"
          points="750,458.7 748.3,457.9 750.7,457.9 750.7,457.4 748.2,457.4 749.5,456.8 750.7,456.8 750.7,456.3 749.5,456.3 747.9,455.6 746.8,455.6 748.4,456.3 745.9,456.3 745.9,456.8 748.4,456.8 747.1,457.4 745.9,457.4 745.9,457.9 747.2,457.9 748.8,458.7 "
        />
      </StationTextName>
      <StationTextName station={Station.WoolwichArsenal} tag={"g"}>
        <text transform="matrix(1 0 0 1 897.4194 593.1918)">
          <tspan x="0" y="0">
            Woolwich
          </tspan>
          <tspan x="2.8" y="4.4">
            Arsenal
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="910.2,602.2 908.4,601.4 910.9,601.4 910.9,600.9 908.4,600.9 909.6,600.3 910.9,600.3 910.9,599.8 909.6,599.8 908.1,599 906.9,599 908.5,599.8 906,599.8 906,600.3 908.5,600.3 907.2,600.9 906,600.9 906,601.4 907.3,601.4 909,602.2 "
        />
      </StationTextName>
      <StationTextName
        station={Station.Woolwich}
        transform="matrix(1 0 0 1 933.6148 586.5044)"
      />
      <StationTextName station={Station.AbbeyWood} tag={"g"}>
        <text transform="matrix(1 0 0 1 933.6148 599.0184)">
          {multiWordStationNames[Station.AbbeyWood]}
        </text>
        <polygon
          fill="#EE3124"
          points="937.9,603.3 936.2,602.5 938.6,602.5 938.6,602 936.1,602 937.4,601.4 938.6,601.4 938.6,600.9 937.4,600.9 935.8,600.2 934.6,600.2 936.3,600.9 933.8,600.9 933.8,601.4 936.3,601.4 935,602 933.8,602 933.8,602.5 935.1,602.5 936.7,603.3 "
        />
      </StationTextName>
      <StationTextName
        station={Station.CuttySarkForMaritimeGreenwich}
        transform="matrix(1 0 0 1 800.166 590.4805)"
      >
        <tspan x="0" y="0">
          Cutty Sark for
        </tspan>
        <tspan x="0" y="4.5">
          Maritime Greenwich
        </tspan>
      </StationTextName>
      <StationTextName station={Station.Greenwich} tag={"g"}>
        <text transform="matrix(1 0 0 1 800.1992 605.0967)">
          {Station.Greenwich}
        </text>
        <polygon
          fill="#EE3124"
          points="828.8,605.1 827.1,604.3 829.6,604.3 829.6,603.8 827,603.8 828.3,603.2 829.6,603.2 829.6,602.7 828.3,602.7 826.8,602 825.6,602 827.2,602.7 824.7,602.7 824.7,603.2 827.2,603.2 825.9,603.8 824.7,603.8 824.7,604.3 826,604.3 827.7,605.1 "
        />
      </StationTextName>
      <StationTextName station={Station.Lewisham} tag={"g"}>
        <text transform="matrix(1 0 0 1 800.1992 639.3614)">
          {Station.Lewisham}
        </text>
        <polygon
          fill="#EE3124"
          points="827.3,639.4 825.6,638.6 828,638.6 828,638.1 825.5,638.1 826.8,637.5 828,637.5 828,637 826.8,637 825.2,636.2 824.1,636.2 825.7,637 823.2,637 823.2,637.5 825.7,637.5 824.4,638.1 823.2,638.1 823.2,638.6 824.5,638.6 826.1,639.4 "
        />
      </StationTextName>
      <StationTextName
        station={Station.TowerGateway}
        transform="matrix(1 0 0 1 696 486.3)"
      >
        <tspan x="0" y="0">
          Tower
        </tspan>
        <tspan x="0" y="4.5">
          Gateway
        </tspan>
      </StationTextName>
      <StationTextName station={Station.StratfordInternational} tag={"g"}>
        <text transform="matrix(1 0 0 1 808.2188 323.0362)">
          <tspan x="0" y="0">
            Stratford
          </tspan>
          <tspan x="-4.4" y="4.5">
            International
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="807.2,323 805.5,322.3 807.9,322.3 807.9,321.7 805.4,321.7 806.7,321.1 807.9,321.1 807.9,320.6 806.7,320.6 805.1,319.9 803.9,319.9 805.6,320.6 803.1,320.6 803.1,321.1 805.6,321.1 804.3,321.7 803.1,321.7 803.1,322.3 804.4,322.3 806,323 "
        />
      </StationTextName>
      <StationTextName
        station={Station.TowerHill}
        transform="matrix(1 0 0 1 664.4221 477)"
      >
        <tspan x="0" y="0">
          Tower
        </tspan>
        <tspan x="3.5" y="4.5">
          Hill
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.StratfordHighStreet}
        transform="matrix(1 0 0 1 859.5967 358.7022)"
      >
        <tspan x="0" y="0">
          Stratford
        </tspan>
        <tspan x="0" y="4.5">
          High Street
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.AbbeyRoad}
        transform="matrix(1 0 0 1 859.3057 377.086)"
      >
        <tspan x="0" y="0">
          Abbey
        </tspan>
        <tspan x="0" y="4.5">
          Road
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.StarLane}
        transform="matrix(1 0 0 1 859.5767 431.2884)"
      />
      <StationTextName
        station={Station.ActonCentral}
        transform="matrix(1 0 0 1 235.6235 476.5684)"
      />
      <StationTextName
        station={Station.SouthActon}
        transform="matrix(1 0 0 1 239.1396 489.75)"
      />
      <StationTextName station={Station.KensingtonOlympia} tag={"g"}>
        <text transform="matrix(1 0 0 1 340.0356 482.893)">
          <tspan x="0" y="0">
            Kensington
          </tspan>
          <tspan x="3.3" y="4.5">
            (Olympia)
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="363.9,479.1 362.1,478.3 364.6,478.3 364.6,477.8 362.1,477.8 363.4,477.2 364.6,477.2 364.6,476.7 363.4,476.7 361.8,476 360.6,476 362.3,476.7 359.7,476.7 359.7,477.2 362.3,477.2 360.9,477.8 359.7,477.8 359.7,478.3 361,478.3 362.7,479.1 "
        />
      </StationTextName>
      <StationTextName
        station={Station.KilburnHighRoad}
        transform="matrix(1 0 0 1 367.2635 341.5307)"
      >
        <tspan x="0" y="0">
          Kilburn
        </tspan>
        <tspan x="-3" y="4.5">
          High Road
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.SouthHampstead}
        transform="matrix(1 0 0 1 475.6879 346.1093)"
      />
      <StationTextName
        station={Station.KensalRise}
        transform="matrix(1 0 0 1 342.2906 310.1613)"
      >
        <tspan x="0" y="0">
          Kensal
        </tspan>
        <tspan x="2.9" y="4.5">
          Rise
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.BrondesburyPark}
        transform="matrix(1 0 0 1 362.5418 310.8029)"
      >
        <tspan x="0" y="0">
          Brondesbury
        </tspan>
        <tspan x="9.3" y="4.5">
          Park
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.HampsteadHeath}
        transform="matrix(1 0 0 1 484.1726 297.9658)"
      >
        <tspan x="0" y="0">
          Hampstead
        </tspan>
        <tspan x="5.9" y="4.5">
          Heath
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.FinchleyRoadFrognal}
        transform="matrix(1 0 0 1 457.3565 315.6377)"
      >
        <tspan x="0" y="0">
          Finchley Road
        </tspan>
        <tspan x="0" y="4.5">
          &amp; Frognal
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.Brondesbury}
        transform="matrix(1 0 0 1 382.2551 326.6027)"
      />
      <StationTextName
        station={Station.GospelOak}
        transform="matrix(1 0 0 1 536.7096 287.3974)"
      >
        <tspan x="0" y="0">
          Gospel
        </tspan>
        <tspan x="3.3" y="4.5">
          Oak
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.KentishTownWest}
        transform="matrix(1 0 0 1 556.0942 298.9589)"
      >
        <tspan x="0" y="0">
          Kentish
        </tspan>
        <tspan x="0" y="4.4">
          Town
        </tspan>
        <tspan x="0" y="8.8">
          West
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.CamdenRoad}
        transform="matrix(1 0 0 1 570 319)"
      />
      <StationTextName
        station={Station.DalstonKingsland}
        transform="matrix(1 0 0 1 699.0579 319.2596)"
      >
        <tspan x="0" y="0">
          Dalston
        </tspan>
        <tspan x="-1.5" y="4.4">
          Kingsland
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.HackneyCentral}
        transform="matrix(1 0 0 1 755.7787 330.1177)"
      >
        <tspan x="0" y="0">
          Hackney
        </tspan>
        <tspan x="0" y="4.5">
          Central
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.CaledonianRoadBarnsbury}
        transform="matrix(1 0 0 1 630.6536 335.7538)"
      >
        <tspan x="0" y="0">
          Caledonian
        </tspan>
        <tspan x="4.6" y="4.5">
          Road &amp;
        </tspan>
        <tspan x="1.2" y="8.5">
          Barnsbury
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.HackneyWick}
        transform="matrix(1 0 0 1 800.8916 347.3731)"
      >
        <tspan x="0" y="0">
          Hackney
        </tspan>
        <tspan x="4" y="4.5">
          Wick
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.Homerton}
        transform="matrix(1 0 0 1 772.0247 347.2051)"
      />
      <StationTextName
        station={Station.Canonbury}
        transform="matrix(1 0 0 1 678.8272 342.6335)"
      />
      <StationTextName station={Station.NorwoodJunction} tag={"g"}>
        <text transform="matrix(1 0 0 1 727.2828 695.6157)">
          {Station.NorwoodJunction}
        </text>
        <polygon
          fill="#EE3124"
          points="774.3,695.6 772.6,694.8 775.1,694.8 775.1,694.3 772.5,694.3 773.8,693.7 775.1,693.7 775.1,693.2 773.8,693.2 772.3,692.5 771.1,692.5 772.7,693.2 770.2,693.2 770.2,693.7 772.7,693.7 771.4,694.3 770.2,694.3 770.2,694.8 771.5,694.8 773.2,695.6 "
        />
      </StationTextName>
      <StationTextName
        station={Station.ForestHill}
        transform="matrix(1 0 0 1 695.4449 647.7618)"
      />
      <StationTextName
        station={Station.Anerley}
        transform="matrix(1 0 0 1 727.3766 683.912)"
      />
      <StationTextName
        station={Station.PengeWest}
        transform="matrix(1 0 0 1 726.6559 672.2452)"
      />
      <StationTextName
        station={Station.HonorOakPark}
        transform="matrix(1 0 0 1 683.4215 635.546)"
      />
      <StationTextName
        station={Station.Brockley}
        transform="matrix(1 0 0 1 699.0582 623.2764)"
      />
      <StationTextName station={Station.WestCroydon} tag={"g"}>
        <text transform="matrix(1 0 0 1 727.3085 716.2119)">
          {multiWordStationNames[Station.WestCroydon]}
        </text>
        <polygon
          fill="#EE3124"
          points="763.6,716.2 761.8,715.4 764.3,715.4 764.3,714.9 761.8,714.9 763.1,714.3 764.3,714.3 764.3,713.8 763.1,713.8 761.5,713.1 760.3,713.1 762,713.8 759.4,713.8 759.4,714.3 762,714.3 760.6,714.9 759.4,714.9 759.4,715.4 760.7,715.4 762.4,716.2 "
        />
      </StationTextName>
      <StationTextName
        station={Station.Wapping}
        transform="matrix(1 0 0 1 726.7064 488.1127)"
      />
      <StationTextName station={Station.NewCrossGate} tag={"g"}>
        <text transform="matrix(1 0 0 1 682.7135 608.7817)">
          New Cross Gate
        </text>
        <polygon
          fill="#EE3124"
          points="681.2,608.8 679.5,608 682,608 682,607.5 679.4,607.5 680.7,606.9 682,606.9 682,606.4 680.7,606.4 679.1,605.6 678,605.6 679.6,606.4 677.1,606.4 677.1,606.9 679.6,606.9 678.3,607.5 677.1,607.5 677.1,608 678.4,608 680.1,608.8 "
        />
      </StationTextName>
      <StationTextName station={Station.Sydenham} tag={"g"}>
        <text transform="matrix(1 0 0 1 695.5289 659.4233)">
          {Station.Sydenham}
        </text>
        <polygon
          fill="#EE3124"
          points="693.8,659.4 692,658.7 694.5,658.7 694.5,658.1 692,658.1 693.2,657.5 694.5,657.5 694.5,657 693.2,657 691.7,656.3 690.5,656.3 692.1,657 689.6,657 689.6,657.5 692.1,657.5 690.8,658.1 689.6,658.1 689.6,658.7 690.9,658.7 692.6,659.4 "
        />
      </StationTextName>
      <StationTextName station={Station.NewCross} tag={"g"}>
        <text transform="matrix(1 0 0 1 738.2949 598.1895)">
          {multiWordStationNames[Station.NewCross]}
        </text>
        <polygon
          fill="#EE3124"
          points="767.4,598.2 765.7,597.4 768.1,597.4 768.1,596.9 765.6,596.9 766.9,596.3 768.1,596.3 768.1,595.8 766.9,595.8 765.3,595 764.1,595 765.8,595.8 763.3,595.8 763.3,596.3 765.8,596.3 764.5,596.9 763.3,596.9 763.3,597.4 764.6,597.4 766.2,598.2 "
        />
      </StationTextName>
      <StationTextName station={Station.CrystalPalace} tag={"g"}>
        <text transform="matrix(1 0 0 1 667.18 693.4089)">
          {multiWordStationNames[Station.CrystalPalace]}
        </text>
        <polygon
          fill="#EE3124"
          points="665.7,693.4 664,692.7 666.5,692.7 666.5,692.1 663.9,692.1 665.2,691.5 666.5,691.5 666.5,691 665.2,691 663.7,690.3 662.5,690.3 664.1,691 661.6,691 661.6,691.5 664.1,691.5 662.8,692.1 661.6,692.1 661.6,692.7 662.9,692.7 664.6,693.4 "
        />
      </StationTextName>
      <StationTextName
        station={Station.SurreyQuays}
        transform="matrix(1 0 0 1 689.6361 558.0772)"
      />
      <StationTextName
        station={Station.Rotherhithe}
        transform="matrix(1 0 0 1 692.5941 517.0043)"
      />
      <StationTextName
        station={Station.Shadwell}
        transform="matrix(1 0 0 1 728.5438 476.3383)"
      />
      <StationTextName station={Station.QueensRoadPeckham} tag={"g"}>
        <text transform="matrix(1 0 0 1 630.3648 599.6573)">
          <tspan x="0" y="0">
            Queens Road
          </tspan>
          <tspan x="9.3" y="4.5">
            Peckham
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="628.7,599.7 626.9,598.9 629.4,598.9 629.4,598.4 626.9,598.4 628.2,597.8 629.4,597.8 629.4,597.3 628.2,597.3 626.6,596.5 625.4,596.5 627.1,597.3 624.5,597.3 624.5,597.8 627.1,597.8 625.7,598.4 624.5,598.4 624.5,598.9 625.8,598.9 627.5,599.7 "
        />
      </StationTextName>
      <StationTextName station={Station.PeckhamRye} tag={"g"}>
        <text transform="matrix(1 0 0 1 608.4297 626.046)">
          {multiWordStationNames[Station.PeckhamRye]}
        </text>
        <polygon
          fill="#EE3124"
          points="636.4,622 634.6,621.2 637.1,621.2 637.1,620.7 634.6,620.7 635.9,620.1 637.1,620.1 637.1,619.6 635.9,619.6 634.3,618.9 633.1,618.9 634.8,619.6 632.2,619.6 632.2,620.1 634.8,620.1 633.4,620.7 632.2,620.7 632.2,621.2 633.5,621.2 635.2,622 "
        />
      </StationTextName>
      <StationTextName station={Station.DenmarkHill} tag={"g"}>
        <text transform="matrix(1 0 0 1 565.333 650.6592)">
          {multiWordStationNames[Station.DenmarkHill]}
        </text>
        <polygon
          fill="#EE3124"
          points="598.9,650.7 597.1,649.9 599.6,649.9 599.6,649.4 597.1,649.4 598.3,648.8 599.6,648.8 599.6,648.3 598.3,648.3 596.8,647.5 595.6,647.5 597.2,648.3 594.7,648.3 594.7,648.8 597.2,648.8 595.9,649.4 594.7,649.4 594.7,649.9 596,649.9 597.7,650.7 "
        />
      </StationTextName>
      <StationTextName
        station={Station.WandsworthRoad}
        transform="matrix(1 0 0 1 448.4175 635.6016)"
      >
        <tspan x="0" y="0">
          Wandsworth
        </tspan>
        <tspan x="8.8" y="4.5">
          Road
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.ImperialWharf}
        transform="matrix(1 0 0 1 399.2653 571.5524)"
      >
        <tspan x="0" y="0">
          Imperial
        </tspan>
        <tspan x="0" y="4.5">
          Wharf
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.WansteadPark}
        transform="matrix(1 0 0 1 850.1918 301.9141)"
      >
        <tspan x="0" y="0">
          Wanstead
        </tspan>
        <tspan x="12.3" y="4.5">
          Park
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.LeytonstoneHighRoad}
        transform="matrix(1 0 0 1 813.2542 301.0034)"
      >
        <tspan x="0" y="0">
          Leytonstone
        </tspan>
        <tspan x="2.8" y="4.5">
          High Road
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.LeytonMidlandRoad}
        transform="matrix(1 0 0 1 800 285.857)"
      >
        <tspan x="0" y="0">
          Leyton
        </tspan>
        <tspan x="-7.4" y="4.5">
          Midland Road
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.WalthamstowQueensRoad}
        transform="matrix(1 0 0 1 742.5 282.5926)"
      >
        <tspan x="0" y="0">
          Walthamstow
        </tspan>
        <tspan x="0.9" y="4.5">
          Queen’s Road
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.WoodgrangePark}
        transform="matrix(1 0 0 1 901.3949 305.588)"
      >
        <tspan x="0" y="0">
          Woodgrange
        </tspan>
        <tspan x="0" y="4.5">
          Park
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.ActonTown}
        transform="matrix(1 0 0 1 232.0119 501.6226)"
      />
      <StationTextName
        station={Station.HarringayGreenLanes}
        transform="matrix(1 0 0 1 684.6867 230.779)"
      >
        <tspan x="0" y="0">
          Harringay
        </tspan>
        <tspan x="3.9" y="4.5">
          Green
        </tspan>
        <tspan x="4.3" y="9.1">
          Lanes
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.SouthTottenham}
        transform="matrix(1 0 0 1 724.459 235.2953)"
      >
        <tspan x="0" y="0">
          South
        </tspan>
        <tspan x="-5.8" y="4.5">
          Tottenham
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.UpperHolloway}
        transform="matrix(1 0 0 1 597.5086 279.3814)"
      />
      <StationTextName
        station={Station.CrouchHill}
        transform="matrix(1 0 0 1 619.1778 247.1509)"
      >
        <tspan x="0" y="0">
          Crouch
        </tspan>
        <tspan x="8.2" y="4.5">
          Hill
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.ShoreditchHighStreet}
        transform="matrix(1 0 0 1 693.9174 393.4017)"
      >
        <tspan x="0" y="0">
          Shoreditch
        </tspan>
        <tspan x="-0.8" y="4.5">
          High Street
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.DalstonJunction}
        transform="matrix(1 0 0 1 676.8123 353.0698)"
      />
      <StationTextName
        station={Station.Haggerston}
        transform="matrix(1 0 0 1 692.5 364.3)"
      />
      <StationTextName
        station={Station.Hoxton}
        transform="matrix(1 0 0 1 701.7631 376.1294)"
      />
      <StationTextName station={Station.ClaphamJunction} tag={"g"}>
        <text transform="matrix(1 0 0 1 414.9565 636.5958)">
          <tspan x="0" y="0">
            Clapham
          </tspan>
          <tspan x="0.4" y="4.5">
            Junction
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="439.5,641.2 437.8,640.4 440.2,640.4 440.2,639.9 437.7,639.9 439,639.3 440.2,639.3 440.2,638.8 439,638.8 437.4,638 436.2,638 437.9,638.8 435.3,638.8 435.3,639.3 437.9,639.3 436.6,639.9 435.3,639.9 435.3,640.4 436.6,640.4 438.3,641.2 "
        />
      </StationTextName>
      <StationTextName
        station={Station.HollandPark}
        transform="matrix(1 0 0 1 364.7246 458.9121)"
      >
        <tspan x="0" y="0">
          Holland
        </tspan>
        <tspan x="3.9" y="4.5">
          Park
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.CaledonianRoad}
        transform="matrix(1 0 0 1 606.3379 310.6598)"
      >
        <tspan x="0" y="0">
          Caledonian
        </tspan>
        <tspan x="13.8" y="4.5">
          Road
        </tspan>
      </StationTextName>
      <StationTextName station={Station.Victoria} tag={"g"}>
        <text transform="matrix(1 0 0 1 453.1426 506.309)">
          {Station.Victoria}
        </text>
        <polygon
          fill="#EE3124"
          points="469.2,502.5 467.4,501.8 469.9,501.8 469.9,501.2 467.4,501.2 468.7,500.6 469.9,500.6 469.9,500.1 468.7,500.1 467.1,499.4 465.9,499.4 467.6,500.1 465,500.1 465,500.6 467.6,500.6 466.2,501.2 465,501.2 465,501.8 466.3,501.8 468,502.5 "
        />
        <g>
          <g>
            <path
              fill="#1C3F94"
              className="transport"
              d="M456.2,502.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5 C456.4,501.6,456.2,501.8,456.2,502.1z M456.4,502.1c0-0.1,0.1-0.2,0.2-0.2c0.1,0,0.2,0.1,0.2,0.2c0,0.1-0.1,0.2-0.2,0.2 C456.5,502.3,456.4,502.2,456.4,502.1z"
            />
            <path
              fill="#1C3F94"
              className="transport"
              d="M460.9,502.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5 C461.1,501.6,460.9,501.8,460.9,502.1z M461.1,502.1c0-0.1,0.1-0.2,0.2-0.2c0.1,0,0.2,0.1,0.2,0.2c0,0.1-0.1,0.2-0.2,0.2 C461.3,502.3,461.1,502.2,461.1,502.1z"
            />
            <path
              fill="#1C3F94"
              className="transport"
              d="M462,502.1c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5 C462.3,501.6,462,501.8,462,502.1z M462.3,502.1c0-0.1,0.1-0.2,0.2-0.2c0.1,0,0.2,0.1,0.2,0.2c0,0.1-0.1,0.2-0.2,0.2 C462.4,502.3,462.3,502.2,462.3,502.1z"
            />
          </g>
          <path
            fill="#1C3F94"
            className="transport"
            d="M454.4,500.2c0,0.1,0.1,0.1,0.1,0.1s0.1-0.1,0.1-0.1c0-0.2,0.1-0.3,0.1-0.3h0.3l0,0 c-0.3,0.3-0.5,0.7-0.5,1.2c0,0.7,0,1.1,0,1.1h1.5c0,0,0-0.1,0-0.1c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.3,0.6,0.6 c0,0,0,0.1,0,0.1h3.5c0,0,0-0.1,0-0.1c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.5,0.2,0.6,0.4c0.1-0.2,0.3-0.4,0.6-0.4 c0.3,0,0.6,0.3,0.6,0.6c0,0,0,0.1,0,0.1h0c0,0,0.9-0.4,0.9-0.5c0-0.1,0-1.8,0-1.8s0-0.1-0.2-0.3c-0.2-0.2-0.3-0.2-0.3-0.2 l-7.7,0c0,0-0.2,0.1-0.4,0.2h-0.7c0,0-0.1,0-0.1,0C454.6,499.7,454.4,499.9,454.4,500.2z M461.6,499.7l1.7,0c0,0,0.2,0,0.3,0.1 c0.1,0.1,0.1,0.2,0.1,0.2v0.7l-2,0V499.7z M459.5,499.7l1.9,0v1.1l-1.9,0V499.7z M457.2,499.7l2,0v1.1l-2,0V499.7z M455.8,499.7h1.1v1.1l-0.6,0c0,0-1,0.4-1.1,0.4c-0.3,0-0.5,0-0.5,0S454.8,500.2,455.8,499.7z"
          />
        </g>
      </StationTextName>
      <StationTextName
        station={Station.HarringtonRoad}
        transform="matrix(0.9997 0 0 1 881.9029 670.1349)"
      />
      <StationTextName
        station={Station.Arena}
        transform="matrix(0.9997 0 0 1 863.9713 705.5766)"
      />
      <StationTextName
        station={Station.DundonaldRoad}
        transform="matrix(0.9997 0 0 1 387.474 670.5787)"
      >
        <tspan x="0" y="0">
          Dundonald
        </tspan>
        <tspan x="0" y="4.5">
          Road
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.MertonPark}
        transform="matrix(0.9997 0 0 1 397.0405 710.5118)"
      />
      <StationTextName
        station={Station.Woodside}
        transform="matrix(0.9997 0 0 1 853.2966 716.23)"
      />
      <StationTextName
        station={Station.BlackhorseLane}
        transform="matrix(0.9997 0 0 1 842.7736 726.7504)"
      />
      <StationTextName
        station={Station.Addiscombe}
        transform="matrix(0.9997 0 0 1 832.2552 737.282)"
      />
      <StationTextName
        station={Station.AvenueRoad}
        transform="matrix(0.9997 0 0 1 940.6528 665.6111)"
      >
        <tspan x="0" y="0">
          Avenue
        </tspan>
        <tspan x="2.8" y="4.5">
          Road
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.Sandilands}
        transform="matrix(0.9997 0 0 1 796.4144 752.2637)"
      />
      <StationTextName
        station={Station.KingHenrysDrive}
        transform="matrix(0.9997 0 0 1 821.9615 795.4863)"
      />
      <StationTextName
        station={Station.NewAddington}
        transform="matrix(0.9997 0 0 1 837.2 805.1)"
      />
      <StationTextName
        station={Station.Fieldway}
        transform="matrix(0.9997 0 0 1 863.7947 787.1628)"
      />
      <StationTextName
        station={Station.AddingtonVillage}
        transform="matrix(0.9997 0 0 1 806.7573 779.3573)"
      />
      <StationTextName
        station={Station.GravelHill}
        transform="matrix(0.9997 0 0 1 847.2203 770.7723)"
      />
      <StationTextName
        station={Station.CoombeLane}
        transform="matrix(0.9997 0 0 1 798.8752 762.2693)"
      />
      <StationTextName
        station={Station.LloydPark}
        transform="matrix(0.9997 0 0 1 830.615 754.0035)"
      />
      <StationTextName
        station={Station.WellesleyRoad}
        transform="matrix(0.9997 0 0 1 738.7767 731.8663)"
      >
        <tspan x="0" y="0">
          Wellesley
        </tspan>
        <tspan x="5.4" y="4.5">
          Road
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.ReevesCorner}
        transform="matrix(0.9997 0 0 1 654.5742 731.5196)"
      />
      <StationTextName
        station={Station.Mitcham}
        transform="matrix(0.9997 0 0 1 496.8636 752.3155)"
      />
      <StationTextName
        station={Station.BeddingtonLane}
        transform="matrix(0.9997 0 0 1 552.9672 752.3155)"
      >
        <tspan x="0" y="0">
          Beddington
        </tspan>
        <tspan x="7.5" y="4.5">
          Lane
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.AmpereWay}
        transform="matrix(0.9997 0 0 1 608.9132 752.3155)"
      >
        <tspan x="0" y="0">
          Ampere
        </tspan>
        <tspan x="3.9" y="4.5">
          Way
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.WandlePark}
        transform="matrix(0.9997 0 0 1 657.7842 752.3155)"
      >
        <tspan x="0" y="0">
          Wandle
        </tspan>
        <tspan x="3.6" y="4.5">
          Park
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.Centrale}
        transform="matrix(0.9997 0 0 1 697.6472 731.8702)"
      />
      <StationTextName
        station={Station.ChurchStreet}
        transform="matrix(0.9997 0 0 1 706.1221 752.3155)"
      >
        <tspan x="0" y="0">
          Church
        </tspan>
        <tspan x="1.2" y="4.5">
          Street
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.BelgraveWalk}
        transform="matrix(0.9997 0 0 1 470.8075 752.3155)"
      >
        <tspan x="0" y="0">
          Belgrave
        </tspan>
        <tspan x="3.9" y="4.5">
          Walk
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.PhippsBridge}
        transform="matrix(0.9997 0 0 1 448.8508 752.3155)"
      >
        <tspan x="0" y="0">
          Phipps
        </tspan>
        <tspan x="0.5" y="4.5">
          Bridge
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.MordenRoad}
        transform="matrix(0.9997 0 0 1 425.6494 752.3155)"
      >
        <tspan x="0" y="0">
          Morden
        </tspan>
        <tspan x="3" y="4.5">
          Road
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.TherapiaLane}
        transform="matrix(0.9997 0 0 1 583.6974 752.3155)"
      >
        <tspan x="0" y="0">
          Therapia
        </tspan>
        <tspan x="4.3" y="4.5">
          Lane
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.WaddonMarsh}
        transform="matrix(0.9997 0 0 1 633.0121 752.3155)"
      >
        <tspan x="0" y="0">
          Waddon
        </tspan>
        <tspan x="2.5" y="4.5">
          Marsh
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.GeorgeStreet}
        transform="matrix(0.9997 0 0 1 737.5225 752.3155)"
      >
        <tspan x="0" y="0">
          George
        </tspan>
        <tspan x="1.1" y="4.5">
          Street
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.LebanonRoad}
        transform="matrix(0.9997 0 0 1 782.8029 735.4818)"
      >
        <tspan x="0" y="0">
          Lebanon
        </tspan>
        <tspan x="3.9" y="4.5">
          Road
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.BeckenhamRoad}
        transform="matrix(0.9997 0 0 1 961.1408 682.4189)"
      >
        <tspan x="0" y="0">
          Beckenham
        </tspan>
        <tspan x="7.2" y="4.5">
          Road
        </tspan>
      </StationTextName>
      <StationTextName station={Station.MitchamJunction} tag={"g"}>
        <text transform="matrix(0.9997 0 0 1 523.1871 752.3155)">
          <tspan x="0" y="0">
            Mitcham
          </tspan>
          <tspan x="0" y="4.5">
            Junction
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="547.7,756.8 546,756 548.4,756 548.4,755.5 545.9,755.5 547.2,754.9 548.4,754.9 548.4,754.4 547.2,754.4 545.6,753.7 544.4,753.7 546.1,754.4 543.5,754.4 543.5,754.9 546.1,754.9 544.8,755.5 543.5,755.5 543.5,756 544.8,756 546.5,756.8 "
        />
      </StationTextName>
      <StationTextName station={Station.EastCroydon} tag={"g"}>
        <text transform="matrix(0.9997 0 0 1 772.1768 752.3156)">
          <tspan x="0" y="0">
            East
          </tspan>
          <tspan x="-4.9" y="4.5">
            Croydon
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="770.5,752.3 768.8,751.5 771.3,751.5 771.3,751 768.7,751 770,750.4 771.3,750.4 771.3,749.9 770,749.9 768.5,749.2 767.3,749.2 768.9,749.9 766.4,749.9 766.4,750.4 768.9,750.4 767.6,751 766.4,751 766.4,751.5 767.7,751.5 769.4,752.3 "
        />
      </StationTextName>
      <StationTextName station={Station.ElmersEnd} tag={"g"}>
        <text transform="matrix(0.9997 0 0 1 897.8661 697.2582)">
          {multiWordStationNames[Station.ElmersEnd]}
        </text>
        <polygon
          fill="#EE3124"
          points="928.1,697.2 926.4,696.5 928.8,696.5 928.8,695.9 926.3,695.9 927.6,695.3 928.8,695.3 928.8,694.8 927.6,694.8 926,694.1 924.8,694.1 926.5,694.8 924,694.8 924,695.3 926.5,695.3 925.2,695.9 924,695.9 924,696.5 925.3,696.5 926.9,697.2 "
        />
      </StationTextName>
      <StationTextName station={Station.Birkbeck} tag={"g"}>
        <text transform="matrix(0.9997 0 0 1 914.8126 682.5182)">
          {Station.Birkbeck}
        </text>
        <polygon
          fill="#EE3124"
          points="938.8,682.5 937,681.7 939.5,681.7 939.5,681.2 937,681.2 938.2,680.6 939.5,680.6 939.5,680.1 938.2,680.1 936.7,679.4 935.5,679.4 937.2,680.1 934.6,680.1 934.6,680.6 937.2,680.6 935.8,681.2 934.6,681.2 934.6,681.7 935.9,681.7 937.6,682.5 "
        />
      </StationTextName>
      <StationTextName station={Station.BeckenhamJunction} tag={"g"}>
        <text transform="matrix(0.9997 0 0 1 1002.3486 674.6883)">
          <tspan x="0" y="0">
            Beckenham
          </tspan>
          <tspan x="0" y="4.5">
            Junction
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="1027,679.2 1025.3,678.4 1027.7,678.4 1027.7,677.9 1025.2,677.9 1026.5,677.3 1027.7,677.3 1027.7,676.8 1026.5,676.8 1024.9,676.1 1023.7,676.1 1025.4,676.8 1022.9,676.8 1022.9,677.3 1025.4,677.3 1024.1,677.9 1022.9,677.9 1022.9,678.4 1024.2,678.4 1025.8,679.2 "
        />
      </StationTextName>
      <StationTextName
        station={Station.SwissCottage}
        transform="matrix(1 0 0 1 468.006 361.2861)"
      />
      <StationTextName
        station={Station.FinchleyRoad}
        transform="matrix(1 0 0 1 395.0692 343.0689)"
      />
      <StationTextName station={Station.WestHampstead} tag={"g"}>
        <text transform="matrix(1 0 0 1 432.5029 298.0205)">
          <tspan x="0" y="0">
            West
          </tspan>
          <tspan x="-6.8" y="4.5">
            Hampstead
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="431.1,298 429.4,297.2 431.9,297.2 431.9,296.7 429.3,296.7 430.6,296.1 431.9,296.1 431.9,295.6 430.6,295.6 429.1,294.9 427.9,294.9 429.5,295.6 427,295.6 427,296.1 429.5,296.1 428.2,296.7 427,296.7 427,297.2 428.3,297.2 430,298 "
        />
      </StationTextName>
      <StationTextName
        station={Station.StJohnsWood}
        transform="matrix(1 0 0 1 467.7077 370.0614)"
      />
      <StationTextName
        station={Station.LancasterGate}
        transform="matrix(1 0 0 1 437.2931 454.2682)"
      >
        <tspan x="0" y="0">
          Lancaster
        </tspan>
        <tspan x="0" y="4.5">
          Gate
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.LambethNorth}
        transform="matrix(1 0 0 1 547.7393 573.0072)"
      />
      <StationTextName
        station={Station.CustomHouseForExCeL}
        transform="matrix(1 0 0 1 940.2543 479.2393)"
      >
        <tspan x="0" y="0">
          Custom House
        </tspan>
        <tspan x="0" y="4.5">
          for ExCeL
        </tspan>
      </StationTextName>
      <StationTextName station={Station.WestEaling} tag={"g"}>
        <text transform="matrix(1 0 0 1 188.4802 452.0304)">
          <tspan x="0" y="0">
            West
          </tspan>
          <tspan x="-0.9" y="4.5">
            Ealing
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="195.8,461.1 194.2,460.4 196.5,460.4 196.5,459.9 194.1,459.9 195.3,459.4 196.5,459.4 196.5,458.9 195.3,458.9 193.8,458.2 192.7,458.2 194.3,458.9 191.9,458.9 191.9,459.4 194.3,459.4 193,459.9 191.9,459.9 191.9,460.4 193.1,460.4 194.7,461.1 "
        />
      </StationTextName>
      <StationTextName
        station={Station.ActonMainLine}
        transform="matrix(1 0 0 1 256.3011 430.183)"
      >
        <tspan x="0" y="0">
          Acton
        </tspan>
        <tspan x="2.6" y="4.5">
          Main
        </tspan>
        <tspan x="4" y="9.1">
          Line
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.Southall}
        transform="matrix(1 0 0 1 147.6143 452.3885)"
      />
      <StationTextName
        station={Station.WestDrayton}
        transform="matrix(1 0 0 1 90.0517 427.9078)"
      >
        <tspan x="0" y="0">
          West
        </tspan>
        <tspan x="-6.6" y="4.4">
          Drayton
        </tspan>
      </StationTextName>
      <StationTextName
        station={Station.Iver}
        transform="matrix(1 0 0 1 93.1841 409.5398)"
      />
      <StationTextName
        station={Station.Langley}
        transform="matrix(1 0 0 1 84.7486 398.7185)"
      />
      <StationTextName
        station={Station.Burnham}
        transform="matrix(1 0 0 1 81.6537 375.4987)"
      />
      <StationTextName
        station={Station.Taplow}
        transform="matrix(1 0 0 1 85.1991 363.8473)"
      />
      <StationTextName
        station={Station.Hanwell}
        transform="matrix(1 0 0 1 164.1167 439.8917)"
      />
      <StationTextName station={Station.HayesHarlington} tag={"g"}>
        <text transform="matrix(1 0 0 1 114.9599 435.2877)">
          <tspan x="0" y="0">
            Hayes &amp;
          </tspan>
          <tspan x="-2.8" y="4.5">
            Harlington
          </tspan>
        </text>
        <polygon
          fill="#EE3124"
          points="125.5,431.6 123.9,430.9 126.2,430.9 126.2,430.4 123.8,430.4 125,429.8 126.2,429.8 126.2,429.4 125,429.4 123.6,428.7 122.5,428.7 124,429.4 121.6,429.4 121.6,429.8 124,429.8 122.8,430.4 121.6,430.4 121.6,430.9 122.9,430.9 124.4,431.6 "
        />
      </StationTextName>
      <StationTextName
        station={Station.PutneyBridge}
        transform="matrix(1 0 0 1 340.8 587.1)"
      />
      <StationTextName station={Station.CanaryWharf} tag={"g"}>
        <text transform="matrix(1 0 0 1 759.4282 507.24)">
          {multiWordStationNames[Station.CanaryWharf]}
        </text>
        <path
          fill="#1C3F94"
          className="transport"
          d="M753.1,506.7l-0.8-1.1h0.8l0.5-0.6c0,0,0,0,0.1-0.1c0,0,0.1,0,0.1,0h0.6 v-0.2h0.3l0.2-0.4h0.2l-0.1,0.2l0.1,0.2h0.8v0.2h1.3c0,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.1l0.2,0.5h0.5l0.4,1.1 c0,0-0.5-0.3-1.3-0.3c-0.6,0-0.9,0.3-1.6,0.3c-0.4,0-1-0.2-1.5-0.2C753.8,506.5,753.3,506.6,753.1,506.7z M753.4,507.2 c0.3-0.1,0.6-0.2,1.3,0c0.3,0.1,0.6,0.1,0.9,0.1c0.4,0,0.6-0.1,0.9-0.1c0.3-0.1,0.6-0.1,0.8-0.1c0.4,0,0.7,0.1,0.9,0.2l-0.1-0.3 c-0.3-0.1-0.9-0.2-1.6,0c-0.3,0.1-0.6,0.1-0.9,0.1c-0.3,0-0.5,0-0.8-0.1c-0.9-0.2-1.2-0.1-1.6,0.1L753.4,507.2z M753.4,505.6 h0.8v-0.5h-0.3c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1L753.4,505.6z M755.5,505.6h0.8v-0.5h-0.8V505.6z M757.2,505.2 C757.2,505.2,757.2,505.2,757.2,505.2c-0.1-0.1-0.1-0.1-0.1-0.1h-0.6v0.5h0.9L757.2,505.2z M754.4,505.6h0.8l0-0.5h-0.8V505.6z"
        />
      </StationTextName>
      <StationTextName station={Station.Westferry} tag={"g"}>
        <text transform="matrix(1 0 0 1 753.1208 475.1753)">
          {Station.Westferry}
        </text>
        <path
          fill="#1C3F94"
          className="transport"
          d="M761.9,478.6l-0.8-1.1h0.8l0.5-0.6c0,0,0,0,0.1-0.1c0,0,0.1,0,0.1,0h0.6 v-0.2h0.3l0.2-0.4h0.2l-0.1,0.2l0.1,0.2h0.8v0.2h1.3c0,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.1l0.2,0.5h0.5l0.4,1.1 c0,0-0.5-0.3-1.3-0.3c-0.6,0-0.9,0.3-1.6,0.3c-0.4,0-1-0.2-1.5-0.2C762.6,478.3,762.1,478.5,761.9,478.6z M762.3,479.1 c0.3-0.1,0.6-0.2,1.3,0c0.3,0.1,0.6,0.1,0.9,0.1c0.4,0,0.6-0.1,0.9-0.1c0.3-0.1,0.6-0.1,0.8-0.1c0.4,0,0.7,0.1,0.9,0.2l-0.1-0.3 c-0.3-0.1-0.9-0.2-1.6,0c-0.3,0.1-0.6,0.1-0.9,0.1c-0.3,0-0.5,0-0.8-0.1c-0.9-0.2-1.2-0.1-1.6,0.1L762.3,479.1z M762.2,477.4 h0.8V477h-0.3c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1L762.2,477.4z M764.3,477.4h0.8V477h-0.8V477.4z M766.1,477.1 C766.1,477.1,766,477,766.1,477.1c-0.1-0.1-0.1-0.1-0.1-0.1h-0.6v0.5h0.9L766.1,477.1z M763.3,477.4h0.8l0-0.5h-0.8V477.4z"
        />
      </StationTextName>
      <StationTextName station={Station.Reading} tag={"g"}>
        <text transform="matrix(1 0 0 1 84.425 329.0096)">
          {Station.Reading}
        </text>
        <polygon
          fill="#EE3124"
          points="100.9,333.4 99.2,332.6 101.6,332.6 101.6,332.1 99.1,332.1 100.4,331.5 101.6,331.5 101.6,331 100.4,331 98.8,330.2 97.6,330.2 99.3,331 96.7,331 96.7,331.5 99.3,331.5 97.9,332.1 96.7,332.1 96.7,332.6 98,332.6 99.7,333.4 "
        />
      </StationTextName>
      <StationTextName station={Station.Twyford} tag={"g"}>
        <text transform="matrix(1 0 0 1 82.8356 340.721)">
          {Station.Twyford}
        </text>
        <polygon
          fill="#EE3124"
          points="100.6,345.2 98.8,344.4 101.3,344.4 101.3,343.9 98.7,343.9 100,343.3 101.3,343.3 101.3,342.8 100,342.8 98.5,342 97.3,342 98.9,342.8 96.4,342.8 96.4,343.3 98.9,343.3 97.6,343.9 96.4,343.9 96.4,344.4 97.7,344.4 99.4,345.2 "
        />
      </StationTextName>
      <StationTextName station={Station.Maidenhead} tag={"g"}>
        <text transform="matrix(1 0 0 1 75.005 352.2547)">
          {Station.Maidenhead}
        </text>
        <polygon
          fill="#EE3124"
          points="100.6,356.6 98.8,355.8 101.3,355.8 101.3,355.3 98.7,355.3 100,354.7 101.3,354.7 101.3,354.2 100,354.2 98.5,353.5 97.3,353.5 98.9,354.2 96.4,354.2 96.4,354.7 98.9,354.7 97.6,355.3 96.4,355.3 96.4,355.8 97.7,355.8 99.4,356.6 "
        />
      </StationTextName>
      <StationTextName station={Station.Slough} tag={"g"}>
        <text transform="matrix(1 0 0 1 86.2 387.1193)">{Station.Slough}</text>
        <polygon
          fill="#EE3124"
          points="100.6,391.4 98.9,390.6 101.3,390.6 101.3,390.1 98.8,390.1 100.1,389.5 101.3,389.5 101.3,389 100.1,389 98.5,388.3 97.3,388.3 99,389 96.4,389 96.4,389.5 99,389.5 97.6,390.1 96.4,390.1 96.4,390.6 97.7,390.6 99.4,391.4 "
        />
      </StationTextName>
    </g>
  );
});

export default StationNames;
