import * as React from 'react';
import { IconProps } from './types';

export const CrownBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.72613 9.16667V10C1.72613 10.5523 2.17384 11 2.72613 11H9.28168C9.83397 11 10.2817 10.5523 10.2817 10V9.16667M1.72613 9.16667H10.2817M1.72613 9.16667L1.01325 4.53296C0.869823 3.60068 2.04448 3.07091 2.64833 3.79553C3.07806 4.3112 3.89576 4.2163 4.19595 3.6159L5.10948 1.78885C5.478 1.05181 6.52981 1.05181 6.89833 1.78885L7.81186 3.6159C8.11206 4.2163 8.92975 4.3112 9.35949 3.79552C9.96334 3.07091 11.138 3.60069 10.9946 4.53296L10.2817 9.16667"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

CrownBold12.category = 'Objects';

export default CrownBold12;
