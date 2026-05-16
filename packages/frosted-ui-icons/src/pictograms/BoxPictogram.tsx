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
    <svg width="240" height="240" fill="none" xmlns="http://www.w3.org/2000/svg" data-fui-pictogram="true" {...props}>
      <path stroke="#000" d="M.5.5h239v239H.5z" strokeOpacity=".01" />
      <path
        d="M118.405 121.049c1.025 0 13.713 8.325 13.713 8.325l-9.824 74.646-65.353-37.391v-47.42l25.517-12.213 35.952 14.053h-.005z"
        fill="#354B98"
      />
      <path d="M120.588 125.141l1.706 8.051v70.822l60.44-41.618v-47.897l-18.282-13.919-43.864 24.561z" fill="#B6B5B0" />
      <path
        d="M163.534 91.063l17.432 3.784 31.582 4.71-59.451 41.96-30.801-8.325 4.191-12.452 37.047-29.677z"
        fill="#F3F3F3"
      />
      <path
        d="M67.718 99.114l-7.503-.035-22.787-28.792 59.59-33.367 20.226 28.11-.577 4.436-16.273 12.691"
        fill="#B6B5B0"
      />
      <path
        d="M120.589 71.103l-3.346-6.072 18.043-29.851 68.564 29.374-22.885 30.294-31.657-.92-28.719-22.825z"
        fill="#B6B5B0"
      />
      <path d="M23.377 115.041l70.538 38.345 28.38-20.194-62.08-34.113-36.838 15.962z" fill="#6196C1" />
      <path d="M117.241 65.03l-57.03 34.048 62.082 34.113 58.67-38.345-63.722-29.817z" style={{ fill: f[7] }} />
      <path d="M132.321 185.765v3.753l20.466-12.929v-3.516l-20.466 12.692z" style={{ fill: f[8] }} />
      <path
        d="M135.152 181.434l3.788-2.422v-12.471l2.865-1.621-4.674-5.559-4.674 10.85 2.695-1.527v12.75z"
        style={{ fill: f[9] }}
      />
      <path
        d="M145.861 175.103l3.79-2.422v-12.467l2.863-1.621-4.674-5.564-4.673 10.851 2.694-1.527v12.75z"
        style={{ fill: f[10] }}
      />
    </svg>
  );
};

BoxPictogram.category = 'Pictograms';

export default BoxPictogram;
