import * as React from 'react';
import { IconProps } from './types';

export const BellFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15.7082 21.5C15.1148 22.9657 13.6788 24 12.0002 24C10.3217 24 8.88572 22.9657 8.29223 21.5L15.7082 21.5ZM12.0002 0.0878906C15.6436 0.0879507 17.8195 1.93892 19.0666 4.14648C20.2868 6.30643 20.6256 8.80515 20.719 10.249C20.7604 10.889 20.9908 11.4747 21.3909 11.8936L21.7385 12.2578C23.4656 14.0652 23.424 16.9236 21.6448 18.6797C20.7879 19.5252 19.6318 20 18.428 20L5.57055 20C4.36688 19.9999 3.2115 19.5251 2.35473 18.6797C0.575737 16.9237 0.533195 14.0652 2.26 12.2578L2.60766 11.8936C3.00782 11.4748 3.23897 10.89 3.28051 10.25C3.37406 8.80625 3.71236 6.30671 4.93285 4.14648C6.18019 1.93879 8.35678 0.0880525 12.0002 0.0878906Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BellFilled24.category = 'Interface General';

export default BellFilled24;
