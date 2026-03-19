import * as React from 'react';
import { IconProps } from './types';

export const Crown12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.72222 9.16667V10C1.72222 10.5523 2.16994 11 2.72222 11H9.27778C9.83006 11 10.2778 10.5523 10.2778 10V9.16667M1.72222 9.16667H10.2778M1.72222 9.16667L1.00934 4.53296C0.865917 3.60068 2.04057 3.07091 2.64442 3.79553C3.07415 4.3112 3.89185 4.2163 4.19205 3.6159L5.10557 1.78885C5.4741 1.05181 6.5259 1.05181 6.89443 1.78885L7.80795 3.6159C8.10815 4.2163 8.92585 4.3112 9.35558 3.79552C9.95943 3.07091 11.1341 3.60069 10.9907 4.53296L10.2778 9.16667"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

Crown12.category = 'Objects';

export default Crown12;
