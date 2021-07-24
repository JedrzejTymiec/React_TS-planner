import React from 'react';
import { Toggle } from '../Planner/Nav/Options';

type Props = {
  selected: boolean;
  toggle: Toggle;
};

const Cheese: React.FC<Props> = ({ selected, toggle }) => {
  return (
    <div onClick={toggle}>
      {!selected && <div className="strikethrough"></div>}
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300.000000 238.000000"
        preserveAspectRatio="xMidYMid meet">
        <metadata>
          Created by potrace 1.10, written by Peter Selinger 2001-2011
        </metadata>
        <g
          transform="translate(0.000000,238.000000) scale(0.050000,-0.050000)"
          stroke="none"
          className="cheese"
          color={selected ? '#f6921e' : '#d3d3d3'}>
          <path
            fill="currentColor"
            d="M1840 4515 c-720 -316 -1138 -717 -1380 -1322 l-60 -150 0 -1313 c0
  -1409 -3 -1375 107 -1419 57 -22 4540 313 4785 358 145 27 157 66 164 529 l6
  416 -94 36 c-396 151 -393 570 4 722 l89 34 -5 302 -6 302 -1730 764 c-1715
  757 -1783 784 -1880 741z m256 -365 c164 -69 165 -69 84 -117 -325 -192 247
  -466 600 -287 l110 55 519 -231 c286 -128 524 -236 529 -241 5 -5 -686 -9
  -1535 -9 l-1544 0 81 120 c111 163 298 360 458 481 121 92 516 306 543 294 6
  -3 76 -32 155 -65z m1068 -1278 c-10 -153 39 -261 155 -341 310 -213 725 23
  672 383 l-13 86 356 -1 356 0 220 -95 220 -96 6 -100 c5 -91 1 -103 -47 -129
  -409 -219 -439 -791 -57 -1086 l108 -83 0 -225 c0 -124 -2 -225 -5 -226 -85
  -10 -1407 -114 -1410 -110 -3 3 5 50 17 105 105 455 -421 771 -771 463 -153
  -135 -202 -378 -113 -554 24 -46 36 -83 27 -83 -8 0 -474 -36 -1035 -80 -561
  -44 -1049 -80 -1085 -80 l-65 0 0 1109 0 1108 115 67 c151 87 170 88 1366 92
  l991 4 -8 -128z"
          />
          <path
            fill="currentColor"
            d="M1470 2672 c-436 -190 -319 -787 163 -828 438 -37 690 440 384 730
  -126 120 -389 167 -547 98z"
          />
          <path
            fill="currentColor"
            d="M2510 2203 c-92 -57 -132 -113 -144 -199 -40 -299 371 -421 535 -159
  138 220 -165 497 -391 358z"
          />
          <path
            fill="currentColor"
            d="M4285 1740 c-241 -147 -141 -500 141 -500 216 0 358 219 259 398 -74
  133 -268 183 -400 102z"
          />
          <path
            fill="currentColor"
            d="M1165 1367 c-84 -42 -145 -142 -145 -239 0 -280 390 -369 540 -123
  139 228 -143 486 -395 362z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Cheese;