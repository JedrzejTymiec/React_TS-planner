import React from 'react';
import { Toggle } from '../Options';

type Props = {
  selected: boolean;
  toggle: Toggle;
};

const Meat: React.FC<Props> = ({ selected, toggle }) => {
  return (
    <div onClick={toggle}>
      {!selected && <div className="strikethrough"></div>}
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300.000000 240.000000"
        preserveAspectRatio="xMidYMid meet">
        <metadata>
          Created by potrace 1.10, written by Peter Selinger 2001-2011
        </metadata>
        <g
          transform="translate(0.000000,240.000000) scale(0.050000,-0.050000)"
          stroke="none"
          className="meat"
          color={selected ? '#b73733' : '#d3d3d3'}>
          <path
            fill="currentColor"
            d="M2640 4499 c-1228 -97 -2183 -624 -2410 -1331 -53 -167 -37 -1022 23
  -1150 133 -290 319 -383 830 -417 520 -36 684 -116 1197 -583 1008 -920 1875
  -1061 2777 -453 631 425 864 1074 746 2077 -143 1211 -1470 1990 -3163 1857z
  m1100 -219 c1402 -233 2266 -1417 1729 -2370 -450 -801 -1493 -1113 -2341
  -701 -227 111 -424 257 -767 569 -526 480 -691 558 -1251 592 -778 46 -982
  590 -440 1167 601 639 1862 944 3070 743z"
          />
          <path
            fill="currentColor"
            d="M2750 4128 c-1043 -77 -1818 -426 -2097 -944 -170 -316 -25 -493 431
  -526 676 -49 870 -141 1467 -691 453 -417 701 -567 1077 -651 907 -201 1921
  583 1775 1375 -171 925 -1300 1536 -2653 1437z m1540 -1446 c151 -67 248 -217
  223 -344 -66 -328 -700 -401 -902 -103 -210 308 273 626 679 447z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Meat;
