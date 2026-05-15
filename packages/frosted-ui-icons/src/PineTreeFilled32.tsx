import * as React from 'react';
import { IconProps } from './types';

export const PineTreeFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15.3121 1.29701C15.6838 0.907177 16.3125 0.90702 16.6842 1.29701L16.7593 1.38686L25.7857 13.4826C26.2527 14.1091 25.8056 15.0001 25.024 15.0001H21.3424L27.8267 24.5158C28.2556 25.1462 27.8043 25.9999 27.0416 26.0001H16.7467V30.2482C16.7467 30.6624 16.4109 30.9982 15.9967 30.9982C15.5826 30.998 15.2467 30.6623 15.2467 30.2482V26.0001H4.95759C4.1944 26.0001 3.74266 25.1454 4.17243 24.5148L10.6617 15.0001H6.97321C6.19167 15.0001 5.74461 14.1091 6.21149 13.4826L15.2369 1.38686L15.3121 1.29701Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PineTreeFilled32.category = 'Nature & Weather';

export default PineTreeFilled32;
