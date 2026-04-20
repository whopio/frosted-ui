import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFromBracketBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M17.5 9.25038C18.3284 9.25038 19 9.92196 19 10.7504V13.0004C18.9998 16.3139 16.3136 19.0004 13 19.0004H7C3.6864 19.0004 1.00018 16.3139 1 13.0004V10.7504C1 9.92196 1.67157 9.25038 2.5 9.25038C3.32843 9.25038 4 9.92196 4 10.7504V13.0004C4.00018 14.6571 5.34326 16.0004 7 16.0004H13C14.6567 16.0004 15.9998 14.6571 16 13.0004V10.7504C16 9.92196 16.6716 9.25038 17.5 9.25038ZM8.64453 1.56191C9.34627 0.86017 10.4571 0.81603 11.21 1.43007L11.3555 1.56191L15.0605 5.26699C15.6462 5.85278 15.6463 6.80332 15.0605 7.38906C14.4748 7.97414 13.5251 7.97431 12.9395 7.38906L11.5 5.94863V11.5004C11.4998 12.3287 10.8283 13.0004 10 13.0004C9.17174 13.0003 8.50018 12.3286 8.5 11.5004V5.9496L7.06055 7.38906C6.47487 7.97421 5.52511 7.97424 4.93945 7.38906C4.35373 6.80334 4.35386 5.85279 4.93945 5.26699L8.64453 1.56191Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpFromBracketBoldFilled20.category = 'Arrows';

export default ArrowUpFromBracketBoldFilled20;
