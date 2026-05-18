import * as React from 'react';
import { IconProps } from './types';

export const LightningFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.11981 0C8.86236 4.08489e-05 9.35007 0.776226 9.02802 1.44531L7.78973 4.01758H9.53973C10.4009 4.01781 10.8654 5.02815 10.3044 5.68164L5.1911 11.6357C4.52592 12.4099 3.26285 11.8181 3.43231 10.8115L3.99091 7.5H2.4538C1.7713 7.49986 1.28611 6.83568 1.49384 6.18555L3.20868 0.820312L3.24091 0.730469C3.42142 0.291529 3.85092 0.000199433 4.33173 0H8.11981Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

LightningFilled12.category = 'Nature & Weather';

export default LightningFilled12;
