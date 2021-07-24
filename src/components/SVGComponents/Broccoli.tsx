import React from 'react';
import { Toggle } from '../Planner/Options';

type Props = {
  selected: boolean;
  toggle: Toggle;
};

const Broccoli: React.FC<Props> = ({ selected, toggle }) => {
  return (
    <div className="icon broccoli" onClick={toggle}>
      {!selected && <div className="strikethrough"></div>}
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 202.000000 205.000000"
        preserveAspectRatio="xMidYMid meet">
        <g
          transform="translate(0.000000,205.000000) scale(0.050000,-0.050000)"
          stroke="none"
          color={selected ? '#39a15f' : '#d3d3d3'}>
          <path
            fill="currentColor"
            d="M1013 3912 c-145 -54 -271 -221 -273 -362 0 -59 -2 -60 -106 -62
  -551 -13 -563 -888 -12 -888 85 0 96 -5 114 -56 10 -31 55 -97 99 -148 113
  -131 143 -685 53 -1009 -29 -106 -298 -530 -452 -713 -44 -53 -77 -99 -73
  -101 4 -3 46 -36 95 -73 210 -162 401 -292 452 -308 33 -9 51 8 98 93 302 543
  549 800 866 898 492 152 728 170 784 62 136 -264 476 -338 686 -149 77 70 156
  196 156 249 0 15 32 39 71 53 281 101 387 492 189 698 -39 42 -41 50 -14 80
  183 210 110 553 -146 684 -58 30 -78 54 -88 107 -32 171 -231 313 -440 313
  -128 0 -132 2 -132 51 0 307 -396 513 -672 351 l-70 -42 -60 69 c-123 140
  -339 190 -515 120 -78 -31 -79 -31 -171 34 -110 78 -303 99 -439 49z m473
  -1901 l55 -12 -124 -182 c-69 -101 -127 -175 -130 -165 -2 10 -8 114 -12 231
  l-8 213 81 -37 c45 -20 107 -42 138 -48z m598 -274 c58 0 131 10 161 21 48 18
  55 16 55 -17 0 -55 -612 -276 -652 -235 -9 8 63 141 143 262 l32 50 77 -41
  c50 -25 116 -40 184 -40z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Broccoli;
