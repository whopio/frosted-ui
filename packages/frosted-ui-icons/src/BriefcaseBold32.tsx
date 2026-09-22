import * as React from 'react';
import { IconProps } from './types';

export const BriefcaseBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BriefcaseBold32"
      {...props}
    >
      <path
        d="M19.237 1c2.492 0 4.513 2.02 4.513 4.513V8c3.834.037 6.96 3.02 7.229 6.795.013.066.021.134.021.204v8.678C31 27.722 27.722 31 23.678 31H8.322C4.278 31 1 27.722 1 23.678V15c0-.07.007-.138.02-.204C1.29 11.02 4.417 8.038 8.25 8V5.513C8.25 3.02 10.27 1 12.763 1h6.474zM29 19.66c-.985.835-2.259 1.34-3.651 1.34H6.65C5.26 21 3.985 20.495 3 19.66v4.018C3 26.618 5.383 29 8.322 29h15.356C26.618 29 29 26.617 29 23.678V19.66zM8.322 10C5.382 10 3 12.383 3 15.322v.027C3 17.365 4.635 19 6.651 19H25.35C27.365 19 29 17.365 29 15.349v-.027C29 12.382 26.617 10 23.678 10H8.322zm4.44-7c-1.387 0-2.512 1.125-2.512 2.513V8h11.5V5.513C21.75 4.125 20.625 3 19.237 3h-6.474z"
        fill={color}
      />
    </svg>
  );
};

BriefcaseBold32.category = 'Objects';

export default BriefcaseBold32;
