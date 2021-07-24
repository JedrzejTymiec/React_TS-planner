import React from 'react';
import { Toggle } from '../Planner/Nav/Options';

type Props = {
  selected: boolean;
  toggle: Toggle;
};

const Fish: React.FC<Props> = ({ selected, toggle }) => {
  return (
    <div onClick={toggle}>
      {!selected && <div className="strikethrough"></div>}
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300.000000 198.000000"
        preserveAspectRatio="xMidYMid meet">
        <metadata>
          Created by potrace 1.10, written by Peter Selinger 2001-2011
        </metadata>
        <g
          transform="translate(0.000000,198.000000) scale(0.050000,-0.050000)"
          stroke="none"
          className="fish"
          color={selected ? '#69a2ff' : '#d3d3d3'}>
          <path
            fill="currentColor"
            d="M2434 3839 c-169 -28 -314 -141 -440 -343 -46 -73 -44 -76 33 -76 62
  0 76 13 170 155 119 179 125 179 44 -3 -84 -187 -22 -188 99 -1 102 156 119
  156 50 2 -85 -193 -27 -189 103 7 112 169 121 174 57 29 -101 -230 -54 -246
  90 -29 116 174 122 173 40 -10 -94 -210 -44 -216 93 -10 116 174 120 174 42
  -2 -87 -197 -43 -232 72 -56 95 144 112 141 46 -8 -46 -104 -49 -134 -10 -134
  9 0 57 61 107 135 106 158 111 154 31 -22 -80 -179 -28 -200 84 -34 85 126 92
  124 35 -9 -69 -161 -26 -187 67 -40 69 110 84 115 41 15 -77 -178 -32 -207 72
  -45 83 129 91 126 31 -10 -75 -170 -24 -175 94 -9 29 41 28 33 -5 -48 -58
  -140 -18 -169 60 -43 57 92 67 89 27 -11 -54 -136 -6 -128 88 14 13 20 10 -2
  -8 -49 -42 -112 -19 -131 55 -44 l59 70 -34 -75 c-48 -105 -10 -144 50 -51 44
  68 59 64 21 -7 -41 -77 -1 -114 45 -42 53 84 62 82 26 -4 -36 -87 -1 -119 54
  -49 l38 48 -20 -54 c-25 -70 6 -91 48 -32 33 47 44 27 12 -23 -30 -48 0 -66
  44 -27 40 35 40 35 19 -6 -28 -52 -9 -77 33 -43 25 20 28 20 14 -2 -10 -17 -6
  -34 11 -45 77 -49 116 39 58 132 -270 437 -1300 961 -1746 889z"
          />
          <path
            fill="currentColor"
            d="M2080 3319 c-526 -62 -981 -291 -1505 -753 -481 -426 -578 -665 -280
  -693 245 -23 469 -116 414 -172 -16 -16 -47 -13 -110 10 -134 47 -339 63 -339
  26 0 -58 373 -347 557 -432 431 -199 932 270 997 934 19 197 53 75 38 -136
  -36 -488 -231 -788 -610 -935 l-107 -42 183 -73 c299 -120 559 -179 987 -224
  l115 -12 122 -178 c142 -207 318 -378 499 -484 230 -135 278 -95 294 242 15
  312 7 325 -306 493 -297 160 -302 167 -70 84 l179 -64 133 35 c175 46 403 154
  768 365 334 193 567 295 761 332 167 33 169 35 210 194 44 173 42 369 -4 494
  l-36 98 -180 35 c-331 65 -493 134 -1010 430 -627 359 -1155 491 -1700 426z
  m-948 -870 c62 -94 -25 -190 -144 -160 -130 32 -94 211 42 211 52 0 77 -13
  102 -51z m3408 -654 c-104 -34 -392 -166 -640 -292 -396 -202 -700 -343 -738
  -343 -6 0 110 81 258 181 473 317 711 429 1035 487 260 47 292 35 85 -33z
  m-1369 -1150 c-35 -36 -451 236 -451 295 0 8 104 -53 230 -136 127 -82 226
  -154 221 -159z m-190 -46 c182 -109 176 -131 -11 -41 -128 61 -276 178 -313
  247 -15 29 5 20 68 -32 50 -41 165 -119 256 -174z m-37 -163 c96 -68 171 -128
  167 -132 -23 -23 -279 144 -396 258 -153 150 -186 221 -40 85 52 -48 173 -143
  269 -211z"
          />
          <path
            fill="currentColor"
            d="M5687 2849 c-249 -204 -376 -294 -482 -343 -95 -44 -125 -79 -93
  -111 6 -6 88 15 183 47 221 74 224 65 15 -44 -196 -102 -212 -128 -65 -111
  346 41 349 38 60 -48 -189 -56 -173 -70 100 -91 l225 -16 -226 -19 c-275 -23
  -277 -42 -13 -117 212 -59 191 -63 -136 -24 -140 17 -117 -13 84 -112 216
  -106 218 -118 9 -51 -262 84 -273 65 -58 -97 83 -62 150 -118 150 -123 0 -11
  -249 122 -295 156 -17 14 -30 3 -45 -36 -12 -30 -19 -56 -16 -57 139 -55 353
  -192 523 -333 298 -247 308 -232 189 271 -48 200 -62 306 -62 460 0 154 14
  260 62 460 112 473 100 510 -109 339z"
          />
          <path
            fill="currentColor"
            d="M4305 1336 c-34 -17 -42 -33 -32 -64 11 -36 9 -38 -19 -15 -24 19
  -41 20 -73 4 -49 -27 -52 -47 -11 -81 47 -39 20 -47 -35 -11 -103 67 -142 7
  -60 -92 54 -66 54 -66 5 -32 -168 119 -227 87 -108 -59 l78 -96 -119 84 c-144
  102 -217 88 -116 -22 160 -176 154 -184 -31 -45 -102 76 -108 78 -166 51 l-61
  -29 202 -144 c111 -80 215 -145 231 -145 61 0 441 600 426 674 -8 43 -50 51
  -111 22z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Fish;