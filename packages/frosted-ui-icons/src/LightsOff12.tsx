import * as React from 'react';
import { IconProps } from './types';

export const LightsOff12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LightsOff12"
      {...props}
    >
      <path
        d="M7 10.5c.414 0 .75.336.75.75S7.414 12 7 12H5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2zM6 2.25c1.204 0 2.161.459 2.81 1.19.637.716.94 1.65.94 2.56 0 1.415-.967 2.166-1.518 2.48-.104.718-.72 1.27-1.467 1.27h-1.53c-.747 0-1.364-.552-1.468-1.27C3.217 8.166 2.25 7.414 2.25 6c0-.91.303-1.844.94-2.56.649-.731 1.606-1.19 2.81-1.19zm0 1.5c-.796 0-1.339.291-1.69.686-.362.408-.56.974-.56 1.564 0 .678.494 1.047.846 1.225.347.175.647.546.653 1.025h1.502c.006-.479.306-.85.653-1.025.352-.178.846-.547.846-1.225 0-.59-.198-1.156-.56-1.564C7.338 4.04 6.795 3.75 6 3.75z"
        fill={color}
      />
    </svg>
  );
};

LightsOff12.category = 'Objects';

export default LightsOff12;
