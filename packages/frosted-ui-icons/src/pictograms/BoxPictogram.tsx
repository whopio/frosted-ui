import * as React from 'react';
import { PictogramProps, PictogramVariant } from './types';

export type BoxPictogramProps = PictogramProps;

const FILLS: Record<PictogramVariant, Record<number, string>> = {
  light: { '7': '#151515', '8': '#151515', '9': '#151515', '10': '#151515' },
  dark: { '7': '#222', '8': '#222', '9': '#222', '10': '#222' },
  orange: { '7': '#151515', '8': '#151515', '9': '#151515', '10': '#151515' },
  auto: {
    '7': 'light-dark(#151515, #222)',
    '8': 'light-dark(#151515, #222)',
    '9': 'light-dark(#151515, #222)',
    '10': 'light-dark(#151515, #222)',
  },
};

export const BoxPictogram = ({ variant = 'auto', ...props }: BoxPictogramProps) => {
  const f = FILLS[variant];
  return (
    <svg
      width="240"
      height="240"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-pictogram="true"
      {...props}
    >
      <path stroke="#000" d="M0.5 0.5H239.5V239.5H0.5z" strokeOpacity=".01" />
      <path
        d="M118.405 121.049C119.43 121.049 132.118 129.374 132.118 129.374L122.294 204.02L56.9414 166.629V119.209L82.4578 106.996L118.41 121.049H118.405Z"
        fill="#354B98"
      />
      <path
        d="M120.588 125.141L122.294 133.192V204.014L182.734 162.396V114.499L164.452 100.58L120.588 125.141Z"
        fill="#B6B5B0"
      />
      <path
        d="M163.534 91.0627L180.966 94.847L212.548 99.5562L153.097 141.517L122.296 133.192L126.487 120.74L163.534 91.0627Z"
        fill="#F3F3F3"
      />
      <path
        d="M67.7176 99.1143L60.2148 99.0795L37.428 70.2871L97.0177 36.9197L117.244 65.0308L116.667 69.4665L100.394 82.1571"
        fill="#B6B5B0"
      />
      <path
        d="M120.589 71.1031L117.243 65.0313L135.286 35.1797L203.85 64.554L180.965 94.8482L149.308 93.9282L120.589 71.1031Z"
        fill="#B6B5B0"
      />
      <path d="M23.377 115.041L93.915 153.386L122.295 133.192L60.2148 99.0786L23.377 115.041Z" fill="#6196C1" />
      <path
        d="M117.241 65.0295L60.2119 99.0782L122.293 133.191L180.963 94.8464L117.241 65.0295Z"
        style={{ fill: f[7] }}
      />
      <path d="M132.321 185.765V189.518L152.787 176.589V173.073L132.321 185.765Z" style={{ fill: f[8] }} />
      <path
        d="M135.152 181.434L138.94 179.012V166.541L141.805 164.92L137.131 159.361L132.457 170.211L135.152 168.684V181.434Z"
        style={{ fill: f[9] }}
      />
      <path
        d="M145.861 175.103L149.651 172.681V160.214L152.514 158.593L147.84 153.029L143.167 163.88L145.861 162.353V175.103Z"
        style={{ fill: f[10] }}
      />
    </svg>
  );
};

BoxPictogram.category = 'Pictograms';

export default BoxPictogram;
