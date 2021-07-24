import React from 'react';
import { Toggle } from '../Planner/Nav/Options';

type Props = {
  selected: boolean;
  toggle: Toggle;
};

const Chicken: React.FC<Props> = ({ selected, toggle }) => {
  return (
    <div onClick={toggle}>
      {!selected && <div className="strikethrough"></div>}
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300.000000 204.000000"
        preserveAspectRatio="xMidYMid meet">
        <metadata>
          Created by potrace 1.10, written by Peter Selinger 2001-2011
        </metadata>
        <g
          transform="translate(0.000000,204.000000) scale(0.050000,-0.050000)"
          stroke="none"
          className="chicken"
          color={selected ? '#a56536' : '#d3d3d3'}>
          <path
            fill="currentColor"
            d="M4660 3475 c-52 -27 -111 -126 -130 -221 -15 -77 -73 -128 -174 -154
  -47 -13 -119 -33 -159 -44 -69 -20 -128 -18 -682 16 -254 16 -284 -10 -71 -62
  79 -19 158 -42 175 -51 17 -10 63 -30 101 -46 162 -66 319 -142 450 -219 171
  -101 147 -106 335 75 158 153 217 185 305 163 174 -44 321 209 175 302 -69 44
  -84 65 -85 118 0 93 -150 169 -240 123z"
          />
          <path
            fill="currentColor"
            d="M2490 2966 c-700 -155 -1176 -485 -1443 -999 -177 -342 -225 -795
  -110 -1032 l47 -95 1878 0 1879 0 128 58 c345 156 438 353 302 638 -86 178
  -71 179 -317 -22 -617 -503 -1062 -667 -1460 -541 -861 273 -326 1525 652
  1527 149 0 155 2 134 40 -12 22 -31 40 -44 40 -12 0 -81 34 -154 76 -218 124
  -525 240 -778 293 -137 29 -611 40 -714 17z"
          />
          <path
            fill="currentColor"
            d="M5386 2721 c-45 -28 -71 -64 -89 -125 -40 -141 -85 -190 -212 -228
  -139 -41 -554 -49 -675 -12 -776 234 -1687 -652 -1174 -1141 366 -348 945
  -136 1846 676 177 159 332 290 345 291 13 2 69 1 125 -1 211 -9 314 192 158
  310 -51 39 -70 69 -70 110 0 120 -143 188 -254 120z"
          />
          <path
            fill="currentColor"
            d="M240 702 c0 -157 123 -340 284 -424 72 -37 149 -38 2457 -38 l2384 0
  98 53 c140 77 317 386 267 468 -8 12 -1012 19 -2751 19 l-2739 0 0 -78z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Chicken;
